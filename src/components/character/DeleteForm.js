"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
// Hooks ----------------------------------------------------------------------------
import useMasterInputs from '@/hooks/useMasterInputs';
// Other ----------------------------------------------------------------------------
import { callAPI, fireSwal, isObj } from '@/util';


//______________________________________________________________________________________
// ===== Component =====

const DeleteForm = ({ character }) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const dataStructure = [ { key:"nameToDelete", display: "Delete", type: "text" } ];


    
    //______________________________________________________________________________________
    // ===== Component State =====
    const [isSaving, setIsSaving] = useState(false);
    const [redirectTo, setRedirectTo] = useState(null);



    //______________________________________________________________________________________
    // ===== Component Hooks =====
    const { renderInputsSection, dynamicInputState } = useMasterInputs(true, dataStructure);



    //______________________________________________________________________________________
    // ===== Use Effects =====

    useEffect(() => {
        if(redirectTo) redirect(redirectTo);
    }, [redirectTo])

    useEffect(() => {
        if(isSaving) handleSave();
    }, [isSaving])
    



    //______________________________________________________________________________________
    // ===== Functions Used Only Within useEffects =====

    const handleSave = async () => {
        const characterId = isObj(character, ["id" ]) ? character.id : null;
        const { done, message } = await callAPI( { url: `character?id=${characterId}`, method: "DELETE" } );
        
        if(done){
            fireSwal({ icon: "success", text: message ? message : "Success!" })
            setRedirectTo(`/dashboard`);
        } else {
            fireSwal({ icon: "error", text: message ? message : "Something went wrong." })
            setIsSaving(false);
        }
    }
    

    //______________________________________________________________________________________
    // ===== Conditional Functions =====

    const inputStateMatchescharacterName = () => {
        return isObj(character, [ "name" ]) && isObj(dynamicInputState, [ "nameToDelete" ]) && dynamicInputState.nameToDelete === character.name;
    }
    


    //______________________________________________________________________________________
    // ===== Render Functions =====

    const renderMatchingText = () => {
        if( !isObj(dynamicInputState, [ "nameToDelete" ]) ) return;
        return <span> {character.name} <strong>{inputStateMatchescharacterName() ? "=" : "≠"}</strong> {isObj(dynamicInputState, [ "nameToDelete" ]) ? dynamicInputState.nameToDelete : ""}</span>
    }



    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <Fragment>
            {renderInputsSection()}

            {renderMatchingText()}
            
            <div className="d-grid gap-2" style={{textAlign: 'center'}}>
                <button
                    type="button"
                    className={`btn btn-${isSaving ? "outline-" : ""}danger`}
                    style={{marginBottom: "10px", marginTop: "15px"}}
                    onClick={() => { setIsSaving(true) }}
                    disabled={isSaving || (!inputStateMatchescharacterName())}
                >
                    {isSaving ? "...Deleting Character..." : "Delete Character"}
                </button>
            </div>
        </Fragment>
    )
}
export default DeleteForm;