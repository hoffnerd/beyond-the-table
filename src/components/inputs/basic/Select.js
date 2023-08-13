// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from 'react';
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
// Other ----------------------------------------------------------------------------
import { isArray } from '../../../util';
import { helpCreateDisplay, helpCreateSelectOptions } from '../../../util/inputs';



//______________________________________________________________________________________
// ===== Component  =====

/**
 * Returns desired input based on the dataStructureObj passed in
 * @prop dataStructureObj - Object that constructs the input using its key, type, display, etc.
 * @prop dynamicInputState - Object that holds the current state of this input. Note: this component DOES need access to all of dynamicInputState, not just this input's state.
 * @prop setDynamicInputState - Function used to set the state of dynamicInputState.
 * @prop displayInputHeaders - Bool used to apply header/description above input.
 * @prop internalIndex - Int used if this component is called from a group (GroupOfInputs, ManyGroupOfInputs) to keep track of what index group we are in
 * @prop helpSetInputState - Function, this is the same helpSetInputState declared in MasterInputComponent
 * @return Returns desired input based on the dataStructureObj
*/
const Select = ({className, styles, dataStructureObj, dynamicInputState, setDynamicInputState, displayInputHeaders=true, internalIndex=null, helpSetInputState}) => {

    //______________________________________________________________________________________
    // ===== Component State =====
    const [optionArray, setOptionArray] = useState(null);



    //______________________________________________________________________________________
    // ===== Use Effects =====

    /* Set the options that are used in this select */
    useEffect(() => {
        if(dataStructureObj){
            setOptionArray(helpCreateSelectOptions(dataStructureObj));
        }
    }, [dataStructureObj])



    //______________________________________________________________________________________
    // ===== Component Return  =====
    return( 
        <Fragment>
            {helpCreateDisplay(dataStructureObj, displayInputHeaders)}
            <select  
                className={`form-control darkInputs ${className ? className : ""}`}
                style={styles ? styles : {}}
                aria-label={dataStructureObj.display} 
                aria-describedby={dataStructureObj.display} 
                type="select" 
                name={dataStructureObj.id ? dataStructureObj.id : dataStructureObj.key}
                id={dataStructureObj.id ? dataStructureObj.id : dataStructureObj.key}
                value={dynamicInputState[dataStructureObj.id ? dataStructureObj.id : dataStructureObj.key]}
                onChange={(e)=>{helpSetInputState(setDynamicInputState, { ...dynamicInputState, [dataStructureObj.id ? dataStructureObj.id : dataStructureObj.key]: e.target.value }, internalIndex)}}
            >
                {isArray(optionArray) ? optionArray : <option key="loading" value="pleaseSelect">...Loading...</option>}
            </select>
        </Fragment>
    )
}
export default Select;