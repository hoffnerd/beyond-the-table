// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
import MenuCardSection from '@/components/menu/MenuCardSection';
import CharacterCards from '@/components/character/cards/CharacterCards';
// SeverFunctions -------------------------------------------------------------------
import { readCharacters } from '@/lib/character';
// Data ----------------------------------------------------------------------------
import { character_subNavigation } from '@/data/navigation';
// Other ----------------------------------------------------------------------------
import { isArray } from '@/util';



//______________________________________________________________________________________
// ===== Component Config =====
const config = {
    title: "Characters",
    page: "characters",
    pathSoFar:"/characters",
    emptyMenuCard: { id: 'empty', columnSizes: {lg:2, md:12} }
}

//______________________________________________________________________________________
// ===== Page Revalidation =====
export const revalidate = 300;

//______________________________________________________________________________________
// ===== Page Meta Data =====
export const metadata = {
    title: `${config.title} | Beyond the Table`,
    description: 'Create your own characters or view others!',
}



//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const Page = async () => {

    //______________________________________________________________________________________
    // ===== Data from Server =====
    const characters = await readCharacters({ visibility:"PUBLIC" }); //

    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <PageWrapper className="tw-my-12" title={config.title}>
            <div className='container'>
                <MenuCardSection data={isArray(character_subNavigation) ? [config.emptyMenuCard, ...character_subNavigation, config.emptyMenuCard] : []} pathSoFar={config.pathSoFar} />
            </div>
            <div className="flex-items-evenly">
                <div></div>
                <h3>Public Characters</h3>
                <div></div>
            </div>
            <div className="flex-items-evenly">
                <div></div>
                <div className="branded-line" style={{width:"33%"}}></div>
                <div></div>
            </div>
            <br/>
            <div className={styles.characterCardsSectionOutsidePadding}>
                <CharacterCards characters={characters} addLinkToCharacterPage={true} />
            </div>
        </PageWrapper>
    )
}
export default Page;