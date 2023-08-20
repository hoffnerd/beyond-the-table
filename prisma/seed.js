// Prisma Setup -----------------------------------------------------------------
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Data -------------------------------------------------------------------------

const character = [
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Agmak Riverguard",
        "baseData": {
            "race": "goliath",
            "armor": "15",
            "level": "5",
            "quote": "Me and my sister... we have a past. We almost died at the hands of a witch. But that past made us stronger. We'd gotten a taste of blood. Witch blood. And we haven't stopped since.",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "bloodhunter"
            ],
            "hitpoints": "32",
            "initiative": "1"
        },
        "abilities": {
            "wisdom": {
                "score": "11"
            },
            "charisma": {
                "score": "8"
            },
            "strength": {
                "score": "16"
            },
            "dexterity": {
                "score": "12"
            },
            "constitution": {
                "score": "14"
            },
            "intelligence": {
                "score": "15"
            }
        },
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Polin Quickcase",
        "baseData": {
            "race": "gnome",
            "armor": "14",
            "level": "5",
            "quote": "Research is what I'm doing when I don't know what I'm doing.",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "artificer"
            ],
            "hitpoints": "34",
            "initiative": "2"
        },
        "abilities": {
            "wisdom": {
                "score": "12"
            },
            "charisma": {
                "score": "8"
            },
            "strength": {
                "score": "12"
            },
            "dexterity": {
                "score": "15"
            },
            "constitution": {
                "score": "16"
            },
            "intelligence": {
                "score": "17"
            }
        },
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Venleth Ashspell",
        "baseData": {
            "race": "elf",
            "armor": "12",
            "level": "5",
            "quote": "Magic is the great antidote to the poison of enthusiasm and superstition.",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "wizard"
            ],
            "hitpoints": "34",
            "initiative": "2"
        },
        "abilities": {
            "wisdom": {
                "score": "12"
            },
            "charisma": {
                "score": "8"
            },
            "strength": {
                "score": "12"
            },
            "dexterity": {
                "score": "15"
            },
            "constitution": {
                "score": "16"
            },
            "intelligence": {
                "score": "17"
            }
        },
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Uk'otoa Cultist",
        "baseData": {
            "race": "tiefling",
            "armor": "13",
            "level": 5,
            "quote": "Watching. Potential. Learn. Grow. Provoke. Consume. Reward. Patience.",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "warlock"
            ],
            "hitpoints": 43,
            "initiative": "2"
        },
        "abilities": {
            "wisdom": {
                "score": 9
            },
            "charisma": {
                "score": 18
            },
            "strength": {
                "score": 11
            },
            "dexterity": {
                "score": 14
            },
            "constitution": {
                "score": 16
            },
            "intelligence": {
                "score": 10
            }
        },
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Dunxenoc Banaar",
        "baseData": {
            "race": "dragonborn",
            "armor": "12",
            "level": "5",
            "quote": "The Mage's Council will hear about this! Mark my words, you will never practice magic again!",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "sorcerer"
            ],
            "hitpoints": "31",
            "initiative": "2"
        },
        "abilities": {
            "wisdom": {
                "score": 10
            },
            "charisma": {
                "score": "16"
            },
            "strength": {
                "score": "12"
            },
            "dexterity": {
                "score": "14"
            },
            "constitution": {
                "score": "15"
            },
            "intelligence": {
                "score": "9"
            }
        },
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Arkmong",
        "baseData": {
            "race": "tiefling",
            "armor": "14",
            "level": "5",
            "quote": "Those damn Piercers, just a bunch of thugs and bullies. The Ketsran elders just need to let us take them out.",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "rogue"
            ],
            "hitpoints": "27",
            "initiative": "3"
        },
        "abilities": {
            "wisdom": {
                "score": "11"
            },
            "charisma": {
                "score": "12"
            },
            "strength": {
                "score": 10
            },
            "dexterity": {
                "score": "16"
            },
            "constitution": {
                "score": "11"
            },
            "intelligence": {
                "score": "11"
            }
        },
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Redanian Archer",
        "baseData": {
            "race": "halfling",
            "armor": "16",
            "level": "5",
            "quote": "I can hit a target 150 feet out, try me.",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "ranger"
            ],
            "hitpoints": "39",
            "initiative": "2"
        },
        "abilities": {
            "wisdom": {
                "score": 10
            },
            "charisma": {
                "score": "12"
            },
            "strength": {
                "score": "16"
            },
            "dexterity": {
                "score": "14"
            },
            "constitution": {
                "score": "12"
            },
            "intelligence": {
                "score": "12"
            }
        },
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Enizo Rizem",
        "baseData": {
            "race": "human",
            "armor": "18",
            "level": "5",
            "quote": "Ah, I remember you now. One of the only slaves to escape me. Death has been calling your name, and I am his instrument.",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "paladin"
            ],
            "hitpoints": "42",
            "initiative": "1"
        },
        "abilities": {
            "wisdom": {
                "score": "13"
            },
            "charisma": {
                "score": "16"
            },
            "strength": {
                "score": "19"
            },
            "dexterity": {
                "score": "12"
            },
            "constitution": {
                "score": "14"
            },
            "intelligence": {
                "score": "8"
            }
        },
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Balor Embersense",
        "image": {
            "y": "-20",
            "filename": "1ff1c2d2-b23f-4485-9d20-32efeef3fa75_365447450_1388041648419236_7073477527530912880_n.jpg"
        },
        "baseData": {
            "race": "human",
            "armor": "17",
            "level": "5",
            "quote": "I was a slave and I was lucky enough to escape. I wasted the rest of my years as drunkard. Now I see my foolishness. I am done wasting away.",
            "speeds": {
                "walking": "40"
            },
            "classes": [
                "monk"
            ],
            "hitpoints": "40",
            "initiative": "4"
        },
        "abilities": {
            "wisdom": {
                "score": "13"
            },
            "charisma": {
                "score": "8"
            },
            "strength": {
                "score": "12"
            },
            "dexterity": {
                "score": "14"
            },
            "constitution": {
                "score": "13"
            },
            "intelligence": {
                "score": "11"
            }
        },
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Ivy Thorne",
        "image": {
            "x": 5,
            "y": -107,
            "zoom": -4,
            "filename": "b59d6f64-a761-4325-88bf-09d5ca125f28_woman-6626093_640.png"
        },
        "baseData": {
            "race": "halfelf",
            "armor": "13",
            "level": "5",
            "quote": "My Wife and I moved out here to get away from everything. Little did we know, others would follow.",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "druid"
            ],
            "hitpoints": "45",
            "initiative": "1"
        },
        "abilities": {
            "wisdom": {
                "score": "17"
            },
            "charisma": {
                "score": "13"
            },
            "strength": {
                "score": "9"
            },
            "dexterity": {
                "score": "12"
            },
            "constitution": {
                "score": "16"
            },
            "intelligence": {
                "score": "12"
            }
        },
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Redanian Medic",
        "image": {
            "y": "-21",
            "filename": "4640fe93-6c05-4e86-9ad6-4e6df9ba1391_366752369_106573892540890_8234159157678023605_n.jpg"
        },
        "baseData": {
            "race": "halfelf",
            "armor": 15,
            "level": 5,
            "quote": "My job is to keep you alive. Make it as hard as you like.",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "cleric"
            ],
            "hitpoints": 41,
            "initiative": 0
        },
        "abilities": {
            "wisdom": {
                "score": 16
            },
            "charisma": {
                "score": 9
            },
            "strength": {
                "score": 13
            },
            "dexterity": {
                "score": 11
            },
            "constitution": {
                "score": 14
            },
            "intelligence": {
                "score": 12
            }
        },
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Donald of Trumpets",
        "image": {
            "y": -12,
            "zoom": "0",
            "filename": "336ca1f5-571b-4fd6-bf7a-654fab108096_DonaldOfTrumpets.JPG"
        },
        "baseData": {
            "race": "halfling",
            "armor": "10",
            "level": "5",
            "quote": "We should build a great, great wall on our southern border, and have Vizima pay for that wall.",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "bard"
            ],
            "hitpoints": "41",
            "initiative": "-2"
        },
        "abilities": {
            "wisdom": {
                "score": "9"
            },
            "charisma": {
                "score": "18"
            },
            "strength": {
                "score": "8"
            },
            "dexterity": {
                "score": "6"
            },
            "constitution": {
                "score": "17"
            },
            "intelligence": {
                "score": "7"
            }
        },
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Captain Dench",
        "image": {
            "y": "-12",
            "filename": "8c2f723f-88d0-4348-a7e2-d08583945007_366224891_811420093813903_8948538488419207189_n.jpg"
        },
        "baseData": {
            "race": "halforc",
            "armor": "14",
            "level": "5",
            "quote": "There's always more Piercers!",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "barbarian"
            ],
            "hitpoints": "59",
            "initiative": "2"
        },
        "abilities": {
            "wisdom": {
                "score": "8"
            },
            "charisma": {
                "score": "11"
            },
            "strength": {
                "score": "16"
            },
            "dexterity": {
                "score": "14"
            },
            "constitution": {
                "score": "14"
            },
            "intelligence": {
                "score": "6"
            }
        }
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "visibility": "PUBLIC",
        "name": "Redanian Soldier",
        "image": {
            "filename": "d7242687-f3c2-4ae6-b055-472586ed7aad_RedanianSoldier.JPG"
        },
        "baseData": {
            "race": "human",
            "armor": "13",
            "level": "5",
            "quote": "For the true Northern Realm!",
            "speeds": {
                "walking": 30
            },
            "classes": [
                "fighter"
            ],
            "hitpoints": "48",
            "initiative": "2"
        },
        "abilities": {
            "wisdom": {
                "score": "9"
            },
            "charisma": {
                "score": "7"
            },
            "strength": {
                "score": "18"
            },
            "dexterity": {
                "score": "14"
            },
            "constitution": {
                "score": "17"
            },
            "intelligence": {
                "score": "11"
            }
        },
    }
];

const upload = [
    {
        "userEmail": "thetablebeyond@gmail.com",
        "filename": "1ff1c2d2-b23f-4485-9d20-32efeef3fa75_365447450_1388041648419236_7073477527530912880_n.jpg",
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "filename": "4640fe93-6c05-4e86-9ad6-4e6df9ba1391_366752369_106573892540890_8234159157678023605_n.jpg",
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "filename": "8c2f723f-88d0-4348-a7e2-d08583945007_366224891_811420093813903_8948538488419207189_n.jpg",
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "filename": "b59d6f64-a761-4325-88bf-09d5ca125f28_woman-6626093_640.png",
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "filename": "d7242687-f3c2-4ae6-b055-472586ed7aad_RedanianSoldier.JPG",
    },
    {
        "userEmail": "thetablebeyond@gmail.com",
        "filename": "336ca1f5-571b-4fd6-bf7a-654fab108096_DonaldOfTrumpets.JPG",
    }
];

const seeds = [
    { key: "character", data: character },
    { key: "upload", data: upload },
];


// Main -------------------------------------------------------------------------
async function main(){
    for(let seedObj of seeds){
        for(let data of seedObj.data){
            await prisma[seedObj.key].create({ data });
        }
    }
}

// Execute ----------------------------------------------------------------------
main().catch(e => {
    console.log(e);
    process.exit(1);
})
.finally(()=>{
    prisma.$disconnect();
})