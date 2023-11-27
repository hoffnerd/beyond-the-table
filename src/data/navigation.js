export const information_subNavigation = [
    { 
        id: "roadmap",
        display: "Roadmap",
        onlyShowInNav: true,
    },
    { 
        id: "change-log", 
        display: "Change Log",
        onlyShowInNav: true
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
        frontImage: "characterNew",
    },
    { 
        id: "dashboard", 
        link: "dashboard", 
        display: "My Characters",
        description: "View the characters you have created!",
        frontImage: "character",
    },
]

export const navigation = [
    { 
        id: "characters", 
        display: "Characters",
        description: "Create your own characters or view others!",
        frontImage: "character",
        subNavigation: character_subNavigation
    },
    { 
        id: "bestiary", 
        display: "Bestiary",
        description: "Create your own monsters or view others!",
        frontImage: "monsters",
        disabledReason: "future"
    },
    { 
        id: "encounters", 
        display: "Encounters",
        description: "Create your own encounters or view others!",
        frontImage: "encounters",
        disabledReason: "future"
    },
    { 
        id: "items", 
        display: "Items",
        description: "Create your own items or view others!",
        frontImage: "items",
        disabledReason: "future"
    },
    {
        id: "information",
        display: "Information",
        onlyShowInNav: true,
        subNavigation: information_subNavigation,
    },
];