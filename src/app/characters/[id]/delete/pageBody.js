"use client";

// React/Next -----------------------------------------------------------------------
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useSWRConfig } from 'swr';
// Styles ---------------------------------------------------------------------------
// Hooks ----------------------------------------------------------------------------
import useRedirect from '@/hooks/useRedirect';
import useMasterInputs from '@/hooks/useMasterInputs';
import useSWRFetch from '@/hooks/useSWRFetch';
// Components -----------------------------------------------------------------------
import Loading from '@/components/layout/Loading';
import CharacterPageBody from '../pageBody';
// Other ----------------------------------------------------------------------------
import { fireSwal, isObj } from '@/util';
import { isCharactersOwner } from '@/util/character';



//______________________________________________________________________________________
// ===== Component =====

/* This is the deletion character page */
const PageBody = ({id, loadingCardComponent, noCharacterComponent}) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const SWROptions = { revalidateIfStale: false, revalidateOnFocus: false };
    const options = { dataType: "object", pathDelete: "character" };



    //______________________________________________________________________________________
    // ===== State from Auth =====
    const { data: session, status} = useSession();


    
    //______________________________________________________________________________________
    // ===== Component State =====
    const [isDeleting, setIsDeleting] = useState(false);



    //______________________________________________________________________________________
    // ===== Hooks =====
    const [ setRedirect ] = useRedirect();
    const { mutate: globalMutate } = useSWRConfig();
    const { renderInputsSection, dynamicInputState } = useMasterInputs(true, [ { key:"deleteConfirmation", display: "Delete", type: "text" } ]);
    const { isLoading, error, data: character, runMutation } = useSWRFetch(`character?id=${id}`, SWROptions, null, options);



    //______________________________________________________________________________________
    // ===== Use Effects =====

    useEffect(() => {
        if(status === "loading" || !isObj(character, ["id"])) return;
        if( !isCharactersOwner(character, session) ) setRedirect("/characters");
    }, [status, session, character])

    useEffect(() => {
        if(!isDeleting) return;
        handleSave();
    }, [isDeleting])
    


    //______________________________________________________________________________________
    // ===== Functions Used Only Within useEffects =====

    const handleSave = async () => {
        // const { done, message } = await fetcher( `character`, { method:"DELETE" }, { id } );
        const {error, message } = await runMutation("delete", { id:character.id });

        // return early with a swal if theres an error
        if(error) {
            setIsDeleting(false);
            return fireSwal({ icon: "error", text: message ? message : "Something went wrong!" })
        }

        // clear the cache of the call for the dashboard
        await globalMutate(`/api/auth/characters`, undefined);

        // clear the cache of the call for the single character since we deleted it
        await globalMutate(`/api/character?id=${character.id}`, undefined);
        
        // clear the cache of the call used on the characters page so deleted character no longer appears
        if(isObj(character, [ "visibility" ]) && character.visibility === "PUBLIC") await globalMutate(`/api/characters`, undefined);

        // success
        fireSwal({ icon: "success", text: message ? message : "Success!" });
        setRedirect('/dashboard');
    }



    //______________________________________________________________________________________
    // ===== Component Return =====
    if (status === "loading" || isLoading) return <Loading center={true} centerScreen={true} />;
    if (error || !isObj(character, ["id"])) return noCharacterComponent;
    return <>
        <div className="row justify-content-center">
            <div className="col-md-6 alert alert-danger tw-text-center">
                <h3>Are You Sure?</h3>
                <p>Deleting this character is irreversible! Please type "DELETE" below and click delete to confirm this is what you want.</p>

                {renderInputsSection()}
                
                <div className="d-grid gap-2" style={{textAlign: 'center'}}>
                    <button
                        type="button"
                        className={`btn btn-${isDeleting ? "outline-" : ""}danger`}
                        style={{marginBottom: "10px", marginTop: "15px"}}
                        onClick={() => { setIsDeleting(true) }}
                        disabled={isDeleting || (!isObj(dynamicInputState, [ "deleteConfirmation" ])) || dynamicInputState.deleteConfirmation.toLowerCase() !== "delete"}
                    >
                        {isDeleting ? "...Deleting Character..." : "Delete Character"}
                    </button>
                </div>
            </div>
        </div>
        <br/>
        {isDeleting ? <Loading center={true} /> : <CharacterPageBody id={id} loadingCardComponent={loadingCardComponent} noCharacterComponent={noCharacterComponent} /> }
    </>
}
export default PageBody;