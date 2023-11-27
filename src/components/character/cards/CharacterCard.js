// React/Next -----------------------------------------------------------------------
import LazyLoadNextImage from '@/components/LazyLoadNextImage';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
// Components -----------------------------------------------------------------------
import LazyLoadImageWrapper from '@/components/LazyLoadImageWrapper';
// Render Functions -----------------------------------------------------------------
import { renderClassBackground, renderStatBlock } from '@/util/characterCard';
// Data ----------------------------------------------------------------------------
import { raceData, subraceData } from '@/data/raceData';
import { classData, subclassData } from '@/data/classData';
import { abilitiesPossible } from '@/data/character';
// Other ----------------------------------------------------------------------------
import { convertObjToArray, isArray, isObj } from '@/util';
import { calculateLevel, calculateModifierNumber, calculateProficiency } from '@/util/character';


//______________________________________________________________________________________
// ===== Component =====

const CharacterCard = ({ character, forceNoLoader=false, childOfLink=false }) => {

    //______________________________________________________________________________________
    // ===== Constants =====

    const id = isObj(character, [ "id" ]) ? character.id : null;
    const userEmail = isObj(character, [ "userEmail" ]) ? character.userEmail : null;
    const visibility = isObj(character, [ "visibility" ]) ? character.visibility : null;
    const name = isObj(character, [ "name" ]) ? character.name : null;
    const imageData = isObj(character, [ "image" ]) ? character.image : null;
    const imageMain = isObj(imageData, [ "main" ]) ? imageData.main : null;
    const imageBack = isObj(imageData, [ "back" ]) ? imageData.back : null;
    const baseData = isObj(character, [ "baseData" ]) ? character.baseData : null;
    const level = isObj(baseData, ["classes"]) ? calculateLevel(baseData.classes) : 0;
    const proficiency = isObj(baseData, ["proficiency"]) ? baseData.proficiency : level ? calculateProficiency(level) : 0
    const cardBackground = isObj(baseData, ["cardBackground"]) ? baseData.cardBackground : isArray(baseData.classes) ? baseData.classes[0].classId : null;
    const abilities = isObj(character, [ "abilities" ]) ? character.abilities : null;

    const raceObj = isObj(baseData, [ "race" ]) && baseData.race !== "other" && isObj(raceData, [ baseData.race ]) ? raceData[baseData.race] : null;
    const subraceObj = isObj(baseData, [ "subrace" ]) && baseData.subrace !== "other" && isObj(subraceData, [ baseData.subrace ]) ? subraceData[baseData.subrace] : null;
    const classIds = isArray(baseData.classes) ? baseData.classes.map(classObj => classObj.level > 0 && classObj.classId) : null;
    const classes = isArray(classIds) ? convertObjToArray(classData, classIds) : null;



    //______________________________________________________________________________________
    // ===== Render Functions =====

    /**
     * Create array of rendered ability columns based on the provided data.
     * @returns array of ability columns.
     */
    const renderAbilities = () => {
        if (!(isArray(abilitiesPossible) && isObj(abilities))) return;
        
        return abilitiesPossible.map((abilityPossibleObj) => {
            const abilityObj = isObj(abilities, [abilityPossibleObj.key]) ? abilities[abilityPossibleObj.key] : {};
            const modifier = abilityObj.modifier || abilityObj.modifier === 0 ? abilityObj.modifier : calculateModifierNumber(abilityObj.score);
            if (!isObj(abilityObj)) return;
            return (
                <div key={abilityPossibleObj.key} className={styles.abilityPanel}>
                    <div>{abilityPossibleObj.shortDisplay}</div>
                    <div className={`${styles.modifier} ${abilityObj.proficient ? styles.proficient : ""}`}> {modifier >= 0 ? "+" : ""}{modifier} </div>
                    <div style={{ marginTop: "-8px" /* -10px */ }}>
                        <span className={`${styles.score}  ${abilityObj.proficient ? styles.proficient : ""}`} style={{ backgroundColor: "#212529" }}>  &nbsp;&nbsp;{abilityObj.score}&nbsp;&nbsp; </span>
                    </div>
                </div>
            );
        });
    }

    const renderWalkingSpeed = () => { 
        const walkingSpeed = isObj(baseData.speeds, [ "walking" ]) ? baseData.speeds.walking : 30;
        return renderStatBlock(character, "speed", "Speed", walkingSpeed, false, null, "ft");
    }

    const renderInitiative = () => { 
        const initiative = 
            baseData.initiative ? baseData.initiative : 
            baseData.initative ? baseData.initative : 
            isObj(abilities.dexterity, ["modifier"]) ? abilities.dexterity.modifier :
            isObj(abilities.dexterity, ["score"]) ? calculateModifierNumber(abilities.dexterity.score) : 0;

        return renderStatBlock(character, "initiative", "Initiative", initiative, false, initiative >= 0 ? "+" : "");
    }

    const renderRaceAndClasses = () => {
        let classesDisplay = "";
        if (isArray(classes)) {
            classes.forEach((classObj, index) => {
                classesDisplay += classObj.display;
                
                const baseDataClassObj = baseData.classes.find(baseDataClassObj => baseDataClassObj.classId === classObj.id);
                if(baseDataClassObj && baseDataClassObj.subclassId === "other" && baseDataClassObj.otherSubclass) classesDisplay += ` (${baseDataClassObj.otherSubclass})`;
                else if(isObj(baseDataClassObj, ["subclassId"]) && isObj(subclassData[baseDataClassObj.subclassId], ["display"])) classesDisplay += ` (${subclassData[baseDataClassObj.subclassId].display})`;

                if ((index + 1) !== classes.length) classesDisplay += " / ";
            });
        }

        return (
            <span>
                {isObj(raceObj, ["id", "display"]) ? raceObj.display : baseData.otherRace ? baseData.otherRace : ""}
                {isObj(subraceObj, ["id", "display"]) ? ` (${subraceObj.display})` : baseData.otherSubrace ? ` (${baseData.otherSubrace})` : ""}
                {isObj(raceObj, ["id", "display"]) && classesDisplay && " "}
                {classesDisplay}
            </span>
        )
    }

    const renderImageDetails = () => {
        if(!isObj(imageMain, ["filename", "credit"])) return;

        return (
            <div className={styles.detailsPanel}>
                {imageMain.link && (!childOfLink) ? <a href={imageMain.link} target="_blank">{imageMain.credit}</a> : imageMain.credit}
            </div>
        )
    }

    /**
     * Checks if a character has an image and returns an Image component with the character's image or a div with a question mark if there is no image.
     * @param character - object that represents a character. It should have a `name` property and an optional `image` property.
     * @returns either an `Image` component with the character's image if it exists, or a `div` element with a question mark symbol if the character's image is not available.
     */
    const renderImage = () => {
        if(!isObj(imageMain, ["filename"])) return <div className="tw-text-center" style={{ fontSize: "12rem" }}>?</div>;
    
        return (
            <LazyLoadImageWrapper
                key={imageMain.filename}
                alt={name ? name : imageMain.filename}
                effect="blur"
                src={`https://uploadthing.com/f/${imageMain.filename}`}
                placeholderSrc={cardBackground ? `/images/classBackground/${cardBackground}.webp` : `/images/classBackground/basic_low.webp`}
                width={302} 
                height={302}
                style={{
                    scale: imageMain.zoom ? 1 + (imageMain.zoom * 0.1) : 1,
                    marginLeft: imageMain.x ? `${imageMain.x}px` : '0px',
                    marginTop: imageMain.y ? `${imageMain.y}px` : '0px',
                }} 
            />
        )
    }

    const renderClassIcon = () => {
        if (!cardBackground) return;
        return <LazyLoadNextImage alt={cardBackground} imageKey={`ci_${cardBackground}`} width={25} height={25} />
    }

    const renderArmorClass = () => {
        if(!(baseData.armor && (!isNaN(baseData.armor)) && baseData.armor > 0)) return "00";
        return baseData.armor < 10 ? `0${baseData.armor}` : baseData.armor >= 100 ? 99 : baseData.armor
    }


    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <div className={styles.characterCard} style={isArray(baseData.classes) || forceNoLoader ? { background: "unset", animation:"unset" } : {}}>
            <div className="characterBackground">
                {renderClassBackground(cardBackground)}
            </div>
            <div className={styles.titlePlate}>
                <div className='tw-flex'>
                    <div style={{position:"relative"}}>
                        <div className={styles.levelPlate}>Lvl: {level}</div>
                        <div style={{position:"absolute", marginLeft:"-5px", zIndex: 9}}>
                            <LazyLoadNextImage alt="AC" imageKey="shield" width={50} height={50} />
                            <div className={styles.armor}>{renderArmorClass()}</div>
                        </div>
                    </div>
                    &nbsp;
                    <span className={styles.name}>{name}</span>
                </div>
                <div className='tw-flex'>
                    {baseData.hitpoints && baseData.hitpoints > 0 && <span className={styles.hp}>HP: {baseData.hitpoints}</span>}
                    &nbsp;
                    <div className={styles.classIcon}>{renderClassIcon()}</div>
                </div>
            </div>
            <div className={styles.mainPlate}>
                <div className={styles.characterImage} style={{height: "255px"}}> 
                    {renderImage()} 
                    {renderImageDetails()}
                </div>
                <div className={styles.infoPanel}>
                    <div className={`${styles.info} tw-text-black`}>
                        <div className="flex-items-evenly">
                            <div/> {renderRaceAndClasses(raceObj, classes)} <div/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.basePlate} ${styles.abilitiesPlate}`}>
                <div className={styles.abilityPanel}>
                    <div>Proficiency</div>
                    <div className={styles.modifier}>
                        {proficiency >= 0 ? "+" : ""}
                        {proficiency}
                    </div>
                </div>
                {renderInitiative()}
                {renderWalkingSpeed()}
            </div>
            <div className={styles.abilitiesPlate} >
                {renderAbilities()}
            </div>
            <div className={styles.textPlate}>
                <div></div>
                <span className={styles.text}>{baseData.quote ? `"${baseData.quote}"` : ""}</span>
                <div></div>
            </div>
        </div>
    )
}
export default CharacterCard;