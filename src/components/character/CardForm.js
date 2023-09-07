"use client";

// React/Next -----------------------------------------------------------------------
import Image from 'next/image';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
// Components -----------------------------------------------------------------------
import Loading from '../layout/Loading';
import LazyLoadNextImage from '../LazyLoadNextImage';
import Standard from '../inputs/basic/Standard';
import Select from '../inputs/basic/Select';
import TextArea from '../inputs/basic/TextArea';
// Data -----------------------------------------------------------------------------
import { abilitiesPossible, characterBaseData, characterQuote } from '@/data/character';
import { raceData } from '@/data/raceData';
import { classData } from '@/data/classData';
// Other ----------------------------------------------------------------------------
import { convertObjToArray, isArray, isObj } from '@/util';
import { calculateModifierNumber, calculateProficiency } from '@/util/character';
import { helpSetInputState } from '@/util/inputs';
import { renderImage } from '@/util/characterCard';


//______________________________________________________________________________________
// ===== Component =====

const CardForm = ({character, baseDataInputState, setBaseDataInputState, abilitiesInputState, setAbilitiesInputState, quoteInputState, setQuoteInputState }) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const races = convertObjToArray(raceData);
    const classes = convertObjToArray(classData);



    //______________________________________________________________________________________
    // ===== Render Functions =====
    
    const renderProficiency = (level=null, proficiency=null) => {
        const proficiencyToDisplay = proficiency ? proficiency : level ? calculateProficiency(level) : 0;
        return (
            <div key="proficiency" className={styles.abilityPanel}>
                <div>Proficiency</div>
                <div className={styles.modifier}>
                    {proficiencyToDisplay >= 0 ? "+" : ""}
                    {proficiencyToDisplay}
                </div>
            </div>
        );
    }

    const renderAltStatBlock = (dataStructureObj, postText=null) => {
        return (
            <div key={dataStructureObj.key} className={styles.abilityPanel}>
                <div>{dataStructureObj.display}</div>
                <div className={styles.modifier} style={{display: "flex"}}>
                    {renderStandardInput(null, dataStructureObj)}
                    <div style={postText ? {paddingLeft: "5px", paddingRight: "5px"} : {}}>{postText ? postText : ""}</div>
                </div>
            </div>
        );
    }

    const renderStatBlock = (abilityObj) => {
        return (
            <div key={abilityObj.key} className={styles.abilityPanel}>
                <div>{abilityObj.display}</div>
                <div className={styles.modifier}>
                    {abilitiesInputState[abilityObj.key] >= 9 ? "+" : ""}
                    {calculateModifierNumber(abilitiesInputState[abilityObj.key])}
                </div>
                <div style={{ marginTop: "-10px" }}>
                    <div className={styles.score} style={baseDataInputState.classes ? { backgroundImage: `url(/images/classBackground/${baseDataInputState.classes}_low.webp)`} : {}}>
                        {renderStandardInput(`${styles.correctPadding}`, abilityObj, abilitiesInputState, setAbilitiesInputState)}
                    </div>
                </div>
            </div>
        );
    }

    const renderAbilities = () => {
        let abilityColumns = [];
        if (isArray(abilitiesPossible)) {
            abilitiesPossible.forEach((abilityPossible) => {
                const abilityObj = { ...abilityPossible, display: abilityPossible.shortDisplay, };
                abilityColumns.push(renderStatBlock(abilityObj));
            })
        }
        return abilityColumns;
    }

    const renderStandardInput = (className, dataStructureObj, dynamicInputState=baseDataInputState, setDynamicInputState=setBaseDataInputState) => {
        return(
            <Standard
                className={className}
                dataStructureObj={dataStructureObj}
                dynamicInputState={dynamicInputState}
                setDynamicInputState={setDynamicInputState}
                displayInputHeaders={false}
                helpSetInputState={helpSetInputState}
            />
        )
    }

    const renderSelectInput = (className, styles, dataStructureObj, displayInputHeaders=false) => {
        return(
            <Select
                className={className}
                styles={styles}
                dataStructureObj={dataStructureObj}
                dynamicInputState={baseDataInputState}
                setDynamicInputState={setBaseDataInputState}
                displayInputHeaders={displayInputHeaders}
                helpSetInputState={helpSetInputState}
            />
        )
    }

    //______________________________________________________________________________________
    // ===== Component Return =====
    if((!isObj(baseDataInputState)) || (!isObj(abilitiesInputState)) || (!isObj(quoteInputState))){
        return <Loading center={true} />
    }

    return (
        <div>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    {renderSelectInput(null, null, characterBaseData.visibility, true)}
                </div>
                <div className='col-sm-4'></div>
            </div>
            <br/>
            <div className={styles.characterCard} style={baseDataInputState.classes ? { backgroundImage: `url(/images/classBackground/${baseDataInputState.classes}.webp)`, backgroundSize: "105%", animation:"unset"} : { backgroundImage: "unset", animation:"unset" }} >
                <div className={styles.titlePlate}>
                    <div className='tw-flex'>
                        <div style={{ position: "relative" }}>
                            <div className={`${styles.levelPlate} tw-flex`}>
                                Lvl:{renderStandardInput(`${styles.correctPadding} ${styles.levelInput}`, characterBaseData.level)}
                            </div>
                            <div style={{ position: "absolute", marginLeft: "-5px", zIndex: 9 }}>
                                <LazyLoadNextImage alt="AC" imageKey="shield" width={50} height={50} />
                                <div className={`${styles.armor} ${styles.armorInputContainter}`}>
                                    {renderStandardInput(`${styles.correctPadding} ${styles.armorInput}`, characterBaseData.armor)}
                                </div>
                            </div>
                        </div>
                        &nbsp;
                        {renderStandardInput(`${styles.correctPadding} ${styles.nameInput}`, characterBaseData.name)}
                    </div>
                    <div className='tw-flex'>
                        <div className={`${styles.hp} tw-flex`}>
                            <span>HP:</span>
                            {renderStandardInput(`${styles.correctPadding} ${styles.hpInput}`, characterBaseData.hitpoints)}
                        </div>
                        &nbsp;
                        <div className={styles.classIcon}>
                            {baseDataInputState.classes && baseDataInputState.classes !== "pleaseSelect" ?
                                <LazyLoadNextImage
                                    alt={baseDataInputState.classes}
                                    imageKey={`ci_${baseDataInputState.classes}`}
                                    width={25}
                                    height={25}
                                />
                            : ""}
                        </div>
                    </div>
                </div>
                <div className={styles.mainPlate}>
                    <div className={styles.characterImage} style={{ height: "255px" }}>
                        {renderImage(character)}
                    </div>
                    <div className={styles.infoPanel}>
                        <div className={`${styles.info} tw-text-black`}>
                            <div className="flex-items-evenly">
                                {renderSelectInput(null, {padding: "0px 0px 0px 5px"},  {...characterBaseData.race, options:[...races]})}
                                {renderSelectInput(null, {padding: "0px 0px 0px 5px"}, {...characterBaseData.classes, options:[...classes]})}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.basePlate} ${styles.abilitiesPlate}`}>
                    {renderProficiency(baseDataInputState.level)}
                    {renderAltStatBlock(characterBaseData.initiative)}
                    {renderAltStatBlock(characterBaseData.speed, "ft")}
                </div>
                <div className={styles.abilitiesPlate} >
                    {renderAbilities()}
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    <br/>
                    <TextArea
                        dataStructureObj={characterQuote}
                        dynamicInputState={quoteInputState}
                        setDynamicInputState={setQuoteInputState}
                        helpSetInputState={helpSetInputState}
                    />
                </div>
                <div className='col-sm-4'></div>
            </div>
        </div>
    )
}
export default CardForm;