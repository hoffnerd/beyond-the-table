// React/Next -----------------------------------------------------------------------
import { redirect } from 'next/navigation';
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
import PageBody from './pageBody';
// SeverFunctions -------------------------------------------------------------------
import { pageProtector } from '@/lib/protector';
import { readCharacterByIdFromParams } from '@/lib/character';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';



//______________________________________________________________________________________
// ===== Component Config =====
const config = {
    title: "Delete Character",
    requiredRole: "USER",
    redirectDestination: {
        notLoggedIn: "/api/auth/signin?callbackUrl=%2Fcharacters",
        notAuthorized: "/",
    },
    metadataDefault: {
        title: `Delete Character | Beyond the Table`,
        description: "Delete your character!",
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
        title: `Delete ${character.name} | Beyond the Table`,
        description: `Delete ${character.name}!`
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
    const redirectDestination = {
        ...config.redirectDestination,
        notLoggedIn: `${config.redirectDestination.notLoggedIn}%2F${id}%2Fdelete`
    };

    const session = await pageProtector({ ...config, redirectDestination });


    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <PageWrapper className="container tw-my-12" title={config.title}>
            <PageBody id={id} />
        </PageWrapper>
    )
}
export default Page;