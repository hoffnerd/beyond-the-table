"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';


//______________________________________________________________________________________
// ===== Hook =====
const useRouterPush = () => {
    const { push } = useRouter();
    
    //______________________________________________________________________________________
    // ===== Hook State =====
    const [ pushTo, setPushTo ] = useState(null);

    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if(!pushTo) return;
        console.log({pushTo})
        push(pushTo);
    }, [pushTo])

    //______________________________________________________________________________________
    // ===== Component Return =====
    return [ setPushTo ];
}
export default useRouterPush;