"use client";

// React/Next -----------------------------------------------------------------------
import Image from 'next/image';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
// Components -----------------------------------------------------------------------
import Loading from '../layout/Loading';
import Standard from '../inputs/basic/Standard';
import Select from '../inputs/basic/Select';
import TextArea from '../inputs/basic/TextArea';
// Data -----------------------------------------------------------------------------
import { abilitiesPossible, dataStructureObj_baseData, dataStructureObj_quote } from '@/data/character';
// Other ----------------------------------------------------------------------------
import { isArray, isObj } from '@/util';
import { calculateModifierNumber, calculateProficiency } from '@/util/character';
import { helpSetInputState } from '@/util/inputs';
import { renderImage } from '@/util/characterCard';


//______________________________________________________________________________________
// ===== Component =====

const CardForm = ({races, classes, character, baseDataInputState, setBaseDataInputState, abilitiesInputState, setAbilitiesInputState, quoteInputState, setQuoteInputState }) => {

    //______________________________________________________________________________________
    // ===== Component State =====
    

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
                    <div className={styles.score} style={baseDataInputState.classes ? { backgroundImage: `url(/images/classBackground/${baseDataInputState.classes}.png)`} : {}}>
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
        return <Loading />
    }

    return (
        <div>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    {renderSelectInput(null, null, dataStructureObj_baseData.visibility, true)}
                </div>
                <div className='col-sm-4'></div>
            </div>
            <br/>
            <div className={styles.characterCard} style={baseDataInputState.classes ? { backgroundImage: `url(/images/classBackground/${baseDataInputState.classes}.png)`} : {}} >
                <div className={styles.titlePlate}>
                    <div className='tw-flex'>
                        <div style={{ position: "relative" }}>
                            <div className={`${styles.levelPlate} tw-flex`}>
                                Lvl:{renderStandardInput(`${styles.correctPadding} ${styles.levelInput}`, dataStructureObj_baseData.level)}
                            </div>
                            <div style={{ position: "absolute", marginLeft: "-5px", zIndex: 9 }}>
                                <Image alt="AC" src="/shield2.png" width={50} height={50} />
                                <div className={`${styles.armor} ${styles.armorInputContainter}`}>
                                    {renderStandardInput(`${styles.correctPadding} ${styles.armorInput}`, dataStructureObj_baseData.armor)}
                                </div>
                            </div>
                        </div>
                        &nbsp;
                        {renderStandardInput(`${styles.correctPadding} ${styles.nameInput}`, dataStructureObj_baseData.name)}
                    </div>
                    <div className='tw-flex'>
                        <div className={`${styles.hp} tw-flex`}>
                            <span>HP:</span>
                            {renderStandardInput(`${styles.correctPadding} ${styles.hpInput}`, dataStructureObj_baseData.hitpoints)}
                        </div>
                        &nbsp;
                        <div className={styles.classIcon}>
                            {baseDataInputState.classes ?
                                <Image
                                    alt={baseDataInputState.classes}
                                    src={`/images/classIcons/${baseDataInputState.classes}.webp`}
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
                                {renderSelectInput(null, {padding: "0px 0px 0px 5px"},  {...dataStructureObj_baseData.race, options:[...races]})}
                                {renderSelectInput(null, {padding: "0px 0px 0px 5px"}, {...dataStructureObj_baseData.classes, options:[...classes]})}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.basePlate} ${styles.abilitiesPlate}`}>
                    {renderProficiency(baseDataInputState.level)}
                    {renderAltStatBlock(dataStructureObj_baseData.initative)}
                    {renderAltStatBlock(dataStructureObj_baseData.speed, "ft")}
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
                        dataStructureObj={dataStructureObj_quote}
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