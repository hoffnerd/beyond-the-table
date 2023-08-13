"use client";

// React/Next -----------------------------------------------------------------------
import { useEffect } from 'react';
// Context --------------------------------------------------------------------------
import { useAppContext } from '@/context/AppContext';
// Components -----------------------------------------------------------------------
import ImagePlacement from './ImagePlacement';
import Uploader from './Uploader';
import UploadedImages from './UploadedImages';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/ImageUpload.module.css'
// Other ----------------------------------------------------------------------------



//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const EditImageBody = ({character }) => {

    //______________________________________________________________________________________
    // ===== State from AppContext =====
    const {sidebarOpen, setSelectedImage} = useAppContext();
    

    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if(character && character.image && character.image.filename){
            setSelectedImage(character.image.filename);
        } else {
            setSelectedImage(null);
        }
    }, [character])


    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <div className={styles.uploadFormGrid}>
            <ImagePlacement character={character} />
            <div className={`${styles.selectCol} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
                <Uploader />
                <div className={styles.images}>
                    <UploadedImages />
                </div>
            </div>
        </div>
    )
}
export default EditImageBody;