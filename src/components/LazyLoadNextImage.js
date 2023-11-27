// React/Next -----------------------------------------------------------------------
import Image from 'next/image';
// Styles ---------------------------------------------------------------------------
// Images ---------------------------------------------------------------------------
// Class Background Images ---------------------------------------------------------------
import bg_artificer from '../../public/images/classBackground/artificer.webp';
import bg_barbarian from '../../public/images/classBackground/barbarian.webp';
import bg_bard from '../../public/images/classBackground/bard.webp';
import bg_bloodhunter from '../../public/images/classBackground/bloodhunter.webp';
import bg_cleric from '../../public/images/classBackground/cleric.webp';
import bg_druid from '../../public/images/classBackground/druid.webp';
import bg_fighter from '../../public/images/classBackground/fighter.webp';
import bg_monk from '../../public/images/classBackground/monk.webp';
import bg_paladin from '../../public/images/classBackground/paladin.webp';
import bg_ranger from '../../public/images/classBackground/ranger.webp';
import bg_rogue from '../../public/images/classBackground/rogue.webp';
import bg_sorcerer from '../../public/images/classBackground/sorcerer.webp';
import bg_warlock from '../../public/images/classBackground/warlock.webp';
import bg_wizard from '../../public/images/classBackground/wizard.webp';
// Class Icons Images ---------------------------------------------------------------
import ci_artificer from '../../public/images/classIcons/artificer.webp';
import ci_barbarian from '../../public/images/classIcons/barbarian.webp';
import ci_bard from '../../public/images/classIcons/bard.webp';
import ci_bloodhunter from '../../public/images/classIcons/bloodhunter.webp';
import ci_cleric from '../../public/images/classIcons/cleric.webp';
import ci_druid from '../../public/images/classIcons/druid.webp';
import ci_fighter from '../../public/images/classIcons/fighter.webp';
import ci_monk from '../../public/images/classIcons/monk.webp';
import ci_paladin from '../../public/images/classIcons/paladin.webp';
import ci_ranger from '../../public/images/classIcons/ranger.webp';
import ci_rogue from '../../public/images/classIcons/rogue.webp';
import ci_sorcerer from '../../public/images/classIcons/sorcerer.webp';
import ci_warlock from '../../public/images/classIcons/warlock.webp';
import ci_wizard from '../../public/images/classIcons/wizard.webp';
// Gwent Images ---------------------------------------------------------------------
import campaign from '../../public/images/gwent/campaign.webp';
import campaignNew from '../../public/images/gwent/campaignNew.webp';
import character from '../../public/images/gwent/character.webp';
import characterNew from '../../public/images/gwent/characterNew.webp';
import encounters from '../../public/images/gwent/encounters.webp';
import encountersNew from '../../public/images/gwent/encountersNew.webp';
import items from '../../public/images/gwent/items.webp';
import itemsNew from '../../public/images/gwent/itemsNew.webp';
import monsters from '../../public/images/gwent/monsters.webp';
import monstersNew from '../../public/images/gwent/monstersNew.webp';
import spells from '../../public/images/gwent/spells.webp';
import spellsNew from '../../public/images/gwent/spellsNew.webp';
// Menu Images ----------------------------------------------------------------------
import menu_coming from '../../public/images/menu/menu_coming.png';
import menu_future from '../../public/images/menu/menu_future.png';
import menu_neutral from '../../public/images/menu/menu_neutral.png';
// Images ---------------------------------------------------------------------------
import shield from '../../public/shield2.png';
// import a from '../../public/images/';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';

const images = { 
    bg_artificer, bg_barbarian, bg_bard, bg_bloodhunter, bg_cleric, bg_druid, bg_fighter, bg_monk, bg_paladin, bg_ranger, bg_rogue, bg_sorcerer, bg_warlock, bg_wizard,
    ci_artificer, ci_barbarian, ci_bard, ci_bloodhunter, ci_cleric, ci_druid, ci_fighter, ci_monk, ci_paladin, ci_ranger, ci_rogue, ci_sorcerer, ci_warlock, ci_wizard,
    campaign, campaignNew, character, characterNew, encounters, encountersNew, items, itemsNew, monsters, monstersNew, spells, spellsNew,
    menu_coming, menu_future, menu_neutral,
    shield
}

//______________________________________________________________________________________
// ===== Component =====
const LazyLoadNextImage = ({imageKey, alt="Image Alt", width=null, height=null, className="", style={} }) => {

    //______________________________________________________________________________________
    // ===== Constants =====

    // next yells at you if the image is under 40 pixels, this also fixes the blur around images that that don't have size given to them
    const placeholder = width && width > 40 ? "blur" : undefined;



    //______________________________________________________________________________________
    // ===== Component Return =====
    if(!(imageKey && isObj(images, [imageKey]))) return <div style={{ width, height }} className={className} title="Image not statically added">{alt}</div>
    if(width && height) return <Image src={images[imageKey]} alt={alt} width={width} height={height} className={className} style={{...style}} placeholder={placeholder} />
    return (
        <Image
            fill
            alt={alt}
            className={className}
            src={images[imageKey]} 
            placeholder={placeholder}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{...style}}
        />
    )
}
export default LazyLoadNextImage;