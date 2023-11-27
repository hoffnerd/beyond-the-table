// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import CharacterSidebarLayout from '@/components/layout/CharacterSidebarLayout';
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
    return <CharacterSidebarLayout character={character}>{children}</CharacterSidebarLayout>
}
export default Layout;