
import prisma from './db';
import { isArray, isObj } from '@/util';


//______________________________________________________________________________________
// ===== Prisma Functions =====

export const readCharacters = async (where) => {
    const characters = await prisma.character.findMany({ 
        where,
        orderBy: [ { createdAt: 'desc' } ]  
    });
    return characters;
}

export const readCharacterById = async (id) => {
    const character = await prisma.character.findUnique({ 
        where: { id } 
    });
    return character;
}

export const readCharacterByIdFromParams = async (params) => {
    const id = isObj(params, [ 'id' ]) ? params.id : null;
    const character = id ? await readCharacterById(id) : null;
    return character;
}

export const createCharacter = async (data) => {
    const character = await prisma.character.create({ 
        data:{
            userEmail: data.userEmail,
            visibility: data.visibility,
            name: data.name,
            baseData: data.baseData,
            abilities: data.abilities,
        }
    });
    return character;
}
export const updateCharacter = async (id, data) => {
    const character = await prisma.character.update({ 
        where: { id },
        data:{
            visibility: data.visibility,
            name: data.name,
            baseData: data.baseData,
            abilities: data.abilities,
            updatedAt: new Date(),
        }
    });
    return character;
}

export const updateCharactersImage = async (id, image) => {
    const character = await prisma.character.update({ 
        where: { id },
        data: { image, updatedAt: new Date() }
    });
    return character;
}

export const deleteCharacter = async (id) => {
    const character = await prisma.character.delete({ 
        where: { id }
    });
    return character;
}



//______________________________________________________________________________________
// ===== API Functions =====

/**
 * extracts data from a request object and returns it along with some additional information.
 * @param request - HTTP request. It typically contains information such as the request method, headers, and body. In this code snippet, the
 * `request` object is expected to have a JSON payload that contains three properties: `baseDataInputState`, `abilitiesInputState`, `quoteInputState`.
 * @returns object with the following properties: baseDataInputState, abilitiesInputState, quoteInputState, baseDataInputStateKeys, and abilitiesInputStateKeys.
 */
export const extractDataFromRequest = async (request) => {

    // deconstruct request body/payload
    const { characterId, baseDataInputState, abilitiesInputState, quoteInputState } = await request.json();

    // base error clause
    if( !(isObj(baseDataInputState) && isObj(abilitiesInputState) && isObj(quoteInputState)) ) {
        return { error: true, message: "Missing data", baseDataInputState, abilitiesInputState, quoteInputState };
    }

    // key arrays
    const baseDataInputStateKeys = Object.keys(baseDataInputState);
    const abilitiesInputStateKeys = Object.keys(abilitiesInputState);

    // error clause
    if( !(isArray(baseDataInputStateKeys) && isArray(abilitiesInputStateKeys)) ) {
        return { error: true, message: "Missing data", baseDataInputState, abilitiesInputState, quoteInputState, baseDataInputStateKeys, abilitiesInputStateKeys };
    }

    // return
    return { characterId, baseDataInputState, abilitiesInputState, quoteInputState, baseDataInputStateKeys, abilitiesInputStateKeys };    
}

/**
 * Takes in input states for base data, abilities, and a quote, and returns a processed data object ready for database storage.
 * @param userEmail - string of the email of the user for whom the character data is being processed.
 * @param baseDataInputState - object that contains the base data for a character. It may include properties such as visibility, name, speed, classes, etc.
 * @param abilitiesInputState - object representing the abilities input state. It contains key-value pairs where the key is the ability name and the value is the ability score.
 * @param quoteInputState - object that contains the quote input state. It may have properties such as "quote" or "author".
 * @param baseDataInputStateKeys - array of keys representing the properties of the baseDataInputState object.
 * @param abilitiesInputStateKeys - array of keys representing the abilities input state.
 * @returns object named "data" which is a processed data object ready for database storage.
 */
export const processCharacter = async (baseDataInputState, abilitiesInputState, quoteInputState, baseDataInputStateKeys, abilitiesInputStateKeys) => {
    
    // variables needed 
    let shallowCopyOfBaseData = {...baseDataInputState, ...quoteInputState};
    let data = { 
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