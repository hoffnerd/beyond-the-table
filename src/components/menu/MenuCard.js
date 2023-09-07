// React/Next -----------------------------------------------------------------------
import { Fragment } from 'react';
import Image from 'next/image'
import Link from 'next/link'
// Components -----------------------------------------------------------------------
// Other ----------------------------------------------------------------------------
import {handleColumnSizes} from '@/util'
import LazyLoadNextImage from '../LazyLoadNextImage';



//______________________________________________________________________________________
// ===== Component  =====

/**
 * Component that renders a menu card with an image, title, and description, and can be disabled with a reason.
 * @prop id - id of the menu card, used for generating the link to the menu item page.
 * @prop display - string that represents the name or title of the menu item to be displayed on the menu card.
 * @prop description - string that will be displayed on the menu card.
 * @prop frontImage - string that is the file name (including extension) of the image to be displayed on the front side of the menu card.
 * @prop [backImage=menu_neutral] - string that represents the file name of the image to be displayed on the back side of the menu card. It defaults to "menu_neutral" if not provided.
 * @prop [columnSizes={lg:4, md:6, sm:12}] - object that specifies the column sizes for the menu card in different screen sizes. 
 * @prop [disabledReason=false] - boolean that indicates whether the menu card is disabled or not. If it is disabled, it will display a different image and text to indicate that it is not currently available. If it is not disabled, this parameter will be false.
 * @prop [largeTitle=false] - boolean that determines whether or not the title of the menu card should be displayed in a larger font size. 
 * @returns MenuCard component
 */
const MenuCard = ({id, link, display, description, frontImage, backImage="menu_neutral", columnSizes={lg:4, md:6, sm:12}, disabledReason=false, largeTitle=false, pathSoFar=null}) => {
    
    const renderBackImage = () => {
        const imageKey = disabledReason ? `menu_${disabledReason}` : backImage;
        return <LazyLoadNextImage alt={imageKey} imageKey={imageKey} />
    }

    //______________________________________________________________________________________
    // ===== Component Return =====
    if(id === "empty"){
        return <div className={`menu-col ${handleColumnSizes(columnSizes)}`}></div>
    }
    if(id && display && frontImage){
        return (
            <div className={`menu-col ${handleColumnSizes(columnSizes)}`}>
                <Link href={disabledReason ? "#" : link ? `/${link}` : pathSoFar ? `${pathSoFar}/${id}` : `/${id}`} className="menu-card">
                    <div className="menu-card-image-grid">
                        <div className={`menu-card-image menu-card-image-grid__side ${disabledReason ? `menu-card-image-grid__side--${disabledReason}` : "menu-card-image-grid__side--front"}`}>
                            <LazyLoadNextImage alt={display} imageKey={frontImage} />
                        </div>
                        <div className={`menu-card-image menu-card-image-grid__side ${disabledReason ? `menu-card-image-grid__side--${disabledReason}` : "menu-card-image-grid__side--back"}`}>
                            {renderBackImage()}
                        </div>
                    </div>
                    <div className={`menu-card-title ${disabledReason ? disabledReason : "active"} ${largeTitle ? "text-large" : ""}`}>
                        <span className={`menu-card-title-text ${disabledReason ? disabledReason : ""} ${largeTitle ? "text-large" : ""}`}>{display}</span>
                        {disabledReason && 
                            <Fragment>
                                <br/>
                                <span className={"menu-card-title-text future_subtext"}>{disabledReason === "future" ? "Future Content!" : "Coming Soon!"}</span>
                            </Fragment>
                        }
                    </div>
                    <div className="menu-card-content">
                        <span className="menu-card-content-text">{description}</span>
                    </div>
                </Link>
            </div>
        )
    }
    console.warn("Props passed to MenuCard maybe incorrect:", {id, display, description, frontImage, backImage, columnSizes, disabledReason, largeTitle, pathSoFar})
    return <Fragment></Fragment>
}
export default MenuCard;