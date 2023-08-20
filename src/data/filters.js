
// Data -----------------------------------------------------------------------------
import { raceData } from "./raceData";
import { classData } from "./classData";
import { abilitiesPossible } from "./character";
// Other ----------------------------------------------------------------------------
import { convertObjToArray } from "@/util";
import { renderFontAwesomeIcons } from "@/util/icons";



// ----------------------------------------------------------------------------------



export const characterFilters = [
    {
        key: "search",
        display: "Search",
        type: "text",
        columnSizes: { md: 5 },
    },
    {
        key: "race",
        display: "Filter By",
        type: "select",
        options: [
            { key: "", display: "Race" },
            ...convertObjToArray(raceData)
        ],
        addPleaseSelectOption: false,
        columnSizes: { md: 2 },
    },
    {
        key: "classes",
        type: "select",
        options: [
            { key: "", display: "Class" },
            ...convertObjToArray(classData)
        ],
        addPleaseSelectOption: false,
        columnSizes: { md: 2 },
        styles: {paddingTop:"18px"},
    },
    {
        key: "order",
        display: "Order By",
        type: "select",
        options: [
            { key: "", display: "New" },
            { key: "name", display: "Name" },
            { key: "level", display: "Level" },
            { key: "hitpoints", display: "Hit Points" },
            { key: "armor", display: "Armor Class" },
            { key: "speed", display: "Speed" },
            ...abilitiesPossible
        ],
        addPleaseSelectOption: false,
        columnSizes: { md: 2, col: 10 },
    },
    {
        key: "ascending",
        type: "toggleButton",
        display: (value) => { 
            if(value) return renderFontAwesomeIcons("faArrowUpShortWide");
            return renderFontAwesomeIcons("faArrowDownWideShort");
        },
        title: (value) => {
            if(value) return "Ascending. Click to reorder in Descending order."
            return "Descending. Click to reorder in Ascending order."
        },
        defaultValue: false,
        columnSizes: { md: 1, col: 2 },
        styles: {paddingTop:"18px"},
    },
]