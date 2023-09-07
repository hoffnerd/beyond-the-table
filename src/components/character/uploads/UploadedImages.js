"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
// Context --------------------------------------------------------------------------
import { useAppContext } from '@/context/AppContext';
// Components -----------------------------------------------------------------------
import Loading from '@/components/layout/Loading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Styles ---------------------------------------------------------------------------
// import styles from '@/styles/components/ImageUpload.module.css'
import styles from '@/styles/components/multiformGrid.module.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
// Other ----------------------------------------------------------------------------
import { callAPI, isArray } from "@/util";



//______________________________________________________________________________________
// ===== Component =====

const UploadedImages = () => {

    let revalidationAttempts = 0;



    //______________________________________________________________________________________
    // ===== State from AppContext =====
    const {selectedImage, setSelectedImage, revalidateUserUploads, setRevalidateUserUploads} = useAppContext();



    //______________________________________________________________________________________
    // ===== Component State =====
    const [uploads, setUploads] = useState("loading");



    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        console.log("useEffect reading uploads")
        if(uploads === "loading" || revalidateUserUploads) readUploads();
    }, [uploads, revalidateUserUploads]);



    //______________________________________________________________________________________
    // ===== Api Functions =====
    const readUploads = async () => {
        setRevalidateUserUploads(false);
        revalidationAttempts++;
        if(revalidationAttempts >= 10){ console.error("revalidationAttempts over max"); return; }

        const {done, uploads: ups} = await callAPI({ url: `uploads`, method: "GET" }); //, cache: "no-store"
        console.log({done, ups, uploads});

        if(!(uploads === "loading" || (Array.isArray(uploads) && Array.isArray(ups) && ups.length > uploads.length))){
            console.log("Assuming that there is a new upload we need to display, and hitting this means the api call was proablay ran to early due to onClientUploadComplete being ran before onUploadComplete.");
            setTimeout(() => {
                readUploads();
            }, 2000 * revalidationAttempts);
            return;
        }

        if(done && isArray(ups)){
            setUploads(ups);
        } else {
            setUploads([]);
        }
        revalidationAttempts = 0;
    }



    //______________________________________________________________________________________
    // ===== Handler Functions =====
    const handleImageClick = (e, uploadFilename) => {
        e.preventDefault();
        setSelectedImage(uploadFilename);
    }



    //______________________________________________________________________________________
    // ===== Render Functions =====
    const renderNoUploads = () => {
        return(
            <div className="tw-p-4">
                <div className='alert alert-warning'>
                    <strong>Oops! </strong> Looks like you do not have any uploads currently. Upload some above!
                </div>
            </div>
        )
    }

    const renderImages = () => {
        let images = [];
        uploads.forEach(upload => {
            images.push(
                <a key={upload.id} className={styles.imageContainer} href={`#${upload.filename}`} onClick={(e)=>{ handleImageClick(e, upload.filename) }}>
                    <LazyLoadImage
                        key={upload.filename}
                        alt={upload.filename} 
                        className={selectedImage === upload.filename ? "tw-border-4 tw-border-sky-500" : ""}
                        effect="blur"
                        src={`https://uploadthing.com/f/${upload.filename}`}
                        placeholderSrc={`/images/classBackground/basic_low.webp`}
                        width={150}
                    />
                </a>
            );
        });
        return <div className={styles.grid}>{images}</div>
    }



    //______________________________________________________________________________________
    // ===== Component Return =====
    if(uploads === "loading") return <Loading center={true} />
    if(!isArray(uploads)) return renderNoUploads();
    return( 
        <Fragment>
            <div className='tw-grid tw-place-items-center'>
                <button
                    className='btn btn-danger'
                    onClick={() => setSelectedImage(null)}
                >
                    Clear Image
                </button>
            </div>
            <br/>
            {renderImages()}
        </Fragment>
    );
}
export default UploadedImages;