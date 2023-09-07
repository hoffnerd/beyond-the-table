"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from 'react';
import { useSWRConfig } from 'swr';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/Tabs.module.css'
// Hooks ----------------------------------------------------------------------------
import useRedirect from '@/hooks/useRedirect';
import useMasterInputs from '@/hooks/useMasterInputs';
// Components -----------------------------------------------------------------------
import CardForm from './CardForm';
// Data -----------------------------------------------------------------------------
import { abilitiesPossible, characterBaseData, characterQuote } from '@/data/character';
// Other ----------------------------------------------------------------------------
import { callAPI, convertObjToArray, fireSwal, isObj } from '@/util';
import { generateAbilityScores, processCharacter } from '@/util/character';


//______________________________________________________________________________________
// ===== Component =====

const ModifyForm = ({ character=null, type="create", runMutation=null }) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const dataStructure = convertObjToArray(characterBaseData);

    const baseDataToFillInputState = {
        visibility: character && character.visibility ? character.visibility : null,
        name: character && character.name ? character.name : null,
        level: character && character.baseData && character.baseData.level ? character.baseData.level : null,
        hitpoints: character && character.baseData && character.baseData.hitpoints ? character.baseData.hitpoints : null,
        armor: character && character.baseData && character.baseData.armor ? character.baseData.armor : null,
        race: character && character.baseData && character.baseData.race ? character.baseData.race : null,
        classes: character && character.baseData && character.baseData.classes && character.baseData.classes[0] ? character.baseData.classes[0] : null,
        initiative: character && character.baseData && character.baseData.initiative ? character.baseData.initiative : character && character.baseData && character.baseData.initative ? character.baseData.initative : null,
        speed: character && character.baseData && character.baseData.speed ? character.baseData.speed : null,
    }

    
    //______________________________________________________________________________________
    // ===== Component State =====
    const [openTab, setOpenTab] = useState("card");
    const [isSaving, setIsSaving] = useState(false);



    //______________________________________________________________________________________
    // ===== Component Hooks =====
    const [ setRedirect ] = useRedirect();
    const { mutate: globalMutate } = useSWRConfig();
    const baseInputsHook = useMasterInputs(true, dataStructure, character ? baseDataToFillInputState : null);
    const abilitiesInputsHook = useMasterInputs(true, abilitiesPossible, isObj(character, ["abilities"]) ? generateAbilityScores(character.abilities) : null);
    const quoteInputsHook = useMasterInputs(true, [characterQuote], character && character.baseData && character.baseData.quote ? { quote: character.baseData.quote } : null);
    


    //______________________________________________________________________________________
    // ====== useEffects =====

    useEffect(() => {
        if(isSaving) handleSave();
    }, [isSaving])



    //______________________________________________________________________________________
    // ===== Handler Functions =====

    const handleTabClick = (e, key) => {
        e.preventDefault();
        if(openTab !== key) setOpenTab(key);
    }

    const handleError = (message) => {
        fireSwal({ icon: "error", text: message })
        setIsSaving(false);
    }

    const clearCache = async (savedCharacterId) => {
        const inputVisibility = baseInputsHook && isObj(baseInputsHook.dynamicInputState, [ "visibility" ]) ? baseInputsHook.dynamicInputState.visibility : null;
        if(inputVisibility === "PUBLIC" || (inputVisibility !== "PUBLIC" && character && character.visibility === "PUBLIC")){
            // clear the cache of the call used on the characters page
            await globalMutate(`/api/characters`, undefined);
        }

        // clear the cache of the call used on the dashboard
        await globalMutate(`/api/auth/characters`, undefined);
        
        // redirect to new character
        setRedirect(`/characters/${savedCharacterId}/edit/image`);
    }

    const handleUpdate = async (processedCharacter) => {
        const {error, message, dataObj: savedCharacter } = await runMutation("update", { character: processedCharacter });
        console.log({error, message, savedCharacter})

        if((!error) && isObj(savedCharacter, [ 'id' ])){
            await clearCache(savedCharacter.id);
        } else {
            handleError(message);
        }
        return !error;
    }

    const handleCreate = async (processedCharacter) => {
        const [ done, message, savedCharacter ] = await callAPI( { url: "character", method: "POST" }, { character: processedCharacter } );
        console.log({done, message, savedCharacter})

        if(done && isObj(savedCharacter, [ 'id' ])){
            await clearCache(savedCharacter.id);
        } else {
            handleError(message);
        } 
        return done;
    }

    const handleSave = async () => {

        // error out if wrong type passed in
        if(!(type === "create" || type === "update")) return console.error("Invalid type in handleSave", { type });

        // payload to pass both create and update
        const characterId = isObj(character, ["id" ]) ? character.id : null;
        const processedCharacter = processCharacter(characterId, baseInputsHook.dynamicInputState, abilitiesInputsHook.dynamicInputState, quoteInputsHook.dynamicInputState);
        
        // handle create, return at the end for never nesting
        if(type === "create") return await handleCreate(processedCharacter);

        // run update mutation
        return await handleUpdate(processedCharacter);
    }




    //______________________________________________________________________________________
    // ===== Render Functions =====

    const renderForm = () => {
        if(openTab === "card"){
            return (
                <CardForm
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
        return (
            <Fragment>
                {baseInputsHook.renderInputsSection()}
                {abilitiesInputsHook.renderInputsSection()}
                {quoteInputsHook.renderInputsSection()}
            </Fragment>
        )
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