
// React/Next -----------------------------------------------------------------------
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Data -----------------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
// Other ----------------------------------------------------------------------------
import { calculateModifierNumber } from "./character";



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
                    <span className={styles.score} style={character && character.baseData && character.baseData.classes && character.baseData.classes[0] ? { backgroundImage: `url(/images/classBackground/${character.baseData.classes[0]}.webp)` } : { backgroundColor: "#212529" }}>
                        &nbsp;&nbsp;{score}&nbsp;&nbsp;
                    </span>
                </div>
            :""}
        </div>
    );
}

export const renderClassBackground = (cardBackground) => {
    if (!cardBackground) return;
    return (
        <LazyLoadImage
            alt={cardBackground}
            effect="blur"
            src={`/images/classBackground/${cardBackground}.webp`}
            placeholderSrc={`/images/classBackground/${cardBackground}_low.webp`}
            width={350}
        />
    )
}