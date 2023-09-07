"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect } from 'react';
import { useSession } from 'next-auth/react';
// Styles ---------------------------------------------------------------------------
// Hooks ----------------------------------------------------------------------------
import useRedirect from '@/hooks/useRedirect';
import useSWRFetch from '@/hooks/useSWRFetch';
// Components -----------------------------------------------------------------------
import LoadingCard from '@/components/character/cards/LoadingCard';
import NoCharacter from '@/components/character/NoCharacter';
import CharacterCard from '@/components/character/cards/CharacterCard';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';
import { isCharacterVisible } from '@/util/character';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';



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
    const [ setRedirect ] = useRedirect();
    const { isLoading, error, data: character } = useSWRFetch(`character?id=${id}`, SWROptions, null, options);
    // const [ initialized, character ] = useFetch({ url: `character?id=${id}` });

    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if(status === "loading" || !isObj(character, ["id"])) return;
        if( !isCharacterVisible(character, session) ) setRedirect("/characters");
    }, [status, session, character])
    

    //______________________________________________________________________________________
    // ===== Component Return =====
    // return(
    //     <LazyLoadImage
    //         alt={"test"}
    //         src={"/images/jameswebb2022_1.jpg"}
    //         placeholderSrc={"/images/gwent/campaign.webp"}
    //         width={1000} 
    //         height={1000}
    //         effect="blur"
    //     />
    // )
    if (status === "loading" || isLoading) return <LoadingCard/>;
    if (error || !isObj(character, ["id"])) return <NoCharacter/>;
    return <CharacterCard character={character} />;
}
export default PageBody;