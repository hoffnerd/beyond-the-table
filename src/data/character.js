export const dataStructureObj_baseData = {
    visibility: {
        key: "visibility",
        display: "Visibility",
        type: "select",
        options: [
            // { key: "NOONE", display: "My Eyes Only" },
            { key: "INTERNAL", display: "Private: My Eyes Only" }, //My Party and I
            { key: "UNLISTED", display: "Unlisted: Anyone with a link" },
            { key: "PUBLIC", display: "Public: Anyone + Searchable" },
        ],
        addPleaseSelectOption: false,
        defaultValue: "INTERNAL",
        required: true,
        columnSizes: { sm: 6 }
    },
    name: {
        key: "name",
        display: "Name",
        type: "text",
        required: true,
        columnSizes: { sm: 6 }
    },
    level: {
        key: "level",
        display: "Level",
        type: "number",
        required: true,
        defaultValue: 1,
        columnSizes: { sm: 4 }
    },
    hitpoints: {
        key: "hitpoints",
        display: "HP",
        type: "number",
        required: true,
        defaultValue: 0,
        columnSizes: { sm: 4 }
    },
    armor: {
        key: "armor",
        display: "AC",
        type: "number",
        required: true,
        defaultValue: 0,
        columnSizes: { sm: 4 }
    },
    race: {
        key: "race",
        display: "Race",
        type: "select",
        required: true,
        columnSizes: { sm: 6 }
    },
    classes: {
        key: "classes",
        display: "Class",
        type: "select",
        required: true,
        columnSizes: { sm: 6 }
    },
    initative:{
        key: "initative",
        display: "Initative",
        type: "number",
        defaultValue: 0,
        columnSizes: { sm: 6 }
    },
    speed:{
        key: "speed",
        display: "Speed",
        type: "number",
        required: true,
        defaultValue: 30,
        columnSizes: { sm: 6 }
    }
}

export const dataStructureObj_quote = {
    key: "quote",
    display: "Quote",
    type: "textarea",
}


export const dataStructure_imageOffset = [
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

export const abilitiesPossible = [
    {
        key: "strength",
        display: "Strength",
        shortDisplay: "STR",
        type: "number",
        required: true,
        defaultValue: 10,
    },
    {
        key: "dexterity",
        display: "Dexterity",
        shortDisplay: "DEX",
        type: "number",
        required: true,
        defaultValue: 10,
    },
    {
        key: "constitution",
        display: "Constitution",
        shortDisplay: "CON",
        type: "number",
        required: true,
        defaultValue: 10,
    },
    {
        key: "intelligence",
        display: "Intelligence",
        shortDisplay: "INT",
        type: "number",
        required: true,
        defaultValue: 10,
    },
    {
        key: "wisdom",
        display: "Wisdom",
        shortDisplay: "WIS",
        type: "number",
        required: true,
        defaultValue: 10,
    },
    {
        key: "charisma",
        display: "Charisma",
        shortDisplay: "CHA",
        type: "number",
        required: true,
        defaultValue: 10,
    },
]

export const skillsPossible = [  "acrobatics", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "slightOfHand", "stealth", "survival", ];
// export const skillsPossible = [
//     {
//         key: "acrobatics",
//         display: "Acrobatics",
//         abilityShortDisplay: "DEX"
//     },
//     {
//         key: "animalHandling",
//         display: "Animal Handling",
//         abilityShortDisplay: ""
//     },
//     {
//         key: "",
//         display: "",
//         abilityShortDisplay: ""
//     },
//     {
//         key: "",
//         display: "",
//         abilityShortDisplay: ""
//     },
//     {
//         key: "",
//         display: "",
//         abilityShortDisplay: ""
//     },
//     {
//         key: "",
//         display: "",
//         abilityShortDisplay: ""
//     },
//     {
//         key: "",
//         display: "",
//         abilityShortDisplay: ""
//     },
//     {
//         key: "",
//         display: "",
//         abilityShortDisplay: ""
//     },
//     {
//         key: "",
//         display: "",
//         abilityShortDisplay: ""
//     },
//     {
//         key: "",
//         display: "",
//         abilityShortDisplay: ""
//     },
//     {
//         key: "",
//         display: "",
//         abilityShortDisplay: ""
//     },
// ]
