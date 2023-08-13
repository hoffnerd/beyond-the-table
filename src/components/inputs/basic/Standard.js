// React/Next -----------------------------------------------------------------------
import { Fragment } from 'react';
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
// Other ----------------------------------------------------------------------------
import { helpCreateDisplay } from '../../../util/inputs';



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
const Standard = ({className, dataStructureObj, dynamicInputState, setDynamicInputState, displayInputHeaders=true, internalIndex=null, helpSetInputState}) => {


    //______________________________________________________________________________________
    // ===== Component Return  =====
    return (
        <Fragment>
            {helpCreateDisplay(dataStructureObj, displayInputHeaders)}
            <input
                className={`form-control darkInputs ${className ? className : ""}`}
                aria-label={dataStructureObj.display} 
                aria-describedby={dataStructureObj.display} 
                type={dataStructureObj.type}
                name={dataStructureObj.key}
                id={dataStructureObj.key}
                value={dynamicInputState[dataStructureObj.key]}
                onChange={(e)=>{helpSetInputState(setDynamicInputState, { ...dynamicInputState, [dataStructureObj.key]: e.target.value }, internalIndex)}}
                placeholder={(!displayInputHeaders) && dataStructureObj.display ? dataStructureObj.display : ""}
                disabled={(dataStructureObj && dataStructureObj.disabled) ? "disabled" : ""}
            />
        </Fragment>
    )
}
export default Standard;