"use client";

// React/Next -----------------------------------------------------------------------
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
// Styles ---------------------------------------------------------------------------
// Hooks ----------------------------------------------------------------------------
import useSWRFetch from '@/hooks/useSWRFetch';
// Components -----------------------------------------------------------------------
import Creator from '@/components/character/Creator';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';
import { isCharactersOwner } from '@/util/character';



//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const PageBody = ({ id, loadingComponent, noCharacterComponent }) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const SWROptions = { revalidateIfStale: false, revalidateOnFocus: false };
    const options = { dataType: "object" };

    //______________________________________________________________________________________
    // ===== State from Auth =====
    const { data: session, status} = useSession();

    //______________________________________________________________________________________
    // ===== Hooks =====
    const { isLoading, error, data: character, runMutation } = useSWRFetch(`character?id=${id}`, SWROptions, null, options);

    //______________________________________________________________________________________
    // ===== Use Effects =====

    useEffect(() => {
        if(status === "loading" || !isObj(character, ["id"])) return;
        if( !isCharactersOwner(character, session) ) redirect("/characters");
    }, [status, session, character])

    //______________________________________________________________________________________
    // ===== Component Return =====
    if (status === "loading" || isLoading) return loadingComponent;
    if (error || !isObj(character, ["id"])) return noCharacterComponent;
    return <Creator character={character} runMutation={runMutation} />;
}
export default PageBody;