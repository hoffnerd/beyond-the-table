
//______________________________________________________________________________________
// ===== Data Structures =====

const standardClassDataStructureObjs = [
    { key:"level", display:"Level" },
    { key:"proficiency", display:"Proficiency Bonus", displayRules:{ preDisplay:"+" } },
]

const slotsObj = {
    key:"slots", 
    display:"Spell Slots per Spell Level",
    noData: true,
}

const slotsUpToFifth = [
    { key:"first", display:1, mobileDisplay: "Lvl 1 Spell Slots", displayRules:{ noDataNoDisplayOnMobile:true } },
    { key:"second", display:2, mobileDisplay: "Lvl 2 Spell Slots", displayRules:{ noDataNoDisplayOnMobile:true } },
    { key:"third", display:3, mobileDisplay: "Lvl 3 Spell Slots", displayRules:{ noDataNoDisplayOnMobile:true } },
    { key:"fourth", display:4, mobileDisplay: "Lvl 4 Spell Slots", displayRules:{ noDataNoDisplayOnMobile:true } },
    { key:"fifth", display:5, mobileDisplay: "Lvl 5 Spell Slots", displayRules:{ noDataNoDisplayOnMobile:true } },
];

const slotsArray = [
    ...slotsUpToFifth,
    { key:"sixth", display:6, mobileDisplay: "Lvl 6 Spell Slots", displayRules:{ noDataNoDisplayOnMobile:true } },
    { key:"seventh", display:7, mobileDisplay: "Lvl 7 Spell Slots", displayRules:{ noDataNoDisplayOnMobile:true } },
    { key:"eighth", display:8, mobileDisplay: "Lvl 8 Spell Slots", displayRules:{ noDataNoDisplayOnMobile:true } },
    { key:"ninth", display:9, mobileDisplay: "Lvl 9 Spell Slots", displayRules:{ noDataNoDisplayOnMobile:true } },
]

const dataStructureObjSlots = { ...slotsObj, dataStructure:slotsArray };

const dataStructureObjSlots_upToFifth = { ...slotsObj, dataStructure:slotsUpToFifth };


//______________________________________________________________________________________
// ===== Data =====

const level1 = { level:1, proficiency:2 };
const level2 = { level:2, proficiency:2 };
const level3 = { level:3, proficiency:2 };
const level4 = { level:4, proficiency:2 };
const level5 = { level:5, proficiency:3 };
const level6 = { level:6, proficiency:3 };
const level7 = { level:7, proficiency:3 };
const level8 = { level:8, proficiency:3 };
const level9 = { level:9, proficiency:4 };
const level10 = { level:10, proficiency:4 };
const level11 = { level:11, proficiency:4 };
const level12 = { level:12, proficiency:4 };
const level13 = { level:13, proficiency:5 };
const level14 = { level:14, proficiency:5 };
const level15 = { level:15, proficiency:5 };
const level16 = { level:16, proficiency:5 };
const level17 = { level:17, proficiency:6 };
const level18 = { level:18, proficiency:6 };
const level19 = { level:19, proficiency:6 };
const level20 = { level:20, proficiency:6 };



//______________________________________________________________________________________
// ===== Spell Data =====
const spellKeys = [ "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth" ]
const makeSpellDataObj = (spellLevels) => {
    let spellDataObj = {};
    spellLevels.map((sl, i) => spellDataObj[ spellKeys[i] ] = sl);
    return spellDataObj;
}


//______________________________________________________________________________________
// ===== Main Class Table Data =====

export const classTableData = {

    //______________________________________________________________________________________
    // ===== Artificer =====
    artificer:{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"features", display:"Features", displayRules:{ width:"200px" } },
            { key:"infusions", display:"Infusions Known" },
            { key:"items", display:"Infused Items" },
            { key:"cantrips", display:"Cantrips Known" },
            dataStructureObjSlots_upToFifth,
        ],
        data:[
            { ...level1, features:"Magical Tinkering, Spellcasting", cantrips:2, ...makeSpellDataObj([2]) },
            { ...level2, features:"Infuse Item", infusions:4, items:2, cantrips:2, ...makeSpellDataObj([2]) },
            { ...level3, features:"Artificer Specialist, The Right Tool for the Job", infusions:4, items:2, cantrips:2, ...makeSpellDataObj([3]) },
            { ...level4, features:"Ability Score Improvement", infusions:4, items:2, cantrips:2, ...makeSpellDataObj([3]) },
            { ...level5, features:"Artificer Specialist feature", infusions:4, items:2, cantrips:2, ...makeSpellDataObj([4, 2]) },
            { ...level6, features:"Tool Expertise", infusions:6, items:3, cantrips:2, ...makeSpellDataObj([4, 2]) },
            { ...level7, features:"Flash of Genius", infusions:6, items:3, cantrips:2, ...makeSpellDataObj([4, 3]) },
            { ...level8, features:"Ability Score Improvement", infusions:6, items:3, cantrips:2, ...makeSpellDataObj([4, 3]) },
            { ...level9, features:"Artificer Specialist feature", infusions:6, items:3, cantrips:2, ...makeSpellDataObj([4, 3, 2]) },
            { ...level10, features:"Magic Item Adept", infusions:8, items:4, cantrips:3, ...makeSpellDataObj([4, 3, 2]) },
            { ...level11, features:"Spell-Storing Item", infusions:8, items:4, cantrips:3, ...makeSpellDataObj([4, 3, 3]) },
            { ...level12, features:"Ability Score Improvement", infusions:8, items:4, cantrips:3, ...makeSpellDataObj([4, 3, 3]) },
            { ...level13, infusions:8, items:4, cantrips:3, ...makeSpellDataObj([4, 3, 3, 1]) },
            { ...level14, features:"Magic Item Savant", infusions:10, items:5, cantrips:4, ...makeSpellDataObj([4, 3, 3, 1]) },
            { ...level15, features:"Artificer Specialist feature", infusions:10, items:5, cantrips:4, ...makeSpellDataObj([4, 3, 3, 2]) },
            { ...level16, features:"Ability Score Improvement", infusions:10, items:5, cantrips:4, ...makeSpellDataObj([4, 3, 3, 2]) },
            { ...level17, infusions:10, items:5, cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 1]) },
            { ...level18, features:"Magic Item Master", infusions:12, items:6, cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 1]) },
            { ...level19, features:"Ability Score Improvement", infusions:12, items:6, cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 2]) },
            { ...level20, features:"Soul of Artifice", infusions:12, items:6, cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 2]) },
        ]
    },

    //______________________________________________________________________________________
    // ===== Barbarian =====
    barbarian:{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"features", display:"Features" },
            { key:"rages", display:"Rages" },
            { key:"damage", display:"Rage Damage", displayRules:{ preDisplay:"+" } },
        ],
        data:[
            { ...level1, features:"Rage, Unarmored Defense", rages:2, damage:2 },
            { ...level2, features:"Reckless Attack, Danger Sense", rages:2, damage:2 },
            { ...level3, features:"Primal Path", rages:3, damage:2 },
            { ...level4, features:"Ability Score Improvement", rages:3, damage:2 },
            { ...level5, features:"Extra Attack, Fast Movement", rages:3, damage:2 },
            { ...level6, features:"Path Feature", rages:4, damage:2 },
            { ...level7, features:"Feral Instinct", rages:4, damage:2 },
            { ...level8, features:"Ability Score Improvement", rages:4, damage:2 },
            { ...level9, features:"Brutal Critical (1 die)", rages:4, damage:3 },
            { ...level10, features:"Path Feature", rages:4, damage:3 },
            { ...level11, features:"Relentless Rage", rages:4, damage:3 },
            { ...level12, features:"Ability Score Improvement", rages:5, damage:3 },
            { ...level13, features:"Brutal Critical (2 dice)", rages:5, damage:3 },
            { ...level14, features:"Path Feature", rages:5, damage:3 },
            { ...level15, features:"Persistent Rage", rages:5, damage:3 },
            { ...level16, features:"Ability Score Improvement", rages:5, damage:4 },
            { ...level17, features:"Brutal Critical (3 dice)", rages:6, damage:4 },
            { ...level18, features:"Indomitable Might", rages:6, damage:4 },
            { ...level19, features:"Ability Score Improvement", rages:6, damage:4 },
            { ...level20, features:"Primal Champion", rages:"Unlimited", damage:4 },
        ]
    },

    //______________________________________________________________________________________
    // ===== Bard =====
    bard:{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"features", display:"Features", displayRules:{ width:"200px" } },
            { key:"cantrips", display:"Cantrips Known" },
            { key:"spells", display:"Spells Known" },
            dataStructureObjSlots,
        ],
        data:[
            { ...level1, features:"Spellcasting, Bardic Inspiration (d6)", cantrips:2, spells:4, ...makeSpellDataObj([2]) },
            { ...level2, features:"Jack of All Trades, Song of Rest (d6)", cantrips:2, spells:5, ...makeSpellDataObj([3]) },
            { ...level3, features:"Bard College, Expertise", cantrips:2, spells:6, ...makeSpellDataObj([4, 2]) },
            { ...level4, features:"Ability Score Improvement", cantrips:3, spells:7, ...makeSpellDataObj([4, 3]) },
            { ...level5, features:"Bardic Inspiration (d8), Font of Inspiration", cantrips:3, spells:8, ...makeSpellDataObj([4, 3, 2]) },
            { ...level6, features:"Countercharm, Bard College Feature", cantrips:3, spells:9, ...makeSpellDataObj([4, 3, 3]) },
            { ...level7, cantrips:3, spells:10, ...makeSpellDataObj([4, 3, 3, 1]) },
            { ...level8, features:"Ability Score Improvement", cantrips:3, spells:11, ...makeSpellDataObj([4, 3, 3, 2]) },
            { ...level9, features:"Song of Rest (d8)", cantrips:3, spells:12, ...makeSpellDataObj([4, 3, 3, 3, 1]) },
            { ...level10, features:"Bardic Inspiration (d10), Expertise, Magical Secrets", cantrips:4, spells:14, ...makeSpellDataObj([4, 3, 3, 3, 2]) },
            { ...level11, cantrips:4, spells:15, ...makeSpellDataObj([4, 3, 3, 3, 2, 1]) },
            { ...level12, features:"Ability Score Improvement", cantrips:4, spells:15, ...makeSpellDataObj([4, 3, 3, 3, 2, 1]) },
            { ...level13, features:"Song of Rest (d10)", cantrips:4, spells:16, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1]) },
            { ...level14, features:"Magical Secrets, Bard College Feature", cantrips:4, spells:18, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1]) },
            { ...level15, features:"Bardic Inspiration (d12)", cantrips:4, spells:19, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1]) },
            { ...level16, features:"Ability Score Improvement", cantrips:4, spells:19, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1]) },
            { ...level17, features:"Song of Rest (d12)", cantrips:4, spells:20, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1, 1]) },
            { ...level18, features:"Magical Secrets", cantrips:4, spells:22, ...makeSpellDataObj([4, 3, 3, 3, 3, 1, 1, 1, 1]) },
            { ...level19, features:"Ability Score Improvement", cantrips:4, spells:22, ...makeSpellDataObj([4, 3, 3, 3, 3, 2, 1, 1, 1]) },
            { ...level20, features:"Superior Inspiration", cantrips:4, spells:22, ...makeSpellDataObj([4, 3, 3, 3, 3, 2, 2, 1, 1]) },
        ]
    },

    //______________________________________________________________________________________
    // ===== Blood Hunter =====
    bloodhunter:{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"die", display:"Hemocraft Die", displayRules:{ preDisplay:"1d" } },
            { key:"features", display:"Features" },
            { key:"curses", display:"Blood Curses" },
        ],
        data:[
            { ...level1, die:4, features:"Hunter's Bane, Blood Maledict", curses:1 },
            { ...level2, die:4, features:"Fighting Style, Crimson Rite", curses:1 },
            { ...level3, die:4, features:"Blood Hunter Order", curses:1 },
            { ...level4, die:4, features:"Ability Score Improvement", curses:1 },
            { ...level5, die:6, features:"Extra Attack", curses:1 },
            { ...level6, die:6, features:"Brand of Castigation, Blood Maledict improvement", curses:2 },
            { ...level7, die:6, features:"Blood Hunter Order feature, Crimson Rite improvement", curses:2 },
            { ...level8, die:6, features:"Ability Score Improvement", curses:2 },
            { ...level9, die:6, features:"Grim Psychometry", curses:2 },
            { ...level10, die:6, features:"Dark Augmentation", curses:3 },
            { ...level11, die:8, features:"Blood Hunter Order feature", curses:3 },
            { ...level12, die:8, features:"Ability Score Improvement", curses:3 },
            { ...level13, die:8, features:"Brand of Tethering, Blood Maledict improvement", curses:3 },
            { ...level14, die:8, features:"Hardened Soul, Crimson Rite improvement", curses:4 },
            { ...level15, die:8, features:"Blood Hunter Order feature", curses:4 },
            { ...level16, die:8, features:"Ability Score Improvement", curses:4 },
            { ...level17, die:10, features:"Blood Maledict improvement", curses:4 },
            { ...level18, die:10, features:"Blood Hunter Order feature", curses:5 },
            { ...level19, die:10, features:"Ability Score Improvement", curses:5 },
            { ...level20, die:10, features:"Sanguine Mastery", curses:5 },
        ]
    },

    //______________________________________________________________________________________
    // ===== Cleric =====
    cleric:{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"features", display:"Features", displayRules:{ width:"200px" } },
            { key:"cantrips", display:"Cantrips Known" },
            dataStructureObjSlots,
        ],
        data:[
            { ...level1, features:"Spellcasting, Divine Domain", cantrips:3, ...makeSpellDataObj([2])},
            { ...level2, features:"Channel Divinity (1/rest), Divine Domain Feature", cantrips:3, ...makeSpellDataObj([3])},
            { ...level3, cantrips:4, ...makeSpellDataObj([4, 2])},
            { ...level4, features:"Ability Score Improvement", cantrips:4, ...makeSpellDataObj([4, 3])},
            { ...level5, features:"Destroy Undead (CR 1/2)", cantrips:4, ...makeSpellDataObj([4, 3, 2])},
            { ...level6, features:"Channel Divinity (2/rest), Divine Domain Feature", cantrips:4, ...makeSpellDataObj([4, 3, 3])},
            { ...level7, cantrips:4, ...makeSpellDataObj([4, 3, 3, 1])},
            { ...level8, features:"Ability Score Improvement, Destroy Undead (CR 1), Divine Domain Feature", cantrips:4, ...makeSpellDataObj([4, 3, 3, 2])},
            { ...level9, cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 1])},
            { ...level10, features:"Divine Intervention", cantrips:5,  ...makeSpellDataObj([4, 3, 3, 3, 2])},
            { ...level11, features:"Destroy Undead (CR 2)", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1])},
            { ...level12, features:"Ability Score Improvement", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1])},
            { ...level13, cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1])},
            { ...level14, features:"Destroy Undead (CR 3)", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1])},
            { ...level15, cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1])},
            { ...level16, features:"Ability Score Improvement", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1])},
            { ...level17, features:"Destroy Undead (CR 4), Divine Domain Feature", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1, 1])},
            { ...level18, features:"Channel Divinity (3/rest)", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 3, 1, 1, 1, 1])},
            { ...level19, features:"Ability Score Improvement", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 3, 2, 1, 1, 1])},
            { ...level20, features:"Divine Intervention Improvement", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 3, 2, 2, 1, 1])},
        ]
    },
    clericLifeDomain:{
        dataStructure:[
            { key:"level", display:"Cleric Level", displayRules:{ width:"150px" } },
            { key:"spells", display:"Spells" },
        ],
        data:[
            { level:1, spells:"bless, cure wounds" },
            { level:3, spells:"lesser restoration, spiritual weapon" },
            { level:5, spells:"beacon of hope, revivify" },
            { level:7, spells:"death ward, guardian of faith" },
            { level:9, spells:"mass cure wounds, raise dead" },
        ]
    },

    //______________________________________________________________________________________
    // ===== Druid =====
    druid:{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"features", display:"Features", displayRules:{ width:"200px" } },
            { key:"cantrips", display:"Cantrips Known" },
            dataStructureObjSlots,
        ],
        data:[
            { ...level1, features:"Druidic, Spellcasting", cantrips:2, ...makeSpellDataObj([2]) },
            { ...level2, features:"Wild Shape, Druid Circle", cantrips:2, ...makeSpellDataObj([3])},
            { ...level3, cantrips:2, ...makeSpellDataObj([4, 2])},
            { ...level4, features:"Wild Shape Improvement, Ability Score Improvement", cantrips:3,  ...makeSpellDataObj([4, 3])},
            { ...level5, cantrips:3, ...makeSpellDataObj([4, 3, 2])},
            { ...level6, features:"Druid Circle Feature", cantrips:3, ...makeSpellDataObj([4, 3, 3])},
            { ...level7, cantrips:3, ...makeSpellDataObj([4, 3, 3, 1])},
            { ...level8, features:"Wild Shape Improvement, Ability Score Improvement", cantrips:3, ...makeSpellDataObj([4, 3, 3, 2])},
            { ...level9, cantrips:3, ...makeSpellDataObj([4, 3, 3, 3, 1])},
            { ...level10, features:"Druid Circle Feature", cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 2])},
            { ...level11, cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 2, 1])},
            { ...level12, features:"Ability Score Improvement", cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 2, 1]) },
            { ...level13, cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1])},
            { ...level14, features:"Druid Circle Feature", cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1])},
            { ...level15, cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1]) },
            { ...level16, features:"Ability Score Improvement", cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1]) },
            { ...level17, cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1, 1])},
            { ...level18, features:"Timeless Body, Beast Spells", cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 3, 1, 1, 1, 1])},
            { ...level19, features:"Ability Score Improvement", cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 3, 2, 1, 1, 1])},
            { ...level20, features:"Archdruid", cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 3, 2, 2, 1, 1])},
        ]
    },

    //______________________________________________________________________________________
    // ===== Fighter =====
    fighter: {
        dataStructure:[
            { key:"level", display:"Level", displayRules:{ width:"100px" } },
            { key:"proficiency", display:"Proficiency Bonus", displayRules:{ preDisplay:"+" } },
            { key:"features", display:"Features" },
        ],
        data:[
            { ...level1, features:"Fighting Style, Second Wind" },
            { ...level2, features:"Action Surge (one use)" },
            { ...level3, features:"Martial Archetype" },
            { ...level4, features:"Ability Score Improvement" },
            { ...level5, features:"Extra Attack" },
            { ...level6, features:"Ability Score Improvement" },
            { ...level7, features:"Martial Archetype Feature" },
            { ...level8, features:"Ability Score Improvement" },
            { ...level9, features:"Indomitable (one use)" },
            { ...level10, features:"Martial Archetype Feature" },
            { ...level11, features:"Extra Attack (2)" },
            { ...level12, features:"Ability Score Improvement" },
            { ...level13, features:"Indomitable (two uses)" },
            { ...level14, features:"Ability Score Improvement" },
            { ...level15, features:"Martial Archetype Feature" },
            { ...level16, features:"Ability Score Improvement" },
            { ...level17, features:"Action Surge (two uses), Indomitable (three uses)" },
            { ...level18, features:"Martial Archetype Feature" },
            { ...level19, features:"Ability Score Improvement" },
            { ...level20, features:"Extra Attack (3)" },
        ]
    },

    //______________________________________________________________________________________
    // ===== Fighter (Gunslinger) =====
    fighterGunslinger:{
        dataStructure:[
            { key:"name", display:"Name", displayRules:{ width:"120px" } },
            { key:"cost", display:"Cost" },
            { key:"ammo", display:"Ammo", displayRules:{ postDisplay:"g" } },
            { key:"damage", display:"Damage" },
            { key:"weight", display:"Weight", displayRules:{ postDisplay:" lb." } },
            { key:"range", display:"Range", displayRules:{ width:"100px" } },
            { key:"properties", display:"Properties", displayRules:{ width:"200px" } },
        ],
        data:[
            { name:"Palm Pistol", cost:"50g", ammo:2, damage:"1d8 piercing", weight:1, range:"(40/160)", properties:"Light, reload 1, misfire 1" },
            { name:"Pistol", cost:"150g", ammo:4, damage:"1d10 piercing", weight:3, range:"(60/240)", properties:"Reload 4, misfire 1" },
            { name:"Musket", cost:"300g", ammo:5, damage:"1d12 piercing", weight:10, range:"(120/480)", properties:"Two-handed, reload 1, misfire 2" },
            { name:"Pepperbox", cost:"250g", ammo:4, damage:"1d10 piercing", weight:5, range:"(80/320)", properties:"Reload 6, misfire 2" },
            { name:"Blunderbuss", cost:"300g", ammo:5, damage:"2d8 piercing", weight:10, range:"(15/60)", properties:"Reload 1, misfire 2" },
            { name:"Bad News", cost:"Crafted", ammo:10, damage:"2d12 piercing", weight:25, range:"(200/800)", properties:"Two-handed, reload 1, misfire 3" },
            { name:"Hand Mortar", cost:"Crafted", ammo:10, damage:"2d8 fire", weight:10, range:"(30/60)", properties:"Reload 1, misfire 3, explosive" },
        ]
    },

    //______________________________________________________________________________________
    // ===== Monk =====
    monk:{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"art", display:"Martial Arts", displayRules:{ preDisplay:"1d" } },
            { key:"ki", display:"Ki Points" },
            { key:"movement", display:"Unarmored Movement", displayRules:{ preDisplay:"+", postDisplay:" ft." } },
            { key:"features", display:"Features", displayRules:{ width:"200px" } },
        ],
        data:[
            { ...level1, art:4, features:"Unarmored Defense, Martial Arts" },
            { ...level2, art:4, ki:2, movement:10, features:"Ki, Unarmored Movement" },
            { ...level3, art:4, ki:3, movement:10, features:"Monastic Tradition, Deflect Missiles" },
            { ...level4, art:4, ki:4, movement:10, features:"Ability Score Improvement, Slow Fall" },
            { ...level5, art:6, ki:5, movement:10, features:"Extra Attack, Stunning Strike" },
            { ...level6, art:6, ki:6, movement:15, features:"Ki-Empowered Strikes, Monastic Tradition Feature" },
            { ...level7, art:6, ki:7, movement:15, features:"Evasion, Stillness of Mind" },
            { ...level8, art:6, ki:8, movement:15, features:"Ability Score Improvement" },
            { ...level9, art:6, ki:9, movement:15, features:"Unarmored Movement Improvement" },
            { ...level10, art:6, ki:10, movement:20, features:"Purity of Body" },
            { ...level11, art:8, ki:11, movement:20, features:"Monastic Tradition Feature" },
            { ...level12, art:8, ki:12, movement:20, features:"Ability Score Improvement" },
            { ...level13, art:8, ki:13, movement:20, features:"Tongue of the Sun and Moon" },
            { ...level14, art:8, ki:14, movement:25, features:"Diamond Soul" },
            { ...level15, art:8, ki:15, movement:25, features:"Timeless Body" },
            { ...level16, art:8, ki:16, movement:25, features:"Ability Score Improvement" },
            { ...level17, art:10, ki:17, movement:25, features:"Monastic Tradition Feature" },
            { ...level18, art:10, ki:18, movement:30, features:"Empty Body" },
            { ...level19, art:10, ki:19, movement:30, features:"Ability Score Improvement" },
            { ...level20, art:10, ki:20, movement:30, features:"Perfect Self" },
        ]
    },

    //______________________________________________________________________________________
    // ===== Paladin =====
    paladin:{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"features", display:"Features", displayRules:{ width:"200px" } },
            dataStructureObjSlots_upToFifth,
        ],
        data:[
            { ...level1, features:"Divine Sense, Lay on Hands" },
            { ...level2, features:"Fighting Style, Spellcasting, Divine Smite", ...makeSpellDataObj([2]) },
            { ...level3, features:"Divine Health, Sacred Oath", ...makeSpellDataObj([3]) },
            { ...level4, features:"Ability Score Improvement", ...makeSpellDataObj([3]) },
            { ...level5, features:"Extra Attack", ...makeSpellDataObj([4, 2]) },
            { ...level6, features:"Aura of Protection", ...makeSpellDataObj([4, 2]) },
            { ...level7, features:"Sacred Oath Feature", ...makeSpellDataObj([4, 3]) },
            { ...level8, features:"Ability Score Improvement", ...makeSpellDataObj([4, 3]) },
            { ...level9, ...makeSpellDataObj([4, 3, 2]) },
            { ...level10, features:"Aura of Courage", ...makeSpellDataObj([4, 3, 2]) },
            { ...level11, features:"Improved Divine Smite", ...makeSpellDataObj([4, 3, 3]) },
            { ...level12, features:"Ability Score Improvement", ...makeSpellDataObj([4, 3, 3]) },
            { ...level13, ...makeSpellDataObj([4, 3, 3, 1]) },
            { ...level14, features:"Cleansing Touch", ...makeSpellDataObj([4, 3, 3, 1]) },
            { ...level15, features:"Sacred Oath Feature", ...makeSpellDataObj([4, 3, 3, 2]) },
            { ...level16, features:"Ability Score Improvement", ...makeSpellDataObj([4, 3, 3, 2]) },
            { ...level17, ...makeSpellDataObj([4, 3, 3, 3, 1]) },
            { ...level18, features:"Aura Improvements", ...makeSpellDataObj([4, 3, 3, 3, 1]) },
            { ...level19, features:"Ability Score Improvement", ...makeSpellDataObj([4, 3, 3, 3, 2]) },
            { ...level20, features:"Sacred Oath Feature", ...makeSpellDataObj([4, 3, 3, 3, 2]) },
        ]
    },

    //______________________________________________________________________________________
    // ===== Paladin (Oath of Devotion) =====
    paladinOathOfDevotion:{
        dataStructure:[
            { key:"level", display:"Paladin Level", displayRules:{ width:"200px" } },
            { key:"spells", display:"Spells" },
        ],
        data:[
            { level:3, spells:"protection from evil and good, sanctuary", },
            { level:5, spells:"lesser restoration, zone of truth", },
            { level:9, spells:"beacon of hope, dispel magic", },
            { level:13, spells:"freedom of movement, guardian of faith", },
            { level:17, spells:"commune, flame strike", },
        ]
    },

    //______________________________________________________________________________________
    // ===== Paladin (Oath of the Open Sea) =====
    paladinOathOfTheOpenSea:{
        dataStructure:[
            { key:"level", display:"Paladin Level", displayRules:{ width:"200px" } },
            { key:"spells", display:"Spells" },
        ],
        data:[
            { level:3, spells:"create or destroy water, expeditious retreat", },
            { level:5, spells:"augury, misty step", },
            { level:9, spells:"call lightning, freedom of the waves*", },
            { level:13, spells:"control water, freedom of movement", },
            { level:17, spells:"commune with nature, freedom of the winds*", },
        ]
    },

    //______________________________________________________________________________________
    // ===== Ranger =====
    ranger:{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"features", display:"Features", displayRules:{ width:"200px" } },
            { key:"spells", display:"Spells Known" },
            dataStructureObjSlots_upToFifth,
        ],
        data:[
            { ...level1, features:"Favored Enemy, Natural Explorer" },
            { ...level2, features:"Fighting Style, Spellcasting", spells:2, ...makeSpellDataObj([2]) },
            { ...level3, features:"Ranger Archetype, Primeval Awareness", spells:3, ...makeSpellDataObj([3]) },
            { ...level4, features:"Ability Score Improvement", spells:3, ...makeSpellDataObj([3]) },
            { ...level5, features:"Extra Attack", spells:4, ...makeSpellDataObj([4, 2]) },
            { ...level6, features:"Favored Enemy and Natural Explorer Improvements", spells:4, ...makeSpellDataObj([4, 2]) },
            { ...level7, features:"Ranger Archetype Feature", spells:5, ...makeSpellDataObj([4, 3]) },
            { ...level8, features:"Ability Score Improvement, Land’s Stride", spells:5, ...makeSpellDataObj([4, 3]) },
            { ...level9, spells:6, ...makeSpellDataObj([4, 3, 2]) },
            { ...level10, features:"Natural Explorer Improvement, Hide in Plain Sight", spells:6, ...makeSpellDataObj([4, 3, 2]) },
            { ...level11, features:"Ranger Archetype Feature", spells:7, ...makeSpellDataObj([4, 3, 3]) },
            { ...level12, features:"Ability Score Improvement", spells:7, ...makeSpellDataObj([4, 3, 3]) },
            { ...level13, spells:8, ...makeSpellDataObj([4, 3, 3, 1]) },
            { ...level14, features:"Favored Enemy Improvement, Vanish", spells:8, ...makeSpellDataObj([4, 3, 3, 1]) },
            { ...level15, features:"Ranger Archetype Feature", spells:9, ...makeSpellDataObj([4, 3, 3, 2]) },
            { ...level16, features:"Ability Score Improvement", spells:9, ...makeSpellDataObj([4, 3, 3, 2]) },
            { ...level17, spells:10, ...makeSpellDataObj([4, 3, 3, 3, 1]) },
            { ...level18, features:"Feral Senses", spells:10, ...makeSpellDataObj([4, 3, 3, 3, 1]) },
            { ...level19, features:"Ability Score Improvement", spells:11, ...makeSpellDataObj([4, 3, 3, 3, 2]) },
            { ...level20, features:"Foe Slayer", spells:11, ...makeSpellDataObj([4, 3, 3, 3, 2]) },
        ]
    },

    //______________________________________________________________________________________
    // ===== Rogue =====
    rogue:{
        dataStructure:[
            { key:"level", display:"Level", displayRules:{ width:"100px" } },
            { key:"proficiency", display:"Proficiency Bonus", displayRules:{ preDisplay:"+" } },
            { key:"sneak", display:"Sneak Attack", displayRules:{ postDisplay:"d6" } },
            { key:"features", display:"Features" },
        ],
        data:[
            { ...level1, sneak:1, features:"Expertise, Sneak Attack, Thieves' Cant" },
            { ...level2, sneak:1, features:"Cunning Action" },
            { ...level3, sneak:2, features:"Roguish Archetype" },
            { ...level4, sneak:2, features:"Ability Score Improvement" },
            { ...level5, sneak:3, features:"Uncanny Dodge" },
            { ...level6, sneak:3, features:"Expertise" },
            { ...level7, sneak:4, features:"Evasion" },
            { ...level8, sneak:4, features:"Ability Score Improvement" },
            { ...level9, sneak:5, features:"Roguish Archetype Feature" },
            { ...level10, sneak:5, features:"Ability Score Improvement" },
            { ...level11, sneak:6, features:"Reliable Talent" },
            { ...level12, sneak:6, features:"Ability Score Improvement" },
            { ...level13, sneak:7, features:"Roguish Archetype Feature" },
            { ...level14, sneak:7, features:"Blindsense" },
            { ...level15, sneak:8, features:"Slippery Mind" },
            { ...level16, sneak:8, features:"Ability Score Improvement" },
            { ...level17, sneak:9, features:"Roguish Archetype Feature" },
            { ...level18, sneak:9, features:"Elusive" },
            { ...level19, sneak:10, features:"Ability Score Improvement" },
            { ...level20, sneak:10, features:"Stroke of Luck" },
        ]
    },

    //______________________________________________________________________________________
    // ===== Sorcerer =====
    sorcerer:{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"sorcery", display:"Sorcery Points" },
            { key:"features", display:"Features", displayRules:{ width:"200px" } },
            { key:"cantrips", display:"Cantrips Known" },
            { key:"spells", display:"Spells Known" },
            dataStructureObjSlots,
        ],
        data:[
            { ...level1, features:"Spellcasting, Sorcerous Origin", cantrips:4, spells:2, ...makeSpellDataObj([2]) },
            { ...level2, sorcery:2, features:"Font of Magic", cantrips:4, spells:3, ...makeSpellDataObj([3]) },
            { ...level3, sorcery:3, features:"Metamagic", cantrips:4, spells:4, ...makeSpellDataObj([4, 2]) },
            { ...level4, sorcery:4, features:"Ability Score Improvement", cantrips:5, spells:5, ...makeSpellDataObj([4, 3]) },
            { ...level5, sorcery:5, cantrips:5, spells:6, ...makeSpellDataObj([4, 3, 2]) },
            { ...level6, sorcery:6, features:"Sorcerous Origin Feature", cantrips:5, spells:7, ...makeSpellDataObj([4, 3, 3]) },
            { ...level7, sorcery:7, cantrips:5, spells:8, ...makeSpellDataObj([4, 3, 3, 1]) },
            { ...level8, sorcery:8, features:"Ability Score Improvement", cantrips:5, spells:9, ...makeSpellDataObj([4, 3, 3, 2]) },
            { ...level9, sorcery:9, cantrips:5, spells:10, ...makeSpellDataObj([4, 3, 3, 3, 1]) },
            { ...level10, sorcery:10, features:"Metamagic", cantrips:6, spells:11, ...makeSpellDataObj([4, 3, 3, 3, 2]) },
            { ...level11, sorcery:11, cantrips:6, spells:12, ...makeSpellDataObj([4, 3, 3, 3, 2, 1]) },
            { ...level12, sorcery:12, features:"Ability Score Improvement", cantrips:6, spells:12, ...makeSpellDataObj([4, 3, 3, 3, 2, 1]) },
            { ...level13, sorcery:13, cantrips:6, spells:13, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1]) },
            { ...level14, sorcery:14, features:"Sorcerous Origin Feature", cantrips:6, spells:13, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1]) },
            { ...level15, sorcery:15, cantrips:6, spells:14, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1]) },
            { ...level16, sorcery:16, features:"Ability Score Improvement", cantrips:6, spells:14, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1]) },
            { ...level17, sorcery:17, features:"Metamagic", cantrips:6, spells:15, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1, 1]) },
            { ...level18, sorcery:18, features:"Sorcerous Origin Feature", cantrips:6, spells:15, ...makeSpellDataObj([4, 3, 3, 3, 3, 1, 1, 1, 1]) },
            { ...level19, sorcery:19, features:"Ability Score Improvement", cantrips:6, spells:15, ...makeSpellDataObj([4, 3, 3, 3, 3, 2, 1, 1, 1]) },
            { ...level20, sorcery:20, features:"Sorcerous Restoration", cantrips:6, spells:15, ...makeSpellDataObj([4, 3, 3, 3, 3, 2, 2, 1, 1]) },
        ]
    },

    //______________________________________________________________________________________
    // ===== Warlock =====
    warlock:{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"features", display:"Features", displayRules:{ width:"200px" } },
            { key:"cantrips", display:"Cantrips Known" },
            { key:"spells", display:"Spells Known" },
            { key:"slots", display:"Spell Slots" },
            { key:"slotLvl", display:"Slot Level" },
            { key:"invocations", display:"Invocations Known" },
        ],
        data:[
            { ...level1, features:"Otherworldly Patron, Pact Magic", cantrips:2, spells:2, slots:1, slotLvl:1 },
            { ...level2, features:"Eldritch Invocations", cantrips:2, spells:3, slots:2, slotLvl:1, invocations:2 },
            { ...level3, features:"Pact Boon", cantrips:2, spells:4, slots:2, slotLvl:2, invocations:2 },
            { ...level4, features:"Ability Score Improvement", cantrips:3, spells:5, slots:2, slotLvl:2, invocations:2 },
            { ...level5, cantrips:3, spells:6, slots:2, slotLvl:3, invocations:3 },
            { ...level6, features:"Otherworldly Patron Feature", cantrips:3, spells:7, slots:2, slotLvl:3, invocations:3 },
            { ...level7, cantrips:3, spells:8, slots:2, slotLvl:4, invocations:4 },
            { ...level8, features:"Ability Score Improvement", cantrips:3, spells:9, slots:2, slotLvl:4, invocations:4 },
            { ...level9, cantrips:3, spells:10, slots:2, slotLvl:5, invocations:5 },
            { ...level10, features:"Otherworldly Patron Feature", cantrips:4, spells:10, slots:2, slotLvl:5, invocations:5 },
            { ...level11, features:"Mystic Arcanum (6th level)", cantrips:4, spells:11, slots:3, slotLvl:5, invocations:5 },
            { ...level12, features:"Ability Score Improvement", cantrips:4, spells:11, slots:3, slotLvl:5, invocations:6 },
            { ...level13, features:"Mystic Arcanum (7th level)", cantrips:4, spells:12, slots:3, slotLvl:5, invocations:6 },
            { ...level14, features:"Otherworldly Patron Feature", cantrips:4, spells:12, slots:3, slotLvl:5, invocations:6 },
            { ...level15, features:"Mystic Arcanum (8th level)", cantrips:4, spells:13, slots:3, slotLvl:5, invocations:7 },
            { ...level16, features:"Ability Score Improvement", cantrips:4, spells:13, slots:3, slotLvl:5, invocations:7 },
            { ...level17, features:"Mystic Arcanum (9th level)", cantrips:4, spells:14, slots:4, slotLvl:5, invocations:7 },
            { ...level18, cantrips:4, spells:14, slots:4, slotLvl:5, invocations:8 },
            { ...level19, features:"Ability Score Improvement", cantrips:4, spells:15, slots:4, slotLvl:5, invocations:8 },
            { ...level20, features:"Eldritch Master", cantrips:4, spells:15, slots:4, slotLvl:5, invocations:8 },
        ]
    },

    //______________________________________________________________________________________
    // ===== Wizard =====
    wizard:{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"features", display:"Features", displayRules:{ width:"200px" } },
            { key:"cantrips", display:"Cantrips Known" },
            dataStructureObjSlots,
        ],
        data:[
            { ...level1, features:"Spellcasting, Arcane Recovery", cantrips:3, ...makeSpellDataObj([2]) },
            { ...level2, features:"Arcane Tradition", cantrips:3, ...makeSpellDataObj([3]) },
            { ...level3, cantrips:3, ...makeSpellDataObj([4, 2]) },
            { ...level4, features:"Ability Score Improvement", cantrips:4, ...makeSpellDataObj([4, 3]) },
            { ...level5, cantrips:4, ...makeSpellDataObj([4, 3, 2]) },
            { ...level6, features:"Arcane Tradition Feature", cantrips:4, ...makeSpellDataObj([4, 3, 3]) },
            { ...level7, cantrips:4, ...makeSpellDataObj([4, 3, 3, 1]) },
            { ...level8, features:"Ability Score Improvement", cantrips:4, ...makeSpellDataObj([4, 3, 3, 2]) },
            { ...level9, cantrips:4, ...makeSpellDataObj([4, 3, 3, 3, 1]) },
            { ...level10, features:"Arcane Tradition Feature", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2]) },
            { ...level11, cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1]) },
            { ...level12, features:"Ability Score Improvement", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1]) },
            { ...level13, cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1]) },
            { ...level14, features:"Arcane Tradition Feature", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1]) },
            { ...level15, cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1]) },
            { ...level16, features:"Ability Score Improvement", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1]) },
            { ...level17, cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 2, 1, 1, 1, 1]) },
            { ...level18, features:"Spell Mastery", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 3, 1, 1, 1, 1]) },
            { ...level19, features:"Ability Score Improvement", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 3, 2, 1, 1, 1]) },
            { ...level20, features:"Signature Spells", cantrips:5, ...makeSpellDataObj([4, 3, 3, 3, 3, 2, 2, 1, 1]) },
        ]
    },

}

/*
    :{
        dataStructure:[
            ...standardClassDataStructureObjs,
            { key:"", display:"" },
        ],
        data:[
            { ...level1, features:"", },
        ]
    },


                first:, second:, third:, fourth:, fifth:, sixth:, seventh:, eighth:, ninth:
*/