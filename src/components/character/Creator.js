"use client";

// React/Next -----------------------------------------------------------------------
import { useEffect, useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import { useSWRConfig } from 'swr';
// Styles ---------------------------------------------------------------------------
import homeStyles from '@/styles/components/PageWrapper.module.css'
import styles from '@/styles/components/Creator.module.css'
// Hooks ----------------------------------------------------------------------------
import useRedirect from '@/hooks/useRedirect';
import useCharacterOrigin from '@/hooks/creator/useCharacterOrigin';
import useCharacterClass from '@/hooks/creator/useCharacterClass';
import useCharacterAbilities from '@/hooks/creator/useCharacterAbilities';
import useCharacterImages from '@/hooks/creator/useCharacterImages';
import useCharacterOther from '@/hooks/creator/useCharacterOther';
// Components -----------------------------------------------------------------------
import CharacterCard from './cards/CharacterCard';
// Data -----------------------------------------------------------------------------
import { creatorProcessArray } from '@/data/character';
// Other ----------------------------------------------------------------------------
import { fireSwal, isObj } from '@/util';
import { fetcher } from '@/util/fetcher';
import { processCharacter_experimental as processCharacter, unprocessCharacter } from '@/util/character';
import SkillsCard from './cards/SkillsCard';
import CardBack from './cards/CardBack';


 
//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const Creator = ({ character=null, runMutation=null }) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const unprocessedCharacter = isObj(character, ["id"]) ? unprocessCharacter(character) : null
    const processKeys = creatorProcessArray.map(creatorProcessObj => creatorProcessObj.key);

    //______________________________________________________________________________________
    // ===== State from AppContext =====
    const { sidebarOpen, activeSidebarAction, setActiveSidebarAction } = useAppContext();

    //______________________________________________________________________________________
    // ===== Hooks =====
    const [ setRedirect ] = useRedirect();
    const { mutate: globalMutate } = useSWRConfig();
    const { renderForm: renderOriginForm, data: originData } = useCharacterOrigin(unprocessedCharacter);
    const { renderForm: renderClassForm, data: classData } = useCharacterClass(unprocessedCharacter);
    const { renderForm: renderAbilitiesForm, data: abilitiesData } = useCharacterAbilities(unprocessedCharacter);
    const { renderForm: renderImagesForm, data: imagesData } = useCharacterImages(unprocessedCharacter);
    const { renderForm: renderOtherForm, data: otherData } = useCharacterOther(unprocessedCharacter);
    

    
    //______________________________________________________________________________________
    // ===== Component State =====
    const [card, setCard] = useState("character"); // character, skills, back
    const [isSaving, setIsSaving] = useState(false);



    //______________________________________________________________________________________
    // ===== Use Effects =====

    /**
     * Use effect that controls when we save the character
     */
    useEffect(() => {
        if(!isSaving) return;
        handleSave();
    }, [isSaving]);


    //______________________________________________________________________________________
    // ===== Read Functions =====

    /**
     * Runs the `processCharacter` util function with the data from the hooks and return that character as if it was gotten from the database
     * @returns object, the character as if it was gotten from the database
     */
    const readProcessedCharacterData = () => processCharacter(null, { ...originData, ...classData, ...abilitiesData, ...imagesData, ...otherData });

    /**
     * Returns the indexes of the current, previous, and next processes in the process array, taking into account edge cases.
     * @returns object with three properties: `backProcessIndex`, `currentProcessIndex`, and `nextProcessIndex`.
     */
    const readProcessIndexes = () => {
        const currentProcessIndex = processKeys.indexOf(activeSidebarAction);
        const backProcessIndex = currentProcessIndex - 1;
        const nextProcessIndex = currentProcessIndex + 1;
        return{
            backProcessIndex: backProcessIndex < 0 ? 0 : backProcessIndex,
            currentProcessIndex,
            nextProcessIndex: nextProcessIndex >= processKeys.length ? processKeys.length-1 : nextProcessIndex,
        }
    }

    /**
     * Returns the objects of the current, previous, and next processes in the process array.
     * @returns object with three properties: `backProcessObj`, `currentProcessObj`, and `nextProcessObj`.
     */
    const readProcessObject = () => {
        const { backProcessIndex, currentProcessIndex, nextProcessIndex } = readProcessIndexes();
        return{
            backProcessObj: creatorProcessArray[backProcessIndex],
            currentProcessObj: creatorProcessArray[currentProcessIndex],
            nextProcessObj: creatorProcessArray[nextProcessIndex],
        }
    }



    //______________________________________________________________________________________
    // ===== Conditional Functions =====

    /**
     * Checks if the current process index is at the maximum index based on the given type.
     * @param [type=next] - string, specifies the type of action to check. It can have two possible values: "next" or "back".
     * @returns boolean - true if there is not another index to move to, false if there is
     */
    const actionTypeAtMaxIndex = (type="next") => {
        const { backProcessIndex, currentProcessIndex, nextProcessIndex } = readProcessIndexes();
        if(type === "next") return currentProcessIndex >= nextProcessIndex;
        if(type === "back") return currentProcessIndex <= backProcessIndex;
        return false;
    }



    //______________________________________________________________________________________
    // ===== Handler Functions =====

    /**
     * Handles the change of process based on the type of action (next or back) and updates the active sidebar action accordingly.
     * @param [type=next] - string, determines the action to be taken. It can have two possible values: "next" or "back".
     */
    const handleProcessChange = (type="next") => {

        // if next was clicked and there is no next process, assume we want to save the data
        if(type === "next" && actionTypeAtMaxIndex()) return setIsSaving(true);

        // get the index to set to 
        const { backProcessIndex, currentProcessIndex, nextProcessIndex } = readProcessIndexes();
        const indexToUse = type === "next" ? nextProcessIndex : type === "back" ? backProcessIndex : currentProcessIndex;

        // set the process based on the indexToUse
        setActiveSidebarAction(processKeys[indexToUse]);
        window.scrollTo(0, 0);
    }

    /**
     * Responsible for clearing the SWR Cache for the routes needed.
     */
    const clearCache = async (savedCharacter) => {

        // get the saved character's visibility
        const visibility = isObj(savedCharacter, [ "visibility" ]) ? savedCharacter.visibility : null;

        // check if the character's visibility saved as a public OR if it isnt public but was public previously
        if(visibility === "PUBLIC" || (visibility !== "PUBLIC" && character && character.visibility === "PUBLIC")){
            // clear the cache of the call used on the characters page
            await globalMutate(`/api/characters`, undefined);
        }

        // clear the cache of the call used on the dashboard
        await globalMutate(`/api/auth/characters`, undefined);
    }

    /**
     * Responsible for creating a new character in the database and displaying an error message if an error occurred.
     * @returns savedCharacter - object, represents the updated character that was updated in the DB.
     */
    const updateCharacter = async (characterToSave) => {

        // run the mutation to update the existing character
        const {error, message, dataObj: savedCharacter } = await runMutation("update", { character: { ...characterToSave, id:character.id } });

        // sweet alert if there is an error
        if(error) fireSwal({ icon: "error", text: message ? message : "Something went wrong!" });
        if(!isObj(savedCharacter, [ "id" ])) fireSwal({ icon: "error", text: "Something went wrong!" });

        // return the updated character
        return savedCharacter;
    }


    /**
     * Responsible for creating a new character in the database and displaying an error message if an error occurred.
     * @returns savedCharacter - object, represents the new character that was created in the DB.
     */
    const createCharacter = async (characterToSave) => {

        // create the new character in the database
        const [ done, message, savedCharacter ] = await fetcher(`character`, { method:"POST" }, { character:characterToSave });

        // sweet alert if there is an error
        if(!done) fireSwal({ icon: "error", text: message ? message : "Something went wrong!" });
        if(!isObj(savedCharacter, [ "id" ])) fireSwal({ icon: "error", text: "Something went wrong!" });

        // return the new character
        return savedCharacter;
    }

    /**
     * Responsible for creating a new character in the database, updating the saving state, and displaying success or error messages.
     */
    const handleSave = async () => {
        const characterToSave = readProcessedCharacterData();
        let savedCharacter = null;

        // decide how to save the the character, update or create
        if(isObj(character, [ "id" ])) savedCharacter = await updateCharacter(characterToSave); 
        else savedCharacter = await createCharacter(characterToSave);

        // reset the saving state
        setIsSaving(false);
        setActiveSidebarAction(processKeys[0]);
        
        if(!isObj(savedCharacter, [ "id" ])) return;

        // clear the caches needed 
        await clearCache(savedCharacter);

        // fire a success sweet alert and redirect to the new characters page
        fireSwal({ icon: "success", text: "Successfully Saved Character!" });
        setRedirect(`/characters/${savedCharacter.id}`);
    }



    //______________________________________________________________________________________
    // ===== Render Functions =====

    const renderCard = () => {
        const characterData = readProcessedCharacterData();

        return <>
            <section style={card === "character" ? {} : {display:"none"}}> <CharacterCard character={characterData} forceNoLoader={true}/> </section>
            <section style={card === "skills" ? {} : {display:"none"}}> <SkillsCard character={characterData} forceNoLoader={true}/> </section>
            <section style={card === "back" ? {} : {display:"none"}}> <CardBack character={characterData} forceNoLoader={true}/> </section>
        </>
    }

    /**
     * Renders two buttons, one for going back and one for continuing, with dynamic text and disabled state based on the current process object.
     * @returns div containing two buttons to render.
     */
    const renderButtons = () => {

        // get the objects within the process array
        const { backProcessObj, currentProcessObj, nextProcessObj } = readProcessObject();

        // button text based on the process objects
        const backButtonText = isObj(currentProcessObj, ["key"]) && isObj(backProcessObj, [ "key", "display" ]) && currentProcessObj.key !== backProcessObj.key ? `Back to ${backProcessObj.display}` : "Back";
        const nextButtonText = isObj(currentProcessObj, ["key"]) && isObj(nextProcessObj, [ "key", "display" ]) && currentProcessObj.key !== nextProcessObj.key ? `Continue to ${nextProcessObj.display}` : "Continue"
        const saveButtonText = isSaving ? "...Saving..." : "Save Character";

        // buttons disabled state
        const isBackDisabled = actionTypeAtMaxIndex("back");
        const isNextDisabled = actionTypeAtMaxIndex();

        // render the buttons
        return (
            <div className="flex-items-evenly">
                <button
                    type="button"
                    className={`btn btn-lg btn-${isBackDisabled ? "outline-" : ""}danger`}
                    onClick={() => { handleProcessChange("back") }}
                    disabled={isBackDisabled}
                >
                    {backButtonText}
                </button>
                <button
                    type="button"
                    className={`btn btn-lg btn-${isNextDisabled ? isSaving ? "outline-success" : "success" : "primary"}`}
                    onClick={() => { handleProcessChange() }}
                >
                    {isNextDisabled ? saveButtonText : nextButtonText}
                </button>
            </div>
        )
    }

    /**
     * Renders a form based on the value of the `activeSidebarAction` variable.
     * @returns Returns a form based on the value of the `activeSidebarAction` variable.
     */
    const renderForms = () => <>
        <section style={activeSidebarAction === "origin" ? {} : {display:"none"}}>{renderOriginForm()}</section>
        <section style={activeSidebarAction === "class" ? {} : {display:"none"}}>{renderClassForm()}</section>
        <section style={activeSidebarAction === "abilities" ? {} : {display:"none"}}>{renderAbilitiesForm()}</section>
        <section style={activeSidebarAction === "images" ? {} : {display:"none"}}>{renderImagesForm()}</section>
        <section style={activeSidebarAction === "other" ? {} : {display:"none"}}>{renderOtherForm()}</section>
    </>


    /**
     * Renders the header for the current section that is active
     * @returns header to render
     */
    const renderHeader = () => {
        const { currentProcessObj } = readProcessObject();
        if(!isObj(currentProcessObj, ["display"])) return <h2>Creator</h2>
        return <h2>{currentProcessObj.display}</h2>
    }



    //______________________________________________________________________________________
    // ===== Component Return =====
    return <>
        <div className={homeStyles.pagePanel}> {renderHeader()} <br/> </div>
        <div className={`${styles.creatorGrid} ${styles.columns} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed} tw-gap-3`}>
            <div id="formSection" className={styles.formSection}> {renderForms()} </div>

            <div style={{position:"relative"}}>
                <h3 className="tw-text-center">Card Preview</h3>
                <div className='branded-line' />
                <br/>
                <div className={styles.cardSection} >
                    {renderCard()}
                    <br/>
                    <div className="d-grid">
                        <button type="button" className={`btn btn-${card === "character" ? "outline-" : ""}brand`} onClick={()=>setCard("character")}>Character Card</button>
                        <button type="button" className={`btn btn-${card === "skills" ? "outline-" : ""}brand`} onClick={()=>setCard("skills")}>Skills Card</button>
                        <button type="button" className={`btn btn-${card === "back" ? "outline-" : ""}brand`} onClick={()=>setCard("back")}>Card Back</button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
        <br/>
        {renderButtons()}
    </>
}
export default Creator;