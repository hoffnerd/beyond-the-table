// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
import MenuCardSection from '@/components/menu/MenuCardSection';
import CharacterCards from '@/components/character/cards/CharacterCards';
// Data ----------------------------------------------------------------------------
import { character_subNavigation } from '@/data/navigation';
// Other ----------------------------------------------------------------------------
import { isArray } from '@/util';
import { pageProtector, readServerSession } from '@/lib/protector';



//______________________________________________________________________________________
// ===== Component Config =====
const config = {
    title: "Characters",
    page: "characters",
    requiredRole: "USER",
    pathSoFar:"/characters",
    emptyMenuCard: { id: 'empty', columnSizes: {lg:2, md:12} }
}

export const dynamic = 'force-dynamic'
export const revalidate = 300
// export const fetchCache = 'auto'

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
    // ===== Protection =====
    const session = await pageProtector(config);

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
                <CharacterCards addLinkToCharacterPage={true} />
            </div>
        </PageWrapper>
    )
}
export default Page;