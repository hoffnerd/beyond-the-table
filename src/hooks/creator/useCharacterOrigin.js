"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from 'react';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/Creator.module.css'
// Hooks ----------------------------------------------------------------------------
import useMasterInputs from '../useMasterInputs';
// Components -----------------------------------------------------------------------
// Data -----------------------------------------------------------------------------
import { abilityObjsWithChoice, characterBaseData } from '@/data/character';
import { raceData, subraceData } from '@/data/raceData';
import { backgroundData } from '@/data/backgroundData';
// Other ----------------------------------------------------------------------------
import { convertObjToArray, isArray, isObj } from '@/util';
import { renderButtons } from '@/util/creator';


//______________________________________________________________________________________
// ===== Hook =====

const useCharacterOrigin = (unprocessedCharacter=null) => {

    //______________________________________________________________________________________
    // ===== Constants =====

    const otherRaceData = isObj(characterBaseData, [ "otherRace" ]) ? characterBaseData.otherRace : null;
    const otherSubraceData = isObj(characterBaseData, [ "otherSubrace" ]) ? characterBaseData.otherSubrace : null;
    const otherBackgroundData = isObj(characterBaseData, [ "otherBackground" ]) ? characterBaseData.otherBackground : null;

    const races = convertObjToArray(raceData);
    const backgrounds = convertObjToArray(backgroundData);


    
    //______________________________________________________________________________________
    // ===== Initial State =====
    const initialRace = isObj(unprocessedCharacter, ["race"]) ? unprocessedCharacter.race : null;
    const initialSubrace = isObj(unprocessedCharacter, ["subrace"]) ? unprocessedCharacter.subrace : null;
    const initialBackground = isObj(unprocessedCharacter, ["background"]) ? unprocessedCharacter.background : null;
    const initialOtherRace = isObj(unprocessedCharacter, ["otherRace"]) ? { otherRace: unprocessedCharacter.otherRace } : null;
    const initialOtherSubrace = isObj(unprocessedCharacter, ["otherSubrace"]) ? { otherSubrace: unprocessedCharacter.otherSubrace } : null;
    const initialOtherBackground = isObj(unprocessedCharacter, ["otherBackground"]) ? { otherBackground: unprocessedCharacter.otherBackground } : null;


    
    //______________________________________________________________________________________
    // ===== Hook State =====
    const [selectedRace, setSelectedRace] = useState(initialRace);
    const [selectedSubrace, setSelectedSubrace] = useState(initialSubrace);
    const [selectedBackground, setSelectedBackground] = useState(initialBackground);



    //______________________________________________________________________________________
    // ===== Hooks =====
    const otherRaceInput = useMasterInputs(true, [otherRaceData], initialOtherRace);
    const otherSubraceInput = useMasterInputs(true, [otherSubraceData], initialOtherSubrace);
    const otherBackgroundInput = useMasterInputs(true, [otherBackgroundData], initialOtherBackground);



    //______________________________________________________________________________________
    // ===== Use Effects =====

    /* useEffect to reset subrace if race is changed */
    useEffect(() => {
        if(selectedRace && selectedSubrace && selectedRace !== initialRace) setSelectedSubrace(null);
    }, [selectedRace]);



    //______________________________________________________________________________________
    // ===== Render Functions =====

    const renderParagraphList = (display, description, list) => <span>
        <strong>{display}.</strong> {description}:
        <ul>{list.map(listObj => <li key={listObj.id}><strong>{listObj.display}.</strong> {listObj.description}</li>)}</ul>
    </span>

    const renderAbilityScoreIncrease = (abilityScoreIncrease) => {
        const keysToRender = isObj(abilityScoreIncrease) ? Object.keys(abilityScoreIncrease) : null;

        if(!(isArray(keysToRender) && isObj(abilityObjsWithChoice, keysToRender))) return;

        return <span>
            <strong>Ability Score Increase.</strong> Increase the following ability score(s):
            <ul>{keysToRender.map(key => <li key={key}>{abilityObjsWithChoice[key].display}: {abilityScoreIncrease[key]}</li>)}</ul>
        </span>
    }

    /**
     * Renders a form section with a title, buttons, a description, and an optional inputs section.
     * @param title - string, the title of the form section.
     * @param importedData - object, contains data imported from an external source.
     * @param data - array of objects, contains the options for the buttons in the form section. Each object in the 
     * array represents a button option and should have properties like `id`, `display`, and `description`.
     * @param selectedDataId - string, ID of the currently selected data item.
     * @param onClickHandler - function, will be called when a button is clicked. It takes the `selectedDataId` as a parameter.
     * @param renderInputsSection - function, renders the inputs section of the form.
     * @returns form section to be rendered based on given parameters
     */
    const renderFormSection = (title, importedData, data, selectedDataId, onClickHandler, renderInputsSection) => {
        const dataObj = selectedDataId && isObj(importedData, [ selectedDataId ]) ? importedData[selectedDataId] : null;

        return <>
            <h3>{title}</h3>
            <div className='branded-line short' />
            <br/>
            <div className={`${styles.creatorGrid} ${styles.raceButtonColumns} tw-gap-3`}> {renderButtons(data, selectedDataId, onClickHandler)} </div>
            <br/>
            {isObj(dataObj, ["description"]) && <p>{dataObj.description}</p>}
            {isObj(dataObj, ["size"]) && <p><strong>Size:</strong> {dataObj.size}</p>}
            {isObj(dataObj, ["speed"]) && <p><strong>Speed:</strong> {dataObj.speed}</p>}
            {isObj(dataObj, ["abilityScoreIncrease"]) && renderAbilityScoreIncrease(dataObj.abilityScoreIncrease)}
            {isObj(dataObj) && isArray(dataObj.features) && renderParagraphList("Racial Traits", "This race grants you the following racial traits", dataObj.features)}
            {isObj(dataObj) && isArray(dataObj.languages) && renderParagraphList("Languages", "This race grants you the following languages", dataObj.languages)}
            {selectedDataId === "other" && renderInputsSection()}
        </>
    }

    /**
     * Renders a form section for selecting a subrace based on the selected race.
     * @returns form section for selecting a subrace based on the selected race.
     */
    const renderSubraceForm = () => {
        
        // return early if subraces don't need to be rendered
        if(!(selectedRace && isObj(raceData, [ selectedRace ]) && isArray(raceData[selectedRace].subraces))) return;

        // render subrace form section
        return <>
            <br/><br/>
            {renderFormSection("Subrace", subraceData, raceData[selectedRace].subraces, selectedSubrace, setSelectedSubrace, otherSubraceInput.renderInputsSection)}
        </>
    }



    //______________________________________________________________________________________
    // ===== Hook Return =====
    return {
        renderForm: () => (<>
            {renderFormSection("Race", raceData, races, selectedRace, setSelectedRace, otherRaceInput.renderInputsSection)}
            {renderSubraceForm()}
            <br/>
            <br/>
            {renderFormSection("Background", backgroundData, backgrounds, selectedBackground, setSelectedBackground, otherBackgroundInput.renderInputsSection)}
        </>), 
        data: { 
            race: selectedRace,
            otherRace: selectedRace === "other" && isObj(otherRaceInput.dynamicInputState) ? otherRaceInput.dynamicInputState.otherRace : null,
            subrace: selectedSubrace,
            otherSubrace: selectedSubrace === "other" && isObj(otherSubraceInput.dynamicInputState) ? otherSubraceInput.dynamicInputState.otherSubrace : null,
            background: selectedBackground,
            otherBackground: selectedBackground === "other" && isObj(otherBackgroundInput.dynamicInputState) ? otherBackgroundInput.dynamicInputState.otherBackground : null,
        } 
    };
}
export default useCharacterOrigin;