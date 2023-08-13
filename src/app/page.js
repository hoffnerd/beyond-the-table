// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/pages/Index.module.css'
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
import MenuCardSection from '@/components/menu/MenuCardSection';
// Data -----------------------------------------------------------------------------
import { navigation } from '@/data/navigation';
// Other ----------------------------------------------------------------------------


//______________________________________________________________________________________
// ===== Page Meta Data =====
export const metadata = {
    title: `Beyond the Table`,
    description: 'A table top game tool website.',
}

//______________________________________________________________________________________
// ===== Component =====

/* This is the index page of the site */
const Page = async () => {

    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <PageWrapper className="container">
            <div className={`fontAdjustment center ${styles.description}`}>
                <p>Welcome to Beyond the Table! A table top game tool website.</p>
            </div>
            <MenuCardSection data={navigation} columnSizes={{lg:3, md:6, sm:12}}/>
        </PageWrapper>
    )
}
export default Page;