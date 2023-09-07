
// React/Next -----------------------------------------------------------------------
import Link from 'next/link';
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Data -----------------------------------------------------------------------------
import { abilitiesPossible } from '@/data/character';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
// Other ----------------------------------------------------------------------------
import { isArray, isObj } from ".";
import { calculateModifierNumber, calculateProficiency } from "./character";




/**
 * Render a link to view the full character
 * @param addLinkToCharacterPage - A boolean value indicating whether to add a link to the character page or not.
 * @returns link button
 */
export const renderLink = (character, addLinkToCharacterPage) => {
    if(isObj(character, ["id", "name"]) && addLinkToCharacterPage){
        return (
            <div className="flex-items-evenly tw-p-3">
                <div></div>
                <Link className="btn btn-info" style={{borderRadius:"9999px"}} href={`/characters/${character.id}`}>View {character.name}</Link>
                <div></div>
            </div>
        )
    }
    return ""
}

/**
 * Render the character's proficiency.
 * @param character - object that contains the character's data, including their baseData.
 * @returns styled proficiency element
 */
export const renderProficiency = (character) => {
    const proficiencyToDisplay = character.baseData.proficiency ? character.baseData.proficiency : character.baseData.level ? calculateProficiency(character.baseData.level) : 0;
    return (
        <div className={styles.abilityPanel}>
            <div>Proficiency</div>
            <div className={styles.modifier}>
                {proficiencyToDisplay >= 0 ? "+" : ""}
                {proficiencyToDisplay}
            </div>
        </div>
    );
}

/**
 * Renders a stat block with a display name, score, and optional pre and post text.
 * @param character - object that represents a character. It should have a `baseData` property that is an object which should also have a `classes` property which is an array.
 * @param key - unique identifier for each rendered element in a list. It helps React efficiently update and re-render components when the list changes.
 * @param display - string that represents the name or label of the stat block being rendered. It will be displayed as text in the UI.
 * @param score - numerical value of the stat or ability score. It could be the strength score, dexterity score, intelligence score, etc.
 * @param [shouldCreateModifierNumber=true] - boolean value indicating whether or not to calculate and display the modifier number based on the score. If set to true, the modifier 
 * number will be calculated using the `calculateModifierNumber` function and displayed. If set to false, the score will be displayed as is without calculating the modifier number.
 * @param [preText=null] - string that will be displayed before the score or modifier number in the rendered component. It is optional and can be set to `null` if not needed.
 * @param [postText=null] - string used to add additional text after the score in the rendered stat block.
 * @returns styled stat block element.
 */
export const renderStatBlock = (character, key, display, score, shouldCreateModifierNumber=true, preText=null, postText=null) => {
    return (
        <div key={key} className={styles.abilityPanel}>
            <div>{display}</div>
            <div className={styles.modifier}>
                {preText ? preText : ""}
                {shouldCreateModifierNumber ? calculateModifierNumber(score) : score}
                {postText ? postText : ""}
            </div>
            {shouldCreateModifierNumber ?
                <div style={{ marginTop: "-8px" /* -10px */ }}>
                    <span className={styles.score} style={{ backgroundImage: `url(/images/classBackground/${character.baseData.classes[0]}.webp)` }}>
                        &nbsp;&nbsp;{score}&nbsp;&nbsp;
                    </span>
                </div>
            :""}
        </div>
    );
}

/**
 * Create array of rendered ability columns based on the provided data.
 * @param character - object that represents a character. It should have a `abilities` property.
 * @returns array of ability columns.
 */
export const renderAbilities = (character) => {
    let abilityColumns = [];
    if (isArray(abilitiesPossible) && isObj(character.abilities)) {
        abilitiesPossible.forEach((ability) => {
            if (character.abilities[ability.key]) {
                abilityColumns.push(
                    renderStatBlock(character, ability.key, ability.shortDisplay, character.abilities[ability.key].score, true, character.abilities[ability.key].score >= 9 ? "+" : "")
                );
            }
        })
    }
    return abilityColumns;
}

/**
 * Create a string that displays the race and classes.
 * @param raceObj - An object representing a race, with properties "id" and "display".
 * @param classes - An array of class objects, where each object has properties "id" and "display".
 * @returns race and classes of a character.
 */
export const renderRaceAndClasses = (raceObj, classes) => {
    let classesDisplay = "";
    if (isArray(classes)) {
        classes.forEach((classObj, index) => {
            classesDisplay += classObj.display;
            if ((index + 1) !== classes.length) {
                classesDisplay += "/";
            }
        });
    }

    return (
        <span>
            {isObj(raceObj, ["id", "display"]) ? raceObj.display : ""}
            {isObj(raceObj, ["id", "display"]) && classesDisplay && " "}
            {classesDisplay}
        </span>
    )
}

/**
 * Checks if a character has an image and returns an Image component with the character's image or a div with a question mark if there is no image.
 * @param character - object that represents a character. It should have a `name` property and an optional `image` property.
 * @returns either an `Image` component with the character's image if it exists, or a `div` element with a question mark symbol if the character's image is not available.
 */
export const renderImage = (character) => {
    if(!(isObj(character, ["image"]) && isObj(character.image, ["filename"])))
        return <div className="tw-text-center" style={{ fontSize: "12rem" }}>?</div>;

    return (
        <LazyLoadImage
            key={character.image.filename}
            alt={character.name}
            effect="blur"
            src={`https://uploadthing.com/f/${character.image.filename}`}
            placeholderSrc={`/images/classBackground/${character.baseData.classes[0]}_low.webp`}
            width={302} 
            height={302}
            style={{
                scale: character.image.zoom ? 1 + (character.image.zoom * 0.1) : 1,
                marginLeft: character.image.x ? `${character.image.x}px` : '0px',
                marginTop: character.image.y ? `${character.image.y}px` : '0px',
            }} 
        />
    )
}
