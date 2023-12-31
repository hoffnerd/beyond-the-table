// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
import PageBody from './pageBody';
import LoadingCard from '@/components/character/cards/LoadingCard';
import NoCharacter from '@/components/character/NoCharacter';
// SeverFunctions -------------------------------------------------------------------
import { readCharacterByIdFromParams } from '@/lib/character';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';



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
    // ===== Constants =====
    const id = isObj(params, [ 'id' ]) ? params.id : null;

    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <PageWrapper className="tw-my-12" showTitleSection={false}>
            <br/>
            <br/>
            <PageBody 
                id={id}
                loadingCardComponent={ <LoadingCard /> }
                noCharacterComponent={ <NoCharacter className="container" /> }
            />
            <br/>
            <div className='container'>
                <div className='alert alert-info tw-text-center'>
                    <strong>NEW!</strong> Added skill proficiency card!
                    <br/>
                    <strong>Coming Soon! </strong> Eventually this page will also contain player written notes, maybe even items and spells!
                </div>
            </div>
        </PageWrapper>
    )
}
export default Page;