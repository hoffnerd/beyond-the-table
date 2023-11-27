"use client";

// React/Next -----------------------------------------------------------------------
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/pages/Character.module.css'
// Contexts -------------------------------------------------------------------------
import { useAppContext } from '@/context/AppContext';
// Hooks ----------------------------------------------------------------------------
import useRedirect from '@/hooks/useRedirect';
import useSWRFetch from '@/hooks/useSWRFetch';
// Components -----------------------------------------------------------------------
import CharacterCard from '@/components/character/cards/CharacterCard';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';
import { isCharacterVisible } from '@/util/character';
import SkillsCard from '@/components/character/cards/SkillsCard';



//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const PageBody = ({id, loadingCardComponent, noCharacterComponent}) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const SWROptions = { revalidateIfStale: false, revalidateOnFocus: false };
    const options = { dataType: "object" };



    //______________________________________________________________________________________
    // ===== State from Auth =====
    const { data: session, status} = useSession();



    //______________________________________________________________________________________
    // ===== State from Context =====
    const { sidebarOpen } = useAppContext();



    //______________________________________________________________________________________
    // ===== Hooks =====
    const [ setRedirect ] = useRedirect();
    const { isLoading, error, data: character } = useSWRFetch(`character?id=${id}`, SWROptions, null, options);



    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if(status === "loading" || !isObj(character, ["id"])) return;
        if( !isCharacterVisible(character, session) ) setRedirect("/characters");
    }, [status, session, character])
    


    
    //______________________________________________________________________________________
    // ===== Render Functions =====

    const renderCards = () => (
        <div className={` ${styles.cardSection} ${styles.columns} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
            <div className={styles.spacer} />
            <CharacterCard character={character} />
            <SkillsCard character={character} />
            <div className={styles.spacer} />
        </div>
    )

    const renderLoading = () => (
        <div className={` ${styles.cardSection} ${styles.columns} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
            <div className={styles.spacer} />
            {loadingCardComponent}
            {loadingCardComponent}
            <div className={styles.spacer} />
        </div>
    )


    
    //______________________________________________________________________________________
    // ===== Component Return =====
    if (status === "loading" || isLoading) return renderLoading();
    if (error || !isObj(character, ["id"])) return noCharacterComponent;
    return renderCards();
}
export default PageBody;