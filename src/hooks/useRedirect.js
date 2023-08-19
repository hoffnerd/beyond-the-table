"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";


//______________________________________________________________________________________
// ===== Hook =====
const useRedirect = () => {
    
    //______________________________________________________________________________________
    // ===== Hook State =====
    const [ redirectTo, setRedirectTo ] = useState(null);

    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if(!redirectTo) return;
        redirect(redirectTo);
    }, [redirectTo])

    //______________________________________________________________________________________
    // ===== Component Return =====
    return [ setRedirectTo ];
}
export default useRedirect;