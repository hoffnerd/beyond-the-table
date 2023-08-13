"use client";

// React/Next -----------------------------------------------------------------------
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/Tabs.module.css'
// Hooks ----------------------------------------------------------------------------
import useMasterInputs from '@/hooks/useMasterInputs';
// Components -----------------------------------------------------------------------
import CardForm from './CardForm';
// Data -----------------------------------------------------------------------------
import { abilitiesPossible, dataStructureObj_baseData, dataStructureObj_quote } from '@/data/character';
import { raceData } from '@/data/raceData';
import { classData } from '@/data/classData';
// Other ----------------------------------------------------------------------------
import { callAPI, convertObjToArry, isObj } from '@/util';
import { generateAbilityScores } from '@/util/character';


//______________________________________________________________________________________
// ===== Component =====

const ModifyForm = ({ character=null }) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const races = convertObjToArry(raceData);
    const classes = convertObjToArry(classData);

    const dataStructure = [
        dataStructureObj_baseData.visibility,
        dataStructureObj_baseData.name,
        dataStructureObj_baseData.level,
        dataStructureObj_baseData.hitpoints,
        dataStructureObj_baseData.armor,
        {...dataStructureObj_baseData.race, options:races},
        {...dataStructureObj_baseData.classes, options:classes},
        dataStructureObj_baseData.initative,
        dataStructureObj_baseData.speed,
    ];

    const baseDataToFillInputState = {
        visibility: character && character.visibility ? character.visibility : null,
        name: character && character.name ? character.name : null,
        level: character && character.baseData && character.baseData.level ? character.baseData.level : null,
        hitpoints: character && character.baseData && character.baseData.hitpoints ? character.baseData.hitpoints : null,
        armor: character && character.baseData && character.baseData.armor ? character.baseData.armor : null,
        race: character && character.baseData && character.baseData.race ? character.baseData.race : null,
        classes: character && character.baseData && character.baseData.classes && character.baseData.classes[0] ? character.baseData.classes[0] : null,
        initative: character && character.baseData && character.baseData.initative ? character.baseData.initative : null,
        speed: character && character.baseData && character.baseData.speed ? character.baseData.speed : null,
    }

    
    //______________________________________________________________________________________
    // ===== Component State =====
    const [openTab, setOpenTab] = useState("card");
    const [isSaving, setIsSaving] = useState(false);
    const [redirectTo, setRedirectTo] = useState(null);



    //______________________________________________________________________________________
    // ===== Component Hooks =====
    const baseInputsHook = useMasterInputs(true, dataStructure, character ? baseDataToFillInputState : null);
    const abilitiesInputsHook = useMasterInputs(true, abilitiesPossible, isObj(character, ["abilities"]) ? generateAbilityScores(character.abilities) : null);
    const quoteInputsHook = useMasterInputs(true, [dataStructureObj_quote], character && character.baseData && character.baseData.quote ? { quote: character.baseData.quote } : null);



    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if(redirectTo){
            redirect(redirectTo);
        }
    }, [redirectTo])
    



    //______________________________________________________________________________________
    // ===== Functions Used Only Within useEffects =====

    const handleSave = async () => {
        const { done, character: savedCharacter } = await callAPI(
            { url: "character", method: isObj(character, ["id" ]) ? "PUT" : "POST" }, 
            { 
                characterId: isObj(character, ["id" ]) ? character.id : null,
                baseDataInputState: baseInputsHook.dynamicInputState, 
                abilitiesInputState: abilitiesInputsHook.dynamicInputState,
                quoteInputState: quoteInputsHook.dynamicInputState
            }
        );
        // console.log({ done, savedCharacter });

        if(done && isObj(savedCharacter, [ 'id' ])){
            setRedirectTo(`/characters/${savedCharacter.id}/edit/image`);
        } else {
            //TODO: add error msg
            setIsSaving(false);
        }
    }



    //______________________________________________________________________________________
    // ====== useEffects =====

    useEffect(() => {
        if(isSaving){
            handleSave();
        }
    }, [isSaving])
    


    //______________________________________________________________________________________
    // ===== Handler Functions =====

    const handleTabClick = (e, key) => {
        e.preventDefault();
        if(openTab !== key){
            setOpenTab(key);
        }
    }




    //______________________________________________________________________________________
    // ===== Render Functions =====

    const renderForm = () => {
        if(openTab === "card"){
            return (
                <CardForm
                    races={races}
                    classes={classes}
                    character={character}
                    baseDataInputState={baseInputsHook.dynamicInputState}
                    setBaseDataInputState={baseInputsHook.setDynamicInputState}
                    abilitiesInputState={abilitiesInputsHook.dynamicInputState}
                    setAbilitiesInputState={abilitiesInputsHook.setDynamicInputState}
                    quoteInputState={quoteInputsHook.dynamicInputState}
                    setQuoteInputState={quoteInputsHook.setDynamicInputState}
                />
            )
        }
        else if (openTab === "standard"){
            return (
                <div>
                    {baseInputsHook.renderInputsSection()}
                    {abilitiesInputsHook.renderInputsSection()}
                    {quoteInputsHook.renderInputsSection()}
                </div>
            )
        }
    }



    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <div>
            <p>
                You can enter your character's information in either the Card form or in the Standard input form. Any information you enter in one form will stay on the other! So no worries about switching between the two tabs! If you leave the page without saving, thats when your data will be lost.
            </p>
            <div className={styles.container}>
                <ul className="nav nav-tabs" style={{marginLeft: '5px', paddingLeft: '50px' }}>
                    <li className={`nav-item ${styles.tabButton}`}>
                        <a 
                            style={{textDecoration: 'none' }} 
                            href={`#open_tab_card`}
                            className={`nav-link ${openTab === "card" ? styles.tabButtonLinkActive : ""} ${styles.tabButtonLink}`} 
                            onClick={(e)=>{handleTabClick(e, "card")}}
                        >
                            Card Form
                        </a> 
                    </li>
                    <li className={`nav-item ${styles.tabButton}`}>
                        <a 
                            style={{textDecoration: 'none' }} 
                            href={`#open_tab_standard`}
                            className={`nav-link ${openTab === "standard" ? styles.tabButtonLinkActive : ""} ${styles.tabButtonLink}`} 
                            onClick={(e)=>{handleTabClick(e, "standard")}}
                        >
                            Standard Form
                        </a> 
                    </li>
                </ul>
                <br/>
                <br/>
                {renderForm()}
            </div>

            <div className="d-grid gap-2" style={{textAlign: 'center'}}>
                <button
                    type="button"
                    className={`btn btn-${isSaving ? "outline-" : ""}success`}
                    style={{marginBottom: "10px", marginTop: "15px"}}
                    onClick={() => { setIsSaving(true) }}
                    disabled={isSaving}
                >
                    {isSaving ? "...Saving Character..." : "Save Character"}
                </button>
            </div>
        </div>
    )
}
export default ModifyForm;