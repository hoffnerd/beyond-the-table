
import { createUploadthing } from "uploadthing/next";
import { apiProtector } from "@/lib/protector";
// import { createUpload } from "@/lib/upload";
// import { isObj } from "@/util";

const createTheUploadthing = createUploadthing();

const characterImageUploader = createTheUploadthing({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {

        // Protection
        const { authorized, message, session } = await apiProtector({ requiredRole: "USER" });
        // console.log({authorized, message, session})
        if( !authorized ) throw new Error(`Unauthorized: ${message}`);

        // Whatever is returned here is accessible in onUploadComplete as `metadata`
        // return { session };
    })
    .onUploadComplete(async ({ metadata, file }) => {
        console.log({metadata, file})

        // const user = metadata && isObj(metadata.session, ["user"]) ? metadata.session.user : null;
        // console.log("user", user)
        // if (!user) return { done:false, message: "User is missing" };
        // console.log("passed user check")

        // const uploadedImage = await createUpload(user.email, file.key);
        // console.log("uploadedImage", uploadedImage)
        // // console.log(Date.now())
        // return uploadedImage;
    })

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    characterImageUploader
}