// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/pages/Index.module.css'
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
import MenuCardSection from '@/components/menu/MenuCardSection';
// Data -----------------------------------------------------------------------------
import { navigation } from '@/data/navigation';
import Link from 'next/link';
// Other ----------------------------------------------------------------------------


//______________________________________________________________________________________
// ===== Page Meta Data =====
const config = {
    title: `Change Log`,
    description: 'All the changes that have been made to the site.',
}

//______________________________________________________________________________________
// ===== Page Meta Data =====
export const metadata = {
    title: `${config.title} | Beyond the Table`,
    description: config.description,
}

//______________________________________________________________________________________
// ===== Component =====

/* This is the index page of the site */
const Page = async () => {

    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <PageWrapper className="container" title={config.title} subtitle={config.description}>
            <div id="1.0.0" className='tw-mt-4'>
                <h3>Launch!</h3>
                <p>August 13th, 2023 | Version 1.0.0</p>
                <div className="branded-line short tw-mb-4"></div>
                <p>Welcome! I have been working on this project for awhile and I'm excited to actually get it live. In this first version, allows users to: </p>
                <ul className='branded'>
                    <li><Link href="/characters">View Characters</Link></li>
                    <li><Link href="/characters/create">Add their own Characters</Link></li>
                    <li>View & Edit their Characters</li>
                    <li>Upload Images to represent their Characters</li>
                    <li>View Characters they have added in the <Link href="/dashboard">User Dashboard</Link></li>
                </ul>
                <p>
                    Next Steps: I am expecting there to be some general issues. So my first task after launch will be to make sure that the site is solid.
                    There's a lot of features I want to add to the character pages so I think I will start on those or I may start working on the Bestiary.
                    If you're ever wondering what I'm up to on the site or curious about plans then you can visit the <a target="_blank" href="https://trello.com/b/3BTFQFSi/beyond-the-table">Trello Board</a> I have for the site.
                </p>
                <p>If you experience any issues or if you do not understand something on the site, email me at <a href="mailto:thetablebeyond@gmail.com">thetablebeyond@gmail.com</a>. </p>
                <p>Thank you!</p>
                <p>To the Table and Beyond!</p>
            </div>
        </PageWrapper>
    )
}
export default Page;