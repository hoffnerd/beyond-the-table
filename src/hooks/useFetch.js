"use client";

import { useEffect, useState } from "react";
import { callAPI } from "@/util";


//______________________________________________________________________________________
// ===== Hook =====
const useFetch = (apiConfig) => {
    
    //______________________________________________________________________________________
    // ===== Hook State =====
    const [ data, setData ] = useState("loading");



    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if(data !== "loading") return;
        readDataFromAPI();
    }, [data])
    
    

    //______________________________________________________________________________________
    // ===== Functions Used in Use Effects =====
    const readDataFromAPI = async () => {
        const [ done, message, dataFromAPI ] = await callAPI({ method: "GET", ...apiConfig })
        console.log({dataFromAPI});

        if (!done) {
            setData("error")
            console.error({ done, message, dataFromAPI })
            return;
        }

        setData(dataFromAPI);
    }
    


    //______________________________________________________________________________________
    // ===== Component Return =====
    const initialized = data !== "loading" && data !== "error";
    return [ initialized, data ];
}
export default useFetch;