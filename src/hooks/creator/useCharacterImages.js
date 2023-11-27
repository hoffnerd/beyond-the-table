"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/Creator.module.css'
// Hooks ----------------------------------------------------------------------------
import useSWRFetch from '../useSWRFetch';
import useMasterInputs from '../useMasterInputs';
// Components -----------------------------------------------------------------------
import Loading from '@/components/layout/Loading';
import Uploader from '@/components/character/uploads/Uploader';
// Data -----------------------------------------------------------------------------
import { imageDetailsInputKeys, imageDetailsInputs, imagePositionInputKeys, imagePositionInputs, imageTabs } from '@/data/character';
// Other ----------------------------------------------------------------------------
import { extractObj, isArray, isObj } from '@/util';
import { renderFontAwesomeIcons } from '@/util/icons';


//______________________________________________________________________________________
// ===== Hook =====

const useCharacterImages = (unprocessedCharacter=null) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const SWROptions = { revalidateIfStale: false, revalidateOnFocus: false };
    const options = { mutateDataCreateLocation:"top" };



    //______________________________________________________________________________________
    // ===== Initial State =====

    const initialSelectedMainImage = isObj(unprocessedCharacter) && isObj(unprocessedCharacter.main, ["filename"]) ? unprocessedCharacter.main.filename : "";
    const initialSelectedBackImage = isObj(unprocessedCharacter) && isObj(unprocessedCharacter.back, ["filename"]) ? unprocessedCharacter.back.filename : "";
    
    const initialMainImagePosition = isObj(unprocessedCharacter) && isObj(unprocessedCharacter.main, imagePositionInputKeys, false) ? extractObj(unprocessedCharacter.main, imagePositionInputKeys, "") : null;
    const initialMainImageDetails = isObj(unprocessedCharacter) && isObj(unprocessedCharacter.main, imageDetailsInputKeys, false) ? extractObj(unprocessedCharacter.main, imageDetailsInputKeys, "") : null;
    const initialBackImagePosition = isObj(unprocessedCharacter) && isObj(unprocessedCharacter.back, imagePositionInputKeys, false) ? extractObj(unprocessedCharacter.back, imagePositionInputKeys, "") : null;
    const initialBackImageDetails = isObj(unprocessedCharacter) && isObj(unprocessedCharacter.back, imageDetailsInputKeys, false) ? extractObj(unprocessedCharacter.back, imageDetailsInputKeys, "") : null;



    //______________________________________________________________________________________
    // ===== Hook State =====
    const [openTab, setOpenTab] = useState("main");
    const [selectedMainImage, setSelectedMainImage] = useState(initialSelectedMainImage);
    const [selectedBackImage, setSelectedBackImage] = useState(initialSelectedBackImage);



    //______________________________________________________________________________________
    // ===== Hooks =====
    const { isLoading, error, data: uploads, runMutation } = useSWRFetch('uploads', SWROptions, null, options);

    const mainImagePosition = useMasterInputs(true, imagePositionInputs, initialMainImagePosition);
    const mainImageDetails = useMasterInputs(true, imageDetailsInputs, initialMainImageDetails);
    const backImagePosition = useMasterInputs(true, imagePositionInputs, initialBackImagePosition);
    const backImageDetails = useMasterInputs(true, imageDetailsInputs, initialBackImageDetails);



    //______________________________________________________________________________________
    // ===== Use Effects =====

    // useEffect(() => {
    // }, []);



    //______________________________________________________________________________________
    // ===== Render Functions =====

    /**
     * Renders a list of uploaded images as buttons, with each button displaying an image and toggling its state when clicked.
     * Note that the params listed below are being deconstructed from an array, just like the useState hook.
     * @param state - string, state of the component. It is used to determine which image button is currently selected.
     * @param setState - function, used to update the state of the component.
     * @returns a list of buttons, each representing an uploaded image.
     */
    const renderUploadedImageButtons = ([state, setState]) => {

        // show loader, error, or no uploads message based on SWR
        if(isLoading) return <Loading/>;
        if(error) return <div className='alert alert-danger'>An error has occurred trying to get your uploads!</div>;
        if(!isArray(uploads)) return <div className='alert alert-info'>You have not uploaded any images. Trying uploading one above.</div>;

        // return all uploaded images as buttons to be clicked
        return uploads.map((upload, index) => (
            <div key={upload.id ? upload.id : index} className="d-grid gap-2">
                <button 
                    type="button"
                    style={{ minHeight:"100px" }}
                    className={`btn btn-${state === upload.filename ? "" : "outline-"}card`}
                    onClick={ () => setState(prevState => prevState === upload.filename ? "" : upload.filename) } 
                >
                    <div className='flex-items-evenly'>
                        <div/> 
                        <LazyLoadImage
                            key={upload.filename}
                            alt={upload.filename} 
                            effect="blur"
                            src={`https://uploadthing.com/f/${upload.filename}`}
                            placeholderSrc={`/images/classBackground/basic_low.webp`}
                        />
                        <div/>
                    </div>
                </button>
            </div>
        ));
    }

    /**
     * Generates a list of tabs with different content based on the selected tab key.
     * @returns tab content to display to the user
     */
    const renderTabs = () => {

        // mapping of what to render based on the tab key
        const inputRenders = {
            main: { position: mainImagePosition.renderInputsSection, details: mainImageDetails.renderInputsSection, state: [ selectedMainImage, setSelectedMainImage ] },
            back: { position: backImagePosition.renderInputsSection, details: backImageDetails.renderInputsSection, state: [ selectedBackImage, setSelectedBackImage ] }
        }

        // loop and return all tabs
        return isArray(imageTabs) && imageTabs.map(({key, display}) => (
            <div key={key} className={openTab !== key ? "mockHide" : ""}>
                <br/>
                <div className={styles.tabTitle}>
                    <h3>{display}</h3>
                    <div className='branded-line' />
                </div>
                <br/>
                <h3>Images you have uploaded</h3>
                <div className='branded-line short' />
                <br/>
                <div className={`${styles.creatorGrid} ${styles.raceButtonColumns} tw-gap-3`}>
                    {renderUploadedImageButtons(inputRenders[key].state)}
                </div>
                <br/>
                <br/>
                <h3>Image position</h3>
                <div className='branded-line short' />
                <br/>
                {inputRenders[key].position()}
                <br/>
                <br/>
                <h3>Image Details</h3>
                <div className='branded-line short' />
                <br/>
                {inputRenders[key].details()}
            </div>
        ));
    }

    /**
     * Generates a list of tab buttons with corresponding links and styles.
     */
    const renderTabButtons = () => (
        <ul className="nav nav-tabs" style={{marginLeft: '5px', paddingLeft: '50px' }}>
            {isArray(imageTabs) && imageTabs.map(({key, display, icon}) => (
                <li key={key} className={`nav-item ${styles.tabButton}`}>
                    <a 
                        href={`#${key}`}
                        className={`nav-link ${openTab === key ? styles.tabButtonLinkActive : ""} ${styles.tabButtonLink}`} 
                        onClick={(e)=>{ e.preventDefault(); openTab !== key && setOpenTab(key); }}
                    >
                        <span className={styles.icon}>{renderFontAwesomeIcons(icon)}</span>
                        &nbsp;
                        <span className={styles.display}>{display}</span>
                    </a> 
                </li>
            ))}
        </ul>
    )



    //______________________________________________________________________________________
    // ===== Hook Return =====
    return {
        renderForm: () => (
            <Fragment>
                <h3>Upload Images</h3>
                <div className='branded-line short' />
                <br/>
                <Uploader runMutation={runMutation} />
                <br/>
                <br/>
                {renderTabButtons()}
                {renderTabs()}
            </Fragment>
        ), 
        data: {
            main: { filename: selectedMainImage, ...mainImagePosition.dynamicInputState, ...mainImageDetails.dynamicInputState },
            back: { filename: selectedBackImage, ...backImagePosition.dynamicInputState, ...backImageDetails.dynamicInputState }
        } 
    };
}
export default useCharacterImages;