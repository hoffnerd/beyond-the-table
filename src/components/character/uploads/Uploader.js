"use client";

// Context --------------------------------------------------------------------------
import { useAppContext } from "@/context/AppContext";
// Upload Thing ---------------------------------------------------------------------
import { UploadDropzone } from "@/util/uploadthing"
// Other ----------------------------------------------------------------------------
import { callAPI, fireSwal, isArray, isObj } from "@/util";



//______________________________________________________________________________________
// ===== Component =====

/**
 * The Uploader component handles file uploads and displays a success or error message.
 * @returns UploadDropzone component with the specified props.
 */
const Uploader = ({ referer }) => {

    //______________________________________________________________________________________
    // ===== State from AppContext =====
    const {setSelectedImage, setRevalidateUserUploads} = useAppContext();
    
    //______________________________________________________________________________________
    // ===== Handler Functions =====
    const createUploads = async (files) => {
        const { done, message } = await callAPI({ url: "uploads", method: "POST" }, { files });
        console.log({ done, message })

        if (!done) return; 

        fireSwal({ icon: "success", text: "Successfully uploaded Image!" });
        setSelectedImage(files[0].key);
        setRevalidateUserUploads(true);
    }

    const onClientUploadComplete = (files) => {
        console.log("Files: ", files);
        if(!(isArray(files) && isObj(files[0], [ "key" ]))) return;

        createUploads(files);
    }

    const onUploadError = (error) => {
        console.error(error)
        fireSwal({icon:"error", text: isObj(error, ["message"]) ? error.message : "Something has gone wrong! "})
    }

    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <UploadDropzone
            endpoint="characterImageUploader"
            onClientUploadComplete={(files) => onClientUploadComplete(files)}
            onUploadError={(error) => onUploadError(error)}
        />
    );
}
export default Uploader;