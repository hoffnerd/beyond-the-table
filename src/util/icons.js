// Components -----------------------------------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Other ----------------------------------------------------------------------------
import { isArray, isObj } from '.';
// Icons ----------------------------------------------------------------------------
import { faArrowLeft, faDungeon, faUser, faUsers, faUserPlus, faUserPen, faImage, faArrowUpShortWide, faArrowDownWideShort, faTrashCan } from '@fortawesome/free-solid-svg-icons';
const library = { faArrowLeft, faDungeon, faUser, faUsers, faUserPlus, faUserPen, faImage, faArrowUpShortWide, faArrowDownWideShort, faTrashCan };

/**
 * The function checks if a given icon name exists in the FontAwesome library and returns true if it does, otherwise it logs an error message and returns false.
 * @param iconName - The name of the icon that needs to be checked in the fontawesome library.
 * @returns a boolean value - `true` if the `iconName` is present in the library. If the `iconName` is not found, an error message is logged to the console and `false` is returned.
 */
const checkIconInLibrary = (iconName) => {
    if(isObj(library, [iconName])) return true; 
    console.error("Error! Please add this icon in the fontawesome library. Library is defined in the @/src/util/icons.js file .", {library, iconName})
    return false;
}

/**
 * This function takes in a string that is fontawesome icon name and returns the React FontAwesomeIcon component. 
 * Note: you still need to add the icon to the import and library in the @/src/util/icons.js file 
 * @param iconName - string the name of the icon you want to render.
 * @param [styleObj] - An optional object that contains CSS styles to be applied to the rendered icon. If no styles are provided, an empty object is used as the default value.
 * @returns An FontAwesomeIcon component with the icon passed in as iconName.
 */
export const renderIcon = (iconName, styleObj=null) => {
    if(checkIconInLibrary(iconName)) return <FontAwesomeIcon icon={library[iconName]} style={isObj(styleObj) ? styleObj : {}} />
    return;
}

/**
 * It takes an array of strings that are fontawesome icon names, and returns an array of FontAwesomeIcon components.
 * Note: you still need to add the icon to the import and library in the @/src/util/icons.js file 
 * @param iconNames - an array of strings that are the names of the icons you want to render.
 * @param [stylesArray=null] - array of objects containing styles for each icon. The styles for each icon are applied based on their index in the iconNames array. If stylesArray is not provided or is not an array, the icons will be rendered with default styles.
 * @returns An array of FontAwesomeIcons.
 */
export const renderIcons = (iconNames, stylesArray=null) => {
    let icons = [];
    iconNames.foreach((iconName, index) => {
        if(checkIconInLibrary(iconName)){
            icons.push(<FontAwesomeIcon key={iconName} icon={library[iconName]} style={isArray(stylesArray) && isObj(stylesArray[index]) ? stylesArray[index] : {} } />);
        }
    })
    return icons;
}

/**
 * Will render icons or icon based on whats passed in. If it is an array, use renderIcons or a string, use renderIcon.
 * Note: you still need to add the icon to the import and library in the @/src/util/icons.js file 
 * @param [iconConfig=array||string] - array of strings that are the names of the icons you want to render OR string of the name of the icon you want to render.
 * @param [stylesConfig=array||obj] - array of obj that are the styles of the icons you want to render OR an obj of styles of the icon you want to render.
 * @returns array of FontAwesomeIcon components or a single FontAwesomeIcon component.
 */
export const renderFontAwesomeIcons = (iconConfig = null, stylesConfig = null) => {
    if(iconConfig){
        if(isArray(iconConfig)) return renderIcons(iconConfig, stylesConfig) 
        return renderIcon(iconConfig, stylesConfig);
    }
    console.error("renderFontAwesomeIcons,", {iconConfig, stylesConfig})
    return;
}