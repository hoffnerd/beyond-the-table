// React/Next -----------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
// SeverFunctions -------------------------------------------------------------------
import { pageProtector } from '@/lib/protector';
import { readCharacterByIdFromParams } from '@/lib/character';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';
import PageBody from './pageBody';


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
    // ===== Constants =====
    const id = isObj(params, [ 'id' ]) ? params.id : null;
    
    //______________________________________________________________________________________
    // ===== Protection =====
    const session = await pageProtector(config);


    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <PageWrapper className="container" title={config.title} subtitle={config.subtitle}>
            <PageBody id={id} />
        </PageWrapper>
    )
}
export default Page;