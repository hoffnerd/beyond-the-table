"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect } from 'react';
import { useSession } from 'next-auth/react';
// Styles ---------------------------------------------------------------------------
// Hooks ----------------------------------------------------------------------------
import useRedirect from '@/hooks/useRedirect';
import useFetch from '@/hooks/useFetch';
// Components -----------------------------------------------------------------------
import Loading from '@/components/layout/Loading';
import NoCharacter from '@/components/character/NoCharacter';
import DeleteForm from '@/components/character/DeleteForm';
import CharacterCard from '@/components/character/cards/CharacterCard';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';
import { isCharactersOwner } from '@/util/character';



//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const PageBody = ({id}) => {

    //______________________________________________________________________________________
    // ===== State from Auth =====
    const { data: session, status} = useSession();

    //______________________________________________________________________________________
    // ===== Hooks =====
    const [ setRedirect ] = useRedirect();
    const [ initialized, character ] = useFetch({ url: `character?id=${id}` });

    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if(status === "loading" || !isObj(character, ["id"])) return;
        if( !isCharactersOwner(character, session) ) setRedirect("/characters");
    }, [status, session, character])

    //______________________________________________________________________________________
    // ===== Component Return =====
    if (status === "loading" || character === "loading") return <Loading center={true} />;
    if (character === "error" || !isObj(character, ["id"])) return <NoCharacter/>;
    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-md-6 alert alert-danger tw-text-center">
                    <h3>Are You Sure?</h3>
                    <p>Deleting this character is irreversible! Please type the character's name below and click delete to confirm this is what you want. Case Sensitive!</p>
                    <DeleteForm character={character} />
                </div>
            </div>
            <br/>
            <CharacterCard character={character} />
        </Fragment>
    );
}
export default PageBody;