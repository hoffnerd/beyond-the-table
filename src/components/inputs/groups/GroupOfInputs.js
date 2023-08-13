// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import MasterInputComponent from '../MasterInputComponent';
// Other ----------------------------------------------------------------------------
import { handleColumnSizes } from '../../../util';



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
const GroupOfInputs = ({dataStructureObj, dynamicInputState, setDynamicInputState, displayInputHeaders=true, internalIndex=null, helpSetInputState}) => {


    //______________________________________________________________________________________
    // ===== Component Return  =====

    const renderGroupOfInputs = () => {
        let inputDisplays = []

        if(dataStructureObj && dataStructureObj.dataStructure && dataStructureObj.dataStructure.length > 0){
            dataStructureObj.dataStructure.map((internalDataStructureObj, index) => {
                inputDisplays.push(
                    <div key={index} className={handleColumnSizes(internalDataStructureObj.columnSizes)} style={{paddingBottom:"15px"}}>
                        <MasterInputComponent
                            dataStructureObj={internalDataStructureObj}
                            dynamicInputState={dynamicInputState}
                            setDynamicInputState={setDynamicInputState}
                            displayInputHeaders={displayInputHeaders}
                            internalIndex={internalIndex}
                            hasPassedInHelpSetInputState={true}
                            passedInHelpSetInputState={helpSetInputState}
                        />
                    </div>
                )
            })
        }
        
        return (<div className="row">{inputDisplays}</div>)
    }



    //______________________________________________________________________________________
    // ===== Component Return  =====
    return renderGroupOfInputs();
}
export default GroupOfInputs;