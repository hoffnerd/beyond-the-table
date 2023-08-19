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
import CharacterCard from '@/components/character/cards/CharacterCard';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';
import { isCharacterVisible } from '@/util/character';



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
        if( !isCharacterVisible(character, session) ) setRedirect("/characters");
    }, [status, session, character])
    

    //______________________________________________________________________________________
    // ===== Component Return =====
    
    if (status === "loading" || character === "loading") return <Loading center={true} />;
    if (character === "error" || !isObj(character, ["id"])) return <NoCharacter/>;
    return <CharacterCard character={character} />;
}
export default PageBody;