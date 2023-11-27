// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import PageWrapper from '@/components/layout/PageWrapper';
// Data -----------------------------------------------------------------------------
// Other ----------------------------------------------------------------------------


//______________________________________________________________________________________
// ===== Page Meta Data =====
const config = {
    title: `Roadmap`,
    description: 'All the changes that will be coming to the site.',
}

//______________________________________________________________________________________
// ===== Page Meta Data =====
export const metadata = {
    title: `${config.title} | Beyond the Table`,
    description: config.description,
}

//______________________________________________________________________________________
// ===== Component =====

/* This is the roadmap page of the site */
const Page = async () => {

    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <PageWrapper className="container" title={config.title} subtitle={config.description}>
            <iframe 
                style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
                width="100%" 
                height="750" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FygNfQxg5KZb3XI3tSy7Yui%2FRoad-Map%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DfcEtKNjGXWDMSjMO-1" 
                allowFullScreen
            />
        </PageWrapper>
    )
}
export default Page;