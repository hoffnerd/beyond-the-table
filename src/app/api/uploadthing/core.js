
import { createUploadthing } from "uploadthing/next";
import { apiProtector } from "@/lib/protector";
import { createUpload } from "@/lib/upload";
import { isObj } from "@/util";

const createTheUploadthing = createUploadthing();

const characterImageUploader = createTheUploadthing({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {

        // Protection
        const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
        if( !authorized ) throw new Error(`Unauthorized: ${message}`);

        // Whatever is returned here is accessible in onUploadComplete as `metadata`
        return { session };
    })
    .onUploadComplete(async ({ metadata, file }) => {

        const user = metadata && isObj(metadata.session, ["user"]) ? metadata.session.user : null;
        if (!user) return { done:false, message: "User is missing" };

        const uploadedImage = await createUpload(user.email, file.key);
        // console.log(Date.now())
        return uploadedImage;
    })

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    characterImageUploader
}