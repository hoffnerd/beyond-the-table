// React/Next -----------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
import EditImageBody from '@/components/character/uploads/EditImageBody';
// SeverFunctions -------------------------------------------------------------------
import { pageProtector } from '@/lib/protector';
import { readCharacterByIdFromParams } from '@/lib/character';
import { readUploadsByUser } from "@/lib/upload";
// Other ----------------------------------------------------------------------------
import { isArray, isObj } from '@/util';
import { isCharactersOwner } from '@/util/character';
import { redirect } from 'next/navigation';


//______________________________________________________________________________________
// ===== Component Config =====
const config = {
    title: "Edit Character Image",
    subtitle: `Here you will see a preview of your card and how it will look with the image you have selected. Below the card there are three inputs; Zoom is the level of zoom to apply to the image, X and Y will move the image on the corresponding axis. You can upload an Image or view previous uploads on the right, or below the card and "Save Image" button on mobile. You can click on any of your previous uploads to use that image on the card. The image that is outlined in blue, is the current image being shown in the card preview.`,
    requiredRole: "USER",
    redirectDestination: {
        notLoggedIn: "/api/auth/signin?callbackUrl=%2Fdashboard",
        notAuthorized: "/",
    },
    metadataDefault: {
        title: `Edit Character Image | Beyond the Table`,
        description: "Edit your character's image!",
    }
}

//______________________________________________________________________________________
// ===== Page Meta Data =====
export async function generateMetadata({ params }){

    //______________________________________________________________________________________
    // ===== Data from Server =====
    const character = await readCharacterByIdFromParams(params);
    
    //______________________________________________________________________________________
    // ===== Generate Metadata Return =====
    if ( !isObj(character, [ 'name' ]) ) return config.metadataDefault;
    return {
        title: `Edit Image on ${character.name} | Beyond the Table`,
        description: `Edit the image of ${character.name}!`
    }
}


//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const Page = async ({params, searchParams }) => {
    
    //______________________________________________________________________________________
    // ===== Protection =====
    const session = await pageProtector(config);
    
    //______________________________________________________________________________________
    // ===== Data from Server =====
    const character = await readCharacterByIdFromParams(params);
    
    if ( !isCharactersOwner(character, session) ) redirect("/characters");

    // const uploads = session && session.user && session.user.email ? await readUploadsByUser(session.user.email) : null; uploads={uploads}
    


    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <PageWrapper className="container" title={isObj(character, ["name"]) ? character.name : "Character Not Found!"} subtitle={config.subtitle}>
            <EditImageBody character={character} />
        </PageWrapper>
    )
}
export default Page;