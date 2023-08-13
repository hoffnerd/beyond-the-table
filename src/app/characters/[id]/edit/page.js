// React/Next -----------------------------------------------------------------------
import { redirect } from 'next/navigation';
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
import ModifyForm from '@/components/character/ModifyForm';
// SeverFunctions -------------------------------------------------------------------
import { pageProtector } from '@/lib/protector';
import { readCharacterByIdFromParams } from '@/lib/character';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';
import { isCharactersOwner } from '@/util/character';



//______________________________________________________________________________________
// ===== Component Config =====
const config = {
    title: "Edit Character",
    requiredRole: "USER",
    redirectDestination: {
        notLoggedIn: "/api/auth/signin?callbackUrl=%2Fcharacters",
        notAuthorized: "/",
    },
    metadataDefault: {
        title: `Edit Character | Beyond the Table`,
        description: "Edit your character's data or information!",
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
        title: `Edit ${character.name} | Beyond the Table`,
        description: `Edit the data or information of ${character.name}!`
    }
}



//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const Page = async ({params, searchParams }) => {
    
    //______________________________________________________________________________________
    // ===== Data from Server =====
    const character = await readCharacterByIdFromParams(params);

    //______________________________________________________________________________________
    // ===== Protection =====
    const redirectDestination = {
        ...config.redirectDestination,
        notLoggedIn: `${config.redirectDestination.notLoggedIn}%2F${character.id}%2Fedit`
    };

    const session = await pageProtector({ ...config, redirectDestination });
    
    if ( !isCharactersOwner(character, session) ) redirect("/characters");



    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <PageWrapper className="container tw-my-12" title={isObj(character, ["name"]) ? character.name : "Character Not Found!"}>
            <ModifyForm character={character} />
        </PageWrapper>
    )
}
export default Page;