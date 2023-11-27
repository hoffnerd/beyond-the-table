// React/Next ------------------------------------------------------------------
// Data -----------------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
import styles from '../styles/components/DataDisplayTable.module.css';
// Other ----------------------------------------------------------------------------
import { isArray, isObj, makeArrayOfDataStructures } from '@/util';



//______________________________________________________________________________________
// ===== Component =====



/**
 * Renders a table based on provided data structure and data.
 * @props data - array of objects, contains the data to be displayed in the table. Each object in the array represents 
 * a row in the table, and the properties of the object represent the data for each column in the row.
 * @props dataStructure - array of objects, defines the structure of the data to be displayed in the table. Each object in the array represents a column.
 * @props [options=null] - object, optional. Can be passed to customize the behavior of this component. It can include the following properties:
 * - `tableStyle` - object, styles to apply to the table
 * - `tableClasses` - string, classes to apply to the table
 * @returns table based on provided data structure and data.
 */
const DataDisplayTable = ({data, dataStructure, options=null}) => {


    //______________________________________________________________________________________
    // ===== Constants =====

    const madeArrayOfDataStructures = makeArrayOfDataStructures(dataStructure);
    const arrayOfDataStructures = isArray(madeArrayOfDataStructures) ? [ dataStructure, ...madeArrayOfDataStructures ] : [ dataStructure ];
    const mergedDataStructures = isArray(arrayOfDataStructures) && arrayOfDataStructures.flat();



    //______________________________________________________________________________________
    // ===== Modifier Functions =====

    const modifyDisplayFromValue = (dataStructureObj, dataObj) => {
        if(!(isObj(dataStructureObj, [ "key", "displayRules"]) && isObj(dataObj, [ dataStructureObj.key ]) && isObj(dataStructureObj.displayRules, [ "preDisplay", "postDisplay" ], false))) return dataObj[dataStructureObj.key];
        if(isObj(dataStructureObj.displayRules, ["preDisplay", "postDisplay"])) return `${dataStructureObj.displayRules.preDisplay}${dataObj[dataStructureObj.key]}${dataStructureObj.displayRules.postDisplay}`;
        if(isObj(dataStructureObj.displayRules, ["preDisplay"])) return `${dataStructureObj.displayRules.preDisplay}${dataObj[dataStructureObj.key]}`;
        if(isObj(dataStructureObj.displayRules, ["postDisplay"])) return `${dataObj[dataStructureObj.key]}${dataStructureObj.displayRules.postDisplay}`;
        return "--";
    }



    //______________________________________________________________________________________
    // ===== Render Functions =====

    const renderInnerDataCell = (dataStructureObj, dataObj) => {
        const modifiedDisplay = modifyDisplayFromValue(dataStructureObj, dataObj);
        if (modifiedDisplay) return modifiedDisplay;
        return dataObj[dataStructureObj.key] ? dataObj[dataStructureObj.key] : "-";
    };

    const renderDataCell = (dataStructureObj, dataObj, index) => (
        <td
            key={`${dataStructureObj.key}_${index}`}
            className={isObj(dataStructureObj.displayRules, ["noDataNoDisplayOnMobile"]) && !dataObj[dataStructureObj.key] ? styles.noDisplayOnMobile : ""}
            data-label={isObj(dataStructureObj, ["mobileDisplay"]) ? dataStructureObj.mobileDisplay : dataStructureObj.display}
        >
            {renderInnerDataCell(dataStructureObj, dataObj)}
        </td>
    );

    const renderRows = () => data.map((dataObj, index) => {
        let rowCells = [];

        // Add each cell to the row and check for highlightRules
        mergedDataStructures.forEach(dataStructureObj => {
            (!dataStructureObj.noData) && rowCells.push(renderDataCell(dataStructureObj, dataObj, index));
        });

        // Add the row
        return <tr key={dataObj.level} className={styles.tableBodyRow}> {rowCells} </tr>
    });
    
    const renderTableHeaders = (dataStructure) => dataStructure.map(dataStructureObj =>
        <th 
            key={`${dataStructureObj.key}_header`} 
            style={isObj(dataStructureObj.displayRules, ["width"]) ? {width: dataStructureObj.displayRules.width} : {}}
            rowSpan={isArray(dataStructureObj.dataStructure) ? 1 : arrayOfDataStructures.length}
            colSpan={isArray(dataStructureObj.dataStructure) ? dataStructureObj.dataStructure.length : 1}
            scope="col"
        >
            {dataStructureObj.display}
        </th>
    );

    const renderTableHeadRows = () => arrayOfDataStructures.map((dataStructure, index) => 
        <tr key={index} className={styles.tableHeaderRow}>
            {isArray(dataStructure) && renderTableHeaders(dataStructure)}
        </tr>
    );

    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <div className={`tw-overflow-y-auto`}> 
            <table 
                className={`${styles.dataTable} ${isObj(options, ["tableClasses"]) ? options.tableClasses : ""}`} 
                style={isObj(options, ["tableStyle"]) ? options.tableStyle : {}}
            >
                <thead className="tw-sticky tw-top-0">
                    {isArray(arrayOfDataStructures) && renderTableHeadRows()}
                </thead>
                <tbody className={styles.tableBody}>
                    {isArray(data) && renderRows()}
                </tbody>
            </table>
        </div>
    );
};

export default DataDisplayTable;
