// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from 'react';
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import Standard from './basic/Standard';
import Select from './basic/Select';
import GroupOfInputs from './groups/GroupOfInputs';
import ManyGroupOfInputs from './groups/ManyGroupOfInputs';
// Other ----------------------------------------------------------------------------
import { isArray, isObj } from '../../util';
import { createInputState, helpSetInputState } from '../../util/inputs';
import TextArea from './basic/TextArea';
import Toggle from './basic/Toggle';


//______________________________________________________________________________________
// ===== Component  =====

/**
 * Returns desired input based on the dataStructureObj passed in
 * @prop dataStructureObj - Object that constructs the input using its key, type, display, etc.
 * @prop dynamicInputState - Object that holds the current state of this input. Note: this component DOES need access to all of dynamicInputState, not just this input's state.
 * @prop setDynamicInputState - Function used to set the state of dynamicInputState.
 * @prop displayInputHeaders - Bool used to apply header/description above input.
 * @prop internalIndex - Int used if MasterInputComponent is called from a group (GroupOfInputs, ManyGroupOfInputs) to keep track of what index group we are in
 * @prop hasPassedInHelpSetInputState - Bool to say if we have a passedInHelpSetInputState or if we should use helpSetInputState
 * @prop passedInHelpSetInputState - Function, this is the same helpSetInputState declared in this file but if its passed in, like from a group, then use the one that is passed in to correctly track internalDynamicInputState
 * @return Returns desired input based on the dataStructureObj
*/
const MasterInputComponent = ({dataStructureObj, dynamicInputState, setDynamicInputState, dataToFillInternalInputState = null, displayInputHeaders = true, internalIndex=null, hasPassedInHelpSetInputState=false, passedInHelpSetInputState=null}) => {

    //______________________________________________________________________________________
    // ===== Component State =====
    const [internalDynamicInputStateArray, setInternalDynamicInputStateArray] = useState(null);
    const [internalDynamicInputState, setInternalDynamicInputState] = useState({});
    const [useInternal, setUseInternal] = useState(false);
    const [initialized, setInitialized] = useState(false);



    //______________________________________________________________________________________
    // ===== Component useEffects =====

    /* Check if the dataStructureObj has a dataStructure. */
    useEffect(() => {
        if(isObj(dataStructureObj) && isArray(dataStructureObj.dataStructure)){
            // If the dataStructureObj has a dataStructure, then it is a group of inputs and we need to create a state for it. 
            const defaultInternalDynamicInputStateToSet = createInputState(dataStructureObj.dataStructure, dataToFillInternalInputState);
            setInternalDynamicInputState(defaultInternalDynamicInputStateToSet);
            setInternalDynamicInputStateArray(isArray(dataToFillInternalInputState) ? [...dataToFillInternalInputState] : [{...defaultInternalDynamicInputStateToSet}]);
            setUseInternal(true);
        }else if(isObj(dataStructureObj)){
            // If it doesn't, then it is a single input and we don't need to create a state for it. 
            setInitialized(true);
        }
    }, [dataStructureObj])

    /* Setting the state of internal details or just setting initialized to true. */
    useEffect(() => {
        if(isArray(internalDynamicInputStateArray) && isObj(internalDynamicInputState)){
            if(initialized && useInternal){
                if(dataStructureObj && dataStructureObj.key && dataStructureObj.type){
                    if(dataStructureObj.type === "arrayOfObjects"){
                        setDynamicInputState({ ...dynamicInputState, [dataStructureObj.key]: [...internalDynamicInputStateArray] })
                    }
                    else{
                        setDynamicInputState({ ...dynamicInputState, [dataStructureObj.key]: {...internalDynamicInputState} })
                    }
                }
                
            }else{
                setInitialized(true);
            }
        }
    }, [internalDynamicInputStateArray, internalDynamicInputState, useInternal, initialized])


    //______________________________________________________________________________________
    // ===== State Changing Functions =====

    /**
     * Adds or removes an object to the internalDynamicInputStateArray array
     * @param internalIndex - int, The index of the internalDynamicInputStateArray that we are currently on.
     * @param amountToRemove - int, This is the amount of items to remove from the array.
     */
    const alterInternalDynamicInputStateArray = (internalIndex, amountToRemove) => {
        let newInternalDynamicInputStateArray = [...internalDynamicInputStateArray];
        let removedObj = null;
        if(amountToRemove === 0){
            // add a new object to the array
            removedObj = newInternalDynamicInputStateArray.splice(internalIndex+1, amountToRemove, internalDynamicInputState);
        }
        else if(isArray(internalDynamicInputStateArray, 1)){
            // remove an object from the array as long as there are more than one
            removedObj = newInternalDynamicInputStateArray.splice(internalIndex, amountToRemove);
        }
        setInternalDynamicInputStateArray(newInternalDynamicInputStateArray);
    }

    //______________________________________________________________________________________
    // ===== Render Functions  =====

    const renderInput = () => {
        if(isObj(dataStructureObj, ["key", "type"])){
            if(dataStructureObj.type === "text" || dataStructureObj.type === "email" || dataStructureObj.type === "number"){
                /* ===== Regular Inputs ===== */
                return(
                    <Standard
                        dataStructureObj={dataStructureObj}
                        dynamicInputState={dynamicInputState}
                        setDynamicInputState={setDynamicInputState}
                        displayInputHeaders={displayInputHeaders}
                        internalIndex={internalIndex}
                        helpSetInputState={hasPassedInHelpSetInputState ? passedInHelpSetInputState : helpSetInputState}
                    />
                )
            }
            else{
                switch (dataStructureObj.type) {
                    /* ===== Basic Inputs ===== */
                    case "select":
                        return(
                            <Select
                                dataStructureObj={dataStructureObj}
                                dynamicInputState={dynamicInputState}
                                setDynamicInputState={setDynamicInputState}
                                displayInputHeaders={displayInputHeaders}
                                internalIndex={internalIndex}
                                helpSetInputState={hasPassedInHelpSetInputState ? passedInHelpSetInputState : helpSetInputState}
                            />
                        )
                    case "toggle":
                        return(
                            <Toggle
                                dataStructureObj={dataStructureObj}
                                dynamicInputState={dynamicInputState}
                                setDynamicInputState={setDynamicInputState}
                                displayInputHeaders={displayInputHeaders}
                                internalIndex={internalIndex}
                                helpSetInputState={hasPassedInHelpSetInputState ? passedInHelpSetInputState : helpSetInputState}
                            />
                        )
                    case "textarea":
                        return(
                            <TextArea
                                dataStructureObj={dataStructureObj}
                                dynamicInputState={dynamicInputState}
                                setDynamicInputState={setDynamicInputState}
                                displayInputHeaders={displayInputHeaders}
                                internalIndex={internalIndex}
                                helpSetInputState={hasPassedInHelpSetInputState ? passedInHelpSetInputState : helpSetInputState}
                            />
                        )
                    default:
                        console.warn("This input type has not been created yet!", {dataStructureObj})
                        return ""
                }
            }
        } else {
            console.error("Something is wrong with the dataStructureObj", {dataStructureObj})
        }

        return <Fragment></Fragment>
    }

    //______________________________________________________________________________________
    // ===== Component Return  =====
    return renderInput();
}
export default MasterInputComponent;