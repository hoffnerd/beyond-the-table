// React/Next -----------------------------------------------------------------------
import { useState, useEffect, Fragment } from 'react';
import { useSession } from "next-auth/react"
// Components -----------------------------------------------------------------------
import Loading from '@/components/layout/Loading';
import MasterInputComponent from '@/components/inputs/MasterInputComponent';
// Other ----------------------------------------------------------------------------
import { handleColumnSizes, isObj } from '../util';
import { createInputState } from '../util/inputs';

//______________________________________________________________________________________
// ===== Hook =====

/**
 * This hook is used to loop through a dataStructure, creating a section of inputs and a state for all those inputs
 * @param readyToRender - A boolean that tells the hook that the component that called it is ready to render.
 * @param dataStructure - An array of objects that describe the inputs.
 * @param [dataToFillInputState=null] - This is the data that will be used to fill the input state.
 * @returns returns an object with two properties: renderInputsSection to render the inputs and dynamicInputState that is the state of all the inputs.
 */
const useMasterInputs = (readyToRender, dataStructure, dataToFillInputState = null) => {
    //______________________________________________________________________________________
    // ===== State from Auth and AppContext =====
    const { data: session, status} = useSession();
    
    //______________________________________________________________________________________
    // ===== Hook State =====
    const [initialized, setInitialized] = useState(false);
    const [dynamicInputState, setDynamicInputState] = useState(null);

    //______________________________________________________________________________________
    // ===== Use Effects =====

    /* If the Component that called masterInputsHook is ready to render the hook, set the dynamicInputState of the hook. */
    useEffect(() => {
        if(readyToRender){
            setDynamicInputState(createInputState(dataStructure, dataToFillInputState));
        }
    }, [readyToRender])

    /* If the Component that called masterInputsHook is ready to render the hook and dynamicInputState is finished and set up, then the hook is ready to go. */
    useEffect(() => {
        if(readyToRender && isObj(dynamicInputState) && !initialized){
            setInitialized(true);
        }
    }, [readyToRender, dynamicInputState])

    // useEffect(() => {
    //     console.log({dynamicInputState})
    // }, [dynamicInputState])



    //______________________________________________________________________________________
    // ===== Render Functions  =====

    /**
     * For each Object in our given dataStructure, it renders an Input.
     * @returns A row array of Input components.
     */
    const renderInputs = () => {
        let inputDisplays = []

        if(dataStructure && dataStructure.length > 0){
            dataStructure.map((dataStructureObj, index) => {
                isObj(dataStructureObj) && inputDisplays.push(
                    <div key={index} className={handleColumnSizes(dataStructureObj.columnSizes)} style={{paddingBottom:"15px"}}>
                        <MasterInputComponent
                            dataStructureObj={dataStructureObj}
                            dynamicInputState={dynamicInputState}
                            setDynamicInputState={setDynamicInputState}
                            dataToFillInternalInputState={dataToFillInputState}
                            debug={true}
                        />
                    </div>
                )
            })
        }

        return (<div className="row">{inputDisplays}</div>)
    }

    /**
     * If the component is ready to render and has been initialized, render the inputs and the save button. Otherwise, render a loading message.
     * @returns the inputs and save button or loading message.
     */
    const renderInputsSection = () => {
        if(readyToRender && initialized){
            return renderInputs();
        }
        return <Loading center={true} />
    }

    //______________________________________________________________________________________
    // ===== Hook Return  =====
    return { renderInputsSection, dynamicInputState, setDynamicInputState };
}
export default useMasterInputs;