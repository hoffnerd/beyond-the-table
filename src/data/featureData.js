const druidCircleOfTheLandDataStructure = [
    { key:"level", display:"Druid Level", displayRules:{ width:"150px" } },
    { key:"spells", display:"Spells" }
]

const spanFightingStylesSecondLevelDescription = <span>At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.</span>

const liFightingStyle_archery = <li><strong>Archery.</strong> You gain a +2 bonus to attack rolls you make with ranged weapons.</li>
const liFightingStyle_defense = <li><strong>Defense.</strong> While you are wearing armor, you gain a +1 bonus to AC.</li>
const liFightingStyle_dueling = <li><strong>Dueling.</strong> When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.</li>
const liFightingStyle_greatWeaponFighting = <li><strong>Great Weapon Fighting.</strong> When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.</li>
const liFightingStyle_protection = <li><strong>Protection.</strong> When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.</li>
const liFightingStyle_twoWeaponFighting = <li><strong>Two-Weapon Fighting.</strong> When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.</li>


const bloodhunterFightingStyles = <>
    {spanFightingStylesSecondLevelDescription}
    <br/>
    <ul>
        {liFightingStyle_archery}
        {liFightingStyle_dueling}
        {liFightingStyle_greatWeaponFighting}
        {liFightingStyle_twoWeaponFighting}
    </ul>
</>

const fighterFightingStyles = <>
    <span>You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.</span>
    <br/>
    <ul>
        {liFightingStyle_archery}
        {liFightingStyle_defense}
        {liFightingStyle_dueling}
        {liFightingStyle_greatWeaponFighting}
        {liFightingStyle_protection}
        {liFightingStyle_twoWeaponFighting}
    </ul>
</>

const paladinFightingStyles = <>
    {spanFightingStylesSecondLevelDescription}
    <br/>
    <ul>
        {liFightingStyle_defense}
        {liFightingStyle_dueling}
        {liFightingStyle_greatWeaponFighting}
        {liFightingStyle_protection}
    </ul>
</>

const rangerFightingStyles = <>
    {spanFightingStylesSecondLevelDescription}
    <br/>
    <ul>
        {liFightingStyle_archery}
        {liFightingStyle_defense}
        {liFightingStyle_dueling}
        {liFightingStyle_twoWeaponFighting}
    </ul>
</>


export const featureData = {


    
    //______________________________________________________________________________________
    // ===== Dragonborn =====
    draconicAncestry:{
        id: "draconicAncestry",
        display: "Draconic Ancestry",
        description: "You have draconic ancestry. Choose one type of dragon from the buttons below table. Your breath weapon and damage resistance are determined by the dragon type, as shown below the buttons.",
    },
    breathWeapon:{
        id: "breathWeapon",
        display: "Breath Weapon",
        description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
    },
    damageResistance:{
        id: "damageResistance",
        display: "Damage Resistance",
        description: "You have resistance to the damage type associated with your draconic ancestry.",
    },



    //______________________________________________________________________________________
    // ===== Dwarf =====
    dwarvenResilience:{
        id: "dwarvenResilience",
        display: "Dwarven Resilience",
        description: `You have advantage on saving throws against poison, and you have resistance against poison damage (explained in the "Combat" section).`,
    },
    dwarvenCombatTraining:{
        id: "dwarvenCombatTraining",
        display: "Dwarven Combat Training",
        description: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
    },
    stonecunning:{
        id: "stonecunning",
        display: "Stonecunning",
        description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
    },
    dwarvenToughness:{
        id: "dwarvenToughness",
        display: "Dwarven Toughness",
        description: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
    },
    dwarvenArmorTraining:{
        id: "dwarvenArmorTraining",
        display: "Dwarven Armor Training",
        description: "You have proficiency with light and medium armor.",
    },
    


    //______________________________________________________________________________________
    // ===== Elf =====
    keenSenses:{
        id: "keenSenses",
        display: "Keen Senses",
        description: "You have proficiency in the Perception skill.",
    },
    trance:{
        id: "trance",
        display: "Trance",
        description: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
    },
    elfWeaponTraining:{
        id: "elfWeaponTraining",
        display: "Elf Weapon Training",
        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
    },
    fleetOfFoot:{
        id: "fleetOfFoot",
        display: "Fleet of Foot",
        description: "Your base walking speed increases to 35 feet.",
    },
    maskOfTheWild:{
        id: "maskOfTheWild",
        display: "Mask of the Wild",
        description: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
    },

    

    //______________________________________________________________________________________
    // ===== Gnome =====
    gnomeCunning:{
        id: "gnomeCunning",
        display: "Gnome Cunning",
        description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
    },
    artificersLore:{
        id: "artificersLore",
        display: "Artificer's Lore",
        description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
    },
    tinker:{
        id: "tinker",
        display: "Tinker",
        description: <>
            <span>You have proficiency with artisan tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:</span>
            <ul>
                <li><strong>Clockwork Toy.</strong> This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.</li>
                <li><strong>Fire Starter.</strong> The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.</li>
                <li><strong>Music Box.</strong> When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.</li>
                <li>At your DM's discretion, you may make other objects with effects similar in power to these. The Prestidigitation cantrip is a good baseline for such effects.</li>
            </ul>
        </>,
    },
    naturalIllusionist:{
        id: "naturalIllusionist",
        display: "Natural Illusionist",
        description: "You know the Minor Illusion cantrip. Intelligence is your spellcasting modifier for it.",
    },
    speakWithSmallBeasts:{
        id: "speakWithSmallBeasts",
        display: "Speak with Small Beasts",
        description: "Through sound and gestures, you may communicate simple ideas with Small or smaller beasts.",
    },


    
    //______________________________________________________________________________________
    // ===== Goliath =====
    naturalAthlete:{
        id: "naturalAthlete",
        display: "Natural Athlete",
        description: "You have proficiency in the Athletics skill.",
    },
    stonesEndurance:{
        id: "stonesEndurance",
        display: "Stone's Endurance",
        description: "You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled and reduce the damage by that total. After you use this trait, you can’t use it again until you finish a short or long rest.",
    },
    powerfulBuild:{
        id: "powerfulBuild",
        display: "Powerful Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
    },
    mountainBorn:{
        id: "mountainBorn",
        display: "Mountain Born",
        description: "You have resistance to cold damage. You're also acclimated to high altitude, including elevations above 20,000 feet.",
    },



    //______________________________________________________________________________________
    // ===== Halfling =====
    lucky:{
        id: "lucky",
        display: "Lucky",
        description: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
    },
    brave:{
        id: "brave",
        display: "Brave",
        description: "You have advantage on saving throws against being frightened.",
    },
    halflingNimbleness:{
        id: "halflingNimbleness",
        display: "Halfling Nimbleness",
        description: "You can move through the space of any creature that is of a size larger than yours.",
    },
    naturallyStealthy:{
        id: "naturallyStealthy",
        display: "Naturally Stealthy",
        description: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.",
    },
    stoutResilience:{
        id: "stoutResilience",
        display: "Stout Resilience",
        description: "You have advantage on saving throws against poison, and you have resistance against poison damage.",
    },
    


    //______________________________________________________________________________________
    // ===== Half-Orc =====
    menacing:{
        id: "menacing",
        display: "Menacing",
        description: "You gain proficiency in the Intimidation skill.",
    },
    relentlessEndurance:{
        id: "relentlessEndurance",
        display: "Relentless Endurance",
        description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
    },
    savageAttacks:{
        id: "savageAttacks",
        display: "Savage Attacks",
        description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
    },



    //______________________________________________________________________________________
    // ===== Tiefling =====
    hellishResistance:{
        id: "hellishResistance",
        display: "Hellish Resistance",
        description: "You have resistance to fire damage.",
    },
    infernalLegacy:{
        id: "infernalLegacy",
        display: "Infernal Legacy",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
    },



    //______________________________________________________________________________________
    // ===== Artificer =====
    optionalRuleFirearmProficiency:{
        id: "optionalRuleFirearmProficiency",
        display: "Optional Rule: Firearm Proficiency",
        description: "The secrets of gunpowder weapons have been discovered in various corners of the D&D multiverse. If your Dungeon Master uses the rules on firearms in the Dungeon Master's Guide and your artificer has been exposed to the operation of such weapons, your artificer is proficient with them.",
    },
    magicalTinkering:{
        id: "magicalTinkering",
        display: "Magical Tinkering",
        description: <>
            <span style={{ marginLeft:"2rem" }}>At 1st level, you've learned how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:</span>
            <ul>
                <li>The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.</li>
                <li>Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.</li>
                <li>The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.</li>
                <li>A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.</li>
            </ul>
            <span>The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.</span>
        </>,
        level:1,
    },
    infuseItem:{
        id: "infuseItem",
        display: "Infuse Item",
        description: <>
            <span>At 2nd level, you've gained the ability to imbue mundane items with certain magical infusions, turning those objects into magic items.</span>
            <br/>
            <br/>
            <strong>Infusions Known</strong>
            <br/>
            <span style={{ marginLeft:"2rem" }}>When you gain this feature, pick four artificer infusions to learn. You learn additional infusions of your choice when you reach certain levels in this class, as shown in the Infusions Known column of the Artificer table.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Whenever you gain a level in this class, you can replace one of the artificer infusions you learned with a new one.</span>
            <br/>
            <br/>
            <strong>Infusing an Item</strong>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Whenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works on only certain kinds of objects, as specified in the infusion's description. If the item requires attunement, you can attune yourself to it the instant you infuse the item. If you decide to attune to the item later, you must do so using the normal process for attunement (see the attunement rules in the Dungeon Master's Guide).</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Your infusion remains in an item indefinitely, but when you die, the infusion vanishes after a number of days equal to your Intelligence modifier (minimum of 1 day). The infusion also vanishes if you replace your knowledge of the infusion.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. You must touch each of the objects, and each of your infusions can be in only one object at a time. Moreover, no object can bear more than one of your infusions at a time. If you try to exceed your maximum number of infusions, the oldest infusion ends, and then the new infusion applies.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>If an infusion ends on an item that contains other things, like a bag of holding, its contents harmlessly appear in and around its space.</span>
        </>,
        shortDescription: "At 2nd level, you've gained the ability to imbue mundane items with certain magical infusions, turning those objects into magic items",
        level:2,
    },
    artificerSpecialist:{
        id: "artificerSpecialist",
        display: "Artificer Specialist (Artificer Subclass)",
        description: "At 3rd level, you choose the type of specialist you are. Your choice grants you features at 5th level and again at 9th and 15th level.",
        level:3,
    },
    theRightToolForTheJob:{
        id: "theRightToolForTheJob",
        display: "The Right Tool for the Job",
        description: "At 3rd level, you've learned how to produce exactly the tool you need: with thieves' tools or artisan's tools in hand, you can magically create one set of artisan's tools in an unoccupied space within 5 feet of you. This creation requires 1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.",
        level:3,
    },
    toolExpertise:{
        id: "toolExpertise",
        display: "Tool Expertise",
        description: "At 6th level, your proficiency bonus is now doubled for any ability check you make that uses your proficiency with a tool.",
        level:6,
    },
    flashOfGenius:{
        id: "flashOfGenius",
        display: "Flash of Genius",
        description: "At 7th level, you've gained the ability to come up with solutions under pressure. When you or another creature you can see within 30 feet of you makes an ability check or a saving throw, you can use your reaction to add your Intelligence modifier to the roll. You can use this feature a number of times equal to your Intelligence modifier (minimum of once). You regain all expended uses when you finish a long rest.",
        level:7,
    },
    magicItemAdept:{
        id: "magicItemAdept",
        display: "Magic Item Adept",
        description: <>
            <span>When you reach 10th level, you achieve a profound understanding of how to use and make magic items:</span>
            <ul>
                <li>You can attune to up to four magic items at once.</li>
                <li>If you craft a magic item with a rarity of common or uncommon, it takes you a quarter of the normal time, and it costs you half as much of the usual gold.</li>
            </ul>
        </>,
        level:10,
    },
    spellStoringItem:{
        id: "spellStoringItem",
        display: "Spell-Storing Item",
        description: <>
            <span style={{ marginLeft:"2rem" }}>At 11th level, you can now store a spell in an object. Whenever you finish a long rest, you can touch one simple or martial weapon or one item that you can use as a spellcasting focus, and you store a spell in it, choosing a 1st- or 2nd-level spell from the artificer spell list that requires 1 action to cast (you needn't have it prepared).</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>While holding the object, a creature can take an action to produce the spell's effect from it, using your spellcasting ability modifier. If the spell requires concentration, the creature must concentrate. The spell stays in the object until it's been used a number of times equal to twice your Intelligence modifier (minimum of twice) or until you use this feature again to store a spell in an object.</span>
        </>,
        level:11,
    },
    magicItemSavant:{
        id: "magicItemSavant",
        display: "Magic Item Savant",
        description: <>
            <span>At 14th level, your skill with magic items deepens more:</span>
            <ul>
                <li>You can attune to up to five magic items at once.</li>
                <li>You ignore all class, race, spell and level requirements on attuning to or using a magic item.</li>
            </ul>
        </>,
        level:14,
    },
    magicItemMaster:{
        id: "magicItemMaster",
        display: "Magic Item Master",
        description: "Starting at 18th level, you can attune up to six magic items at once.",
        level:18,
    },
    soulOfArtifice:{
        id: "soulOfArtifice",
        display: "Soul of Artifice",
        description: <>
            <span>At 20th level, you develop a mystical connection to your magic items, which you can draw on for protection:</span>
            <ul>
                <li>You gain a +1 bonus to all saving throws per magic item you are currently attuned to.</li>
                <li>If you're reduced to 0 hit points but not killed out-right, you can use your reaction to end one of your artificer infusions, causing you to drop to 1 hit point instead of 0.</li>
            </ul>
        </>,
        level:20,
    },


    
    //______________________________________________________________________________________
    // ===== Artificer () =====



    //______________________________________________________________________________________
    // ===== Barbarian =====
    rage:{
        id: "rage",
        display: "Rage",
        description: <>
            <span>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:</span>
            <ul>
                <li>You have advantage on Strength checks and Strength saving throws.</li>
                <li>When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.</li>
                <li>You have resistance to bludgeoning, piercing, and slashing damage.</li>
            </ul>
            <span>If you are able to cast spells, you can't cast them or concentrate on them while raging.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }} >Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }} >Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.</span>
        </>,
        level: 1,
    },
    unarmoredDefense:{
        id: "unarmoredDefense",
        display: "Unarmored Defense",
        description: "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
        level: 1,
    },
    recklessAttack:{
        id: "recklessAttack",
        display: "Reckless Attack",
        description: "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
        level: 2,
    },
    dangerSense:{
        id: "dangerSense",
        display: "Danger Sense",
        description: "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
        level: 2,
    },
    primalPath:{
        id: "primalPath",
        display: "Primal Path (Barbarian Subclass)",
        description: "At 3rd level, you choose a path that shapes the nature of your rage. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.",
        level: 3,
    },
    fastMovement:{
        id: "fastMovement",
        display: "Fast Movement",
        description: "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.",
        level: 5,
    },
    feralInstinct:{
        id: "feralInstinct",
        display: "Feral Instinct",
        description: "By 7th level, your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
        level: 7,
    },
    brutalCritical:{
        id: "brutalCritical",
        display: "Brutal Critical",
        description: "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
        level: 9,
        gainAnotherAt: [ 13, 17 ]
    },
    relentlessRage:{
        id: "relentlessRage",
        display: "Relentless Rage",
        description: "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
        level: 11,
    },
    persistentRage:{
        id: "persistentRage",
        display: "Persistent Rage",
        description: "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
        level: 15,
    },
    indomitableMight:{
        id: "indomitableMight",
        display: "Indomitable Might",
        description: "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
        level: 18,
    },
    primalChampion:{
        id: "primalChampion",
        display: "Primal Champion",
        description: "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
        level: 20,
    },



    //______________________________________________________________________________________
    // ===== Barbarian (Path of the Berserker) =====
    frenzy:{
        id: "frenzy",
        display: "Frenzy",
        description: "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
        level:  3,
    },
    mindlessRage:{
        id: "mindlessRage",
        display: "Mindless Rage",
        description: "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
        level:  6,
    },
    intimidatingPresence:{
        id: "intimidatingPresence",
        display: "Intimidating Presence",
        description: "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you. If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.",
        level:  10,
    },
    retaliation:{
        id: "retaliation",
        display: "Retaliation",
        description: "Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.",
        level:  14,
    },



    //______________________________________________________________________________________
    // ===== Barbarian () =====



    //______________________________________________________________________________________
    // ===== Bard =====
    bardicInspiration:{
        id: "bardicInspiration",
        display: "Bardic Inspiration",
        description: <>
            <span style={{ marginLeft:"2rem" }} >You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }} >Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }} >You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }} >Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</span>
        </>,
        level: 1,
        gainAnotherAt: [ 
            { level:1, display:"(d6)" },
            { level:5, display:"(d8)" },
            { level:10, display:"(d10)" },
            { level:15, display:"(d12)" },
        ],
    },
    jackOfAllTrades:{
        id: "jackOfAllTrades",
        display: "Jack of All Trades",
        description: "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.",
        level: 2,
    },
    songOfRest:{
        id: "songOfRest",
        display: "Song of Rest",
        description: <>
            <span style={{ marginLeft:"2rem" }} >Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }} >The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.</span>
        </>,
        level: 2,
        gainAnotherAt: [ 
            { level:2, display:"(1d6)" },
            { level:9, display:"(1d8)" },
            { level:13, display:"(1d10)" },
            { level:17, display:"(1d12)" },
        ]
    },
    bardCollege:{
        id: "bardCollege",
        display: "Bard College (Bard Subclass)",
        description: "At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore detailed at the end of the class description or another from the Player's Handbook or other sources. Your choice grants you features at 3rd level and again at 6th and 14th level.",
        level: 3,
    },
    expertise:{
        id: "expertise",
        display: "Expertise",
        description: "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. Add two more at 10th level.",
        level: 3,
        gainAnotherAt: [ 10 ]
    },
    fontOfInspiration:{
        id: "fontOfInspiration",
        display: "Font of Inspiration",
        description: "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.",
        level: 5,
    },
    countercharm:{
        id: "countercharm",
        display: "Countercharm",
        description: "At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).",
        level: 6,
    },
    magicalSecrets:{
        id: "magicalSecrets",
        display: "Magical Secrets",
        description: "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.",
        level: 10,
        gainAnotherAt: [ 14, 18 ]
    },
    superiorInspiration:{
        id: "superiorInspiration",
        display: "Superior Inspiration",
        description: "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.",
        level: 20,
    },
    


    //______________________________________________________________________________________
    // ===== Bard (College of Lore) =====
    bonusProficiencies_B_CoL:{
        id: "bonusProficiencies_B_CoL",
        display: "Bonus Proficiencies",
        description: "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.",
        level: 3,
    },
    cuttingWords:{
        id: "cuttingWords",
        display: "Cutting Words",
        description: "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed.",
        level: 3,
    },
    additionalMagicalSecrets:{
        id: "additionalMagicalSecrets",
        display: "Additional Magical Secrets",
        description: "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know.",
        level: 6,
    },
    peerlessSkill:{
        id: "peerlessSkill",
        display: "Peerless Skill",
        description: "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail.",
        level: 14,
    },



    //______________________________________________________________________________________
    // ===== Bard () =====



    //______________________________________________________________________________________
    // ===== Blood Hunter =====
    huntersBane:{
        id: "huntersBane",
        display: "Hunter's Bane",
        description: <>
            <span style={{ marginLeft:"2rem" }}>At 1st level, you have survived the Hunter's Bane—a dangerous, long-guarded ritual that alters your life's blood, forever binding you to the darkness and honing your senses against it. You have advantage on Wisdom (Survival) checks to track fey, fiends, or undead, as well as on Intelligence checks to recall information about such creatures.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>The Hunter's Bane also empowers your body to control and shape hemocraft magic, using your own blood and life essence to fuel your abilities. Some of your features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:</span>
            <br/>
            <br/>
            <span>Hemocraft modifier = your choice between Intelligence or Wisdom</span>
            <br/>
            <span><strong>Hemocraft save DC</strong> = 8 + your proficiency bonus + your Hemocraft modifier</span>
        </>,
        level:1,
    },
    bloodMaledict:{
        id: "bloodMaledict",
        display: "Blood Maledict",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Also at 1st level, you gain the ability to channel—or sometimes sacrifice—a part of your vital essence to curse and manipulate creatures through hemocraft magic. You know one blood curse of your choice, detailed in the “Blood Curses” section at the end of the class description. You learn one additional blood curse of your choice at 6th, 10th, 14th, and 18th level. Each time you learn a new blood curse, you can also choose one of the blood curses you know and replace it with another blood curse.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Each time you use your Blood Maledict feature, you choose which curse to invoke from the curses you know. While invoking a blood curse, but before it affects the target, you can choose to amplify the curse by taking necrotic damage equal to one roll of your hemocraft die. This damage can't be reduced in any way. An amplified curse gains an additional effect, noted in the curse's description. Creatures that do not have blood are immune to blood curses unless you have amplified the curse.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Once you use this feature, you must finish a short or long rest before you can use it again. You can use Blood Maledict twice between rests starting at 6th level, three times starting at 13th level, and four times starting at 17th level.</span>
        </>,
        level:1,
    },
    fightingStyle_BH:{
        id: "fightingStyle_BH",
        display: "Fighting Style",
        description: bloodhunterFightingStyles,
        level:2,
    },
    crimsonRite:{
        id: "crimsonRite",
        display: "Crimson Rite",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Also at 2nd level, you learn to invoke a rite of hemocraft that infuses your weapon strikes with elemental energy. As a bonus action, you can activate any rite you know on one weapon you're holding. The effect of the rite lasts until you finish a short or long rest. When you activate a rite, you take necrotic damage equal to one roll of your hemocraft die. This damage can't be reduced in any way.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>While the rite is in effect, attacks you make with this weapon are magical, and deal extra damage equal to your hemocraft die of the type determined by the chosen rite. A weapon can hold only one active rite at a time. Other creatures can't gain the benefit of your rite.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>You choose one rite from the crimson rites below when you first gain this feature. You learn an additional crimson rite at 7th level, and again at 14th level.</span>
            <ul>
                <li><strong>Rite of the Flame.</strong> The extra damage dealt by your rite is fire damage.</li>
                <li><strong>Rite of the Frozen.</strong> The extra damage dealt by your rite is cold damage.</li>
                <li><strong>Rite of the Storm.</strong> The extra damage dealt by your rite is lightning damage.</li>
                <li><strong>Rite of the Dead.</strong> The extra damage dealt by your rite is necrotic damage. (Prerequisite: 14th level)</li>
                <li><strong>Rite of the Oracle.</strong> The extra damage dealt by your rite is psychic damage. (Prerequisite: 14th level)</li>
                <li><strong>Rite of the Roar.</strong> The extra damage dealt by your rite is thunder damage. (Prerequisite: 14th level)</li>
            </ul>
        </>,
        level:2,
        gainAnotherAt:[ 7, 14 ]
    },
    bloodHunterOrder:{
        id: "bloodHunterOrder",
        display: "Blood Hunter Order (Subclass)",
        description: "At 3rd level, you commit to an order of blood hunters whose philosophy will guide you throughout your life: the Order of the Ghostslayer, the Order of the Lycan, the Order of the Mutant, or the Order of the Profane Soul, each of which is detailed at the end of the class description. Your choice grants you features at 7th level and again at 11th, 15th, and 18th level.",
        level:3,
    },
    brandOfCastigation:{
        id: "brandOfCastigation",
        display: "Brand of Castigation",
        description: <>
            <span style={{ marginLeft:"2rem" }}>At 6th level, when you damage a creature with a weapon for which you have an active crimson rite, you can channel hemocraft magic to sear an arcane brand into that creature (no action required). You always know the direction to the branded creature as long as it's on the same plane as you. Further, each time the branded creature deals damage to you or a creature you can see within 5 feet of you, the branded creature takes psychic damage equal to your Hemocraft modifier (minimum of 1).</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Your brand lasts until you dismiss it or until you use this feature to apply a brand to another creature. Your brand can be dispelled with dispel magic, and is treated as a spell with a level equal to half your blood hunter level (maximum 9th level).</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Once you use this feature, you can't use it again until you finish a short or long rest.</span>
        </>,
        level:6,
    },
    grimPsychometry:{
        id: "grimPsychometry",
        display: "Grim Psychometry",
        description: "When you reach 9th level, you gain a supernatural talent for discerning the secrets surrounding mysterious relics or places touched by evil. Whenever you make an Intelligence (History) check to recall information about the sinister or tragic history of an object you are touching or your current location, you have advantage on the check. At the DM's discretion, a suitably high roll might cause your character to experience brief visions of the past connected to the object or location.",
        level:9,
    },
    darkAugmentation:{
        id: "darkAugmentation",
        display: "Dark Augmentation",
        description: "Starting at 10th level, the magic of hemocraft suffuses your body to permanently reinforce your resilience. Your speed increases by 5 feet, and you have a bonus to Strength, Dexterity, and Constitution saving throws equal to your Hemocraft modifier (minimum of +1).",
        level:10,
    },
    brandOfTethering:{
        id: "brandOfTethering",
        display: "Brand of Tethering",
        description: "Starting at 13th level, the psychic damage from your Brand of Castigation increases to twice your Hemocraft modifier (minimum of 2). Additionally, a branded creature can't take the Dash action, and if it attempts to teleport or to leave its current plane by any means, it takes 4d6 psychic damage and must make a Wisdom saving throw. On a failure, the attempt to teleport or leave the plane fails.",
        level:13,
    },
    hardenedSoul:{
        id: "hardenedSoul",
        display: "Hardened Soul",
        description: "When you reach 14th level, you have advantage on saving throws against being charmed and frightened.",
        level:14,
    },
    sanguineMastery:{
        id: "sanguineMastery",
        display: "Sanguine Mastery",
        description:<>
            <span style={{ marginLeft:"2rem" }}>Upon reaching 20th level, your mastery of blood magic reaches its height, mitigating your sacrifice and empowering your expertise. Once per turn, whenever a blood hunter feature requires you to roll a hemocraft die, you can reroll the die and use either roll.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Additionally, whenever you score a critical hit with a weapon for which you have an active crimson rite, you regain one expended use of your Blood Maledict feature.</span>
        </>,
        level:20,
    },
    bloodCurses:{
        id: "bloodCurses",
        display: "Blood Curses",
        description: <>
            <span>As a blood hunter, you have access to a range of blood curses that can tax the resilience of any foe.</span>
            <br/>
            <br/>
            <strong>Blood Curse of the Anxious.</strong>
            <br/>
            <span>As a bonus action, you harry the body or mind of a creature within 30 feet of you, making them susceptible to forceful influence. Until the end of your next turn, Charisma (Intimidation) checks made against the cursed creature have advantage.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}><strong>Amplify.</strong> The next Wisdom saving throw the cursed creature makes before this curse ends has disadvantage.</span>
            <br/>
            <br/>
            <strong>Blood Curse of Binding.</strong>
            <br/>
            <span>As a bonus action, you attempt to bind a Large or smaller creature you can see within 30 feet of you, which must make a Strength saving throw. On a failure, the cursed creature's speed is reduced to 0 and it can't use reactions until the end of your next turn.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}><strong>Amplify.</strong> This curse lasts for 1 minute and can affect any creature regardless of size. The cursed creature can repeat the saving throw at the end of each of its turns, ending the curse on itself on a success.</span>
            <br/>
            <br/>
            <strong>Blood Curse of Bloated Agony.</strong>
            <br/>
            <span>As a bonus action, you curse a creature that you can see within 30 feet of you, causing its body to swell until the end of your next turn. For the duration, the creature has disadvantage on Strength checks and Dexterity checks, and takes 1d8 necrotic damage if it makes more than one attack during its turn.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}><strong>Amplify.</strong> This curse lasts for 1 minute. The cursed creature can make a Constitution saving throw at the end of each of its turns, ending the curse on itself on a success.</span>
            <br/>
            <br/>
            <span><strong>Blood Curse of Corrosion.</strong> <i>Prerequisite: 15th level, Order of the Mutant.</i></span>
            <br/>
            <span>As a bonus action, you cause a creature within 30 feet of you to become poisoned. The cursed creature can make a Constitution saving throw at the end of each of its turns, ending the curse on itself on a success.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}><strong>Amplify.</strong> The cursed creature takes 4d6 necrotic damage when you inflict this curse, and it takes this damage again each time it fails a Constitution saving throw to end the curse.</span>
            <br/>
            <br/>
            <span><strong>Blood Curse of the Exorcist.</strong> <i>Prerequisite: 15th level, Order of the Ghostslayer.</i></span>
            <br/>
            <span>As a bonus action, you choose one creature you can see within 30 feet of you that is charmed or frightened, or which is under a possession effect. The target creature is no longer charmed, frightened, or possessed.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}><strong>Amplify.</strong> A creature that charmed, frightened, or possessed the target of your curse takes 3d6 psychic damage and must succeed on a Wisdom saving throw or be stunned until the end of your next turn.</span>
            <br/>
            <br/>
            <strong>Blood Curse of Exposure.</strong>
            <br/>
            <span>When a creature you can see within 30 feet of you takes damage from an attack or spell, you can use your reaction to temporarily weaken its resilience. Until the end of the target's next turn, it loses resistance to all the damage types dealt by the triggering attack or spell (including for that triggering effect).</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}><strong>Amplify.</strong> The target instead loses invulnerability to the damage types of the triggering attack or spell, but has resistance to those damage types until the end of its next turn.</span>
            <br/>
            <br/>
            <strong>Blood Curse of the Eyeless.</strong>
            <br/>
            <span>When a creature you can see within 30 feet of you makes an attack, you can use your reaction to roll one hemocraft die and subtract the number rolled from the creature's attack roll. You can choose to use this feature after the creature's roll, but before the DM determines whether the attack hits or misses. The creature is immune to this curse if it is immune to the blinded condition.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}><strong>Amplify.</strong> You apply this curse to all the creature's attack rolls until the end of the creature's turn. You roll separately for each affected attack.</span>
            <br/>
            <br/>
            <strong>Blood Curse of the Fallen Puppet.</strong>
            <br/>
            <span>When a creature you can see within 30 feet of you drops to 0 hit points, you can use your reaction to instill that creature with a final act of aggression. The creature immediately makes one weapon attack against a target of your choice within its range.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}><strong>Amplify.</strong> You can first cause the cursed creature to move up to half its speed, and you grant a bonus to its attack roll equal to your Hemocraft modifier (minimum of +1).</span>
            <br/>
            <br/>
            <span><strong>Blood Curse of the Howl.</strong> <i>Prerequisite: 18th level, Order of the Lycan.</i></span>
            <br/>
            <span>As an action, you unleash a bloodcurdling howl. Each creature within 30 feet of you that can hear you must succeed on a Wisdom saving throw or become frightened of you until the end of your next turn. If a creature fails its saving throw by 5 or more, it is stunned while frightened in this way. A creature that succeeds on its saving throw is immune to this blood curse for the next 24 hours. You can choose any number of creatures you can see to be unaffected by the howl.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}><strong>Amplify.</strong> The range of this curse increases to 60 feet.</span>
            <br/>
            <br/>
            <strong>Blood Curse of the Marked.</strong>
            <br/>
            <span>As a bonus action, you mark a creature that you can see within 30 feet of you. Until the end of your turn, whenever you hit the cursed creature with a weapon for which you have an active crimson rite, you roll an additional hemocraft die when determining the extra damage from the rite.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}><strong>Amplify.</strong> The next attack roll you make against the target before the end of your turn has advantage.</span>
            <br/>
            <br/>
            <strong>Blood Curse of the Muddled Mind.</strong>
            <br/>
            <span>As a bonus action, you curse a creature that you can see within 30 feet of you that is concentrating on a spell or using a feature that requires concentration. That creature has disadvantage on the next Constitution saving throw it makes to maintain concentration before the end of your next turn.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}><strong>Amplify.</strong> The cursed creature has disadvantage on all Constitution saving throws made to maintain concentration until the end of your next turn.</span>
            <br/>
            <br/>
            <span><strong>Blood Curse of the Soul Eater.</strong> <i>Prerequisite: 18th level, Order of the Profane Soul.</i></span>
            <br/>
            <span>When a creature that isn't a construct or undead is reduced to 0 hit points within 30 feet of you, you can use your reaction to offer their life energy to your patron in exchange for power. Until the end of your next turn, you make attacks with advantage and you have resistance to all damage.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}><strong>Amplify.</strong> Additionally, you regain an expended warlock spell slot. Once you've amplified this blood curse, you must finish a long rest before you can amplify it again.</span>
        </>,
        shortDescription:"As a blood hunter, you have access to a range of blood curses that can tax the resilience of any foe.",
    },


    
    //______________________________________________________________________________________
    // ===== Blood Hunter () =====



    //______________________________________________________________________________________
    // ===== Cleric =====
    divineDomain:{
        id: "divineDomain",
        display: "Divine Domain (Cleric Subclass)",
        description: "Choose one domain related to your deity. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.",
        level: 1,
    },
    domainSpells:{
        id: "domainSpells",
        display: "Domain Spells",
        description: "Each domain has a list of spells — its domain spells — that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.",
        level: 1,
    },
    channelDivinity:{
        id: "channelDivinity",
        display: "Channel Divinity",
        description: <>
            <span style={{ marginLeft:"2rem" }}>At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.</span>
        </>,
        level: 2,
        gainAnotherAt: [ 6, 18 ]
    },
    cdTurnUndead:{
        id: "cdTurnUndead",
        display: "Channel Divinity: Turn Undead",
        description: <>
            <span style={{ marginLeft:"2rem" }}>As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.</span>
        </>,
        level: 2,
    },
    destroyUndead:{
        id: "destroyUndead",
        display: "Destroy Undead",
        description: "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold: 5th level Destroys Undead of CR 1/2 or lower, 8th level Destroys Undead of CR 1 or lower, 11th level Destroys Undead of CR 2 or lower, 14th level Destroys Undead of CR 3 or lower, 17th level Destroys Undead of CR 4 or lower",
        level: 5,
        gainAnotherAt: [
            { level:5, display:"(CR 1/2)" },
            { level:8, display:"(CR 1)" },
            { level:11, display:"(CR 2)" },
            { level:14, display:"(CR 3)" },
            { level:17, display:"(CR 4)" },
        ]
    },
    divineIntervention:{
        id: "divineIntervention",
        display: "Divine Intervention",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>At 20th level, your call for intervention succeeds automatically, no roll required.</span>
        </>,
        level: 10,
        gainAnotherAt: [
            { level:20, display:"(succeeds automatically)" },
        ]
    },



    //______________________________________________________________________________________
    // ===== Cleric (Life Domain) =====
    bonusProficiency_C_LD:{
        id: "bonusProficiency_C_LD",
        display: "Bonus Proficiency",
        description: "When you choose this domain at 1st level, you gain proficiency with heavy armor.",
        level: 1,
    },
    discipleOfLife:{
        id: "discipleOfLife",
        display: "Disciple of Life",
        description: "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.",
        level: 1,
    },
    cdPreserveLife:{
        id: "cdPreserveLife",
        display: "Channel Divinity: Preserve Life",
        description: "Starting at 2nd level, you can use your Channel Divinity to heal the badly injured. As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.",
        level: 2,
    },
    blessedHealer:{
        id: "blessedHealer",
        display: "Blessed Healer",
        description: "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.",
        level: 6,
    },
    divineStrike:{
        id: "divineStrike",
        display: "Divine Strike",
        description: "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
        level: 8,
        gainAnotherAt: [
            { level:8, display:"(1d8)" },
            { level:14, display:"(2d8)" },
        ]
    },
    supremeHealing:{
        id: "supremeHealing",
        display: "Supreme Healing",
        description: "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.",
        level: 17,
    },



    //______________________________________________________________________________________
    // ===== Cleric () =====



    //______________________________________________________________________________________
    // ===== Druid =====
    druidic:{
        id: "druidic",
        display: "Druidic",
        description: "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.",
    },
    wildShape:{
        id: "wildShape",
        display: "Wild Shape",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest. Your druid level determines the beasts you can transform into: 2nd level max of CR 1/4 (No flying or swimming speed), 4th level max of CR 1/2 (No flying speed), 8th level max of CR 1</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.</span>
            <br/>
            <span>While you are transformed, the following rules apply:</span>
            <ul>
                <li>Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.</li>
                <li>When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.</li>
                <li>You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.</li>
                <li>You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.</li>
                <li>You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form.</li>
            </ul>
        </>,
        shortDescription:"Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest. Your druid level determines the beasts you can transform into: 2nd level max of CR 1/4 (No flying or swimming speed), 4th level max of CR 1/2 (No flying speed), 8th level max of CR 1",
        level: 2,
        gainAnotherAt: [
            { level:2, display:"(CR 1/4, No flying or swimming)" },
            { level:4, display:"(CR 1/4, No flying)" },
            { level:8, display:"(CR 1)" },
        ]
    },
    druidCircle:{
        id: "druidCircle",
        display: "Druid Circle (Druid Subclass)",
        description: "At 2nd level, you choose to identify with a circle of druids: the Circle of the Land detailed at the end of the class description or one from the Player's Handbook or other sources. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.",
        level: 2,
    },
    timelessBody:{
        id: "timelessBody",
        display: "Timeless Body",
        description: "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.",
        level: 18,
    },
    beastSpells:{
        id: "beastSpells",
        display: "Beast Spells",
        description: "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components.",
        level: 18,
    },
    archdruid:{
        id: "archdruid",
        display: "Archdruid",
        description: "At 20th level, you can use your Wild Shape an unlimited number of times. Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.",
        level: 20,
    },


    
    //______________________________________________________________________________________
    // ===== Druid (Circle of the Land) =====
    bonusCantrip_D_CotL:{
        id: "bonusCantrip_D_CotL",
        display: "Bonus Cantrip",
        description: "When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice. This cantrip doesn't count against the number of druid cantrips you know.",
        level: 2,
    },
    naturalRecovery:{
        id: "naturalRecovery",
        display: "Natural Recovery",
        description: "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest. For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots.",
        level: 2,
    },
    circleSpells:{
        id: "circleSpells",
        display: "Circle Spells",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land — arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark — and consult the associated list of spells.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.</span>
        </>,
        tables:[
            {
                id:"arctic", display:"Arctic", dataStructure: druidCircleOfTheLandDataStructure,
                data:[
                    { level:3, spells:"hold person, spike growth" },
                    { level:5, spells:"sleet storm, slow" },
                    { level:7, spells:"freedom of movement, ice storm" },
                    { level:9, spells:"commune with nature, cone of cold " },
                ]
            },
            {
                id:"coast", display:"Coast", dataStructure: druidCircleOfTheLandDataStructure,
                data:[
                    { level:3, spells:"mirror image, misty step" },
                    { level:5, spells:"water breathing, water walk" },
                    { level:7, spells:"control water, freedom of movement" },
                    { level:9, spells:"conjure elemental, scrying" },
                ]
            },
            {
                id:"desert", display:"Desert", dataStructure: druidCircleOfTheLandDataStructure,
                data:[
                    { level:3, spells:"blur, silence" },
                    { level:5, spells:"create food and water, protection from energy" },
                    { level:7, spells:"blight, hallucinatory terrain" },
                    { level:9, spells:"insect plague, wall of stone" },
                ]
            },
            {
                id:"forest", display:"Forest", dataStructure: druidCircleOfTheLandDataStructure,
                data:[
                    { level:3, spells:"barkskin, spider climb" },
                    { level:5, spells:"call lightning, plant growth" },
                    { level:7, spells:"divination, freedom of movement" },
                    { level:9, spells:"commune with nature, tree stride" },
                ]
            },
            {
                id:"grassland", display:"Grassland", dataStructure: druidCircleOfTheLandDataStructure,
                data:[
                    { level:3, spells:"invisibility, pass without trace" },
                    { level:5, spells:"daylight, haste" },
                    { level:7, spells:"divination, freedom of movement" },
                    { level:9, spells:"dream, insect plague" },
                ]
            },
            {
                id:"mountain", display:"Mountain", dataStructure: druidCircleOfTheLandDataStructure,
                data:[
                    { level:3, spells:"spider climb, spike growth" },
                    { level:5, spells:"lightning bolt, meld into stone" },
                    { level:7, spells:"stone shape, stoneskin" },
                    { level:9, spells:"passwall, wall of stone" },
                ]
            },
            {
                id:"swamp", display:"Swamp", dataStructure: druidCircleOfTheLandDataStructure,
                data:[
                    { level:3, spells:"darkness, acid arrow" },
                    { level:5, spells:"water walk, stinking cloud" },
                    { level:7, spells:"freedom of movement, locate creature" },
                    { level:9, spells:"insect plague, scrying" },
                ]
            },
            {
                id:"underdark", display:"Underdark", dataStructure: druidCircleOfTheLandDataStructure,
                data:[
                    { level:3, spells:"spider climb, web" },
                    { level:5, spells:"gaseous form, stinking cloud" },
                    { level:7, spells:"greater invisibility, stone shape" },
                    { level:9, spells:"cloudkill, insect plague" },
                ]
            },
        ],
        level: 3,
    },
    landsStride:{
        id: "landsStride",
        display: "Land's Stride",
        description: "Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.",
        level: 6,
    },
    naturesWard:{
        id: "naturesWard",
        display: "Nature's Ward",
        description: "When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.",
        level: 10,
    },
    naturesSanctuary:{
        id: "naturesSanctuary",
        display: "Nature's Sanctuary",
        description: "When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours. The creature is aware of this effect before it makes its attack against you.",
        level: 14,
    },


    
    //______________________________________________________________________________________
    // ===== Druid () =====
    


    //______________________________________________________________________________________
    // ===== Fighter =====
    fightingStyle:{
        id: "fightingStyle",
        display: "Fighting Style",
        description: fighterFightingStyles,
        shortDescription: "You adopt a particular style of fighting as your specialty. You can't take a Fighting Style option more than once, even if you later get to choose again.",
        level: 1,
    },
    secondWind:{
        id: "secondWind",
        display: "Second Wind",
        description: "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.",
        level: 1,
    },
    actionSurge:{
        id: "actionSurge",
        display: "Action Surge",
        description: "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action. Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.",
        level: 2,
        gainAnotherAt: [ 17 ]
    },
    martialArchetype:{
        id: "martialArchetype",
        display: "Martial Archetype (Fighter Subclass)",
        description: "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.",
        level: 3,
    },
    abilityScoreImprovement_f:{
        id: "abilityScoreImprovement_f",
        display: "Ability Score Improvement",
        description: "When you reach 4th level, and again at 6th, 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        level: 4,
        gainAnotherAt: [ 6, 8, 12, 16, 19 ]
    },
    extraAttack_f:{
        id: "extraAttack_f",
        display: "Extra Attack",
        description: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.",
        level: 5,
        gainAnotherAt: [ 11, 20 ]
    },
    indomitable:{
        id: "indomitable",
        display: "Indomitable",
        description: "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.",
        level: 9,
        gainAnotherAt: [ 13, 17 ]
    },


    
    //______________________________________________________________________________________
    // ===== Fighter (Champion) =====
    improvedCritical:{
        id: "improvedCritical",
        display: "Improved Critical",
        description: "Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.",
        level: 3,
    },
    remarkableAthlete:{
        id: "remarkableAthlete",
        display: "Remarkable Athlete",
        description: "Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.",
        level: 7,
    },
    additionalFightingStyle:{
        id: "additionalFightingStyle",
        display: "Additional Fighting Style",
        description: fighterFightingStyles,
        shortDescription: "At 10th level, you can choose a second option from the Fighting Style class feature.",
        level: 10,
    },
    superiorCritical:{
        id: "superiorCritical",
        display: "Superior Critical",
        description: "Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.",
        level: 15,
    },
    survivor:{
        id: "survivor",
        display: "Survivor",
        description: "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.",
        level: 18,
    },


    
    //______________________________________________________________________________________
    // ===== Fighter (Gunslinger) =====
    firearmProficiency:{
        id: "firearmProficiency",
        display: "Firearm Proficiency",
        description: "Starting when you choose this archetype at 3rd level, you gain proficiency with firearms, allowing you to add your proficiency bonus to attacks made with firearms.",
        level: 3,
    },
    gunsmith:{
        id: "gunsmith",
        display: "Gunsmith",
        description: <>
            <span>Upon choosing this archetype at 3rd level, you gain proficiency with Tinker's Tools. You may use them to craft ammunition at half the cost, repair damaged firearms, or even draft and create new ones (DM's discretion). Some extremely experimental and intricate firearms are only available through crafting.</span>
            <br/>
            <ul>
                <li>
                    <strong>Firearm Properties.</strong> Firearms are a new and volatile technology, and as such bring their own unique set of weapon properties. Some properties are followed by a number, and this number signifies an element of that property (outlined below). These properties replace the optional ones presented in the Dungeon Master's Guide. Firearms are ranged weapons
                    <ul>
                        <li><strong>Reload.</strong> The weapon can be fired a number of times equal to its Reload score before you must spend 1 attack or 1 action to reload. You must have one free hand to reload a firearm.</li>
                        <li><strong>Misfire.</strong> Whenever you make an attack roll with a firearm, and the dice roll is equal to or lower than the weapon's Misfire score, the weapon misfires. The attack misses, and the weapon cannot be used again until you spend an action to try and repair it. To repair your firearm, you must make a successful Tinker's Tools check (DC equal to 8 + misfire score). If your check fails, the weapon is broken and must be mended out of combat at a quarter of the cost of the firearm. Creatures who use a firearm without being proficient increase the weapon's misfire score by 1.</li>
                        <li><strong>Explosive.</strong> Upon a hit, everything within 5 ft of the target must make a Dexterity saving throw (DC equal to 8 + your proficiency bonus + your Dexterity modifier) or suffer 1d8 fire damage. If the weapon misses, the ammunition fails to detonate, or bounces away harmlessly before doing so.</li>
                    </ul>
                </li>
                <li><strong>Ammunition.</strong> All firearms require ammunition to make an attack, and due to their rare nature, ammunition may be near impossible to find or purchase. However, if materials are gathered, you can craft ammunition yourself using your Tinker's Tools at half the cost. Each firearm uses its own unique ammunition and is generally sold or crafted in batches listed below next to the price.</li>
            </ul>
        </>,
        shortDescription: "Upon choosing this archetype at 3rd level, you gain proficiency with Tinker's Tools. You may use them to craft ammunition at half the cost, repair damaged firearms, or even draft and create new ones (DM's discretion). Some extremely experimental and intricate firearms are only available through crafting.",
        level: 3,
    },
    adeptMarksman:{
        id: "adeptMarksman",
        display: "Adept Marksman",
        description: <>
            <span>When you choose this archetype at 3rd level, you learn to perform powerful trick shots to disable or damage your opponents using your firearms.</span>
            <br/>
            <ul>
                <li><strong>Trick Shots.</strong> You learn two trick shots of your choice, which are detailed under “Trick Shots” below. Many maneuvers enhance an attack in some way. Each use of a trick shot must be declared before the attack roll is made. You can use only one trick shot per attack. You learn an additional trick shot of your choice at 7th, 10th, 15th, and 18th level. Each time you learn a new trick shot, you can also replace one trick shot you know with a different one.</li>
                <li><strong>Grit.</strong> You gain a number of grit points equal to your Wisdom modifier (minimum of 1). You regain 1 expended grit point each time you roll a 20 on the d20 roll for an attack with a firearm, or deal a killing blow with a firearm to a creature of significant threat (DM's discretion). You regain all expended grit points after a short or long rest.</li>
                <li>
                    <strong>Saving Throws.</strong> Some of your trick shots require your targets to make a saving throw to resist the trick shot's effects. The saving throw DC is calculated as follows:
                    <ul><li>Trick Shot save DC = 8 + your proficiency bonus + your Dexterity modifier</li></ul>
                </li>
            </ul>
        </>,
        shortDescription: "When you choose this archetype at 3rd level, you learn to perform powerful trick shots to disable or damage your opponents using your firearms.",
        level: 3,
    },
    quickdraw:{
        id: "quickdraw",
        display: "Quickdraw",
        description: "When you reach 7th level, you add your proficiency bonus to your initiative. You can also stow a firearm, then draw another firearm as a single object interaction on your turn.",
        level: 7,
    },
    rapidRepair:{
        id: "rapidRepair",
        display: "Rapid Repair",
        description: "Upon reaching 10th level, you learn how to quickly attempt to fix a jammed gun. You can spend a grit point to attempt to repair a misfired (but not broken) firearm as a bonus action.",
        level: 10,
    },
    lightningReload:{
        id: "lightningReload",
        display: "Lightning Reload",
        description: "Starting at 15th level, you can reload any firearm as a bonus action.",
        level: 15,
    },
    viciousIntent:{
        id: "viciousIntent",
        display: "Vicious Intent",
        description: "At 18th level, your firearm attacks score a critical hit on a roll of 19-20, and you regain a grit point on a roll of 19 or 20 on a d20 attack roll.",
        level: 18,
    },
    hemorrhagingCritical:{
        id: "hemorrhagingCritical",
        display: "Hemorrhaging Critical",
        description: "Upon reaching 18th level, whenever you score a critical hit on an attack with a firearm, the target additionally suffers half of the damage from the attack at the end of its next turn.",
        level: 18,
    },
    trickShots:{
        id: "trickShots",
        display: "Trick Shots",
        description: <>
            <span>These trick shots are presented in alphabetical order.</span>
            <br/>
            <ul>
                <li><strong>Bullying Shot.</strong> You can use the powerful blast and thundering sound of your firearm to shake the resolve of a creature. You can expend one grit point while making a Charisma (Intimidation) check to gain advantage on the roll.</li>
                <li><strong>Dazing Shot.</strong> When you make a firearm attack against a creature, you can expend one grit point to attempt to dizzy your opponent. On a hit, the creature suffers normal damage and must make a Constitution saving throw or suffer disadvantage on attacks until the end of their next turn.</li>
                <li><strong>Deadeye Shot.</strong> When you make a firearm attack against a creature, you can expend one grit point to gain advantage on the attack roll.</li>
                <li><strong>Disarming Shot.</strong> When you make a firearm attack against a creature, you can expend one grit point to attempt to shoot an object from their hands. On a hit, the creature suffers normal damage and must succeed on a Strength saving throw or drop 1 held object of your choice and have that object be pushed 10 feet away from you.</li>
                <li><strong>Forceful Shot.</strong> When you make a firearm attack against a creature, you can expend one grit point to attempt to trip them up and force them back. On a hit, the creature suffers normal damage and must succeed on a Strength saving throw or be pushed 15 feet away from you.</li>
                <li><strong>Piercing Shot.</strong> When you make a firearm attack against a creature, you can expend one grit point to attempt to fire through multiple opponents. The initial attack gains a +1 to the firearm's misfire score. On a hit, the creature suffers normal damage and you make an attack roll with disadvantage against every creature in a line directly behind the target within your first range increment. Only the initial attack can misfire.</li>
                <li><strong>Violent Shot.</strong> When you make a firearm attack against a creature, you can expend one or more grit points to enhance the volatility of the attack. For each grit point expended, the attack gains a +2 to the firearm's misfire score. If the attack hits, you can roll one additional weapon damage die per grit point spent when determining the damage.</li>
                <li><strong>Winging Shot.</strong> When you make a firearm attack against a creature, you can expend one grit point to attempt to topple a moving target. On a hit, the creature suffers normal damage and must make a Strength saving throw or be knocked prone.</li>
            </ul>
        </>,
    },



    //______________________________________________________________________________________
    // ===== Monk =====
    unarmoredDefense_m:{
        id: "unarmoredDefense_m",
        display: "Unarmored Defense",
        description: "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.",
        level:1,
    },
    martialArts:{
        id: "martialArts",
        display: "Martial Arts",
        description: <>
            <span>At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.</span>
            <br/>
            <span>You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:</span>
            <ul>
                <li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.</li>
                <li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.</li>
                <li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.</li>
            </ul>
            <br/>
            <span>Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in the Weapons section.</span>
        </>,
        shortDescription: "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.",
        level:1,
    },
    ki:{
        id: "ki",
        display: "Ki",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Ki save DC = 8 + your proficiency bonus + your Wisdom modifier</span>
        </>,
        shortDescription:"Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table. Ki save DC = 8 + your proficiency bonus + your Wisdom modifier",
        level:2,
    },
    flurryOfBlows:{
        id: "flurryOfBlows",
        display: "Flurry of Blows",
        description: "Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.",
        level:2,
    },
    patientDefense:{
        id: "patientDefense",
        display: "Patient Defense",
        description: "You can spend 1 ki point to take the Dodge action as a bonus action on your turn.",
        level:2,
    },
    stepOfTheWind:{
        id: "stepOfTheWind",
        display: "Step of the Wind",
        description: "You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.",
        level:2,
    },
    unarmoredMovement:{
        id: "unarmoredMovement",
        display: "Unarmored Movement",
        description: "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table. Increase by 5 feet at level 6, 10, 14, and 18. At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.",
        level:2,
        gainAnotherAt:[
            { level:2, display:"+10 ft." },
            { level:6, display:"+15 ft." },
            { level:10, display:"+20 ft." },
            { level:14, display:"+25 ft." },
            { level:18, display:"+30 ft." },
        ]
    },
    monasticTradition:{
        id: "monasticTradition",
        display: "Monastic Tradition (Monk Subclass)",
        description: "When you reach 3rd level, you commit yourself to a monastic tradition. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.",
        level:3,
    },
    deflectMissiles:{
        id: "deflectMissiles",
        display: "Deflect Missiles",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet.</span>
        </>,
        level:3,
    },
    slowFall:{
        id: "slowFall",
        display: "Slow Fall",
        description: "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.",
        level:4,
    },
    stunningStrike:{
        id: "stunningStrike",
        display: "Stunning Strike",
        description: "Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.",
        level:5,
    },
    kiEmpoweredStrikes:{
        id: "kiEmpoweredStrikes",
        display: "Ki-Empowered Strikes",
        description: "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
        level:6,
    },
    evasion:{
        id: "evasion",
        display: "Evasion",
        description: "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
        level:7,
    },
    stillnessOfMind:{
        id: "stillnessOfMind",
        display: "Stillness of Mind",
        description: "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.",
        level:7,
    },
    purityOfBody:{
        id: "purityOfBody",
        display: "Purity of Body",
        description: "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.",
        level:10,
    },
    tongueOfTheSunAndMoon:{
        id: "tongueOfTheSunAndMoon",
        display: "Tongue of the Sun and Moon",
        description: "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.",
        level:13,
    },
    diamondSoul:{
        id: "diamondSoul",
        display: "Diamond Soul",
        description: "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws. Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.",
        level:14,
    },
    timelessBody_m:{
        id: "timelessBody_m",
        display: "Timeless Body",
        description: "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water.",
        level:15,
    },
    emptyBody:{
        id: "emptyBody",
        display: "Empty Body",
        description: "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage. Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you.",
        level:18,
    },
    perfectSelf:{
        id: "perfectSelf",
        display: "Perfect Self",
        description: "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.",
        level:20,
    },


    
    //______________________________________________________________________________________
    // ===== Monk (Way of the Open Hand) =====
    openHandTechnique:{
        id: "openHandTechnique",
        display: "Open Hand Technique",
        description: <>
            <span>Starting when you choose this tradition at 3rd level, you can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:</span>
            <ul>
                <li>It must succeed on a Dexterity saving throw or be knocked prone.</li>
                <li>It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.</li>
                <li>It can't take reactions until the end of your next turn.</li>
            </ul>
        </>,
        level:3,
    },
    wholenessOfBody:{
        id: "wholenessOfBody",
        display: "Wholeness of Body",
        description: "At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.",
        level:6,
    },
    tranquility:{
        id: "tranquility",
        display: "Tranquility",
        description: "Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.",
        level:11,
    },
    quiveringPalm:{
        id: "quiveringPalm",
        display: "Quivering Palm",
        description: "At 17th level, you gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage. You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.",
        level:17,
    },


    
    //______________________________________________________________________________________
    // ===== Monk (Way of the Cobalt Soul) =====
    extractAspects:{
        id: "extractAspects",
        display: "Extract Aspects",
        description: "Starting at 3rd level, you can strike pressure points to intuit crucial information about a foe. When you hit a creature with one of the attacks granted by your Flurry of Blows, you can analyze it. Whenever an analyzed creature misses you with an attack, you can immediately use your reaction to make an unarmed strike against that creature if it's within your reach. This benefit lasts until you finish a short or long rest. Additionally, when you analyze a creature, you learn all of its damage vulnerabilities, damage resistances, damage immunities, and condition immunities.",
        level:3,
    },
    extortTruth:{
        id: "extortTruth",
        display: "Extort Truth",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Starting at 6th level, you can precisely strike a hidden cluster of nerves on a creature, temporarily preventing it from masking its true thoughts and intent. When you hit a creature with an unarmed strike, you can spend 1 ki point to force it to make a Charisma saving throw. On a failed save, the creature is unable to speak a deliberate lie, and all Charisma checks directed at the creature are made with advantage for up to 10 minutes. You know if it succeeded or failed on its saving throw.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>An affected creature is aware of the effect and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive in its answers as long as the effect lasts.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>If you wish to impose this effect on a creature without injuring it, you can attack the creature to simply touch it, dealing no damage on a hit.</span>
        </>,
        level:6,
    },
    mysticalErudition:{
        id: "mysticalErudition",
        display: "Mystical Erudition",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Also by 6th level, you have extensively studied the history and lore within the archives of the Cobalt Soul. You learn one language of your choice, and you gain proficiency with one of the following skills of your choice: Arcana, History, Investigation, Nature, or Religion. If you already have proficiency in one of the listed skills, you can instead choose to double your proficiency bonus for any ability check you make that uses the chosen proficiency.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>You gain an additional language and an additional skill proficiency from the above list (or you can double the bonus of an existing proficiency from the list) at 11th and 17th level.</span>
        </>,
        level:6,
        gainAnotherAt: [ 11, 17 ]
    },
    mindOfMercury:{
        id: "mindOfMercury",
        display: "Mind of Mercury",
        description: "Starting at 11th level, you've honed your awareness and reflexes through mental aptitude and pattern recognition. Once per turn, if you've already taken your reaction, you may spend 1 ki point to take an additional reaction. You can use only one reaction per triggering effect.",
        level:11,
    },
    debilitatingBarrage:{
        id: "debilitatingBarrage",
        display: "Debilitating Barrage",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Upon reaching 17th level, you've gained the knowledge to manipulate a creature's ki to undermine their fortitude. When you hit a creature with an unarmed strike, you can spend 3 ki points to cause the creature to gain vulnerability to one damage type of your choice for 1 minute, or until the end of a turn in which it has taken damage of that type.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>If a creature has resistance to the damage type you choose, this resistance is suppressed for 1 minute, rather than gaining vulnerability. A creature that is immune to the damage type you choose is unaffected. A creature who is affected by this feature cannot be affected by it again for 24 hours.</span>
        </>,
        level:17,
    },


    
    //______________________________________________________________________________________
    // =====  () =====



    //______________________________________________________________________________________
    // ===== Paladin =====
    divineSense:{
        id: "divineSense",
        display: "Divine Sense",
        description: "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.",
    },
    layOnHands:{
        id: "layOnHands",
        display: "Lay on Hands",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.</span>
            <br/>
            <span>This feature has no effect on undead and constructs.</span>
        </>,
    },
    fightingStyle_P:{
        id: "fightingStyle_P",
        display: "Fighting Style",
        description: paladinFightingStyles,
        shortDescription:"At 2nd level, you adopt a style of fighting as your specialty.",
        level:2,
    },
    divineSmite:{
        id: "divineSmite",
        display: "Divine Smite",
        description: "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.",
        level:2,
    },
    divineHealth:{
        id: "divineHealth",
        display: "Divine Health",
        description: "By 3rd level, the divine magic flowing through you makes you immune to disease.",
        level:3,
    },
    sacredOath:{
        id: "sacredOath",
        display: "Sacred Oath (Paladin Subclass)",
        description: "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion detailed at the end of the class description or one from another source.",
        level:3,
    },
    oathSpells:{
        id: "oathSpells",
        display: "Oath Spells",
        description: "Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day. If you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you.",
        level:3,
    },
    channelDivinity_P:{
        id: "channelDivinity_P",
        display: "Channel Divinity",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC.</span>
        </>,
        level:3,
    },
    auraOfProtection:{
        id: "auraOfProtection",
        display: "Aura of Protection",
        description: "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus. At 18th level, the range of this aura increases to 30 feet.",
        level:6,
        gainAnotherAt:[
            { level:6, display:" (10ft)" },
            { level:18, display:" (30ft)" },
        ]
    },
    auraOfCourage:{
        id: "auraOfCourage",
        display: "Aura of Courage",
        description: "Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious. At 18th level, the range of this aura increases to 30 feet.",
        level:10,
        gainAnotherAt:[
            { level:10, display:" (10ft)" },
            { level:18, display:" (30ft)" },
        ]
    },
    improvedDivineSmite:{
        id: "improvedDivineSmite",
        display: "Improved Divine Smite",
        description: "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.",
        level:11,
    },
    cleansingTouch:{
        id: "cleansingTouch",
        display: "Cleansing Touch",
        description: "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.",
        level:14,
    },


    
    //______________________________________________________________________________________
    // ===== Paladin (Oath of Devotion) =====
    cdSacredWeapon:{
        id: "cdSacredWeapon",
        display: "Sacred Weapon",
        description: <>
            <span style={{ marginLeft:"2rem" }}>As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.</span>
        </>,
        level:3,
    },
    cdTurnTheUnholy:{
        id: "cdTurnTheUnholy",
        display: "Turn the Unholy",
        description: <>
            <span style={{ marginLeft:"2rem" }}>As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.</span>
        </>,
        level:3,
    },
    auraOfDevotion:{
        id: "auraOfDevotion",
        display: "Aura of Devotion",
        description: "Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious. At 18th level, the range of this aura increases to 30 feet.",
        level:7,
        gainAnotherAt:[
            { level:7, display:" (10ft)" },
            { level:18, display:" (30ft)" },
        ]
    },
    purityOfSpirit:{
        id: "purityOfSpirit",
        display: "Purity of Spirit",
        description: "Beginning at 15th level, you are always under the effects of a protection from evil and good spell.",
        level:15,
    },
    holyNimbus:{
        id: "holyNimbus",
        display: "Holy Nimbus",
        description: <>
            <span style={{ marginLeft:"2rem" }}>At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Once you use this feature, you can't use it again until you finish a long rest.</span>
        </>,
        level:20,
    },


    
    //______________________________________________________________________________________
    // ===== Paladin (Oath of the Open Sea) =====
    cdMarineLayer:{
        id: "cdMarineLayer",
        display: "Marine Layer",
        description: "As an action, you channel the sea to create a thick cloud of fog that surrounds you for 20 feet in all directions. The fog moves with you, remaining centered on you and making its area heavily obscured. You and each creature within 5 feet of you instead treat the area as lightly obscured. This fog lasts for 10 minutes, spreads around corners, and cannot be dispersed unless you choose to end this effect (no action required).",
        level:3,
    },
    cdFuryOfTheTides:{
        id: "cdFuryOfTheTides",
        display: "Fury of the Tides",
        description: "As a bonus action, you channel the powerful might of the waves to bolster your attacks for 1 minute. Once per turn for the duration, when you hit a creature with a weapon attack, you can choose to push the target 10 feet away from you. If pushed into an obstacle or another creature, the target takes bludgeoning damage equal to your Charisma modifier.",
        level:3,
    },
    auraOfLiberation:{
        id: "auraOfLiberation",
        display: "Aura of Liberation",
        description: "Starting at 7th level, you fill nearby creatures with the energy of movement. While you're not incapacitated, you and creatures of your choice within 10 feet of you cannot be grappled or restrained, and ignore penalties on movement and attacks while underwater. Creatures that are already grappled or restrained when they enter the aura can spend 5 feet of movement to automatically escape unless they are bound by magic restraints. When you reach 18th level in this class, the aura affects creatures within 30 feet of you.",
        level:7,
        gainAnotherAt:[
            { level:7, display:" (10ft)" },
            { level:18, display:" (30ft)" },
        ]
    },
    stormyWaters:{
        id: "stormyWaters",
        display: "Stormy Waters",
        description: "At 15th level, you can call on the force of crashing waters as a reaction whenever a creature moves into or out of your reach. The creature takes 1d12 bludgeoning damage and must succeed on a Strength saving throw against your spell save DC or be knocked prone.",
        level:15,
    },
    mythicSwashbuckler:{
        id: "mythicSwashbuckler",
        display: "Mythic Swashbuckler",
        description: <>
            <span style={{ marginLeft:"2rem" }}>At 20th level, you learn to channel the spirits of historic sea captains to briefly become a paragon of heroic adventure. As an action, you embrace these spirits of the sea to gain the following benefits for 1 minute:</span>
            <ul>
                <li>You have advantage on Strength (Athletics) checks and you gain a climbing speed equal to your walking speed. If you already have a climbing speed, it is doubled.</li>
                <li>If you are within 5 feet of a creature and no other creatures are within 5 feet of you, you have advantage on attack rolls against that creature.</li>
                <li>You can take the Dash or Disengage action as a bonus action.</li>
                <li>You have advantage on Dexterity checks and Dexterity saving throws against effects you can see.</li>
            </ul>
        </>,
        level:20,
    },



    //______________________________________________________________________________________
    // ===== Ranger =====
    favoredEnemy:{
        id: "favoredEnemy",
        display: "Favored Enemy",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them. When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.</span>
        </>,
        shortDescription:"You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
        level:1,
        gainAnotherAt: [ 6, 14 ]
    },
    naturalExplorer:{
        id: "naturalExplorer",
        display: "Natural Explorer",
        description: <>
            <span style={{ marginLeft:"2rem" }}>You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.</span>
            <br/><br/>
            <span>While traveling for an hour or more in your favored terrain, you gain the following benefits:</span>
            <ul>
                <li>Difficult terrain doesn't slow your group's travel.</li>
                <li>Your group can't become lost except by magical means.</li>
                <li>Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.</li>
                <li>If you are traveling alone, you can move stealthily at a normal pace.</li>
                <li>When you forage, you find twice as much food as you normally would.</li>
                <li>While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.</li>
            </ul>
            <span>You choose additional favored terrain types at 6th and 10th level.</span>
        </>,
        shortDescription: "While traveling for an hour or more in your favored terrain, you gain the following benefits: Difficult terrain doesn't slow your group's travel, Your group can't become lost except by magical means, Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger, If you are traveling alone, you can move stealthily at a normal pace, When you forage, you find twice as much food as you normally would, and finally While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
        level:1,
        gainAnotherAt: [ 6, 14 ]
    },
    fightingStyle_R:{
        id: "fightingStyle_R",
        display: "Fighting Style",
        description: rangerFightingStyles,
        shortDescription: "At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. ",
        level: 2,
    },
    rangerArchetype:{
        id: "rangerArchetype",
        display: "Ranger Archetype (Ranger Subclass)",
        description: "At 3rd level, you choose an archetype that you strive to emulate: the Hunter that is detailed at the end of the class description or one from another source. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.",
        level:3,
    },
    primevalAwareness:{
        id: "primevalAwareness",
        display: "Primeval Awareness",
        description: "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number.",
        level:3,
    },
    landsStride_R:{
        id: "landsStride_R",
        display: "Land's Stride",
        description: "Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.",
        level:8,
    },
    hideInPlainSight:{
        id: "hideInPlainSight",
        display: "Hide in Plain Sight",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.</span>
        </>,
        level:10,
    },
    vanish:{
        id: "vanish",
        display: "Vanish",
        description: "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.",
        level:14,
    },
    feralSenses:{
        id: "feralSenses",
        display: "Feral Senses",
        description: "At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened.",
        level:18,
    },
    foeSlayer:{
        id: "foeSlayer",
        display: "Foe Slayer",
        description: "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.",
        level:20,
    },


    
    //______________________________________________________________________________________
    // ===== Ranger (Hunter) =====
    huntersPrey:{
        id: "huntersPrey",
        display: "Hunter's Prey",
        description: <>
            <span>At 3rd level, you gain one of the following features of your choice.</span>
            <ul>
                <li><strong>Colossus Slayer.</strong> Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum. You can deal this extra damage only once per turn.</li>
                <li><strong>Giant Killer.</strong> When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.</li>
                <li><strong>Horde Breaker.</strong> Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.</li>
            </ul>
        </>,
        shortDescription: "At 3rd level, you gain one of the following features of your choice: Colossus Slayer, Giant Killer, or Horde Breaker.",
        level:3,
    },
    defensiveTactics:{
        id: "defensiveTactics",
        display: "Defensive Tactics",
        description: <>
            <span>At 7th level, you gain one of the following features of your choice.</span>
            <ul>
                <li><strong>Escape the Horde.</strong> Opportunity attacks against you are made with disadvantage.</li>
                <li><strong>Multiattack Defense.</strong> When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.</li>
                <li><strong>Steel Will.</strong> You have advantage on saving throws against being frightened.</li>
            </ul>
        </>,
        shortDescription: "At 7th level, you gain one of the following features of your choice: Escape the Horde, Multiattack Defense, or Steel Will.",
        level:7,
    },
    multiattack:{
        id: "multiattack",
        display: "Multiattack",
        description: <>
            <span>At 11th level, you gain one of the following features of your choice.</span>
            <ul>
                <li><strong>Volley.</strong> You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target.</li>
                <li><strong>Whirlwind Attack.</strong> You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target.</li>
            </ul>
        </>,
        shortDescription: "At 11th level, you gain one of the following features of your choice: Volley or Whirlwind Attack",
        level:11,
    },
    superiorHuntersDefense:{
        id: "superiorHuntersDefense",
        display: "Superior Hunter's Defense",
        description: <>
            <span>At 15th level, you gain one of the following features of your choice.</span>
            <ul>
                <li><strong>Evasion.</strong> When you are subjected to an effect, such as a red dragon's fiery breath or a lightning bolt spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.</li>
                <li><strong>Stand Against the Tide.</strong> When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.</li>
                <li><strong>Uncanny Dodge.</strong> When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.</li>
            </ul>
        </>,
        shortDescription: "At 15th level, you gain one of the following features of your choice: Evasion, Stand Against the Tide, or Uncanny Dodge.",
        level:15,
    },


    
    //______________________________________________________________________________________
    // ===== Ranger () =====



    //______________________________________________________________________________________
    // ===== Rogue =====
    expertise_Ro:{
        id: "expertise_R",
        display: "Expertise",
        description: <>
            <span style={{ marginLeft:"2rem" }}>At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit.</span>
        </>,
        level:1,
        gainAnotherAt: [ 6 ]
    },
    sneakAttack:{
        id: "sneakAttack",
        display: "Sneak Attack",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.</span>
        </>,
        level:1,
    },
    thievesCant:{
        id: "thievesCant",
        display: "Thieves' Cant",
        description: <>
            <span style={{ marginLeft:"2rem" }}>During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.</span>
        </>,
        level:1,
    },
    cunningAction:{
        id: "cunningAction",
        display: "Cunning Action",
        description: "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.",
        level:2,
    },
    roguishArchetype:{
        id: "roguishArchetype",
        display: "Roguish Archetype (Rouge Subclass)",
        description: "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities: Thief, detailed at the end of the class description, or one from another source. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.",
        level:3,
    },
    uncannyDodge:{
        id: "uncannyDodge",
        display: "Uncanny Dodge",
        description: "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
        level:5,
    },
    evasion_Ro:{
        id: "evasion_Ro",
        display: "Evasion",
        description: "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as an ancient red dragon's fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
        level:7,
    },
    reliableTalent:{
        id: "reliableTalent",
        display: "Reliable Talent",
        description: "By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.",
        level:11,
    },
    blindsense:{
        id: "blindsense",
        display: "Blindsense",
        description: "Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.",
        level:14,
    },
    slipperyMind:{
        id: "slipperyMind",
        display: "Slippery Mind",
        description: "By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.",
        level:15,
    },
    elusive:{
        id: "elusive",
        display: "Elusive",
        description: "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated.",
        level:18,
    },
    strokeOfLuck:{
        id: "strokeOfLuck",
        display: "Stroke of Luck",
        description: "At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. Once you use this feature, you can't use it again until you finish a short or long rest.",
        level:20,
    },


    
    //______________________________________________________________________________________
    // ===== Rogue (Thief) =====
    fastHands:{
        id: "fastHands",
        display: "Fast Hands",
        description: "Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.",
        level:3,
    },
    secondStoryWork:{
        id: "secondStoryWork",
        display: "Second-Story Work",
        description: "When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement. In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.",
        level:3,
    },
    supremeSneak:{
        id: "supremeSneak",
        display: "Supreme Sneak",
        description: "Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.",
        level:9,
    },
    useMagicDevice:{
        id: "useMagicDevice",
        display: "Use Magic Device",
        description: "By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.",
        level:13,
    },
    thiefsReflexes:{
        id: "thiefsReflexes",
        display: "Thief's Reflexes",
        description: "When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.",
        level:17,
    },


    
    //______________________________________________________________________________________
    // ===== Rogue () =====




    //______________________________________________________________________________________
    // ===== Sorcerer =====
    sorcerousOrigin:{
        id: "sorcerousOrigin",
        display: "Sorcerous Origin (Sorcerer Subclass)",
        description: "Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline, detailed at the end of the class description, or one from another source. Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.",
        level:1,
    },
    fontOfMagic:{
        id: "fontOfMagic",
        display: "Font of Magic",
        description: <>
            <span>At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.</span>
            <ul>
                <li><strong>Sorcery Points.</strong> You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.</li>
                <li><strong>Flexible Casting.</strong> You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.</li>
                <li><strong>Creating Spell Slots.</strong> You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. Any spell slot you create with this feature vanishes when you finish a long rest.</li>
                <li><strong>Converting a Spell Slot to Sorcery Points.</strong> As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level.</li>
            </ul>
        </>,
        tables:[
            {
                id:"creatingSpellSlots", 
                display:"Creating Spell Slots", 
                dataStructure: [ { key:"ssl", display:"Spell Slot Level" }, { key:"cost", display:"Sorcery Point Cost" } ],
                data: [
                    { ssl:"1st", cost:2 },
                    { ssl:"2nd", cost:3 },
                    { ssl:"3rd", cost:5 },
                    { ssl:"4th", cost:6 },
                    { ssl:"5th", cost:7 },
                ]
            }
        ],
        level:2,
    },
    metamagic:{
        id: "metamagic",
        display: "Metamagic",
        description: <>
            <span>At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level. You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.</span>
            <ul>
                <li><strong>Careful Spell.</strong> When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.</li>
                <li><strong>Distant Spell.</strong> When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell. When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.</li>
                <li><strong>Empowered Spell.</strong> When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls. You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.</li>
                <li><strong>Extended Spell.</strong> When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.</li>
                <li><strong>Heightened Spell.</strong> When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.</li>
                <li><strong>Quickened Spell.</strong> When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.</li>
                <li><strong>Subtle Spell.</strong> When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.</li>
                <li><strong>Twinned Spell.</strong> When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip). To be eligible, a spell must be incapable of targeting more than one creature at the spell's current level. For example, magic missile and scorching ray aren't eligible, but ray of frost and chromatic orb are.</li>
            </ul>
        </>,
        level:3,
        gainAnotherAt: [
            { level:10, display:" x3" },
            { level:17, display:" x4" }
        ]
    },
    sorcerousRestoration:{
        id: "sorcerousRestoration",
        display: "Sorcerous Restoration",
        description: "At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.",
        level:20,
    },



    
    //______________________________________________________________________________________
    // ===== Sorcerer (Draconic Bloodline) =====
    dragonAncestor:{
        id: "dragonAncestor",
        display: "Dragon Ancestor",
        description: <>
            <span style={{ marginLeft:"2rem" }}>At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.</span>
        </>,
        tables:[
            {
                id:"draconicAncestryTable",
                display:"Draconic Ancestry",
                dataStructure: [ { key:"dragon", display:"Dragon" }, { key:"type", display:"Damage Type" } ],
                data: [
                    { dragon:"Black", type:"Acid" },
                    { dragon:"Blue", type:"Lightning" },
                    { dragon:"Brass", type:"Fire" },
                    { dragon:"Bronze", type:"Lightning" },
                    { dragon:"Copper", type:"Acid" },
                    { dragon:"Gold", type:"Fire" },
                    { dragon:"Green", type:"Poison" },
                    { dragon:"Red", type:"Fire" },
                    { dragon:"Silver", type:"Cold" },
                    { dragon:"White", type:"Cold" },
                ]
            }
        ],
        level:1,
    },
    draconicResilience:{
        id: "draconicResilience",
        display: "Draconic Resilience",
        description: <>
            <span style={{ marginLeft:"2rem" }}>As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier.</span>
        </>,
        level:1,
    },
    elementalAffinity:{
        id: "elementalAffinity",
        display: "Elemental Affinity",
        description: "Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.",
        level:6,
    },
    dragonWings:{
        id: "dragonWings",
        display: "Dragon Wings",
        description: "At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn. You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.",
        level:14,
    },
    draconicPresence:{
        id: "draconicPresence",
        display: "Draconic Presence",
        description: "Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours.",
        level:18,
    },


    
    //______________________________________________________________________________________
    // ===== Sorcerer () =====



    //______________________________________________________________________________________
    // ===== Warlock =====
    otherworldlyPatron:{
        id: "otherworldlyPatron",
        display: "Otherworldly Patron (Warlock Subclass)",
        description: "At 1st level, you have struck a bargain with an otherworldly being of your choice: the Fiend, which is detailed at the end of the class description, or one from another source. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.",
        level:1,
    },
    eldritchInvocations:{
        id: "eldritchInvocations",
        display: "Eldritch Invocations",
        description: <>
            <span style={{ marginLeft:"2rem" }}>In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>If an eldritch invocation has prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its prerequisites. A level prerequisite refers to your level in this class.</span>
            <ul>
                <li><strong>Agonizing Blast.</strong> <i>Prerequisite: eldritch blast cantrip.</i> When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit.</li>
                <li><strong>Armor of Shadows.</strong> You can cast mage armor on yourself at will, without expending a spell slot or material components.</li>
                <li><strong>Ascendant Step.</strong> <i>Prerequisite: 9th level.</i> You can cast levitate on yourself at will, without expending a spell slot or material components.</li>
                <li><strong>Beast Speech.</strong> You can cast speak with animals at will, without expending a spell slot.</li>
                <li><strong>Beguiling Influence.</strong> You gain proficiency in the Deception and Persuasion skills.</li>
                <li><strong>Bewitching Whispers.</strong> <i>Prerequisite: 7th level.</i> You can cast compulsion once using a warlock spell slot. You can't do so again until you finish a long rest.</li>
                <li><strong>Book of Ancient Secrets.</strong> <i>Prerequisite: Pact of the Tome feature.</i> You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class's spell list (the two needn't be from the same list). The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag. On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it.</li>
                <li><strong>Chains of Carceri.</strong> <i>Prerequisite: 15th level, Pact of the Chain feature.</i> You can cast hold monster at will — targeting a celestial, fiend, or elemental — without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again.</li>
                <li><strong>Devil's Sight.</strong> You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.</li>
                <li><strong>Dreadful Word.</strong> <i>Prerequisite: 7th level.</i> You can cast confusion once using a warlock spell slot. You can't do so again until you finish a long rest.</li>
                <li><strong>Eldritch Sight.</strong> You can cast detect magic at will, without expending a spell slot.</li>
                <li><strong>Eldritch Spear.</strong> <i>Prerequisite: eldritch blast cantrip.</i>When you cast eldritch blast, its range is 300 feet.</li>
                <li><strong>Eyes of the Rune Keeper.</strong> You can read all writing.</li>
                <li><strong>Fiendish Vigor.</strong> You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components.</li>
                <li><strong>Gaze of Two Minds.</strong> You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings.</li>
                <li><strong>Lifedrinker.</strong> <i>Prerequisite: 12th level, Pact of the Blade feature.</i> When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1).</li>
                <li><strong>Mask of Many Faces.</strong> You can cast disguise self at will, without expending a spell slot.</li>
                <li><strong>Master of Myriad Forms.</strong> <i>Prerequisite: 15th level.</i> You can cast alter self at will, without expending a spell slot.</li>
                <li><strong>Minions of Chaos.</strong> <i>Prerequisite: 9th level.</i> You can cast conjure elemental once using a warlock spell slot. You can't do so again until you finish a long rest.</li>
                <li><strong>Mire the Mind.</strong> <i>Prerequisite: 5th level.</i> You can cast slow once using a warlock spell slot. You can't do so again until you finish a long rest.</li>
                <li><strong>Misty Visions.</strong> You can cast silent image at will, without expending a spell slot or material components.</li>
                <li><strong>One with Shadows.</strong> <i>Prerequisite: 5th level.</i> When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction.</li>
                <li><strong>Otherworldly Leap.</strong> <i>Prerequisite: 9th level.</i> You can cast jump on yourself at will, without expending a spell slot or material components.</li>
                <li><strong>Repelling Blast.</strong> <i>Prerequisite: eldritch blast cantrip.</i> When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line.</li>
                <li><strong>Sculptor of Flesh.</strong> <i>Prerequisite: 7th level.</i> You can cast polymorph once using a warlock spell slot. You can't do so again until you finish a long rest.</li>
                <li><strong>Sign of Ill Omen.</strong> <i>Prerequisite: 5th level.</i> You can cast bestow curse once using a warlock spell slot. You can't do so again until you finish a long rest.</li>
                <li><strong>Thief of Five Fates.</strong> You can cast bane once using a warlock spell slot. You can't do so again until you finish a long rest.</li>
                <li><strong>Thirsting Blade.</strong> <i>Prerequisite: 5th level, Pact of the Blade feature.</i> You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn.</li>
                <li><strong>Visions of Distant Realms.</strong> <i>Prerequisite: 15th level.</i> You can cast arcane eye at will, without expending a spell slot.</li>
                <li><strong>Voice of the Chain Master.</strong> <i>Prerequisite: Pact of the Chain feature.</i> You can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech.</li>
                <li><strong>Whispers of the Grave.</strong> <i>Prerequisite: 9th level.</i> You can cast speak with dead at will, without expending a spell slot.</li>
                <li><strong>Witch Sight.</strong> <i>Prerequisite: 15th level.</i> You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight.</li>
            </ul>
        </>,
        shortDescription: "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table. Invocations: Agonizing Blast, Armor of Shadows, Ascendant Step, Beast Speech, Beguiling Influence, Bewitching Whispers, Book of Ancient Secrets, Chains of Carceri, Devil's Sight, Dreadful Word, Eldritch Spear, Fiendish Vigor, Gaze of Two Minds, Lifedrinker, Mask of Many Faces, Master of Myriad Forms, Minions of Chaos, Mire the Mind, Misty Visions, One with Shadows, Otherworldly Leap, Repelling Blast, Sculptor of Flesh, Sign of Ill Omen, Thief of Five Fates, Thirsting Blade, Visions of Distant Realms, Voice of the Chain Master, Whispers of the Grave, and Witch Sight.",
        level:2,
        gainAnotherAt:[
            { level:2, display:" x2" },
            { level:5, display:" x3" },
            { level:7, display:" x4" },
            { level:9, display:" x5" },
            { level:12, display:" x6" },
            { level:15, display:" x7" },
            { level:18, display:" x8" },
        ]
    },
    pactBoon:{
        id: "pactBoon",
        display: "Pact Boon",
        description: <>
            <span style={{ marginLeft:"2rem" }}>At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.</span>
            <ul>
                <li><strong>Pact of the Blade.</strong> You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it (see the Weapons section for weapon options). You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die. You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.</li>
                <li><strong>Pact of the Chain.</strong> You learn the find familiar spell and can cast it as a ritual. The spell doesn't count against your number of spells known. When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite. Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack with its reaction.</li>
                <li><strong>Pact of the Tome.</strong> Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list (the three needn't be from the same list). While the book is on your person, you can cast those cantrips at will. They don't count against your number of cantrips known. If they don't appear on the warlock spell list, they are nonetheless warlock spells for you. If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.</li>
            </ul>
        </>,
        shortDescription: "At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice: Pact of the Blade, Pact of the Chain, or Pact of the Tome",
        level:3,
    },
    mysticArcanum6th:{
        id: "mysticArcanum6th",
        display: "Mystic Arcanum (6th level Spell)",
        description:<>
            <span style={{ marginLeft:"2rem" }}>At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.</span>
        </>,
        shortDescription: "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.",
        level:11,
    },
    mysticArcanum7th:{
        id: "mysticArcanum7th",
        display: "Mystic Arcanum (7th level Spell)",
        description: "At 13th level, your patron bestows upon you a magical secret called an arcanum. Choose one 7th-level spell from the warlock spell list as this arcanum.",
        level:13,
    },
    mysticArcanum8th:{
        id: "mysticArcanum8th",
        display: "Mystic Arcanum (8th level Spell)",
        description: "At 15th level, your patron bestows upon you a magical secret called an arcanum. Choose one 8th-level spell from the warlock spell list as this arcanum.",
        level:15,
    },
    mysticArcanum9th:{
        id: "mysticArcanum9th",
        display: "Mystic Arcanum (9th level Spell)",
        description: "At 17th level, your patron bestows upon you a magical secret called an arcanum. Choose one 9th-level spell from the warlock spell list as this arcanum.",
        level:17,
    },
    eldritchMaster:{
        id: "eldritchMaster",
        display: "Eldritch Master",
        description: "At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.",
        level:20,
    },


    
    //______________________________________________________________________________________
    // ===== Warlock (The Fiend) =====
    expandedSpellList:{
        id: "expandedSpellList",
        display: "Expanded Spell List",
        description: "The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
        tables:[
            {
                id: "fiendExpandedSpells",
                display: "Fiend Expanded Spells",
                dataStructure:[
                    { key:"spellLevel", display:"Spell Level" },
                    { key:"spells", display:"Spells" },
                ],
                data: [
                    { spellLevel:1, spells:"burning hands, command" },
                    { spellLevel:2, spells:"blindness/deafness, scorching ray" },
                    { spellLevel:3, spells:"fireball, stinking cloud" },
                    { spellLevel:4, spells:"fire shield, wall of fire" },
                    { spellLevel:5, spells:"flame strike, hallow" },
                ],
            },
        ],
        level:1,
    },
    darkOnesBlessing:{
        id: "darkOnesBlessing",
        display: "Dark One's Blessing",
        description: "Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).",
        level:1,
    },
    darkOnesOwnLuck:{
        id: "darkOnesOwnLuck",
        display: "Dark One's Own Luck",
        description: "Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur. Once you use this feature, you can't use it again until you finish a short or long rest.",
        level:6,
    },
    fiendishResilience:{
        id: "fiendishResilience",
        display: "Fiendish Resilience",
        description: "Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance.",
        level:10,
    },
    hurlThroughHell:{
        id: "hurlThroughHell",
        display: "Hurl Through Hell",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>Once you use this feature, you can't use it again until you finish a long rest.</span>
        </>,
        shortDescription: "At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.",
        level:14,
    },


    
    //______________________________________________________________________________________
    // ===== Warlock () =====



    //______________________________________________________________________________________
    // ===== Wizard =====
    arcaneRecovery:{
        id: "arcaneRecovery",
        display: "Arcane Recovery",
        description: <>
            <span style={{ marginLeft:"2rem" }}>You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.</span>
        </>,
        shortDescription: "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.",
    },
    arcaneTradition:{
        id: "arcaneTradition",
        display: "Arcane Tradition (Wizard Subclass)",
        description: "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation. The School of Evocation is detailed at the end of the class description, and more choices are available in other sources. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.",
        level:2,
    },
    spellMastery:{
        id: "spellMastery",
        display: "Spell Mastery",
        description: "At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal. By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.",
        level:18,
    },
    signatureSpells:{
        id: "signatureSpells",
        display: "Signature Spells",
        description: "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest. If you want to cast either spell at a higher level, you must expend a spell slot as normal.",
        level:20,
    },


    
    //______________________________________________________________________________________
    // ===== Wizard (School of Evocation) =====
    evocationSavant:{
        id: "evocationSavant",
        display: "Evocation Savant",
        description: "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved.",
        level:2,
    },
    sculptSpells:{
        id: "sculptSpells",
        display: "Sculpt Spells",
        description: "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.",
        level:2,
    },
    potentCantrip:{
        id: "potentCantrip",
        display: "Potent Cantrip",
        description: "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.",
        level:6,
    },
    empoweredEvocation:{
        id: "empoweredEvocation",
        display: "Empowered Evocation",
        description: "Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast.",
        level:10,
    },
    overchannel:{
        id: "overchannel",
        display: "Overchannel",
        description: <>
            <span style={{ marginLeft:"2rem" }}>Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell.</span>
            <br/>
            <span style={{ marginLeft:"2rem" }}>The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.</span>
        </>,
        level:14,
    },


    
    //______________________________________________________________________________________
    // ===== Wizard () =====



    //______________________________________________________________________________________
    // =====  =====


    
    //______________________________________________________________________________________
    // =====  () =====


    
    //______________________________________________________________________________________
    // =====  () =====





    //______________________________________________________________________________________
    // ===== Common =====
    darkvision:{
        id: "darkvision",
        display: "Darkvision",
        description: "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    },
    cantrip:{
        id: "cantrip",
        display: "Cantrip",
        description: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
    },
    feyAncestry:{
        id: "feyAncestry",
        display: "Fey Ancestry",
        description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    },
    extraLanguage:{
        id: "extraLanguage",
        display: "Extra Language",
        description: "You can speak, read, and write one extra language of your choice.",
    },
    extraLanguageTwo:{
        id: "extraLanguage",
        display: "Extra Language",
        description: "You can speak, read, and write two extra languages of your choice.",
    },
    skillVersatility:{
        id: "skillVersatility",
        display: "Skill Versatility",
        description: "You gain proficiency in one skill of your choice.",
    },
    skillVersatilityTwo:{
        id: "skillVersatilityTwo",
        display: "Skill Versatility",
        description: "You gain proficiency in two skills of your choice.",
    },
    feat:{
        id: "feat",
        display: "Feat",
        description: "You gain one feat of your choice.",
    },
    abilityScoreImprovement:{
        id: "abilityScoreImprovement",
        display: "Ability Score Improvement",
        description: "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
        level: 4,
        gainAnotherAt: [ 8, 12, 16, 19 ]
    },
    extraAttack:{
        id: "extraAttack",
        display: "Extra Attack",
        description: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
        level: 5,
    },
}

/* 
    :{
        id: "",
        display: "",
        description: "",
    },
*/