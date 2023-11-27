"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from 'react';
// Styles ---------------------------------------------------------------------------
// Hooks ----------------------------------------------------------------------------
import useMasterInputs from '../useMasterInputs';
// Components -----------------------------------------------------------------------
// Data -----------------------------------------------------------------------------
import { characterBaseData, characterDetailKeys, characterDetails, otherOverrideKeys, otherOverrides, otherStatKeys, otherStats } from '@/data/character';
// Other ----------------------------------------------------------------------------
import { extractObj, isObj } from '@/util';


//______________________________________________________________________________________
// ===== Hook =====

const useCharacterOther = (unprocessedCharacter=null) => {

    //______________________________________________________________________________________
    // ===== Constants =====



    //______________________________________________________________________________________
    // ===== Initial State =====
    const initialOtherStatsInputs = isObj(unprocessedCharacter, otherStatKeys, false) ? extractObj(unprocessedCharacter, otherStatKeys, "") : null;
    const initialCharacterDetailsInputs = isObj(unprocessedCharacter, characterDetailKeys, false) ? extractObj(unprocessedCharacter, characterDetailKeys, "") : null;
    const initialOtherOverridesInputs = isObj(unprocessedCharacter, otherOverrideKeys, false) ? extractObj(unprocessedCharacter, otherOverrideKeys, "") : null;



    //______________________________________________________________________________________
    // ===== Hook State =====
    const [isOverriding, setIsOverriding] = useState( isObj(unprocessedCharacter, otherOverrideKeys, false) );



    //______________________________________________________________________________________
    // ===== Hooks =====
    const otherStatsInputs = useMasterInputs(true, otherStats, initialOtherStatsInputs);
    const characterDetailsInputs = useMasterInputs(true, characterDetails, initialCharacterDetailsInputs);
    const otherOverridesInputs = useMasterInputs(true, otherOverrides, initialOtherOverridesInputs);



    //______________________________________________________________________________________
    // ===== Use Effects =====

    /* useEffect to  */
    useEffect(() => {
    }, []);



    //______________________________________________________________________________________
    // ===== Render Functions =====

    const render = () => {
    }



    //______________________________________________________________________________________
    // ===== Hook Return =====
    return {
        renderForm: () => (
            <Fragment>
                <h3>Other Stats</h3>
                <div className='branded-line short' />
                <br/>
                {otherStatsInputs.renderInputsSection()}
                <br/>
                <br/>
                <h3>Who are you?</h3>
                <div className='branded-line short' />
                <br/>
                {characterDetailsInputs.renderInputsSection()}
                <br/>
                <br/>
                <h3>Override Other Calculations</h3>
                <div className='branded-line short' />
                <br/>
                <div className="d-grid gap-2 col-md-6 mx-auto">
                    <button 
                        type="button" 
                        className={`btn btn-${isOverriding ? "outline-" : ""}brand`} 
                        onClick={ () => setIsOverriding(!isOverriding) }
                    > 
                        {isOverriding ? "Disable Overriding" : "Enable Overriding"} 
                    </button>
                </div>
                {isOverriding && otherOverridesInputs.renderInputsSection()}
            </Fragment>
        ), 
        data: isOverriding ? {
            ...otherStatsInputs.dynamicInputState,
            ...characterDetailsInputs.dynamicInputState,
            ...otherOverridesInputs.dynamicInputState
        } : {
            ...otherStatsInputs.dynamicInputState,
            ...characterDetailsInputs.dynamicInputState
        }
    };
}
export default useCharacterOther;