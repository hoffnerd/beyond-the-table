
//______________________________________________________________________________________

import { convertObjToArray } from "@/util";
import { classTableData } from "./classTables";
import { featureData as fd } from "./featureData";

// ===== Default state in the class hook =====
export const defaultSelectedClassesObj = {
    classId: "",
    level: 1,
    subclassId: "",
    otherSubclass: ""
}



//______________________________________________________________________________________
// ===== Barbarian Subclass =====

const barbarianSubclassData = {
    pathOfTheBerserker:{
        id: "pathOfTheBerserker",
        display: "Path of the Berserker",
        description: "For some barbarians, rage is a means to an end—that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
        features: [ fd.frenzy, fd.mindlessRage, fd.intimidatingPresence, fd.retaliation ]
    },
}
const barbarianSubclasses = convertObjToArray(barbarianSubclassData);



//______________________________________________________________________________________
// ===== Bard Subclass =====

const bardSubclassData = {
    collegeOfLore:{
        id: "collegeOfLore",
        display: "College of Lore",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.</span>
        </>,
        features: [ fd.bonusProficiencies_B_CoL, fd.cuttingWords, fd.additionalMagicalSecrets, fd.peerlessSkill ]
    },
}
const bardSubclasses = convertObjToArray(bardSubclassData);



//______________________________________________________________________________________
// ===== Cleric Subclass =====

const clericSubclassData = {
    lifeDomain:{
        id: "lifeDomain",
        display: "Life Domain",
        description: "The Life domain focuses on the vibrant positive energy — one of the fundamental forces of the universe — that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrei). ",
        table: classTableData.clericLifeDomain,
        features: [ fd.bonusProficiency_C_LD, fd.discipleOfLife, fd.cdPreserveLife, fd.blessedHealer, fd.divineStrike, fd.supremeHealing ]
    },
}
const clericSubclasses = convertObjToArray(clericSubclassData);



//______________________________________________________________________________________
// ===== Druid Subclass =====

const druidSubclassData = {
    circleOfTheLand:{
        id: "circleOfTheLand",
        display: "Circle of the Land",
        description: "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
        features: [ fd.bonusCantrip_D_CotL, fd.naturalRecovery, fd.circleSpells, fd.landsStride, fd.naturesWard, fd.naturesSanctuary ],
        subclasses: fd.circleSpells.tables
    },
}
const druidSubclasses = convertObjToArray(druidSubclassData);



//______________________________________________________________________________________
// ===== Fighter Subclass =====

const fighterSubclassData = {
    champion:{
        id: "champion",
        display: "Champion",
        description: "",
        features: [ fd.improvedCritical, fd.remarkableAthlete, fd.additionalFightingStyle, fd.superiorCritical, fd.survivor ],
    },
    gunslinger:{
        id: "gunslinger",
        display: "Gunslinger",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Most warriors and combat specialists spend their years perfecting the classic arts of swordplay, archery, or pole arm tactics. Whether duelist or infantry, martial weapons were seemingly perfected long ago, and the true challenge is to master them.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>However, some minds couldn't stop with the innovation of the crossbow. Experimentation with alchemical components and rare metals have unlocked the secrets of controlled explosive force. The few who survive these trials of ingenuity may become the first to create, and deftly wield, the first firearms.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>This archetype focuses on the ability to design, craft, and utilize powerful, yet dangerous ranged weapons. Through creative innovation and immaculate aim, you become a distant force of death on the battlefield. However, not being a perfect science, firearms carry an inherent instability that can occasionally leave you without a functional means of attack. This is the danger of new, untested technologies in a world where the arcane energies that rule the elements are ever present.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Should this path of powder, fire, and metal call to you, keep your wits about you, hold on to your convictions as a fighter, and let skill meet luck to guide your bullets to strike true.</span>
        </>,
        features: [ fd.firearmProficiency, fd.gunsmith, fd.adeptMarksman, fd.quickdraw, fd.rapidRepair, fd.lightningReload, fd.viciousIntent, fd.hemorrhagingCritical, fd.trickShots ],
        table: classTableData.fighterGunslinger
    },
}
const fighterSubclasses = convertObjToArray(fighterSubclassData);



//______________________________________________________________________________________
// ===== Monk Subclass =====
const monkSubclassData = {
    wayOfTheOpenHand:{
        id: "wayOfTheOpenHand",
        display: "Way of the Open Hand",
        description: "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.",
        features: [ fd.openHandTechnique, fd.wholenessOfBody, fd.tranquility, fd.quiveringPalm ],
    },
    wayOfTheCobaltSoul:{
        id: "wayOfTheCobaltSoul",
        display: "Way of the Cobalt Soul",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Driven by the pursuit of knowledge and its scholars' worship of the Knowing Mentor, the Library of the Cobalt Soul is one of the best-respected and most heavily guarded repositories of tomes, history, and information in all Exandria. People from all lands come to the library to seek knowledge, and those particularly dedicated to the virtues of truth often pledge their minds and bodies to the Cobalt Soul's cause. To become a member of the Cobalt Soul is to give oneself over to a quest dedicated to unveiling life's mysteries, bringing light to the secrets of concealed evil, and guarding the most powerful and dangerous of truths from those whose unwholesome thirst for knowledge might bring death and suffering to others.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>The monks of the Cobalt Soul are the embodiment of the maxim: “Know your enemy.” Through tireless research, they steel themselves against the unrelenting tides of evil. Through rigorous training, they learn to break through their foes' mental and physical defenses. Then, once the fight is done, they record their findings for future generations of monks to study.</span>
        </>,
        features: [ fd.extractAspects, fd.extortTruth, fd.mysticalErudition, fd.mindOfMercury, fd.debilitatingBarrage ],
    },
}
const monkSubclasses = convertObjToArray(monkSubclassData);



//______________________________________________________________________________________
// ===== Paladin Subclass =====
const paladinSubclassData = {
    oathOfDevotion:{
        id: "oathOfDevotion",
        display: "Oath of Devotion",
        description: <>
            <span>The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels—the perfect servants of good—as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.</span>
            <br/><br/>
            <strong>TENETS OF DEVOTION</strong>
            <br/>
            <span>Though the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets.</span>
            <ul>
                <li><strong>Honesty.</strong> Don't lie or cheat. Let your word be your promise.</li>
                <li><strong>Courage.</strong> Never fear to act, though caution is wise.</li>
                <li><strong>Compassion.</strong> Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom.</li>
                <li><strong>Honor.</strong> Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible while causing the least amount of harm.</li>
                <li><strong>Duty.</strong> Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you.</li>
            </ul>
        </>,
        features: [ fd.cdSacredWeapon, fd.cdTurnTheUnholy, fd.auraOfDevotion, fd.purityOfSpirit, fd.holyNimbus, ],
        table: classTableData.paladinOathOfDevotion
    },
    oathOfTheOpenSea:{
        id: "oathOfTheOpenSea",
        display: "Oath of the Open Sea",
        description: <>
            <span style={{ marginLeft:"2rem" }}>The Oath of the Open Sea calls to seafaring warriors, swashbuckling sailors, and traveling guardians who seek the thrill of a limitless horizon. Driven to search for adventure and mystery across and beneath every endless oceanic expanse, paladins who swear this oath stand against those who would deny liberty to likeminded travelers, rooting out tyranny and corruption wherever it is found.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Such guardians believe in the natural beauty of the sea, often making offerings and prayers to entities or deities such as the Wildmother or the Stormlord who influence safe passage. At the same time, they answer the call to hunt the monstrous creatures that too often bloody the waters with wanton violence and ill intent, and which terrorize the folk of the sea and shore.</span>
            <br/><br/>
            <strong>TENETS OF DEVOTION</strong>
            <br/>
            <span>Freedom can be a selfless virtue or a selfish want. For paladins who swear the Oath of the Open Sea, freedom is the highest calling, and a gift to be granted to all.</span>
            <ul>
                <li><strong>No Greater Life than a Life Lived Free.</strong> One should be free to chart their own path without oppression. Those who would exert their power to dominate others shall be smote.</li>
                <li><strong>Trust the Skies.</strong> The guidance of a strong breeze. The rumbling warnings of a coming storm. Nature is a source of portent and council that should be heeded.</li>
                <li><strong>Adapt Like the Water.</strong> The waters of the ocean can shift around any obstacle—or become the most impassable obstacle of all. They carve away the land to reveal the secrets of the past, or swallow the truth and hide it forever. To embrace this fluidity is to be ready for any challenge.</li>
                <li><strong>Explore the Uncharted.</strong> The world is filled with mystery. Through the pursuit of enigmatic ends, one can uncover those who hide their foul deeds, and find the path to becoming something great.</li>
            </ul>
        </>,
        features: [ fd.cdMarineLayer, fd.cdFuryOfTheTides, fd.auraOfLiberation, fd.stormyWaters, fd.mythicSwashbuckler ],
        table: classTableData.paladinOathOfTheOpenSea
    },
}
const paladinSubclasses = convertObjToArray(paladinSubclassData);



//______________________________________________________________________________________
// ===== Ranger Subclass =====

const rangerSubclassData = {
    hunter:{
        id: "hunter",
        display: "Hunter",
        description: "Emulating the Hunter archetype means accepting your place as a bulwark between the people you protect and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres to towering giants and terrifying dragons.",
        features: [ fd.huntersPrey, fd.defensiveTactics, fd.multiattack, fd.superiorHuntersDefense ],
    },
}
const rangerSubclasses = convertObjToArray(rangerSubclassData);



//______________________________________________________________________________________
// ===== Rogue Subclass =====

const rogueSubclassData = {
    thief:{
        id: "thief",
        display: "Thief",
        description: "You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ.",
        features: [ fd.fastHands, fd.secondStoryWork, fd.supremeSneak, fd.useMagicDevice, fd.thiefsReflexes ],
    },
}
const rogueSubclasses = convertObjToArray(rogueSubclassData);



//______________________________________________________________________________________
// ===== Sorcerer Subclass =====

const sorcererSubclassData = {
    draconicBloodline:{
        id: "draconicBloodline",
        display: "Draconic Bloodline",
        description: "Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.",
        features: [ fd.dragonAncestor, fd.draconicResilience, fd.elementalAffinity, fd.dragonWings, fd.draconicPresence ],
    },
}
const sorcererSubclasses = convertObjToArray(sorcererSubclassData);



//______________________________________________________________________________________
// ===== Warlock Subclass =====

const warlockSubclassData = {
    theFiend:{
        id: "theFiend",
        display: "The Fiend",
        description: "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.",
        features: [ fd.expandedSpellList, fd.darkOnesBlessing, fd.darkOnesOwnLuck, fd.fiendishResilience, fd.hurlThroughHell ],
    },
}
const warlockSubclasses = convertObjToArray(warlockSubclassData);



//______________________________________________________________________________________
// ===== Warlock Subclass =====

const wizardSubclassData = {
    schoolOfEvocation:{
        id: "schoolOfEvocation",
        display: "School of Evocation",
        description: "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.",
        features: [ fd.evocationSavant, fd.sculptSpells, fd.potentCantrip, fd.empoweredEvocation, fd.overchannel, ],
    },
}
const wizardSubclasses = convertObjToArray(wizardSubclassData);



//______________________________________________________________________________________
// ===== Subclasses =====

export const subclassData = {
    ...barbarianSubclassData,
    ...bardSubclassData,
    ...clericSubclassData,
    ...druidSubclassData,
    ...fighterSubclassData,
    ...monkSubclassData,
    ...paladinSubclassData,
    ...rangerSubclassData,
    ...rogueSubclassData,
    ...sorcererSubclassData,
    ...warlockSubclassData,
    ...wizardSubclassData,

    other: {
        id: "other",
        display: "Other",
        description: "A subclass that is not listed here. If you would like your subclass listed here, please reach out to me. Otherwise, enter the subclass text you want to be on your card in the input below.",
    },
}



//______________________________________________________________________________________
// ===== Classes =====

export const classData = {
    artificer: {
        id: "artificer",
        display: "Artificer",
        description: "Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects.",
        table: classTableData.artificer,
        hitDie: 8,
        proficiencies: [
            { id: "armor", display: "Armor", description:"Light armor, medium armor, shields" },
            { id: "weapons", display: "Weapons", description:"Simple weapons" },
            { id: "tools", display: "Tools", description:"Thieves' tools, tinker's tools, one type of artisan's tools of your choice" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "constitution", "intelligence" ] },
            { id: "skills", display: "Skills", description:"Choose two from:", proficiencyKeys:[ "arcana", "history", "investigation", "medicine", "nature", "perception", "sleightOfHand" ] },
        ],
        equipment:[
            "any two simple weapons",
            "a light crossbow and 20 bolts",
            "(a) studded leather armor or (b) scale mail",
            "thieves' tools and a dungeoneer's pack",
        ],
        spellCastingAbility: "intelligence",
        features: [ fd.optionalRuleFirearmProficiency, fd.magicalTinkering, fd.infuseItem, fd.artificerSpecialist, fd.theRightToolForTheJob, fd.abilityScoreImprovement, fd.toolExpertise, fd.flashOfGenius, fd.magicItemAdept, fd.spellStoringItem, fd.magicItemSavant, fd.magicItemMaster, fd.soulOfArtifice ],
        subclassLevel: 3,
        subclasses: [ subclassData.other ]
    },
    barbarian: {
        id: "barbarian",
        display: "Barbarian",
        description: "A fierce warrior who can enter a battle rage",
        table: classTableData.barbarian,
        hitDie: 12,
        proficiencies: [
            { id:"armor", display:"Armor", description:"Light armor, medium armor, shields" },
            { id:"weapons", display:"Weapons", description:"Simple weapons, martial weapons" },
            { id:"tools", display:"Tools", description:"None" },
            { id:"savingThrows", display:"Saving Throws", proficiencyKeys:[ "strength", "constitution" ] },
            { id:"skills", display:"Skills", description:"Choose two from:", proficiencyKeys:[ "animalHandling", "athletics", "intimidation", "nature", "perception", "survival" ] },
        ],
        equipment: [
            "(a) a greataxe or (b) any martial melee weapon",
            "(a) two handaxes or (b) any simple weapon",
            "An explorer's pack and four javelins"
        ],
        features: [ fd.rage, fd.unarmoredDefense, fd.recklessAttack, fd.dangerSense, fd.primalPath, fd.abilityScoreImprovement, fd.extraAttack, fd.fastMovement, fd.feralInstinct, fd.brutalCritical, fd.relentlessRage, fd.persistentRage, fd.indomitableMight, fd.primalChampion ],
        subclassLevel: 3,
        subclasses: [ ...barbarianSubclasses, subclassData.other ]
    },
    bard: {
        id: "bard",
        display: "Bard",
        description: "An inspiring magician whose power echoes the music of creation",
        table: classTableData.bard,
        hitDie: 8,
        proficiencies: [
            { id:"armor", display:"Armor", description:"Light armor" },
            { id:"weapons", display:"Weapons", description:"Simple weapons, hand crossbows, longswords, rapiers, shortswords" },
            { id:"tools", display:"Tools", description:"Three musical instruments of your choice" },
            { id:"savingThrows", display:"Saving Throws", proficiencyKeys:[ "dexterity", "charisma" ] },
            { id:"skills", display:"Skills", description:"Choose any three" },
        ],
        equipment: [
            "(a) a rapier, (b) a longsword, or (c) any simple weapon",
            "(a) a diplomat's pack or (b) an entertainer's pack",
            "(a) a lute or (b) any other musical instrument",
            "Leather armor and a dagger"
        ],
        spellCastingAbility: "charisma",
        features: [, fd.bardicInspiration, fd.jackOfAllTrades, fd.songOfRest, fd.bardCollege, fd.expertise, fd.abilityScoreImprovement, fd.fontOfInspiration, fd.countercharm, fd.magicalSecrets, fd.superiorInspiration ],
        subclassLevel: 3,
        subclasses: [ ...bardSubclasses, subclassData.other ]
    },
    bloodhunter: {
        id: "bloodhunter",
        display: "Blood Hunter",
        description: "Willing to suffer whatever it takes to achieve victory, these adept warriors have forged themselves into a potent force dedicated to protecting the innocent.",
        table: classTableData.bloodhunter,
        hitDie: 10,
        proficiencies: [
            { id: "armor", display: "Armor", description:"Light armor, medium armor, shields" },
            { id: "weapons", display: "Weapons", description:"Simple weapons, martial weapons" },
            { id: "tools", display: "Tools", description:"Alchemist's supplies" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "dexterity", "intelligence" ] },
            { id: "skills", display: "Skills", description:"Choose three from:", proficiencyKeys:[ "acrobatics", "arcana", "athletics", "history", "insight", "investigation", "religion", "survival" ] },
        ],
        equipment:[
            "a martial weapon or two simple weapons",
            "a light crossbow and 20 bolts",
            "studded leather armor or scale mail armor",
            "an explorer's pack and alchemist's supplies",
        ],
        features: [ fd.huntersBane, fd.bloodMaledict, fd.fightingStyle_BH, fd.crimsonRite, fd.bloodHunterOrder, fd.abilityScoreImprovement, fd.extraAttack, fd.brandOfCastigation, fd.grimPsychometry, fd.darkAugmentation, fd.brandOfTethering, fd.hardenedSoul, fd.sanguineMastery, fd.bloodCurses ],
        subclassLevel: 3,
        subclasses: [ subclassData.other ]
    },
    cleric: {
        id: "cleric",
        display: "Cleric",
        description: "A priestly champion who wields divine magic in service of a higher power",
        table: classTableData.cleric,
        hitDie: 8,
        proficiencies: [
            { id: "armor", display: "Armor", description:"Light armor, medium armor, shields" },
            { id: "weapons", display: "Weapons", description:"Simple weapons" },
            { id: "tools", display: "Tools", description:"None" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "wisdom", "charisma" ] },
            { id: "skills", display: "Skills", description:"Choose two from:", proficiencyKeys:[ "history", "insight", "medicine", "persuasion", "religion" ] },
        ],
        equipment:[
            "(a) a mace or (b) a warhammer (if proficient)",
            "(a) scale mail, (b) leather armor, or (c) chain mail (if proficient)",
            "(a) a light crossbow and 20 bolts or (b) any simple weapon",
            "(a) a priest's pack or (b) an explorer's pack",
            "A shield and a holy symbol",
        ],
        spellCastingAbility: "wisdom",
        features: [ fd.divineDomain, fd.domainSpells, fd.channelDivinity, fd.cdTurnUndead, fd.abilityScoreImprovement, fd.destroyUndead, fd.divineIntervention ],
        subclassLevel: 1,
        subclasses: [ ...clericSubclasses, subclassData.other ]
    },
    druid: {
        id: "druid",
        display: "Druid",
        description: "A priest of the Old Faith, wielding the powers of nature and adopting animal forms",
        table: classTableData.druid,
        hitDie: 8,
        proficiencies: [
            { id: "armor", display: "Armor", description:"Light armor, medium armor, shields (druids will not wear armor or use shields made of metal)" },
            { id: "weapons", display: "Weapons", description:"Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears" },
            { id: "tools", display: "Tools", description:"Herbalism kit" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "intelligence", "wisdom" ] },
            { id: "skills", display: "Skills", description:"Choose two from:", proficiencyKeys:[ "arcana", "animalHandling", "insight", "medicine", "nature", "perception", "religion", "survival" ] },
        ],
        equipment:[
            "(a) a wooden shield or (b) any simple weapon",
            "(a) a scimitar or (b) any simple melee weapon",
            "Leather armor, an explorer's pack, and a druidic focus",
        ],
        spellCastingAbility: "wisdom",
        features: [ fd.druidic, fd.wildShape, fd.druidCircle, fd.abilityScoreImprovement, fd.timelessBody, fd.beastSpells, fd.archdruid ],
        subclassLevel: 2,
        subclasses: [ ...druidSubclasses, subclassData.other ]
    },
    fighter: {
        id: "fighter",
        display: "Fighter",
        description: "A master of martial combat, skilled with a variety of weapons and armor",
        table: classTableData.fighter,
        hitDie: 10,
        proficiencies: [
            { id: "armor", display: "Armor", description:"All armor, shields" },
            { id: "weapons", display: "Weapons", description:"Simple weapons, martial weapons" },
            { id: "tools", display: "Tools", description:"None" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "strength", "constitution" ] },
            { id: "skills", display: "Skills", description:"Choose two from:", proficiencyKeys:[ "acrobatics", "animalHandling", "athletics", "history", "insight", "intimidation", "perception", "survival" ] },
        ],
        equipment:[
            "(a) chain mail or (b) leather armor, longbow, and 20 arrows",
            "(a) a martial weapon and a shield or (b) two martial weapons",
            "(a) a light crossbow and 20 bolts or (b) two handaxes",
            "(a) a dungeoneer's pack or (b) an explorer's pack",
        ],
        features: [ fd.fightingStyle, fd.secondWind, fd.actionSurge, fd.martialArchetype, fd.abilityScoreImprovement_f, fd.extraAttack_f, fd.indomitable ],
        subclassLevel: 3,
        subclasses: [ ...fighterSubclasses, subclassData.other ]
    },
    monk: {
        id: "monk",
        display: "Monk",
        description: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
        table: classTableData.monk,
        hitDie: 8,
        proficiencies: [
            { id: "armor", display: "Armor", description:"None" },
            { id: "weapons", display: "Weapons", description:"Simple weapons, shortswords" },
            { id: "tools", display: "Tools", description:"Choose one type of artisan's tools or one musical instrument" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "strength", "dexterity" ] },
            { id: "skills", display: "Skills", description:"Choose two from:", proficiencyKeys:[ "acrobatics", "athletics", "history", "insight", "religion", "stealth" ] },
        ],
        equipment:[
            "(a) a shortsword or (b) any simple weapon",
            "(a) a dungeoneer's pack or (b) an explorer's pack",
            "10 darts",
        ],
        features: [ fd.unarmoredDefense_m, fd.martialArts, fd.ki, fd.flurryOfBlows, fd.patientDefense, fd.stepOfTheWind, fd.unarmoredMovement, fd.monasticTradition, fd.deflectMissiles, fd.abilityScoreImprovement, fd.slowFall, fd.extraAttack, fd.stunningStrike, fd.kiEmpoweredStrikes, fd.evasion, fd.stillnessOfMind, fd.purityOfBody, fd.tongueOfTheSunAndMoon, fd.diamondSoul, fd.timelessBody, fd.emptyBody, fd.perfectSelf ],
        subclassLevel: 3,
        subclasses: [ ...monkSubclasses, subclassData.other ]
    },
    paladin: {
        id: "paladin",
        display: "Paladin",
        description: "A holy warrior bound to a sacred oath",
        table: classTableData.paladin,
        hitDie: 10,
        proficiencies: [
            { id: "armor", display: "Armor", description:"All armor, shields" },
            { id: "weapons", display: "Weapons", description:"Simple weapons, martial weapons" },
            { id: "tools", display: "Tools", description:"None" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "wisdom", "charisma" ] },
            { id: "skills", display: "Skills", description:"Choose two from:", proficiencyKeys:[ "athletics", "insight", "intimidation", "medicine", "persuasion", "religion" ] },
        ],
        equipment:[
            "(a) a martial weapon and a shield or (b) two martial weapons",
            "(a) five javelins or (b) any simple melee weapon",
            "(a) a priest's pack or (b) an explorer's pack",
            "Chain mail and a holy symbol",
        ],
        spellCastingAbility: "charisma",
        features: [ fd.divineSense, fd.layOnHands, fd.fightingStyle_P, fd.divineSmite, fd.divineHealth, fd.sacredOath, fd.oathSpells, fd.channelDivinity_P, fd.abilityScoreImprovement, fd.extraAttack, fd.auraOfProtection, fd.auraOfCourage, fd.improvedDivineSmite, fd.cleansingTouch ],
        subclassLevel: 3,
        subclasses: [ ...paladinSubclasses, subclassData.other ]
    },
    ranger: {
        id: "ranger",
        display: "Ranger",
        description: "A warrior who combats threats on the edges of civilization",
        table: classTableData.ranger,
        hitDie: 10,
        proficiencies: [
            { id: "armor", display: "Armor", description:"Light armor, medium armor, shields" },
            { id: "weapons", display: "Weapons", description:"Simple weapons, martial weapons" },
            { id: "tools", display: "Tools", description:"None" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "strength", "dexterity" ] },
            { id: "skills", display: "Skills", description:"Choose three from:", proficiencyKeys:[ "animalHandling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival" ] },
        ],
        equipment:[
            "(a) scale mail or (b) leather armor",
            "(a) two shortswords or (b) two simple melee weapons",
            "(a) a dungeoneer's pack or (b) an explorer's pack",
            "A longbow and a quiver of 20 arrows",
        ],
        spellCastingAbility: "wisdom",
        features: [ fd.favoredEnemy, fd.naturalExplorer, fd.fightingStyle_R, fd.rangerArchetype, fd.primevalAwareness, fd.abilityScoreImprovement, fd.extraAttack, fd.landsStride, fd.hideInPlainSight, fd.vanish, fd.feralSenses, fd.foeSlayer ],
        subclassLevel: 3,
        subclasses: [ ...rangerSubclasses, subclassData.other ]
    },
    rogue: {
        id: "rogue",
        display: "Rogue",
        description: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
        table: classTableData.rogue,
        hitDie: 8,
        proficiencies: [
            { id: "armor", display: "Armor", description:"Light armor" },
            { id: "weapons", display: "Weapons", description:"Simple weapons, hand crossbows, longswords, rapiers, shortswords" },
            { id: "tools", display: "Tools", description:"Thieves' tools" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "dexterity", "intelligence" ] },
            { id: "skills", display: "Skills", description:"Choose four from:", proficiencyKeys:[ "acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleightOfHand", "stealth" ] },
        ],
        equipment:[
            "(a) a rapier or (b) a shortsword",
            "(a) a shortbow and quiver of 20 arrows or (b) a shortsword",
            "(a) a burglar's pack, (b) a dungeoneer's pack, or (c) an explorer's pack",
            "Leather armor, two daggers, and thieves' tools",
        ],
        features: [ fd.expertise_Ro, fd.sneakAttack, fd.thievesCant, fd.cunningAction, fd.roguishArchetype, fd.abilityScoreImprovement, fd.uncannyDodge, fd.evasion_Ro, fd.reliableTalent, fd.blindsense, fd.slipperyMind, fd.elusive, fd.strokeOfLuck ],
        subclassLevel: 3,
        subclasses: [ ...rogueSubclasses, subclassData.other ]
    },
    sorcerer: {
        id: "sorcerer",
        display: "Sorcerer",
        description: "A spellcaster who draws on inherent magic from a gift or bloodline",
        table: classTableData.sorcerer,
        hitDie: 6,
        proficiencies: [
            { id: "armor", display: "Armor", description:"None" },
            { id: "weapons", display: "Weapons", description:"Daggers, darts, slings, quarterstaffs, light crossbows" },
            { id: "tools", display: "Tools", description:"None" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "constitution", "charisma" ] },
            { id: "skills", display: "Skills", description:"Choose two from:", proficiencyKeys:[ "arcana", "deception", "insight", "intimidation", "persuasion", "religion" ] },
        ],
        equipment:[
            "(a) a light crossbow and 20 bolts or (b) any simple weapon",
            "(a) a component pouch or (b) an arcane focus",
            "(a) a dungeoneer's pack or (b) an explorer's pack",
            "Two daggers",
        ],
        spellCastingAbility: "charisma",
        features: [ fd.sorcerousOrigin, fd.fontOfMagic, fd.metamagic, fd.abilityScoreImprovement, fd.sorcerousRestoration ],
        subclassLevel: 1,
        subclasses: [ ...sorcererSubclasses, subclassData.other ]
    },
    warlock: {
        id: "warlock",
        display: "Warlock",
        description: "A wielder of magic that is derived from a bargain with an extraplanar entity",
        table: classTableData.warlock,
        hitDie: 8,
        proficiencies: [
            { id: "armor", display: "Armor", description:"Light armor" },
            { id: "weapons", display: "Weapons", description:"Simple weapons" },
            { id: "tools", display: "Tools", description:"None" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "wisdom", "charisma" ] },
            { id: "skills", display: "Skills", description:"Choose two from:", proficiencyKeys:[ "arcana", "deception", "history", "intimidation", "investigation", "nature", "religion" ] },
        ],
        equipment:[
            "(a) a light crossbow and 20 bolts or (b) any simple weapon",
            "(a) a component pouch or (b) an arcane focus",
            "(a) a scholar's pack or (b) a dungeoneer's pack",
            "Leather armor, any simple weapon, and two daggers",
        ],
        spellCastingAbility: "charisma",
        features: [ fd.otherworldlyPatron, fd.eldritchInvocations, fd.pactBoon, fd.abilityScoreImprovement, fd.mysticArcanum6th, fd.mysticArcanum7th, fd.mysticArcanum8th, fd.mysticArcanum9th, fd.eldritchMaster ],
        subclassLevel: 1,
        subclasses: [ ...warlockSubclasses, subclassData.other ]
    },
    wizard: {
        id: "wizard",
        display: "Wizard",
        description: "A scholarly magic-user capable of manipulating the structures of reality",
        table: classTableData.wizard,
        hitDie: 6,
        proficiencies: [
            { id: "armor", display: "Armor", description:"None" },
            { id: "weapons", display: "Weapons", description:"Daggers, darts, slings, quarterstaffs, light crossbows" },
            { id: "tools", display: "Tools", description:"None" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "intelligence", "wisdom" ] },
            { id: "skills", display: "Skills", description:"Choose two from:", proficiencyKeys:[ "arcana", "history", "insight", "investigation", "medicine", "religion" ] },
        ],
        equipment:[
            "(a) a quarterstaff or (b) a dagger",
            "(a) a component pouch or (b) an arcane focus",
            "(a) a scholar's pack or (b) an explorer's pack",
            "A spellbook",
        ],
        spellCastingAbility: "intelligence",
        features: [ fd.arcaneRecovery, fd.arcaneTradition, fd.abilityScoreImprovement, fd.spellMastery, fd.signatureSpells ],
        subclassLevel: 2,
        subclasses: [ ...wizardSubclasses, subclassData.other ]
    },
    // other: {
    //     id: "other",
    //     display: "Other",
    //     description: "A class that is not listed here. If you would like your class listed here, please reach out to me.",
    // },
};

export const levelDefaults = {
    artificer: 0,
    barbarian: 0,
    bard: 0,
    bloodhunter: 0,
    cleric: 0,
    druid: 0,
    fighter: 0,
    monk: 0,
    paladin: 0,
    ranger: 0,
    rogue: 0,
    sorcerer: 0,
    warlock: 0,
    wizard: 0,
    // other: 0,
}

/* 
        hitDie: ,
        proficiencies: [
            { id: "armor", display: "Armor", description:"" },
            { id: "weapons", display: "Weapons", description:"" },
            { id: "tools", display: "Tools", description:"" },
            { id: "savingThrows", display: "Saving Throws", proficiencyKeys:[ "" ] },
            { id: "skills", display: "Skills", proficiencyKeys:[ "" ] },
        ],
        equipment:[
            "",
        ],

*/