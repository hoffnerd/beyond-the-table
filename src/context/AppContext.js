"use client"

// React/Next -----------------------------------------------------------------------
import { createContext, useContext, useEffect, useState } from "react";
// Other ----------------------------------------------------------------------------



//______________________________________________________________________________________
// ===== Create React Context =====
export const AppContext = createContext();



//______________________________________________________________________________________
// ===== Initial State of Context =====
const initialState = {
}



//______________________________________________________________________________________
// ===== Context Provider (Basically the "Component") =====
export const AppContextProvider = ({children}) => {

    //______________________________________________________________________________________
    // ===== Provider State =====
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeSidebarAction, setActiveSidebarAction] = useState("origin");
    const [selectedImage, setSelectedImage] = useState("");
    const [revalidateUserUploads, setRevalidateUserUploads] = useState(false);



    //______________________________________________________________________________________
    // ===== State and Sets that other Components can access =====
    const values = {
        sidebarOpen, setSidebarOpen,
        activeSidebarAction, setActiveSidebarAction,
        selectedImage, setSelectedImage,
        revalidateUserUploads, setRevalidateUserUploads,
    };
    

    //______________________________________________________________________________________
    // ===== useEffects =====

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    //______________________________________________________________________________________
    // ===== Provider Return =====
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}



//______________________________________________________________________________________
// ===== Function other Components will call to get state we set above =====
export const useAppContext = () => {
    const context = useContext(AppContext)
    return context;
}