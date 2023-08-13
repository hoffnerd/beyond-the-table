export const information_subNavigation = [
    { 
        id: "change-log", 
        display: "Change Log",
        onlyShowInNav: true
    },
    { 
        id: "trello", 
        link: "https://trello.com/b/3BTFQFSi/beyond-the-table", 
        external: true,
        display: "Trello Board",
        onlyShowInNav: true,
    },
];


export const character_subNavigation = [
    { 
        id: "characters", 
        display: "All Characters",
        description: "Create your own characters or view others!",
        onlyShowInNav: true
    },
    { 
        id: "create",  
        display: "New Character",
        description: "Create your own character!",
        frontImage: "gwent/characterNew.webp",
    },
    { 
        id: "dashboard", 
        link: "dashboard", 
        display: "My Characters",
        description: "View the characters you have created!",
        frontImage: "gwent/character.webp",
    },
]

export const navigation = [
    // { 
    //     id: "worlds", 
    //     display: "Worlds",
    //     description: "Create your own worlds or view others!",
    //     frontImage: "menu_geralt.png",
    //     disabledReason: "future"
    // },
    // { 
    //     id: "campaigns", 
    //     display: "Campaigns",
    //     description: "Create your own campaigns or view others!",
    //     frontImage: "gwent/campaign.webp",
    //     disabledReason: "future"
    // },
    { 
        id: "characters", 
        display: "Characters",
        description: "Create your own characters or view others!",
        frontImage: "gwent/character.webp",
        subNavigation: character_subNavigation
    },
    { 
        id: "bestiary", 
        display: "Bestiary",
        description: "Create your own monsters or view others!",
        frontImage: "gwent/monsters.webp",
        disabledReason: "future"
    },
    { 
        id: "encounters", 
        display: "Encounters",
        description: "Create your own encounters or view others!",
        frontImage: "gwent/encounters.webp",
        disabledReason: "future"
    },
    { 
        id: "items", 
        display: "Items",
        description: "Create your own items or view others!",
        frontImage: "gwent/items.webp",
        disabledReason: "future"
    },
    {
        id: "information",
        display: "Information",
        onlyShowInNav: true,
        subNavigation: information_subNavigation,
    },
];