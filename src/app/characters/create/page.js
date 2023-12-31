// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
import Creator from '@/components/character/Creator';
// Other ----------------------------------------------------------------------------
import { pageProtector } from '@/lib/protector';



//______________________________________________________________________________________
// ===== Component Config =====
const config = {
    title: "New Character",
    requiredRole: "USER",
    redirectDestination: {
        notLoggedIn: "/api/auth/signin?callbackUrl=%2Fcharacters%2Fcreate",
        notAuthorized: "/",
    },
}

//______________________________________________________________________________________
// ===== Page Meta Data =====
export const metadata = {
    title: `${config.title} | Beyond the Table`,
    description: 'Create your own character!',
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
        <PageWrapper className="container tw-my-12" showTitleSection={false}>
            <Creator />
        </PageWrapper>
    )
}
export default Page;