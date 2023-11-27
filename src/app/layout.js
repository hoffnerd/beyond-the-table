// React/Next -----------------------------------------------------------------------
import Script from 'next/script'
// Styles ---------------------------------------------------------------------------
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@uploadthing/react/styles.css";
// Fonts ----------------------------------------------------------------------------
import { Inter } from 'next/font/google'
// Contexts -------------------------------------------------------------------------
import AuthContext from '@/context/AuthContext';
import { AppContextProvider } from '@/context/AppContext';
// Components -----------------------------------------------------------------------
import Navbar from '@/components/layout/Navbar';
// Other ----------------------------------------------------------------------------
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const forceTailwindDetection = [
    "tw-grid-cols-2",
    "tw-grid-cols-3",
    "tw-grid-cols-5",
    "tw-grid-cols-7",
    "tw-grid-cols-9",
    "tw-gap-4",
    "tw-gap-4",
    "tw-m-auto",
    "tw-my-auto",
    "tw-col-span-2",
    "tw-col-span-3",
    "tw-col-span-4",
    "tw-col-end-11",
    "tw-flow-root",
    "tw-float-right"
]

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Beyond the Table',
    description: 'Welcome to Beyond the Table! A table top game tool website.',
}

const RootLayout = async ({ children }) => {

    const useGoogleAnalytics = () => {
        if(process.env.NODE_ENV === "development") return;
        return <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-CRCKFBYMMT" />
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
        
                    gtag('config', 'G-CRCKFBYMMT');
                `}
            </Script>
        </>
    }

    return (
        <html lang="en">
            {useGoogleAnalytics()}
            <body className={inter.className}>
                <AuthContext>
                    <AppContextProvider>
                        <Navbar/>
                        {children}
                        <footer className="footer">
                            <span className="text">
                                I do not own the copy right to any of the images used on this site. I am just a fan of D&D. I created this site to challenge myself for fun and will not monetize it in anyway.
                            </span>
                            <br/>
                            <span className="text">
                                If you would like to give feedback, suggest a change, or report a bug, send me an email at <a href="mailto:thetablebeyond@gmail.com">thetablebeyond@gmail.com</a>
                            </span>
                        </footer>    
                    </AppContextProvider>
                </AuthContext>
            </body>
        </html>
    )
}
export default RootLayout;
