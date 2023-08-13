import { isArray, isObj } from ".";

export const helpCreateDisplay = (dataStructureObj, displayInputHeaders) => {
    let displayArray = [];
    // {displayInputHeadersToUse && dataStructureObjToUse.display ? <label>{dataStructureObjToUse.display}:</label> : ''}
    if(displayInputHeaders && dataStructureObj.required){
        displayArray.push(<span key={`required_${dataStructureObj.key}`} style={{color:"red"}} title="Required">*</span>);
        displayArray.push(<span key={`space_1_${dataStructureObj.key}`} title="Required">&nbsp;</span>);
    }
    if(displayInputHeaders && dataStructureObj.display){
        displayArray.push(<span key={`display_${dataStructureObj.key}`} title={dataStructureObj.required ? "Required" : ""}>{dataStructureObj.display}:</span>);
    }
    if(displayInputHeaders && dataStructureObj.description){
        if(displayInputHeaders && dataStructureObj.display){
            displayArray.push(<span key={`space_2_${dataStructureObj.key}`}>&nbsp;</span>);
        }
        displayArray.push(
            <div key={`description_${dataStructureObj.key}`} title="Click the question mark to get more information.">
                <a id={`description_${dataStructureObj.key}_dropdown`} data-bs-toggle="dropdown" aria-expanded="false" href="#" onClick={(e) => { e.preventDefault(); }}>?</a>
                <ul className="dropdown-menu" aria-labelledby={`description_${dataStructureObj.key}_dropdown`}>
                    <li><span className="dropdown-item-text">{dataStructureObj.description}</span></li>
                </ul>
            </div>
        )
    }

    return <label style={isArray(displayArray) ? {display:"flex"} : dataStructureObj.styles ? dataStructureObj.styles : {display:"flex"}}>{displayArray}</label>;
}

export const helpCreateSelectOptions = (optionObj, isInGroup = false) => {
    let optionArray = [];
    
    if(!(optionObj && optionObj.addPleaseSelectOption === false) && !isInGroup){
        // Default behavior to add this as long as we are not in a group
        optionArray.push(<option key="pleaseSelect" value="pleaseSelect">Select One...</option>)
    }
    
    if (isObj(optionObj, ["options"]) && isArray(optionObj.options)){
        optionObj.options.map((option, i)=>{
            let isBasic = true;

            // Check if option is an object
            if (isObj(option, ["display"]) && (option.id || option.id === "" || option.key || option.key === "")){
                isBasic = false;
            }
            
            if(isBasic){
                optionArray.push(<option key={i} value={option}>{option}</option>);
            }else{
                // Check if this is a group or an option
                if(isArray(option.options)){
                    optionArray.push(
                        <optgroup key={option.id ? option.id : option.key} label={option.display}>
                            {helpCreateSelectOptions(option, true)}
                        </optgroup>
                    )
                }
                else{
                    optionArray.push(<option key={i} value={option.id ? option.id : option.key} disabled={option.disabled}>{option.display}</option>);
                }
            }
        })
    }
    return optionArray;
}

export const createInputState = (dataStructure, dataToFillInputState = null) => {
    let inputState = {};
    if(isArray(dataStructure)){
        // console.log({dataStructure, dataToFillInputState})
        dataStructure.forEach((dataStructureObj, index) => {
            if(dataStructureObj && dataStructureObj.key){

                // ===== fill with info from dataToFillInputState ====
                if(isArray(dataStructureObj.dataStructure) && dataToFillInputState){
                    inputState[dataStructureObj.key] = dataToFillInputState[dataStructureObj.key];
                }
                else if(dataToFillInputState && (dataToFillInputState[dataStructureObj.key] || dataToFillInputState[dataStructureObj.key] === 0)){
                    inputState[dataStructureObj.key] = isNaN(dataToFillInputState[dataStructureObj.key]) ? dataToFillInputState[dataStructureObj.key] : parseInt(dataToFillInputState[dataStructureObj.key]);
                }
                
                // ===== hard coded key checks for special cases ====
                // if(dataStructureObj.key === "page"){
                //     const currentPath = window && window.location && window.location.pathname ? window.location.pathname : "/";
                //     let currentPageKey = null;
                //     if(isArray(options_pages)){
                //         for (let i = 0; i < options_pages.length; i++){
                //             const pageObj = options_pages[i];
                //             if(pageObj.path === currentPath){
                //                 currentPageKey = pageObj.key;
                //                 break;
                //             }
                //         }
                //     }

                //     inputState[dataStructureObj.key] = dataStructureObj.defaultValue ? dataStructureObj.defaultValue : currentPageKey ? currentPageKey : '';
                // }

                // ===== fill with defaultValue or empty string ====
                if(!inputState[dataStructureObj.key]){
                    inputState[dataStructureObj.key] = dataStructureObj.defaultValue || dataStructureObj.defaultValue === 0 ? dataStructureObj.defaultValue : '';
                }

            }
        })
    }
    // console.log({inputState})
    return inputState;
}

/**
 * Updates the state for the inputs
 * @param setDynamicInputState - function, the setter function for the state variable that holds the dynamic input state.
 * @param newDynamicInputStateObj - object, this is the new object that will be used to update the state.
 * @param [internalIndex=null] - This is the index of the internal array that is being updated. If the internal array is not being updated, this is null.
 */
export const helpSetInputState = (setDynamicInputState, newDynamicInputStateObj, internalIndex=null) => {
    if(internalIndex === null){
        setDynamicInputState(newDynamicInputStateObj)
    }
    else{
        let newInternalDynamicInputStateArray = [...internalDynamicInputStateArray];
        let removedObj = newInternalDynamicInputStateArray.splice(internalIndex, 1, newDynamicInputStateObj);
        setDynamicInputState(newInternalDynamicInputStateArray);
    }
}