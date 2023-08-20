import { raceData } from "./raceData";
import { classData } from './classData';
import { convertObjToArray } from "@/util";

export const characterBaseData = {
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
        options: convertObjToArray(raceData),
        required: true,
        columnSizes: { sm: 6 }
    },
    classes: {
        key: "classes",
        display: "Class",
        type: "select",
        options: convertObjToArray(classData),
        required: true,
        columnSizes: { sm: 6 }
    },
    initiative:{
        key: "initiative",
        display: "Initiative",
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

export const characterQuote = {
    key: "quote",
    display: "Quote",
    type: "textarea",
}


export const characterImageOffset = [
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
];

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
