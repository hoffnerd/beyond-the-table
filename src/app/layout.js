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
import { Fragment } from 'react';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Beyond the Table',
    description: 'Welcome to Beyond the Table! A table top game tool website.',
}

const RootLayout = async ({ children }) => {

    const useGoogleAnalytics = () => {
        if(process.env.NODE_ENV === "development") return;
        return(
            <Fragment>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-CRCKFBYMMT" />
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
            
                        gtag('config', 'G-CRCKFBYMMT');
                    `}
                </Script>
            </Fragment>
        )
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
