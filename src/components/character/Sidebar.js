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
    // const isOwner = true;
    const navigation = [
        { key: "dashboard", display: "Dashboard", icon: "faDungeon", link: "/dashboard" },
        { key: "characterCreate", display: "Create Character", icon: "faUserPlus", link: "/characters/create" },
        // { key: "characterDuplicate", requirements: [ character ], display: "Duplicate Character", icon: "faUsers", link: `/characters/create/${character && character.id}` },
        { key: "character", requirements: [ character ], display: character && character.name, icon: "faUser", link: `/characters/${character && character.id}` },
        { key: "edit", requirements: [ isOwner ], display: "Edit Data", icon: "faUserPen", link: `/characters/${character && character.id}/edit` },
        { key: "image", requirements: [ isOwner ], display: "Edit Image", icon: "faImage", link: `/characters/${character && character.id}/edit/image` },
        { key: "delete", requirements: [ isOwner ], display: "Delete", icon: "faTrashCan", link: `/characters/${character && character.id}/delete` },
    ]

    //______________________________________________________________________________________
    // ===== State from AppContext =====
    const {sidebarOpen, setSidebarOpen} = useAppContext();



    //______________________________________________________________________________________
    // ===== Use Effects =====

    /* Sets the sidebar closed on component mount so it is not in the way on mobile */
    useEffect(() => {
        if(!(window && window.screen && window.screen.width && window.screen.width > 680)){
            setSidebarOpen(false);
        }
    }, [])



    //______________________________________________________________________________________
    // ===== Render Functions =====

    const renderSidebarItems = () => {
        let sidebarItems = [];
        if(isArray(navigation)){
            navigation.forEach((navigationObj) => {
                let requirementsMeant = true;

                /* checking if the `navigationObj` has a `requirements` array then it loops through each `requirement`
                to check if it is `null`. If so set `requirementsMeant` to `false` and breaks out of the loop. */
                if(isArray(navigationObj.requirements)){
                    for(let i = 0; i < navigationObj.requirements.length; i++){
                        const requirement = navigationObj.requirements[i];
                        if(!requirement){
                            requirementsMeant = false;
                            break;
                        }
                    }
                }

                /* Push the item to display it */
                if(requirementsMeant){
                    sidebarItems.push(
                        <li key={navigationObj.key} className={`${styles.item} ${navigationObj.link === pathname && styles.activeItem}`}>
                            <Link href={navigationObj.link} className={styles.link}>
                                <span className={styles.icon}> {renderFontAwesomeIcons(navigationObj.icon)} </span>
                                <span className={`${styles.text} ${!sidebarOpen && "tw-hidden"}`}>{navigationObj.display}</span>
                            </Link>
                        </li>
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
            <div 
                className={`${styles.openerCloser} ${!sidebarOpen && "tw-rotate-180"}`}
                onClick={()=>{setSidebarOpen(!sidebarOpen)}}
            >
                &nbsp;{renderFontAwesomeIcons("faArrowLeft")}&nbsp;
            </div>
        
            <div style={{minWidth:"288px"}}></div>

            <ul className={styles.items}>
                {renderSidebarItems()}
            </ul>
        </div>
    )
}
export default Sidebar;