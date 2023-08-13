// React/Next -----------------------------------------------------------------------
import Image from 'next/image'
import Link from 'next/link'
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/AnimatedCard.module.css'
// Components -----------------------------------------------------------------------
// Data -----------------------------------------------------------------------------
import { animationsActive } from '@/data/_config'
// Other ----------------------------------------------------------------------------



//______________________________________________________________________________________
// ===== Component  =====

const AnimatedCard = ({children, characterId}) => {
    
    //______________________________________________________________________________________
    // ===== Component Return =====
    //

    return (
        <Link href={`/characters/${characterId}`} className={`${styles.animatedCardContainer} ${animationsActive ? styles.rotate : ""}`}>
            <div className={styles.imageGrid}>
                <div className={`${styles.image} ${styles.fornt}`}>
                    {children}
                </div>
                <div className={`${styles.image} ${styles.back}`}>
                    <Image className={styles.img} alt={`Card Back`} src={`/images/menu/menu_neutral.png`} width={350} height={500}/>
                </div>
            </div>
        </Link>
    )
        
}
export default AnimatedCard;