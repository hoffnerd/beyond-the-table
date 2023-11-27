"use client"

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
// Context --------------------------------------------------------------------------
import { useAppContext } from "@/context/AppContext";
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/Sidebar.module.css'
// Components -----------------------------------------------------------------------
// Other ----------------------------------------------------------------------------
import { isArray, isObj } from "@/util";
import { isCharactersOwner } from "@/util/character";
import { renderFontAwesomeIcons } from "@/util/icons";
import { creatorProcessArray } from "@/data/character";



//______________________________________________________________________________________
// ===== Component =====

const Sidebar = ({character}) => {

    //______________________________________________________________________________________
    // ===== Session =====
    const { data: session, status} = useSession();



    //______________________________________________________________________________________
    // ===== Constants =====
    const pathname = usePathname();
    const isOwner = isCharactersOwner(character, session);
    
    const sidebarSubNavigation = isArray(creatorProcessArray) && creatorProcessArray.map(creatorProcessObj => ({ ...creatorProcessObj, action: (e, key)=>handleNavigationAction(e, key) }));

    const sidebarNavigation = [
        { key: "characters", display: "All Characters", icon: "faDungeon", link: "/characters" },
        { key: "dashboard", display: "Dashboard", icon: "faDungeon", link: "/dashboard" },
        { key: "characterCreate", display: "Create Character", icon: "faUserPlus", link: "/characters/create", subNavigation: sidebarSubNavigation },
        // { key: "characterDuplicate", requirements: [ character ], display: "Duplicate Character", icon: "faUsers", link: `/characters/create/${character && character.id}` },
        { key: "character", requirements: [ character ], display: character && character.name, icon: "faUser", link: `/characters/${character && character.id}` },
        { key: "edit", requirements: [ isOwner ], display: "Edit Data", icon: "faUserPen", link: `/characters/${character && character.id}/edit`, subNavigation: sidebarSubNavigation },
        { key: "delete", requirements: [ isOwner ], display: "Delete", icon: "faTrashCan", link: `/characters/${character && character.id}/delete` },
    ]



    //______________________________________________________________________________________
    // ===== State from AppContext =====
    const {sidebarOpen, setSidebarOpen, activeSidebarAction, setActiveSidebarAction } = useAppContext(); //



    //______________________________________________________________________________________
    // ===== Component State =====
    const [isDeleting, setIsDeleting] = useState(false);




    //______________________________________________________________________________________
    // ===== Use Effects =====

    /* Sets the sidebar closed on component mount so it is not in the way on mobile */
    useEffect(() => {
        if(!(window && window.screen && window.screen.width && window.screen.width > 680)) setSidebarOpen(false);
    }, [])



    //______________________________________________________________________________________
    // ===== Conditional Functions =====

    const isCreatingOrUpdating = () => pathname === "/characters/create" || pathname === `/characters/${character && character.id}/edit`;

    const isActive = (navigationObj) => !isCreatingOrUpdating() ? navigationObj.link === pathname : navigationObj.key === activeSidebarAction;



    //______________________________________________________________________________________
    // ===== Handler Functions =====

    const handleNavigationAction = (e, key) => {
        e.preventDefault();
        setActiveSidebarAction(key);
    }

    const handleDelete = (e, key) => {
        e.preventDefault();
        setIsDeleting(!isDeleting);
    }



    //______________________________________________________________________________________
    // ===== Render Functions =====

    const renderInnerLinkContent = ({icon, display}) => {
        return (
            <Fragment>
                <span className={styles.icon}> {renderFontAwesomeIcons(icon)} </span>
                <span className={`${styles.text} ${!sidebarOpen && "tw-hidden"}`}>{display}</span>
            </Fragment>
        )
    }

    const renderLink = (navigationObj) => {
        if(!isObj(navigationObj, [ "key", "icon", "display" ])) return;

        if(navigationObj.link) return <Link href={navigationObj.link} className={styles.link}>{renderInnerLinkContent(navigationObj)}</Link>
        return <a href={`#${navigationObj.key}`} className={styles.link} onClick={(e)=>navigationObj.action(e,navigationObj.key)}>{renderInnerLinkContent(navigationObj)}</a>        
    }

    const renderSidebarItems = (navigation, tabbed=false) => {
        let sidebarItems = [];
        if(isArray(navigation)){
            navigation.forEach((navigationObj) => {
                let requirementsMeant = true;

                /* checking if the `navigationObj` has a `requirements` array then it loops through each `requirement`
                to check if it is `null`. If so set `requirementsMeant` to `false` and breaks out of the loop. */
                if(isArray(navigationObj.requirements)){
                    for(let i = 0; i < navigationObj.requirements.length; i++){
                        const requirement = navigationObj.requirements[i];
                        if(!requirement){ requirementsMeant = false; break; }
                    }
                }

                /* Push the item to display it */
                if(requirementsMeant){
                    sidebarItems.push(
                        <Fragment key={navigationObj.key}>
                            <li className={`${styles.item} ${isActive(navigationObj) && styles.activeItem} ${tabbed ? styles.tabLevel1 : ""}`}>
                                {renderLink(navigationObj)}
                            </li>
                            {isCreatingOrUpdating() && navigationObj.link === pathname && isArray(navigationObj.subNavigation) ? renderSidebarItems(navigationObj.subNavigation, true)  : ""}
                        </Fragment>
                    )
                }
            });
        }
        return sidebarItems
    }



    //______________________________________________________________________________________
    // ===== Component Return =====

    return (
        <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.closed } `}>
            <div className={styles.openerCloserContainer}>
                <div 
                    className={`${styles.openerCloser} ${!sidebarOpen && "tw-rotate-180"}`}
                    onClick={()=>{setSidebarOpen(!sidebarOpen)}}
                >
                    &nbsp;{renderFontAwesomeIcons("faArrowLeft")}&nbsp;
                </div>
            </div>
        
            <div style={{minWidth:"288px"}}></div>

            <ul className={styles.items}>
                {renderSidebarItems(sidebarNavigation)}
            </ul>
        </div>
    )
}
export default Sidebar;