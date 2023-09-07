"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
// Styles ---------------------------------------------------------------------------
// Hooks ----------------------------------------------------------------------------
import useRedirect from '@/hooks/useRedirect';
// Components -----------------------------------------------------------------------
import Loading from '@/components/layout/Loading';
import NoCharacter from '@/components/character/NoCharacter';
import CharacterCard from '@/components/character/cards/CharacterCard';
// Other ----------------------------------------------------------------------------
import { callAPI, fireSwal, isObj } from '@/util';
import { isCharactersOwner } from '@/util/character';
import useSWRFetch from '@/hooks/useSWRFetch';
import { useSWRConfig } from 'swr';
import useMasterInputs from '@/hooks/useMasterInputs';



//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const PageBody = ({id}) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const dataStructure = [ { key:"nameToDelete", display: "Delete", type: "text" } ];
    const SWROptions = { revalidateIfStale: false, revalidateOnFocus: false };
    const options = { dataType: "object" };
    


    //______________________________________________________________________________________
    // ===== State from Auth =====
    const { data: session, status} = useSession();


    
    //______________________________________________________________________________________
    // ===== Component State =====
    const [isSaving, setIsSaving] = useState(false);



    //______________________________________________________________________________________
    // ===== Hooks =====
    const [ setRedirect ] = useRedirect();
    const { mutate: globalMutate } = useSWRConfig();
    const { isLoading, error, data: character } = useSWRFetch(`character?id=${id}`, SWROptions, null, options);
    const { renderInputsSection, dynamicInputState } = useMasterInputs(true, dataStructure);



    //______________________________________________________________________________________
    // ===== Use Effects =====

    useEffect(() => {
        if(status === "loading" || !isObj(character, ["id"])) return;
        if( !isCharactersOwner(character, session) ) setRedirect("/characters");
    }, [status, session, character])

    useEffect(() => {
        if(isSaving) handleSave();
    }, [isSaving])
    



    //______________________________________________________________________________________
    // ===== Functions Used Only Within useEffects =====

    const handleSave = async () => {
        const characterId = isObj(character, ["id" ]) ? character.id : null;
        const { done, message } = await callAPI( { url: `character?id=${characterId}`, method: "DELETE" } );

        if(done){

            // clear the cache of the call used on the dashboard so deleted character no longer appears
            await globalMutate(`/api/auth/characters`, undefined);

            // clear the cache of the call for the single character since we deleted it
            await globalMutate(`/api/character?id=${character.id}`, undefined);
            
            if(isObj(character, [ "visibility" ]) && character.visibility === "PUBLIC"){
                // clear the cache of the call used on the characters page so deleted character no longer appears
                await globalMutate(`/api/characters`, undefined);
            }

            // success
            fireSwal({ icon: "success", text: message ? message : "Success!" });
            setRedirect('/dashboard');
        } else {
            // error
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
    if (status === "loading" || isLoading) return <Loading center={true} />;
    if (error || !isObj(character, ["id"])) return <NoCharacter/>;
    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-md-6 alert alert-danger tw-text-center">
                    <h3>Are You Sure?</h3>
                    <p>Deleting this character is irreversible! Please type the character's name below and click delete to confirm this is what you want. Case Sensitive!</p>

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
                </div>
            </div>
            <br/>
            <CharacterCard character={character} />
        </Fragment>
    );
}
export default PageBody;