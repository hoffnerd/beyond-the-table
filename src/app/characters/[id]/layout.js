// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import Sidebar from '@/components/character/Sidebar';
// SeverFunctions -------------------------------------------------------------------
import { readCharacterByIdFromParams } from '@/lib/character';
// Other ----------------------------------------------------------------------------


//______________________________________________________________________________________
// ===== Component =====

/* This is the character layout */
const Layout = async ({params, searchParams, children }) => {
    
    //______________________________________________________________________________________
    // ===== Data from Server =====
    const character = await readCharacterByIdFromParams(params);

    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <div className="tw-flex">
            <Sidebar character={character} />
            {children}
        </div>
    )
}
export default Layout;