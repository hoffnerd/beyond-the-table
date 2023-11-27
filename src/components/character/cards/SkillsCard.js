// React/Next -----------------------------------------------------------------------
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
// Components -----------------------------------------------------------------------
import LazyLoadNextImage from '@/components/LazyLoadNextImage';
// Render Functions -----------------------------------------------------------------
// Data ----------------------------------------------------------------------------
// Other ----------------------------------------------------------------------------
import { isArray, isObj } from '@/util';
import { calculateLevel, calculateModifierNumber, calculateProficiency } from '@/util/character';
import { renderClassBackground } from '@/util/characterCard';
import { abilityObjs, skillsPossible } from '@/data/character';


//______________________________________________________________________________________
// ===== Component =====

const SkillsCard = ({ character=null, forceNoLoader=false, childOfLink=false }) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const baseData = isObj(character, [ "baseData" ]) ? character.baseData : null;
    const level = isObj(baseData, ["classes"]) ? calculateLevel(baseData.classes) : 0;
    const proficiency = isObj(baseData, ["proficiency"]) ? baseData.proficiency : level ? calculateProficiency(level) : 0;
    const abilities = isObj(character, [ "abilities" ]) ? character.abilities : null;
    const skills = isObj(character, [ "skills" ]) ? character.skills : null;
    const cardBackground = isObj(baseData, ["cardBackground"]) ? baseData.cardBackground : isArray(baseData.classes) ? baseData.classes[0].classId : null;



    //______________________________________________________________________________________
    // ===== Render Functions =====
    const renderSkills = () => {
        if(!(isArray(skillsPossible) && isObj(abilities))) return;
        
        return skillsPossible.map(skillObj => {
            const abilityPossibleObj = abilityObjs[skillObj.abilityKey];
            const abilityObj = abilities[skillObj.abilityKey];
            const modifier = abilityObj.modifier || abilityObj.modifier === 0 ? abilityObj.modifier : calculateModifierNumber(abilityObj.score);
            const modifierToUse = isObj(skills, [skillObj.key]) ? parseInt(modifier) + parseInt(proficiency) : modifier;

            return( 
                <div key={skillObj.key} className={styles.skillWrapper}>
                    <div className={`${styles.skillPlate} ${isObj(skills, [skillObj.key]) ? styles.proficient : ""}`}>
                        <div className={styles.skillGrid}>
                            <div/>
                            <div>{skillObj.display} ({abilityPossibleObj.shortDisplay}):</div> 
                            <div style={{textAlign: "center"}}>{modifierToUse >= 0 && "+"}{modifierToUse}</div>
                        </div>
                    </div> 
                </div> 
            )
        })
    }



    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <div className={styles.characterCard} style={isArray(baseData.classes) || forceNoLoader ? { background: "unset", animation:"unset" } : {}}>
            <div className="characterBackground">
                {renderClassBackground(cardBackground)}
            </div>
            <div className={styles.skills}>
                {renderSkills()}
            </div>
        </div>
    )
}
export default SkillsCard;