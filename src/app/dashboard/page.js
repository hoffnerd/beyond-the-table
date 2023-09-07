// React/Next -----------------------------------------------------------------------
import Link from 'next/link';
import { pageProtector } from '@/lib/protector';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
import CharacterCards from '@/components/character/cards/CharacterCards';
// SeverFunctions -------------------------------------------------------------------
import { readCharacters } from '@/lib/character';
// Other ----------------------------------------------------------------------------
import { isArray, isObj } from '@/util';



//______________________________________________________________________________________
// ===== Component Config =====
const config = {
    title: "Dashboard",
    requiredRole: "USER",
    redirectDestination: {
        notLoggedIn: "/api/auth/signin?callbackUrl=%2Fdashboard",
        notAuthorized: "/",
    },
}

//______________________________________________________________________________________
// ===== Page Meta Data =====
export const metadata = {
    title: `${config.title} | Beyond the Table`,
    description: 'User Dashboard where you can view your characters.',
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
            <div className="flex-items-evenly">
                <div></div>
                <h3>My Characters</h3>
                <div></div>
            </div>
            <div className="flex-items-evenly">
                <div></div>
                <div className="branded-line" style={{ width: "33%" }}></div>
                <div></div>
            </div>
            <br />
            <div className={styles.characterCardsSectionOutsidePadding}>
                <CharacterCards childrenType={"noCharacters"} path={"auth/characters"} pageHasSideBar={true}>
                    <div className="container">
                        <div className="alert alert-warning tw-text-center">
                            <strong>Oops!</strong> Looks like you don't have any characters. <Link href="/characters/create">Click here to make one!</Link>
                        </div>
                    </div>
                </CharacterCards>
            </div>
        </PageWrapper>
    )
}
export default Page;