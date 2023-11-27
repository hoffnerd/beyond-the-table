import { convertObjToArray } from "@/util";

export const level = {
    key: "level",
    display: "Level",
    type: "number",
    defaultValue: 1,
}

export const characterBaseData = {
    race: {
        key: "race",
        display: "Race",
    },
    subrace: {
        key: "subrace",
        display: "Subrace"
    },
    background:{
        key: "background",
        display: "Background",
    },
    otherRace: {
        key: "otherRace",
        display: "Other Race",
        type: "text",
    },
    otherSubrace: {
        key: "otherSubrace",
        display: "Other Subrace",
        type: "text",
    },
    otherBackground:{
        key: "otherBackground",
        display: "Other Background",
        type: "text",
    },
    classes: {
        key: "classes",
        display: "Class",
    },
    hitpoints: {
        key: "hitpoints",
        display: "HP",
        type: "number",
        defaultValue: 0,
        columnSizes: { md: 6 }
    },
    armor: {
        key: "armor",
        display: "AC",
        type: "number",
        defaultValue: 10,
        columnSizes: { md: 6 }
    },
    quote: {
        key: "quote",
        display: "Character Quote",
        type: "textarea",
        columnSizes: { md: 12 }
    },
    proficiency:{
        key: "proficiency",
        display: "Proficiency",
        type: "number",
        columnSizes: { md: 4 }
    },
    initiative:{
        key: "initiative",
        display: "Initiative",
        type: "number",
        columnSizes: { md: 4 }
    },
    speeds:{
        key: "speeds",
        display: "Speed",
        type: "number",
        columnSizes: { md: 4 }
    },
    cardBackground:{
        key: "cardBackground",
        display: "Card Background",
    },
}

export const characterBaseDataArray = convertObjToArray(characterBaseData);

export const characterQuote = { //remove
    key: "quote",
    display: "Quote",
    type: "textarea",
}


export const characterImageOffset = [ // remove
    {
        key: "zoom",
        display: "Zoom",
        type: "number",
    },
    {
        key: "x",
        display: "X",
        type: "number",
    },
    {
        key: "y",
        display: "Y",
        type: "number",
    },
]

export const abilityObjs = {
    strength: {
        key: "strength",
        display: "Strength",
        shortDisplay: "STR",
        type: "number",
        required: true,
        defaultValue: 10,
        icon: "faHandFist"
    },
    dexterity: {
        key: "dexterity",
        display: "Dexterity",
        shortDisplay: "DEX",
        type: "number",
        required: true,
        defaultValue: 10,
        icon: "faShoePrints"
    },
    constitution: {
        key: "constitution",
        display: "Constitution",
        shortDisplay: "CON",
        type: "number",
        required: true,
        defaultValue: 10,
        icon: "faShieldHeart"
    },
    intelligence: {
        key: "intelligence",
        display: "Intelligence",
        shortDisplay: "INT",
        type: "number",
        required: true,
        defaultValue: 10,
        icon: "faBook"
    },
    wisdom: {
        key: "wisdom",
        display: "Wisdom",
        shortDisplay: "WIS",
        type: "number",
        required: true,
        defaultValue: 10,
        icon: "faScroll"
    },
    charisma: {
        key: "charisma",
        display: "Charisma",
        shortDisplay: "CHA",
        type: "number",
        required: true,
        defaultValue: 10,
        icon: "faCommentDots"
    },
}

export const abilityObjsWithChoice = {
    ...abilityObjs,
    choice:{ key: "choice", display: "Your Choice" }
}

export const abilitiesPossible = convertObjToArray(abilityObjs);



export const skillObjs = {
    acrobatics: { key: "acrobatics", display: "Acrobatics", abilityKey: "dexterity" },
    animalHandling: { key: "animalHandling", display: "Animal Handling", abilityKey: "wisdom"  },
    arcana: { key: "arcana", display: "Arcana", abilityKey: "intelligence" },
    athletics: { key: "athletics", display: "Athletics", abilityKey: "strength" },
    deception: { key: "deception", display: "Deception", abilityKey: "charisma" },
    history: { key: "history", display: "History", abilityKey: "intelligence" },
    insight: { key: "insight", display: "Insight", abilityKey: "wisdom" },
    intimidation: { key: "intimidation", display: "Intimidation", abilityKey: "charisma" },
    investigation: { key: "investigation", display: "Investigation", abilityKey: "intelligence" },
    medicine: { key: "medicine", display: "Medicine", abilityKey: "wisdom" },
    nature: { key: "nature", display: "Nature", abilityKey: "intelligence" },
    perception: { key: "perception", display: "Perception", abilityKey: "wisdom" },
    performance: { key: "performance", display: "Performance", abilityKey: "charisma" },
    persuasion: { key: "persuasion", display: "Persuasion", abilityKey: "charisma" },
    religion: { key: "religion", display: "Religion", abilityKey: "intelligence" },
    slightOfHand: { key: "slightOfHand", display: "Slight of Hand", abilityKey: "dexterity" },
    stealth: { key: "stealth", display: "Stealth", abilityKey: "dexterity" },
    survival: { key: "survival", display: "Survival", abilityKey: "wisdom" },
}

export const skillsPossible = convertObjToArray(skillObjs);

export const imageTabs = [ 
    { key: "main", display: "Character Image", icon: "faIdBadge" }, 
    { key: "back", display: "Card Back", icon: "faMobileButton" } 
]

export const imageKeysPossible = [ "filename", "zoom", "x", "y", "credit", "link" ];

export const imagePositionInputs = [
    {
        key: "zoom",
        display: "Zoom",
        type: "number",
        columnSizes: { md:4 },
    },
    {
        key: "x",
        display: "X",
        type: "number",
        columnSizes: { md:4 },
    },
    {
        key: "y",
        display: "Y",
        type: "number",
        columnSizes: { md:4 },
    },
];

export const imagePositionInputKeys = imagePositionInputs.map( imagePositionInputObj => imagePositionInputObj.key );

export const imageDetailsInputs = [
    {
        key: "credit",
        display: "Image Credit",
        type: "text",
        columnSizes: { md:12 },
    },
    {
        key: "link",
        display: "Link to Credit's website or social media",
        type: "text",
        columnSizes: { md:12 },
    },
];

export const imageDetailsInputKeys = imageDetailsInputs.map( imageDetailsInputObj => imageDetailsInputObj.key );


export const skillsByAbility = {
    strength: skillsPossible.filter(skillObj => skillObj.abilityKey === "strength"),
    dexterity: skillsPossible.filter(skillObj => skillObj.abilityKey === "dexterity"),
    constitution: skillsPossible.filter(skillObj => skillObj.abilityKey === "constitution"),
    intelligence: skillsPossible.filter(skillObj => skillObj.abilityKey === "intelligence"),
    wisdom: skillsPossible.filter(skillObj => skillObj.abilityKey === "wisdom"),
    charisma: skillsPossible.filter(skillObj => skillObj.abilityKey === "charisma")
}

export const otherStats = [
    characterBaseData.hitpoints,
    characterBaseData.armor
]

export const otherStatKeys = otherStats.map( otherStatObj => otherStatObj.key );

export const otherOverrides = [
    characterBaseData.proficiency, 
    characterBaseData.initiative, 
    characterBaseData.speeds
];

export const otherOverrideKeys = otherOverrides.map( otherOverrideObj => otherOverrideObj.key );

export const characterDetails = [
    {
        key: "visibility",
        display: "Character Visibility",
        type: "select",
        options: [
            // { key: "NOONE", display: "My Eyes Only" },
            { key: "INTERNAL", display: "Private: My Eyes Only" }, //My Party and I
            { key: "UNLISTED", display: "Unlisted: Anyone with a link" },
            { key: "PUBLIC", display: "Public: Anyone + Searchable" },
        ],
        addPleaseSelectOption: false,
        defaultValue: "INTERNAL",
        columnSizes: { sm: 6 }
    },
    {
        key: "name",
        display: "Character Name",
        type: "text",
        columnSizes: { md: 6 }
    },
    characterBaseData.quote
];

export const characterDetailKeys = characterDetails.map( characterDetailObj => characterDetailObj.key );

export const creatorProcess = {
    origin: { key: "origin", display: "Origin", icon: "faDungeon" },
    class: { key: "class", display: "Class", icon: "faDungeon" },
    abilities: { key: "abilities", display: "Abilities & Skills ", icon: "faDungeon" },
    images: { key: "images", display: "Images", icon: "faDungeon" },
    other: { key: "other", display: "Everything Else", icon: "faDungeon" },
}

export const creatorProcessArray = convertObjToArray(creatorProcess);

export const advancedTogglers = [
    {
        key: "multiclass",
        display: "Multiclass",
        description: (value) => {
            if(value) return "Multiclassing. Toggle to single class."
            return "Single class. Toggle to activate Multiclassing."
        },
        type: "toggleSlider",
        defaultValue: false
    },
    {
        key: "overrideModifiers",
        display: "Override Modifiers",
        description: (value) => {
            if(value) return "Overriding Calculated Modifiers. Toggle to allow Calculated Modifiers."
            return "Calculated Modifiers. Toggle to Overriding Calculated Modifiers."
        },
        type: "toggleSlider",
        defaultValue: false
    },
]