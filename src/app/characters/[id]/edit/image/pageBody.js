"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect } from 'react';
import { useSession } from 'next-auth/react';
// Styles ---------------------------------------------------------------------------
// import styles from '@/styles/components/ImageUpload.module.css'
import styles from '@/styles/components/multiformGrid.module.css'
// Hooks ----------------------------------------------------------------------------
import useRedirect from '@/hooks/useRedirect';
import useSWRFetch from '@/hooks/useSWRFetch';
// Components -----------------------------------------------------------------------
import Loading from '@/components/layout/Loading';
import NoCharacter from '@/components/character/NoCharacter';
import ImagePlacement from '@/components/character/uploads/ImagePlacement';
import Uploader from '@/components/character/uploads/Uploader';
import UploadedImages from '@/components/character/uploads/UploadedImages';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';
import { isCharactersOwner } from '@/util/character';
import { useAppContext } from '@/context/AppContext';



//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const PageBody = ({id}) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const SWROptions = { revalidateIfStale: false, revalidateOnFocus: false };
    const options = { dataType: "object", pathUpdate: "character/image", pathInvalidateAfterMutate: "auth/characters"};


    //______________________________________________________________________________________
    // ===== State from Auth =====
    const { data: session, status} = useSession();

    //______________________________________________________________________________________
    // ===== State from AppContext =====
    const {sidebarOpen, setSelectedImage} = useAppContext();

    //______________________________________________________________________________________
    // ===== Hooks =====
    const [ setRedirect ] = useRedirect();
    const { isLoading, error, data: character, runMutation } = useSWRFetch(`character?id=${id}`, SWROptions, null, options);

    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if(status === "loading" || !isObj(character, ["id"])) return;
        if( !isCharactersOwner(character, session) ) setRedirect("/characters");
    }, [status, session, character])

    useEffect(() => {
        if(character && character.image && character.image.filename){
            setSelectedImage(character.image.filename);
        } else {
            setSelectedImage(null);
        }
    }, [character])

    //______________________________________________________________________________________
    // ===== Component Return =====
    if (status === "loading" || isLoading) return <Loading center={true} />;
    if (error || !isObj(character, ["id"])) return <NoCharacter/>;
    return (
        <div className={styles.multiformGrid}>
            <ImagePlacement character={character} runMutation={runMutation} />
            <div className={`${styles.rightForm} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
                <Uploader />
                <div className={styles.heightScroller}>
                    <UploadedImages />
                </div>
            </div>
        </div>
    );
}
export default PageBody;