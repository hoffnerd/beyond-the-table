import { convertObjToArray } from "@/util";
import { featureData as fd } from "./featureData";
import { languageData as ld } from "./languageData";



//______________________________________________________________________________________
// ===== Dragonborn =====

const dragonbornSubclassDescription = (damageType, damageSpread="line", save="DEX") => (
    damageSpread === "line" ? `Damage Type: ${damageType}; Breath Weapon: 5 by 30ft line (${save} save);` : damageSpread === "cone" ? `Damage Type: ${damageType}; Breath Weapon: 15ft cone (${save} save);` : "damageSpread not defined"
)

const dragonbornSubraceData = {
    black:{
        id: "black",
        display: "Black",
        description: dragonbornSubclassDescription("Acid"),
    },
    blue:{
        id: "blue",
        display: "Blue",
        description: dragonbornSubclassDescription("Lightning"),
    },
    brass:{
        id: "brass",
        display: "Brass",
        description: dragonbornSubclassDescription("Fire"),
    },
    bronze:{
        id: "bronze",
        display: "Bronze",
        description: dragonbornSubclassDescription("Lightning"),
    },
    copper:{
        id: "copper",
        display: "Copper",
        description: dragonbornSubclassDescription("Acid"),
    },
    gold:{
        id: "gold",
        display: "Gold",
        description: dragonbornSubclassDescription("Fire", "cone"),
    },
    green:{
        id: "green",
        display: "Green",
        description: dragonbornSubclassDescription("Poison", "cone", "CON"),
    },
    red:{
        id: "red",
        display: "Red",
        description: dragonbornSubclassDescription("Fire", "cone"),
    },
    silver:{
        id: "silver",
        display: "Silver",
        description: dragonbornSubclassDescription("Cold", "cone", "CON"),
    },
    white:{
        id: "white",
        display: "White",
        description: dragonbornSubclassDescription("Cold", "cone", "CON"),
    },
}

const dragonbornSubraces = convertObjToArray(dragonbornSubraceData);



//______________________________________________________________________________________
// ===== Dwarf =====

const dwarfSubraceData = {
    hill:{
        id: "hill",
        display: "Hill",
        description: "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.",
        abilityScoreIncrease: { wisdom: 1 },
        features: [ fd.dwarvenToughness ]
    },
    mountain:{
        id: "mountain",
        display: "Mountain",
        description: "As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration.",
        abilityScoreIncrease: { strength: 2 },
        features: [ fd.dwarvenArmorTraining ]
    },
}
const dwarfSubraces = convertObjToArray(dwarfSubraceData);



//______________________________________________________________________________________
// ===== Elf =====

const elfSubRaceData = {
    high:{
        id: "high",
        display: "High Elf",
        description: "As a high elf, you have a keen mind and a mastery of at least the basics of magic.",
        abilityScoreIncrease: { intelligence: 1 },
        features: [ fd.elfWeaponTraining, fd.cantrip, fd.extraLanguage ]
    },
    wood:{
        id: "wood",
        display: "Wood Elf",
        description: "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests.",
        speed: 35,
        abilityScoreIncrease: { wisdom: 1 },
        features: [ fd.elfWeaponTraining, fd.fleetOfFoot, fd.maskOfTheWild ]
    },
}

const elfSubraces = convertObjToArray(elfSubRaceData);



//______________________________________________________________________________________
// ===== Gnome =====

const gnomeSubraceData = {
    rock:{
        id: "rock",
        display: "Rock Gnome",
        description: "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.",
        abilityScoreIncrease: { constitution: 1 },
        features: [ fd.artificersLore, fd.tinker ]
    },
    forest:{
        id: "forest",
        display: "Forest Gnome",
        description: "",
        abilityScoreIncrease: { dexterity: 1 },
        features: [ fd.naturalIllusionist, fd.speakWithSmallBeasts ]
    },
}

const gnomeSubraces = convertObjToArray(gnomeSubraceData);



//______________________________________________________________________________________
// ===== Gnome =====

const halflingSubraceData = {
    lightfoot:{
        id: "lightfoot",
        display: "Lightfoot Halfling",
        description: "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You're inclined to be affable and get along well with others. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.",
        abilityScoreIncrease: { charisma: 1 },
        features: [ fd.naturallyStealthy ]
    },
    stout:{
        id: "stout",
        display: "Stout Halfling",
        description: "As a stout halfling, you're hardier than average and have some resistance to poison. Some say that stouts have dwarven blood.",
        abilityScoreIncrease: { constitution: 1 },
        features: [ fd.stoutResilience ]
    },
}

const halflingSubraces = convertObjToArray(halflingSubraceData);



//______________________________________________________________________________________
// ===== Human =====

const variantHuman = {
    id: "variantHuman",
    display: "Variant Human",
    description: "If your campaign uses the optional feat rules from the Player's Handbook, your Dungeon Master might allow these variant traits, all of which replace the human's Ability Score Increase trait.",
    overrideRaceFeatures: true,
    abilityScoreIncrease: { choice: 2 },
    features: [ fd.skillVersatility, fd.feat ]
}



//______________________________________________________________________________________
// ===== Subraces =====

export const subraceData = {
    ...dragonbornSubraceData,
    ...dwarfSubraceData,
    ...elfSubRaceData,
    ...gnomeSubraceData,
    ...halflingSubraceData,
    variantHuman,
    other: {
        id: "other",
        display: "Other",
        description: "A subrace that is not listed here. If you would like your subrace listed here, please reach out to me. Otherwise, enter the subrace text you want to be on your card in the input below.",
    },
}


//______________________________________________________________________________________
// ===== Races =====

export const raceData = {
    dragonborn: {
        id: "dragonborn",
        display: "Dragonborn",
        description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.",
        abilityScoreIncrease: { strength: 2, charisma: 1 },
        size: "Medium",
        speed: 30,
        features: [ fd.draconicAncestry, fd.breathWeapon, fd.damageResistance ],
        languages: [ ld.common, ld.draconic ],
        subraces: [ ...dragonbornSubraces, subraceData.other ]
    },
    dwarf: {
        id: "dwarf",
        display: "Dwarf",
        description: "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.",
        abilityScoreIncrease: { strength: 2 },
        size: "Medium",
        speed: 25,
        features: [ fd.darkvision, fd.dwarvenResilience, fd.dwarvenCombatTraining, fd.stonecunning ],
        languages: [ ld.common, ld.dwarvish ],
        subraces: [ ...dwarfSubraces, subraceData.other ]
    },
    elf: {
        id: "elf",
        display: "Elf",
        description: "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.",
        abilityScoreIncrease: { dexterity: 2 },
        size: "Medium",
        speed: 30,
        features: [ fd.darkvision, fd.keenSenses, fd.feyAncestry, fd.trance ],
        languages: [ ld.common, ld.elvish ],
        subraces: [ ...elfSubraces, subraceData.other ]
    },
    gnome: {
        id: "gnome",
        display: "Gnome",
        description: "A gnome's energy and enthusiasm for living shines through every inch of his or her tiny body.",
        abilityScoreIncrease: { intelligence: 2 },
        size: "Small",
        speed: 25,
        features: [ fd.darkvision, fd.gnomeCunning ],
        languages: [ ld.common, ld.gnomish ],
        subraces: [ ...gnomeSubraces, subraceData.other ]
    },
    goliath: {
        id: "goliath",
        display: "Goliath",
        description: "Distantly related to giants and infused with the supernatural essence of their ancestors' mountainous home.",
        abilityScoreIncrease: { strength: 2, constitution: 1 },
        size: "Medium",
        speed: 30,
        features: [ fd.naturalAthlete, fd.stonesEndurance, fd.powerfulBuild, fd.mountainBorn ],
        languages: [ ld.common, ld.giant ],
    },
    halfelf: {
        id: "halfelf",
        display: "Half-Elf",
        description: "Half-elves combine what some say are the best qualities of their elf and human parents.",
        abilityScoreIncrease: { charisma: 2, choice: 2 },
        size: "Medium",
        speed: 30,
        features: [ fd.darkvision, fd.feyAncestry, fd.skillVersatilityTwo, fd.extraLanguageTwo ],
        languages: [ ld.common, ld.elvish ],
    },
    halfling: {
        id: "halfling",
        display: "Halfling",
        description: "The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.",
        abilityScoreIncrease: { dexterity: 2 },
        size: "Small",
        speed: 25,
        features: [ fd.lucky, fd.brave, fd.halflingNimbleness ],
        languages: [ ld.common, ld.halfling ],
        subraces: [ ...halflingSubraces, subraceData.other ]
    },
    halforc: {
        id: "halforc",
        display: "Half-Orc",
        description: "Some half-orcs rise to become proud leaders of orc communities. Some venture into the world to prove their worth. Many of these become adventurers, achieving greatness for their mighty deeds.",
        abilityScoreIncrease: { strength: 2, constitution: 1 },
        size: "Medium",
        speed: 30,
        features: [ fd.darkvision, fd.menacing, fd.relentlessEndurance, fd.savageAttacks ],
        languages: [ ld.common, ld.orc ],
    },
    human: {
        id: "human",
        display: "Human",
        description: "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
        abilityScoreIncrease: { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 },
        size: "Medium",
        speed: 30,
        features: [ fd.extraLanguage, ],
        languages: [ ld.common ],
        subraces: [ variantHuman, subraceData.other ]
    },
    tiefling: {
        id: "tiefling",
        display: "Tiefling",
        description: "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.",
        abilityScoreIncrease: { charisma: 2, intelligence: 1 },
        size: "Medium",
        speed: 30,
        features: [ fd.darkvision, fd.hellishResistance, fd.infernalLegacy ],
        languages: [ ld.common, ld.infernal ],
    },
    other: {
        id: "other",
        display: "Other",
        description: "A race that is not listed here. If you would like your race listed here, please reach out to me. Otherwise, enter the race text you want to be on your card in the input below.",
    },
};

/* 
    :{
        id: "",
        display: "",
        description: "",
    },
*/