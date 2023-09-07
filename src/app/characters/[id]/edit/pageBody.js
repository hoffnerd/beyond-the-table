"use client";

// React/Next -----------------------------------------------------------------------
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
// Styles ---------------------------------------------------------------------------
// Hooks ----------------------------------------------------------------------------
import useSWRFetch from '@/hooks/useSWRFetch';
// Components -----------------------------------------------------------------------
import Loading from '@/components/layout/Loading';
import NoCharacter from '@/components/character/NoCharacter';
import ModifyForm from '@/components/character/ModifyForm';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';
import { isCharactersOwner } from '@/util/character';



//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const PageBody = ({id}) => {

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
    if (status === "loading" || isLoading) return <Loading center={true} />;
    if (error || !isObj(character, ["id"])) return <NoCharacter/>;
    return <ModifyForm character={character} type={"update"} runMutation={runMutation} />;
}
export default PageBody;