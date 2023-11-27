// React/Next -----------------------------------------------------------------------
import Link from 'next/link'
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/AnimatedCard.module.css'
// Components -----------------------------------------------------------------------
// Data -----------------------------------------------------------------------------
import { animationsActive } from '@/data/_config'
// Other ----------------------------------------------------------------------------



//______________________________________________________________________________________
// ===== Component  =====

const AnimatedCard = ({characterId, cardFront, cardBack}) => {
    
    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <Link href={`/characters/${characterId}`} className={`${styles.animatedCardContainer} ${animationsActive ? styles.rotate : ""}`}>
            <div className={styles.imageGrid}>
                <div className={`${styles.image} ${styles.fornt}`} style={{zIndex:100}}> {cardFront} </div>
                <div className={`${styles.image} ${styles.back}`}> {cardBack} </div>
            </div>
        </Link>
    )
        
}
export default AnimatedCard;