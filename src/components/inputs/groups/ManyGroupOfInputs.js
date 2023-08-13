// React/Next -----------------------------------------------------------------------
import { Fragment } from 'react';
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import GroupOfInputs from './GroupOfInputs';
// Other ----------------------------------------------------------------------------
import { isArray } from '../../../util';



//______________________________________________________________________________________
// ===== Component  =====

/**
 * Returns desired input based on the dataStructureObj passed in
 * @prop dataStructureObj - Object that constructs the input using its key, type, display, etc.
 * @prop dynamicInputState - Object that holds the current state of this input. Note: this component DOES need access to all of dynamicInputState, not just this input's state.
 * @prop setDynamicInputState - Function used to set the state of dynamicInputState.
 * @prop alterInternalDynamicInputStateArray - Function used to add or remove a group, declared in MasterInputComponent.
 * @prop displayInputHeaders - Bool used to apply header/description above input.
 * @prop helpSetInputState - Function, this is the same helpSetInputState declared in MasterInputComponent
 * @return Returns desired input based on the dataStructureObj
*/
const ManyGroupOfInputs = ({dataStructureObj, dynamicInputState, setDynamicInputState, alterInternalDynamicInputStateArray, displayInputHeaders=true, helpSetInputState}) => {



    //______________________________________________________________________________________
    // ===== Component Return  =====

    const renderManyGroupOfInputs = () => {
        let tableRows = [];

        if(isArray(dynamicInputState)){
            dynamicInputState.map((dynamicInputStateObj, internalIndex) => {
                tableRows.push(
                    <Fragment key={internalIndex}>
                        <tr>
                            <td>
                                <GroupOfInputs
                                    dataStructureObj={dataStructureObj}
                                    dynamicInputState={dynamicInputStateObj}
                                    setDynamicInputState={setDynamicInputState}
                                    displayInputHeaders={displayInputHeaders}
                                    internalIndex={internalIndex}
                                    helpSetInputState={helpSetInputState}
                                />
                            </td>
                            <td style={{width:"100px"}}>
                                <div className="btn-group float-end" style={{paddingLeft:"15px", marginTop: internalIndex === 0 ? "0px" : "-20px"}}>
                                    <button type="button" className="btn btn-success" onClick={()=>{alterInternalDynamicInputStateArray(internalIndex, 0)}}><i className="fa-solid fa-plus"></i></button>
                                    <button 
                                        type="button" 
                                        className="btn btn-danger" 
                                        title="Remove Item"
                                        onClick={()=>{alterInternalDynamicInputStateArray(internalIndex, 1)}} 
                                        disabled={isArray(dynamicInputState) && dynamicInputState.length === 1}
                                    >
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr><td colSpan="2"><hr style={{color:"#0dcaf0", borderTop:"2px solid"}}/></td></tr>
                    </Fragment>
                )
            })
        }

        return(<table style={{width:"100%"}}><tbody>{tableRows}</tbody></table>)
    }



    //______________________________________________________________________________________
    // ===== Component Return  =====
    return renderManyGroupOfInputs();
}
export default ManyGroupOfInputs;