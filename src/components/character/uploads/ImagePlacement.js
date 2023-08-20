"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Image from 'next/image';
// Styles ---------------------------------------------------------------------------
// import styles from '@/styles/components/ImageUpload.module.css'
import styles from '@/styles/components/multiformGrid.module.css'
// Context --------------------------------------------------------------------------
import { useAppContext } from '@/context/AppContext';
// Components -----------------------------------------------------------------------
import CharacterCard from '@/components/character/cards/CharacterCard';
// Hooks ----------------------------------------------------------------------------
import useMasterInputs from '@/hooks/useMasterInputs';
// Data -----------------------------------------------------------------------------
import { characterImageOffset } from '@/data/character';
// Other ----------------------------------------------------------------------------
import { callAPI, fireSwal, isObj } from '@/util';

//______________________________________________________________________________________
// ===== Component =====

const ImagePlacement = ({ character }) => {

    //______________________________________________________________________________________
    // ===== State from AppContext =====
    const {sidebarOpen, selectedImage, setSelectedImage} = useAppContext();

    //______________________________________________________________________________________
    // ===== Component State =====
    const [redirectTo, setRedirectTo] = useState(null);
    const [saving, setSaving] = useState(false);

    //______________________________________________________________________________________
    // ===== Component Hooks =====
    const { renderInputsSection, dynamicInputState } = useMasterInputs(true, characterImageOffset, 
        isObj(character, ["image"]) ? { 
            zoom: character.image.zoom ? character.image.zoom : "",
            x: character.image.x ? character.image.x : "",
            y: character.image.y ? character.image.y : "",
        } : null
    );

    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if (redirectTo) redirect(redirectTo);
    }, [redirectTo])

    useEffect(() => {
        if(saving) handleSave();
    }, [saving])


    //______________________________________________________________________________________
    // ===== Handler Functions =====
    const handleSave = async () => {

        const { done, message } = await callAPI({  url:"character/image", method: "POST" }, { characterId: character.id, selectedImage, ...dynamicInputState });
        
        if(done){
            fireSwal({ icon: "success", text: "Successfully uploaded Image!" });
            setRedirectTo(`/characters/${character.id}`);
        } else {
            fireSwal({icon:"error", text: message ? message : "Something has gone wrong! "});
            setSaving(false);
        }
    }

    //______________________________________________________________________________________
    // ===== Component =====
    return (
        <div className={`${styles.centerForm} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
            <h3 className="text-center">Edit Character Image</h3>
            <CharacterCard character={character} imageOverride={{ filename: selectedImage, ...dynamicInputState }} />
            <br />
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    {renderInputsSection()}
                </div>
            </div>

            <br />

            <div className="d-grid gap-2" style={{textAlign: 'center'}}>
                <button
                    type="button"
                    className={`btn btn-${saving ? "outline-" : ""}success`}
                    style={{marginBottom: "10px", marginTop: "15px"}}
                    onClick={() => { setSaving(true) }}
                    disabled={saving}
                >
                    {saving ? "...Saving..." : "Save Image"}
                </button>
            </div>
        </div>
    )

}
export default ImagePlacement;