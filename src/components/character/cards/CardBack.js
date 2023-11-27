// React/Next -----------------------------------------------------------------------
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
// Components -----------------------------------------------------------------------
import LazyLoadNextImage from '@/components/LazyLoadNextImage';
// Render Functions -----------------------------------------------------------------
// Data ----------------------------------------------------------------------------
// Other ----------------------------------------------------------------------------
import { isArray, isObj } from '@/util';


//______________________________________________________________________________________
// ===== Component =====

const CardBack = ({ character=null, forceNoLoader=false, childOfLink=false }) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const name = isObj(character, [ "name" ]) ? character.name : null;
    const imageData = isObj(character, [ "image" ]) ? character.image : null;
    const imageBack = isObj(imageData, [ "back" ]) ? imageData.back : null;
    const baseData = isObj(character, [ "baseData" ]) ? character.baseData : null;
    const cardBackground = isObj(baseData, ["cardBackground"]) ? baseData.cardBackground : isArray(baseData.classes) ? baseData.classes[0].classId : null;



    //______________________________________________________________________________________
    // ===== Render Functions =====

    const renderImageDetails = () => {
        if(!isObj(imageBack, ["filename", "credit"])) return;

        return (
            <div className={styles.detailsPanel}>
                {imageBack.link && (!childOfLink) ? <a href={imageBack.link} target="_blank">{imageBack.credit}</a> : imageBack.credit}
            </div>
        )
    }

    const renderDefaultBack = () => (
        <LazyLoadNextImage 
            className={styles.img} 
            alt={`Card Back`} 
            imageKey={`menu_neutral`} 
            width={350} 
            height={500}
            style={ { scale:1.15, marginTop:'-15px', marginLeft:'1px' } } 
        />
    )

    const renderImage = () => {
        if(!isObj(imageBack, ["filename"])) return renderDefaultBack();
    
        return (
            <LazyLoadImage
                key={imageBack.filename}
                alt={name ? name : imageBack.filename}
                effect="blur"
                src={`https://uploadthing.com/f/${imageBack.filename}`}
                placeholderSrc={cardBackground ? `/images/classBackground/${cardBackground}.webp` : `/images/classBackground/basic_low.webp`}
                width={332} 
                height={482}
                style={{
                    scale: imageBack.zoom ? 1 + (imageBack.zoom * 0.1) : 1,
                    marginLeft: imageBack.x ? `${imageBack.x}px` : '0px',
                    marginTop: imageBack.y ? `${imageBack.y}px` : '0px',
                }} 
            />
        )
    }



    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <div className={styles.characterCard} style={isObj(imageBack, ["filename"]) || forceNoLoader ? { background: "unset", animation:"unset" } : {}}>
            {renderImage()} 
            {renderImageDetails()}
        </div>
    )
}
export default CardBack;