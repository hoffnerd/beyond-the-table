// React/Next -----------------------------------------------------------------------
import Link from 'next/link'
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/Navbar.module.css'
// Components -----------------------------------------------------------------------
import Login from "./Login";
// Data ----------------------------------------------------------------------------
import { navigation } from '@/data/navigation';
// Other ----------------------------------------------------------------------------
import { isArray } from '@/util';


//______________________________________________________________________________________
// ===== Component  =====

const Navbar = async () => {

    //______________________________________________________________________________________
    // ===== Render Functions  =====
    /**
     * It takes an array of objects, and returns an array of React elements
     * @param navigationArray - array of objects that you want to create the navagation from.
     * @param [parentId=null] - id of the parent nav item. Used to create the url for the sub nav item.
     * @returns An array of nav elements
     */
    const renderNavItems = (navigationArray, parentId = null) => {
        let navArray = [];
        if(navigationArray && navigationArray.length > 0){
            navigationArray.map((navObj) => {
                if(navObj.doNotShow || navObj.doNotShowInNav){
                    // Do nothing because we should not show this here
                }
                else if(navObj.disabledReason){
                    // onClick={(e)=>{e.preventDefault()}}
                    navArray.push(
                        <li id={navObj.id} className="nav-item">
                            <a className={`nav-link nav-text ${styles.linkText}`} href='#'>
                                <span className={styles[navObj.disabledReason]}>{navObj.display}</span>&nbsp;
                                {navObj.disabledReason === "future" && <span className={styles.future_subtext}>Future Content!</span>}
                                {navObj.disabledReason === "coming" && <span className={styles.coming_subtext}>Coming Soon!</span>}
                            </a>
                        </li>
                    )
                }
                else if(parentId){
                    navArray.push(
                        <li id={navObj.id}>
                            {navObj.external ?
                                <a href={navObj.link} className="dropdown-item" target='_blank'>{navObj.display}</a>
                            :
                                <Link href={navObj.link ? `/${navObj.link}` : parentId === navObj.id ? `/${parentId}` : `/${parentId}/${navObj.id}`} className="dropdown-item">{navObj.display}</Link>
                            }
                        </li>
                    )
                }
                else if(navObj.subNavigation && navObj.subNavigation.length > 0){
                    let subNavagationToUse = navObj.subNavigation
                    if(!isArray(navObj.subNavigation)){
                        //assume its a string of the id we need too access in the state thats in the store
                        // subNavagationToUse = state[navObj.subNavigation];
                        console.warn("You forgot about this dumbass");
                    }
                    navArray.push(
                        <li id={navObj.id} className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{navObj.display}</a>
                            <ul className="dropdown-menu branded-nav-dropdown">
                                {renderNavItems(subNavagationToUse, navObj.id)}
                            </ul>
                        </li>
                    )
                }
                else{
                    navArray.push(
                        <li id={navObj.id} className="nav-item">
                            {navObj.external ?
                                <a href={navObj.link} className="nav-link" target='_blank'>{navObj.display}</a>
                            :
                                <Link href={navObj.link ? `/${navObj.link}` : `/${navObj.id}`} className="nav-link">{navObj.display}</Link>
                            }
                            
                        </li>
                    )
                }
            });
        }
        return navArray;
    }
    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark brand">
            <div className="container-fluid navbarHeight">
                <Link href="/" className="navbar-brand nav-text">BTT</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {renderNavItems(navigation)}
                    </ul>
                    <ul className="navbar-nav d-flex navbarHeight">
                        <Login/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
