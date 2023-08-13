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
const Toggle = ({className, dataStructureObj, dynamicInputState, setDynamicInputState, displayInputHeaders=true, internalIndex=null, helpSetInputState}) => {


    //______________________________________________________________________________________
    // ===== Component Return  =====
    return (
        <button 
            style={{marginTop:"24px"}}
            className={`tw-float-right btn btn-brand ${className}`}
            title={dataStructureObj.title(dynamicInputState[dataStructureObj.key])}
            onClick={()=>{ helpSetInputState(setDynamicInputState, { ...dynamicInputState, [dataStructureObj.key]: !dynamicInputState[dataStructureObj.key] }, internalIndex) }}
        >
            {dataStructureObj.display(dynamicInputState[dataStructureObj.key])}
        </button>
    )
}
export default Toggle;