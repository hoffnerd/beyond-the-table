// React/Next -----------------------------------------------------------------------
import { Fragment } from 'react';
import { redirect } from 'next/navigation';
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import CharacterCard from '@/components/character/cards/CharacterCard';
import PageWrapper from '@/components/layout/PageWrapper';
// SeverFunctions -------------------------------------------------------------------
import { readServerSession } from '@/lib/protector';
import { readCharacterByIdFromParams } from '@/lib/character';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';
import { isCharacterVisible } from '@/util/character';



//______________________________________________________________________________________
// ===== Component Config =====
const config = {
    title: "Character",
    metadataDefault: {
        title: `Character | Beyond the Table`,
        description: 'Create your own characters or view others!',
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
        title: `${character.name} | Beyond the Table`,
        description: isObj(character.baseData, [ "quote" ]) ? character.baseData.quote : config.metadataDefault.description,
    }
}



//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const Page = async ({params, searchParams }) => {

    //______________________________________________________________________________________
    // ===== Session =====
    const session = await readServerSession();
    //______________________________________________________________________________________
    // ===== Data from Server =====
    const character = await readCharacterByIdFromParams(params);

    //______________________________________________________________________________________
    // ===== Render Functions =====
    
    const renderNoCharacter = () => {
        return (
            <div className='alert alert-warning'>
                <strong>Oops! </strong> Looks like this character does not exist. If you believe this to be an error on our part, please let us know by emailing <a href='mailto:thetablebeyond@gmail.com'>thetablebeyond@gmail.com</a>
            </div>
        )
    }

    const renderCharacter = () => {
        if ( !isObj(character, [ "id", "name" ]) ) return renderNoCharacter();

        if( !isCharacterVisible(character, session) ) redirect("/characters");
        
        return(
            <Fragment>
                <CharacterCard character={character} />
                <br/>
                <div className='alert alert-info'>
                    <strong>Coming Soon! </strong> Eventually this page will also contain skills, player written notes, and maybe even items and spells.
                </div>
            </Fragment>
        )
    }



    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <PageWrapper className="container tw-my-12" title={isObj(character, ["name"]) ? character.name : "Character Not Found!"} showTitleSection={false}>
            <br/>
            <br/>
            {renderCharacter()}
        </PageWrapper>
    )
}
export default Page;