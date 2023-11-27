// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import Sidebar from '@/components/character/Sidebar';
// Other ----------------------------------------------------------------------------


//______________________________________________________________________________________
// ===== Component =====

/* This is the character layout */
const CharacterSidebarLayout = async ({ children, character=null }) => {

    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <div className="tw-flex">
            <Sidebar character={character} />
            {children}
        </div>
    )
}
export default CharacterSidebarLayout;