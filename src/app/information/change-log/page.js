// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/pages/Index.module.css'
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
import MenuCardSection from '@/components/menu/MenuCardSection';
// Data -----------------------------------------------------------------------------
import { navigation } from '@/data/navigation';
import Link from 'next/link';
import { Fragment } from 'react';
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
    // ===== Render Functions =====
    const renderLineBreak = () => {
        return(
            <Fragment>
                <br/>
                <br/>
                <hr/>
                <br/>
                <br/>
            </Fragment>
        )
    }

    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <PageWrapper className="container" title={config.title} subtitle={config.description}>
            <div id="1.1.0" className='tw-mt-4'>
                <h3>Loading Loader Loads!</h3>
                <p>September 6th, 2023 | Version 1.1.0</p>
                <div className="branded-line short tw-mb-4"></div>
                <p>This one is big one behind the scenes. Ya'll won't see too much but if you have slower internet, you should be able to feel the site act and load better.</p>
                <p>I added a nice loading animation for cards. In all my years of web dev, never realized how easy working with color gradients were.</p>
                <p>
                    Similarly, I never worked with lazy loading images before, actually super easy in NextJS. The issue becomes the rate limit. Its very 
                    generous at a 1000 images but because this site allows for user uploads, not gonna let ya'll take all my free Next Images, sooooo I 
                    needed a different solution. I opted to use a library for ReactJS to lazy load user uploaded images and this was super easy to set up.
                </p>
                <p>
                    Biggest impact behind the scenes, and the most fun for me to work on, was the SWR React Hook. Due to the current NextJS server component 
                    cache invalidation issues, I decided use Vercel's React SWR Hook on client side components to do my fetching. This is the ONLY way I am 
                    going to do client side reads in the future because its so clear how to use it and gives you soooooo much control over the cache, while 
                    also able to do optimistic updates. If you are a web developer using React or Next, I highly recommend looking it up.
                </p>
                <p>
                    Future plans, <u>now</u> I'm going to work on the character creator overhaul. I have really big plans for this, so it may take 
                    some time but it's going to much easier for newer players to use and make characters while being fun for the nerds ❤️.
                </p>
                <p>To the Table and Beyond!</p>
            </div>

            {renderLineBreak()}

            <div id="1.0.1" className='tw-mt-4'>
                <h3>Launch fixes</h3>
                <p>August 20th, 2023 | Version 1.0.1</p>
                <div className="branded-line short tw-mb-4"></div>
                <p>General bug fixes to character creator and other parts of the site.</p>
                <p>I am now planning to overhaul the character creator to be easier to use.</p>
            </div>

            {renderLineBreak()}

            <div id="1.0.0" className='tw-mt-4'>
                <h3>Launch!</h3>
                <p>August 19th, 2023 | Version 1.0.0</p>
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

            <br/>
        </PageWrapper>
    )
}
export default Page;