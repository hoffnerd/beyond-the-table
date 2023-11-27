import { isArray } from ".";


/**
 * Takes in an array of data objects, a selected data ID, and an onClick handler, and returns an array of buttons based on the data.
 * @param data - array of objects, contains data for each button.
 * @param selectedDataId - string, ID of the currently selected data object. It is used to determine 
 * if a button should be highlighted or not based on whether its ID matches the selectedDataId.
 * @param onClickHandler - function, will be called when a button is clicked. It takes one parameter, which is the id of the selected data.
 * @returns array of buttons to render.
 */
export const renderButtons = (data, selectedDataId, onClickHandler) => {
    if(!isArray(data)) return;

    const buttons = [];
    data.forEach(dataObj => {
        buttons.push(
            <div key={dataObj.id} className="d-grid gap-2">
                <button 
                    type="button"
                    style={{ minHeight:"100px" }}
                    className={`btn btn-${selectedDataId === dataObj.id ? "" : "outline-"}card`}
                    onClick={ () => onClickHandler(selectedDataId === dataObj.id ? null : dataObj.id) }
                >
                    {dataObj.display}
                </button>
            </div>
        )
    });
    return buttons;
}


export const renderCounter = (count, setCount) => {
    return (
        <div className="flex-items-evenly">
            <button className='btn btn-brand' style={{fontSize:"1.5rem"}} onClick={()=>setCount(count-1)}>-</button>
            <span>{count}</span>
            <button className='btn btn-brand' style={{fontSize:"1.5rem"}} onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
};