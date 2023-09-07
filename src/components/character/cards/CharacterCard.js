// React/Next -----------------------------------------------------------------------
import LazyLoadNextImage from '@/components/LazyLoadNextImage';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
// Components -----------------------------------------------------------------------
// Render Functions -----------------------------------------------------------------
import { renderAbilities, renderImage, renderLink, renderProficiency, renderRaceAndClasses, renderStatBlock } from '@/util/characterCard';
// Data ----------------------------------------------------------------------------
import { raceData } from '@/data/raceData';
import { classData } from '@/data/classData';
// Other ----------------------------------------------------------------------------
import { convertObjToArray, isArray, isObj } from '@/util';


//______________________________________________________________________________________
// ===== Component =====

const CharacterCard = ({ character, imageOverride=null }) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const raceObj = isObj(character, [ "baseData" ]) && character.baseData.race && isObj(raceData, [ character.baseData.race ]) ? raceData[character.baseData.race] : null;
    const classes = isObj(character, [ "baseData" ]) && isArray(character.baseData.classes) ? convertObjToArray(classData, character.baseData.classes) : convertObjToArray(classData);

    //______________________________________________________________________________________
    // ===== Render Functions =====
    const renderInitiative = () => { 
        if (!(character && character.baseData)) return renderStatBlock(character, "initiative", "Initiative", 0, false, "+");
        const initiative = character.baseData.initiative ? character.baseData.initiative : character.baseData.initative ? character.baseData.initative : 0;
        return renderStatBlock(character, "initiative", "Initiative", initiative, false, initiative >= 0 ? "+" : "");
    }

    //______________________________________________________________________________________
    // ===== Component Return =====
    if(!( isObj(character, ["baseData", "name"]) && isObj(character.baseData, ["classes", "level", "hitpoints", "speeds"]) )){
        console.warn("Something is up with this character: ", {character, raceObj, classes});
        return <div className="alert alert-info">Character missing needed data in order to render card. Please try to edit this characters data and fill in any blanks or 0's.</div>
    }
    return (
        <div className={styles.characterCard} style={character && character.baseData && character.baseData.classes && character.baseData.classes[0] ? { background: "unset", animation:"unset" } : {}}>
            <div className="characterBackground">
                <LazyLoadImage
                    alt={character.baseData.classes[0]}
                    effect="blur"
                    src={`/images/classBackground/${character.baseData.classes[0]}.webp`}
                    placeholderSrc={`/images/classBackground/${character.baseData.classes[0]}_low.webp`}
                    width={340}
                />
            </div>
            <div className={styles.titlePlate}>
                <div className='tw-flex'>
                    <div style={{position:"relative"}}>
                        <div className={styles.levelPlate}>Lvl: {character.baseData.level}</div>
                        <div style={{position:"absolute", marginLeft:"-5px", zIndex: 9}}>
                            <LazyLoadNextImage alt="AC" imageKey="shield" width={50} height={50} />
                            <div className={styles.armor}>{character.baseData.armor}</div>
                        </div>
                    </div>
                    &nbsp;
                    <span className={styles.name}>{character.name}</span>
                </div>
                <div className='tw-flex'>
                    <span className={styles.hp}>HP: {character.baseData.hitpoints}</span>
                    &nbsp;
                    <div className={styles.classIcon}>
                        <LazyLoadNextImage
                            alt={character.baseData.classes[0]}
                            imageKey={`ci_${character.baseData.classes[0]}`}
                            width={25}
                            height={25}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.mainPlate}>
                <div className={styles.characterImage} style={{height: "255px"}}>
                    {renderImage( { ...character, image: imageOverride !== null ? imageOverride : character.image } )}
                </div>
                <div className={styles.infoPanel}>
                    <div className={`${styles.info} tw-text-black`}>
                        <div className="flex-items-evenly">
                            <div></div>
                            {renderRaceAndClasses(raceObj, classes)}
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.basePlate} ${styles.abilitiesPlate}`}>
                {renderProficiency(character)}
                {renderInitiative()}
                {renderStatBlock(character, "speed", "Speed", character.baseData.speeds.walking, false, null, "ft")}
            </div>
            <div className={styles.abilitiesPlate} >
                {renderAbilities(character)}
            </div>
            <div className={styles.textPlate}>
                <div></div>
                <span className={styles.text}>{character.baseData.quote ? `"${character.baseData.quote}"` : ""}</span>
                <div></div>
            </div>
        </div>
    )
}
export default CharacterCard;