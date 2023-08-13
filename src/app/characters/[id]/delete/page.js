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
import CharacterCard from '@/components/character/cards/CharacterCard';
import DeleteForm from '@/components/character/DeleteForm';



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
    // ===== Data from Server =====
    const character = await readCharacterByIdFromParams(params);

    //______________________________________________________________________________________
    // ===== Protection =====
    const redirectDestination = {
        ...config.redirectDestination,
        notLoggedIn: `${config.redirectDestination.notLoggedIn}%2F${character.id}%2Fdelete`
    };

    const session = await pageProtector({ ...config, redirectDestination });
    
    if ( !isCharactersOwner(character, session) ) redirect("/characters");



    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <PageWrapper className="container tw-my-12" title={isObj(character, ["name"]) ? `Delete ${character.name}` : "Character Not Found!"}>
        
            <div className="row justify-content-center">
                <div className="col-md-6 alert alert-danger tw-text-center">
                    <h3>Are You Sure?</h3>
                    <p>Deleting this character is irreversible! Please type the character's name below and click delete to confirm this is what you want. Case Sensitive!</p>
                    <DeleteForm character={character} />
                </div>
            </div>
            <br/>
            <CharacterCard character={character} />
        </PageWrapper>
    )
}
export default Page;