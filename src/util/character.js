import { abilitiesPossible, characterBaseData, characterBaseDataArray, imageKeysPossible, skillsPossible } from "@/data/character";
import { convertObjToArray, isArray, isObj } from ".";


/**
 * Takes in an object of character abilities and returns a new object with only the ability scores.
 * @param characterAbilities - object that represents the abilities of a character. Each key in the object represents
 * an ability, and the value associated with each key is an object that contains thecore of that ability.
 * @returns object containing the ability scores of a character.
 */
export const generateAbilityScores = (characterAbilities) => {
    if ( !isObj(characterAbilities) ) return {};
    const characterAbilityKeys = Object.keys(characterAbilities);

    if( !isArray(characterAbilityKeys) ) return {};

    let abilities = {};
    characterAbilityKeys.forEach((key) => {
        if( isObj(characterAbilities[key], [ "score" ]) ){
            abilities[key] = characterAbilities[key].score;
        }
    })
    return abilities;
}

/**
 * Creates a modifier number based on an ability score.
 * @param abilityScore - Int of the ability score used to calculate the corresponding modifier for that ability score.
 * @returns int which is the modifier calculated based on the input `abilityScore`.
 */
export const calculateModifierNumber = (abilityScore) => {
    const abilityScoreToUse = abilityScore < -10 ? -10 : abilityScore > 30 ? 30 : abilityScore;
    let modifier = 0;
    
    if(abilityScoreToUse > 10){
        // is incrementing variable by 2 until it matches `abilityScore` passed in
        let abilityScoreMatcher = 12;
        while (abilityScoreMatcher <= abilityScoreToUse) {
            abilityScoreMatcher = abilityScoreMatcher + 2;
            modifier++;
        }
    }
    else if (abilityScoreToUse < 10){
        // is decremented variable by 2 until it matches `abilityScore` passed in
        let abilityScoreMatcher = 9;
        while (abilityScoreMatcher >= abilityScoreToUse) {
            abilityScoreMatcher = abilityScoreMatcher - 2;
            modifier--;
        }
    }

    return modifier;
}

/**
 * Calculates the total level of a character based on an array of classes.
 * @param classes - array of objects, each object represents a class and may have a `level` property.
 * @returns int, the total level calculated from the input array of class objects.
 */
export const calculateLevel = (classes) => {
    if (!isArray(classes)) return 0;
    let level = 0;
    classes.forEach(classObj => {
        if(isObj(classObj, ["level"]) && classObj.level > 0) level += classObj.level;
    });
    return level;
} 

/**
 * The function calculates proficiency based on a given level.
 * @param level - int, level of character, it is a number between 0 and 20.
 * @returns int, represents the proficiency bonus of character
 */
export const calculateProficiency = (level) => {
    const levelToUse = level < 0 ? 0 : level > 20 ? 20 : level;
    const gainProficiencyEveryAmountOfLevels = 4;
    const proficiencyBase = 2;
    let pointsToAdd = levelToUse / gainProficiencyEveryAmountOfLevels;
    if(pointsToAdd % 1 === 0){
        pointsToAdd = (levelToUse - 1) / gainProficiencyEveryAmountOfLevels
    }
    pointsToAdd = parseInt(pointsToAdd);
    return proficiencyBase + pointsToAdd;
} 




/**
 * Checks if a character is by a user.
 * @param character - Object that represents the Character, should have "userEmail" which indicates who created the character.
 * @param session - Object that represents the session, which is current user session.
 * @returns boolean
 */
export const isCharactersOwner = (character, session) => {
    return session && isObj(session.user, ["email"]) && isObj(character, ["userEmail"]) && character.userEmail === session.user.email
}
    
/**
 * Checks if a character is visible based on its visibility settings and the user's session.
 * @param character - Object that represents the Character, should have "visibility" which indicates the visibility level of the character.
 * @param session - Object that represents the session, which is current user session.
 * @returns boolean
 */
export const isCharacterVisible = (character, session) => {
    if( !isObj(character, [ "visibility" ]) ) return false;
    if( character.visibility === "PUBLIC" || character.visibility === "UNLISTED" ) return true;
    if( character.visibility === "INTERNAL" && isCharactersOwner(character, session) ) return true;
    if( session && session.user && session.user.email && session.user.email === "ADMIN" ) return true;
    return false;
}

/**
 * Takes in input states for base data, abilities, and a quote, and returns a processed data object ready for database storage.
 * @param [characterId=null] - unique identifier for the character. It is optional and can be set to null if no characterId is available and will be created when sent to the DB.
 * @param baseDataInputState - object that contains the base data for a character. It may include properties such as visibility, name, speed, classes, etc.
 * @param abilitiesInputState - object representing the abilities input state. It contains key-value pairs where the key is the ability name and the value is the ability score.
 * @param quoteInputState - object that contains the quote input state. It may have properties such as "quote" or "author".
 * @returns object named "data" which is a processed data object ready for database storage.
 */
export const processCharacter = (characterId=null, baseDataInputState, abilitiesInputState, quoteInputState) => {
    
    // key arrays
    const baseDataInputStateKeys = Object.keys(baseDataInputState);
    const abilitiesInputStateKeys = Object.keys(abilitiesInputState);

    // variables needed 
    let shallowCopyOfBaseData = {...baseDataInputState, ...quoteInputState};
    let data = { 
        id: characterId,
        visibility: baseDataInputState.visibility,
        name: baseDataInputState.name,
    };
    let abilities = {};

    // get baseData ready for DB
    baseDataInputStateKeys.forEach((key) => {
        switch (key) {
            case "speed":
                shallowCopyOfBaseData.speeds = { walking: baseDataInputState.speed };
                break;
            case "classes":
                shallowCopyOfBaseData.classes = [ baseDataInputState.classes ];
                break;
            default:
                break;
        }

        if(key === "visibility" || key === "name" || key === "speed"){
            delete shallowCopyOfBaseData[key];
        }
    })

    // get abilities ready for DB
    abilitiesInputStateKeys.forEach((key) => {
        abilities[key] = { score: abilitiesInputState[key] }
    })

    // add to data
    data.baseData = shallowCopyOfBaseData;
    data.abilities = abilities;

    // return
    return data;
}

/**
 * Processes the data given to create a new character object.
 * @param [characterId=null] - int, optional parameter that represents the id of the character. 
 * If a characterId is provided, it will be assigned to the "id" property of the
 * returned object. If no characterId is provided, the "id" property will be set to undefined.
 * @param data - object, contains the information about a character
 * @returns object, the character as if it was gotten from the database
 */
export const processCharacter_experimental = (characterId=null, data) => {

    // Objects within a single character
    let baseData = {}
    let image = {}
    let abilities = {}
    let skills = {}

    // Add any data that needs to be mapped to baseData
    isArray(characterBaseDataArray) && characterBaseDataArray.forEach(characterBaseDataObj => {
        if(isObj(data, [ characterBaseDataObj.key ])) 
            baseData[characterBaseDataObj.key] = characterBaseDataObj.key === "speeds" ? {walking:data[characterBaseDataObj.key]} : data[characterBaseDataObj.key];
    });

    // Add any data that needs to be mapped to abilities
    isArray(abilitiesPossible) && abilitiesPossible.forEach(abilityObj => {
        if(isObj(abilityObj, [ "key" ])) {
            abilities[abilityObj.key] = { 
                score: data[abilityObj.key] || data[abilityObj.key] === 0 ? data[abilityObj.key] : 10,
                modifier: data.modifiers && (data.modifiers[abilityObj.key] || data.modifiers[abilityObj.key] === 0) ? data.modifiers[abilityObj.key] : undefined,
                proficient: isObj(data.savingThrows, [ abilityObj.key ]) ? true : undefined
            }
        }
    });

    // Add any data that needs to be mapped to image
    isArray(imageKeysPossible) && isObj(data, [ "main", "back" ], false) && imageKeysPossible.forEach(imageKey => {
        data.main[imageKey] ? image.main ? image.main = { ...image.main, [imageKey]: data.main[imageKey] } : image.main = { [imageKey]: data.main[imageKey] } : null;
        data.back[imageKey] ? image.back ? image.back = { ...image.back, [imageKey]: data.back[imageKey] } : image.back = { [imageKey]: data.back[imageKey] } : null;
    });

    // Add any data that needs to be mapped to skills
    isArray(skillsPossible) && isObj(data.skills) && skillsPossible.forEach(skillObj => {
        if(isObj(skillObj, ["key"]) && data.skills[skillObj.key]) skills[skillObj.key] = data.skills[skillObj.key];
    })
    
    // return character
    return {
        id: characterId ? characterId : undefined,
        visibility: data.visibility,
        name: data.name,
        image,
        baseData,
        abilities,
        skills
    };
}

export const getModifiersOverriding = (modifiers) => {
    if(!isObj(modifiers)) return [];

    let modifiersOverriding = [];
    const modifierKeys = Object.keys(modifiers);
    isArray(modifierKeys) && modifierKeys.forEach(modifierKey => {
        (modifiers[modifierKey] || modifiers[modifierKey] === 0) && modifiersOverriding.push(modifierKey);
    });
    return modifiersOverriding;
}

export const unprocessCharacter = (character) => {

    // deconstruct our character
    const { id, visibility, name, baseData, image, abilities, skills } = character;
    const main = isObj(image, [ "main" ]) ? image.main : null;
    const back = isObj(image, [ "back" ]) ? image.back : null;

    // data objects for the unprocessed character
    let data = {}
    let modifiers = {}
    let savingThrows = {}


    // Add any data that needs to be mapped from baseData
    isArray(characterBaseDataArray) && characterBaseDataArray.forEach(characterBaseDataObj => {
        if(isObj(baseData, [ characterBaseDataObj.key ])) 
            data[characterBaseDataObj.key] = characterBaseDataObj.key === "speeds" ? baseData.speeds.walking : baseData[characterBaseDataObj.key];
    });

    // Add any data that needs to be mapped from abilities
    isArray(abilitiesPossible) && abilitiesPossible.forEach(abilityObj => {
        if(isObj(abilityObj, [ "key" ]) && isObj(abilities, [ abilityObj.key ])) {

            // deconstruct the characters ability object
            const { score, modifier, proficient } = abilities[abilityObj.key];

            // set what needs to be set if it exists
            data[abilityObj.key] = score ? score : null;
            modifiers[abilityObj.key] = modifier ? modifier : null;
            savingThrows[abilityObj.key] = proficient ? proficient : null;
        }
    });

    const unprocessedCharacter = { ...data, id, visibility, name, modifiers, modifiersOverriding:getModifiersOverriding(modifiers), savingThrows, skills, main, back }

    // return unprocessed character
    return unprocessedCharacter
}

export const processCharacterImage = (character, imageData) => { // remove
    
    // deconstruct imageData passed in
    const { selectedImage, zoom, x, y } = imageData;

    // set up our image obj to add to the character
    const image = {
        filename: selectedImage ? selectedImage : undefined,
        zoom: zoom ? zoom : undefined,
        x: x ? x : undefined,
        y: y ? y : undefined,
    }

    // return processed character with the image added
    return { ...character, image };
}

/**
 * Reads a specific variable from a given character object based on a filter order.
 * @param character - object that represents a character
 * @param filterOrder - string that specifies the property of the `character` object that you want to retrieve.
 * @returns the value of the specified variable from the given character object based on the filter order. 
 * If the variable is not found or if the character object does not have the required properties, it returns 0. 
 * If the value is a number, it is parsed as an integer before being returned.
 */
const readVariableFromFilter = (character, filterOrder) => {
    if( !isObj(character, [ "name", "baseData", "abilities" ]) ) return 0;
    let valueToReturn = 0;
    switch (filterOrder) {
        case "name": valueToReturn = character.name; break;
        case "level": valueToReturn =  character.baseData.level; break;
        case "hitpoints": valueToReturn =  character.baseData.hitpoints; break;
        case "armor": valueToReturn =  character.baseData.armor; break;
        case "speed": if(isObj(character.baseData.speeds, [ "walking" ])) valueToReturn = character.baseData.speeds.walking; break;
        case "strength": if(isObj(character.abilities.strength, "score")) valueToReturn = character.abilities.strength.score; break;
        case "dexterity": if(isObj(character.abilities.dexterity, "score")) valueToReturn = character.abilities.dexterity.score; break;
        case "constitution": if(isObj(character.abilities.constitution, "score")) valueToReturn = character.abilities.constitution.score; break;
        case "intelligence": if(isObj(character.abilities.intelligence, "score")) valueToReturn = character.abilities.intelligence.score; break;
        case "wisdom": if(isObj(character.abilities.wisdom, "score")) valueToReturn = character.abilities.wisdom.score; break;
        case "charisma": if(isObj(character.abilities.charisma, "score")) valueToReturn = character.abilities.charisma.score; break;
        default: return 0;
    }

    if(isNaN(valueToReturn)){
        return valueToReturn;
    }
    return parseInt(valueToReturn);
}

/**
 * Takes in filters and characters as parameters and returns a filtered and sorted array of characters based on the provided filters.
 * @param filters - object that contains the filter options
 * @param characters - array of character objects. Each character object has properties like name, baseData, race, classes, and quote.
 * @returns array of the filtered and sorted characters based on the provided filters.
 */
export const filterCharacters = (filters, characters) => {
    let filteredCharacters = [];

    // if we dont have any filters or characters, then return whatever is `characters`
    if(!(isObj(filters) && isArray(characters))) return characters;

    // apply filters to characters
    if(isObj(filters, [ "race", "classes", "search" ], false)){
        characters.forEach((character) => {

            // make sure we have basic data in the character
            let shouldPush = isObj(character, [ "name", "baseData" ]);

            // ensure only characters that have the search text in their name or quote will be shown
            if(shouldPush && filters.search && !(character.name.toLowerCase().includes(filters.search.toLowerCase()) || (character.baseData.quote && character.baseData.quote.toLowerCase().includes(filters.search.toLowerCase()))) ) shouldPush = false;

            // ensure only characters are the race selected will be shown
            if(shouldPush && filters.race && character.baseData.race !== filters.race) shouldPush = false;
            
            // ensure only characters have a class selected will be shown
            if(shouldPush && filters.classes && !(isArray(character.baseData.classes) && character.baseData.classes.find(classId => classId === filters.classes)) ) shouldPush = false;

            // if shouldPush is still true after all these filters have been applied, then add the character to the list that will be shown
            if(shouldPush) filteredCharacters.push(character);
        });

        // if we dont have any characters after the filters have been applied, then return whatever is `filteredCharacters` (empty array)
        if(!isArray(filteredCharacters)) return filteredCharacters;
    } else {
        // if no filters exist then just set it to the `characters` passed in
        filteredCharacters = [...characters];
    }

    // if order exists then lets order everything
    if(isObj(filters, [ "order" ])){

        // ===== sorting method 1 =====
        let orderedCharacters = [...filteredCharacters];
        let length = filteredCharacters.length;
        for (let i = length - 1; i >= 0; i--) {
            for (let j = 1; j <= i; j++) {
                let dataObj1 = orderedCharacters[j - 1];
                let dataObj2 = orderedCharacters[j];
                if (readVariableFromFilter(dataObj1, filters.order) > readVariableFromFilter(dataObj2, filters.order)) {
                    let temp = orderedCharacters[j - 1];
                    orderedCharacters[j - 1] = orderedCharacters[j];
                    orderedCharacters[j] = temp;
                }
            }
        }

        // ===== sorting method 2 =====
        orderedCharacters.sort((a, b) => {
            const varA = readVariableFromFilter(a, filters.order);
            const varB = readVariableFromFilter(b, filters.order);

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return comparison;
        });



        // reverse the array if we are set to descending
        if(!filters.ascending) return orderedCharacters.reverse(); 

        // return the sorted characters
        return orderedCharacters;
    }

    /* 
        At this point if we havent hit a return yet then we are ordering by new. 
        We are already getting characters ordered form the DB so that newest is first,
        sooooo that means in this case if ascending is selected then we want to reverse the array
    */
    if(filters.ascending) return filteredCharacters.reverse();

    // return characters 
    return filteredCharacters;
}