"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from 'react';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/Creator.module.css'
// Hooks ----------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import LazyLoadNextImage from '@/components/LazyLoadNextImage';
// Data -----------------------------------------------------------------------------
import { classData, defaultSelectedClassesObj, subclassData } from '@/data/classData';
import { abilityObjsWithChoice, skillObjs } from '@/data/character';
// Other ----------------------------------------------------------------------------
import { convertObjToArray, findObjInArrayByKey, isArray, isObj } from '@/util';
import DataDisplayTable from '@/components/DataDisplayTable';


//______________________________________________________________________________________
// ===== Hook =====

const useCharacterClass = (unprocessedCharacter=null) => {
    
    //______________________________________________________________________________________
    // ===== Constants =====
    const classes = convertObjToArray(classData);
    
    //______________________________________________________________________________________
    // ===== Initial State =====
    const initialIsMulticlassing = isObj(unprocessedCharacter) && isArray(unprocessedCharacter.classes, 1);
    const initialSelectedClasses = isObj(unprocessedCharacter) && isArray(unprocessedCharacter.classes) ? unprocessedCharacter.classes : [];

    //______________________________________________________________________________________
    // ===== Hook State =====
    const [isMulticlassing, setIsMulticlassing] = useState(initialIsMulticlassing);
    const [selectedClasses, setSelectedClasses] = useState(initialSelectedClasses);
    const [selectedBackground, setSelectedBackground] = useState(isObj(unprocessedCharacter, ["cardBackground"]) ? unprocessedCharacter.cardBackground : "");
    const [showingMoreInfo, setShowingMoreInfo] = useState([]);



    //______________________________________________________________________________________
    // ===== Use Effects =====

    /* when `isMulticlassing` is toggled and is false, clear all selected classes, expect for the first */
    useEffect(() => {
        if((!isMulticlassing) && isArray(selectedClasses, 1)){
            setSelectedClasses([ selectedClasses[0] ])
            setSelectedBackground("")
        }
    }, [isMulticlassing]);

    /* Clear `selectedBackground` if the selected class is toggled off */
    useEffect(() => {
        if(isArray(selectedClasses, 1)){
            const selectedClassesObj = selectedClasses.find(selectedClassesObj => selectedClassesObj.classId === selectedBackground);
            if(!isObj(selectedClassesObj, ["classId"])) setSelectedBackground("");
        }
    }, [selectedClasses]);



    //______________________________________________________________________________________
    // ===== Getters =====

    /**
     * Returns an array of class IDs from the array of selected class objects.
     * @returns array of `classId` values from the `selectedClasses` array.
     */
    const getSelectedClassIds = () => {
        return selectedClasses.map(selectedClassObj => selectedClassObj.classId)
    }



    //______________________________________________________________________________________
    // ===== Handlers =====

    const handleToggleShowMoreInfo = (classId) => {
        let newShowingMoreInfo = [];

        // return early with a hard set the array of classes we are showing if none are being shown
        if(!isArray(showingMoreInfo)) return setShowingMoreInfo([classId]);

        // stop showing more info by creating a new array without the one we clicked on
        if(showingMoreInfo.includes(classId)) showingMoreInfo.forEach(cid => cid !== classId && newShowingMoreInfo.push(cid) );

        // otherwise add the one we clicked on.
        else newShowingMoreInfo = [ ...showingMoreInfo, classId ];

        // set our showingMoreInfo to the newShowingMoreInfo
        setShowingMoreInfo(newShowingMoreInfo);
    }
    
    /**
     * Updates a specific property of a selected class object within the array of selectedClasses based on the provided classId.
     * @param classId - string, unique identifier of the class that needs to be updated.
     * @param key - string, property key of the object that needs to be updated. Used to specify which property of the object should be changed.
     * @param value - string, new value that you want to assign to the specified key in the selected class object.
     */
    const handleClassChange = (classId, key, value) => {

        // get the index of the this class within `selectedClasses` and return early if there is some how an error 
        const indexOfObjToUpdate = selectedClasses.findIndex((selectedClassObj) => selectedClassObj.classId === classId);
        if(indexOfObjToUpdate < 0) return console.error("No match found in handleClassChange.", {selectedClasses, classId, indexOfObjToUpdate});
        
        // update obj with this `classId` in the same position of the array
        let shallowCopyOfSelectedClasses = [...selectedClasses];
        shallowCopyOfSelectedClasses.splice(indexOfObjToUpdate, 1, { ...selectedClasses[indexOfObjToUpdate], [key]: value })
        setSelectedClasses(shallowCopyOfSelectedClasses);
    }

    /**
     * Handles the selection and deselection of a class based on its ID, taking into account whether multiclassing is enabled or not.
     * @param classId - string, id of a class. It is used to identify and toggle the selection of a class.
     */
    const handleClassClick = (classId) => {

        // find out if this `classId` is selected or not
        const isSelected = isObj(findObjInArrayByKey(selectedClasses, "classId", classId));

        // because we are not multiclassing, return early by toggling this selected class
        if(!isMulticlassing) return setSelectedClasses(isSelected ? [] : [{...defaultSelectedClassesObj, classId}])
        
        // we are multiclassing so get the array with this `classId` removed and set the classes selected based on `isSelected`
        const filteredSelectedClasses = selectedClasses.filter(selectedClassObj => selectedClassObj.classId !== classId)
        setSelectedClasses(isSelected ? filteredSelectedClasses : [...selectedClasses, {...defaultSelectedClassesObj, classId}])
    }



    //______________________________________________________________________________________
    // ===== Render Functions =====
    
    /**
     * Renders a text input field for a custom subclass if the selected subclass is "other".
     * @param selectedClassObj - object, representing the selected class and subclass.
     * @param classObj - object, represents a class. It contains properties such as `display` which represents the display name of the class.
     * @returns the text input for custom subclass text
     */
    const renderOtherSubclassInput = (selectedClassObj, classObj) =>{

        // return early as long as this selected subclass is not "other"
        if(selectedClassObj.subclassId !== "other") return;

        // render the custom subclass text input
        return (
            <>
                <span>Other {classObj.display} Subclass</span>
                <input
                    className="form-control darkInputs"
                    aria-label={`Other ${classObj.display} Subclass`} 
                    aria-describedby={`Other ${classObj.display} Subclass`} 
                    type="text"
                    name={`${selectedClassObj.classId}_other`}
                    id={`${selectedClassObj.classId}_other`}
                    value={selectedClassObj.otherSubclass}
                    onChange={(e)=>handleClassChange(selectedClassObj.classId, "otherSubclass", e.target.value)}
                />
            </>
        )
    }

    /**
     * Generates a set of buttons based on an array of `subclasses` objects related to the `selectedClassObj`.
     * @param selectedClassObj - object, representing the currently selected class. It contains properties such as classId and subclassId.
     * @param subclasses - array of objects, subclasses of a selected class.
     * @returns array of buttons to toggle subclass
     */
    const renderSubclassButtons = (selectedClassObj, subclasses) => {
        const subclassSections = [];
        subclasses.forEach(subclassObj => subclassSections.push(
            <div key={`${selectedClassObj.classId}_${subclassObj.id}`} className="d-grid gap-2">
                <button 
                    type="button"
                    style={{ minHeight:"100px" }}
                    className={`btn btn-${selectedClassObj.subclassId === subclassObj.id ? "" : "outline-"}card`}
                    onClick={ () => handleClassChange(selectedClassObj.classId, "subclassId", selectedClassObj.subclassId === subclassObj.id ? "" : subclassObj.id) }
                >
                    {subclassObj.display}
                </button>
            </div>
        ));
        return subclassSections;
    }

    /**
     * Renders a section to select a subclass for a selected class object, based on the provided class object.
     * @param selectedClassObj - object, representing the selected class, should have properties such as "level" and "subclassId".
     * @param classObj - object, represents a class and contains properties such as `id`, `subclassLevel`, and `subclasses`.
     * @returns a subclass selection section
     */
    const renderSubclassSection = (selectedClassObj, classObj) => {

        // return early if there are no subclasses attached to this class
        if(!(isObj(classObj, [ "id", "subclassLevel" ]) && selectedClassObj.level >= classObj.subclassLevel && isArray(classObj.subclasses))) return;

        // get the subclassObj
        const subclassObj = isObj(selectedClassObj, ["subclassId"]) && subclassData[selectedClassObj.subclassId] ? subclassData[selectedClassObj.subclassId] : null;

        // render section to select a subclass for this selected class
        /* <h5>Select your {classObj.display} Subclass</h5> */
        return <>
            <br/>
            <h3>Select your {classObj.display} Subclass</h3>
            <div className='branded-line short'/>
            <br/>
            <div className={`${styles.creatorGrid} ${styles.raceButtonColumns} tw-gap-3`}>
                {renderSubclassButtons(selectedClassObj, classObj.subclasses)}
            </div>
            <br/>
            {isObj(subclassObj, ["description"]) && <p>{subclassObj.description}</p>}
            {renderOtherSubclassInput(selectedClassObj, classObj)}
            {showingMoreInfo.includes(selectedClassObj.classId) && isObj(subclassObj) && renderClassMoreInfo(subclassObj, "Subclass")}
        </>
    }

    const renderFeatures = (features) => features.map(featureObj => (
        <Fragment key={featureObj.id}>
            <br/>
            <h4>{featureObj.display}</h4>
            <p>{featureObj.description}</p>
            {isArray(featureObj.tables) && featureObj.tables.map(table => (
                <Fragment key={table.id}>
                    <br/>
                    <h5>{table.display}</h5>
                    <DataDisplayTable
                        dataStructure={table.dataStructure} 
                        data={table.data} 
                        options={{ 
                            tableClasses:`${styles.classTable} ${isObj(styles, [featureObj.id]) ? styles[featureObj.id] : ""}` 
                        }}
                    />
                    <br/>
                </Fragment>
            ))}
        </Fragment>
    ))

    /**
     * Takes an array of proficiency objects and returns an array of P tags representing the proficiencies with their descriptions and connected data.
     * @param proficiencies - array of objects, each object represents a proficiency and has the following properties: `id`, `display`, `description`, `proficiencyKeys`
     * @returns array of P tags representing the proficiencies with their descriptions
     */
    const renderProficiencies = (proficiencies) => proficiencies.map(proficiencyObj => {

        // return early with basic proficiency text if there is no connection to any other data
        if(!isArray(proficiencyObj.proficiencyKeys)) return <p key={proficiencyObj.id}><strong>{proficiencyObj.display}:</strong> {proficiencyObj.description}</p>
        
        // get the data that this proficiencyObj is connected too and return early with a warning if that connection hasn't been made
        const objToCheck = proficiencyObj.id === "savingThrows" ? abilityObjsWithChoice : proficiencyObj.id === "skills" ? skillObjs : null;
        if(!isObj(objToCheck, proficiencyObj.proficiencyKeys)) return console.warn("Connection not made or missing some data.", { objToCheck, proficiencyObj, connectionsKnown: { abilityObjsWithChoice, skillObjs } });

        // get the displays from the connection with the proficiencyKey then return proficiency text with this array
        const arrayOfDisplays = proficiencyObj.proficiencyKeys.map(proficiencyKey => objToCheck[proficiencyKey].display);
        return <p key={proficiencyObj.id}><strong>{proficiencyObj.display}:</strong> {proficiencyObj.description} {isArray(arrayOfDisplays) && arrayOfDisplays.join(", ")}</p>
    })

    const renderClassMoreInfo = (classObj, classType="Class") => <>
        {isObj(classObj.table) && isArray(classObj.table.dataStructure) && isArray(classObj.table.data) && <>
            <br/>
            <br/>
            <h3>{classObj.display} {classType} Table</h3>
            <div className='branded-line short'/>
            <br/>
            <DataDisplayTable 
                dataStructure={classObj.table.dataStructure} 
                data={classObj.table.data} 
                options={{ 
                    tableClasses:`${styles.classTable} ${isObj(styles, [classObj.id]) ? styles[classObj.id] : ""}` 
                }}
            />
            <br/>
        </>}
        {(classObj.spellCastingAbility || classObj.hitDie || isArray(classObj.proficiencies) || isArray(classObj.equipment)) && <>
            <br/>
            <h3>{classObj.display} {classType} Details</h3>
            <div className='branded-line short'/>
        </>}
        {classObj.spellCastingAbility && <>
            <br/>
            <h4>Spellcasting Ability</h4>
            <p><strong>Spell save DC:</strong> 8 + your proficiency bonus + your {classObj.spellCastingAbility} modifier</p>
            <p><strong>Spell attack modifier:</strong>  your proficiency bonus + your {classObj.spellCastingAbility} modifier</p>
        </>}
        {classObj.hitDie && <>
            <br/>
            <h4>Hit Points</h4>
            <p><strong>Hit Dice:</strong> 1d{classObj.hitDie} per {classObj.display} level</p>
            <p><strong>Hit Points at 1st Level:</strong> {classObj.hitDie} + your Constitution modifier</p>
            <p><strong>Hit Points at Higher Levels:</strong> 1d{classObj.hitDie} + your Constitution modifier per {classObj.display} level after 1st</p>
        </>}
        {isArray(classObj.proficiencies) && <>
            <br/>
            <h4>Proficiencies</h4>
            {renderProficiencies(classObj.proficiencies)}
        </>}
        {isArray(classObj.equipment) && <>
            <br/>
            <h4>Equipment</h4>
            <p>You start with the following equipment, in addition to the equipment granted by your background:</p>
            <ul> {classObj.equipment.map((equipmentText, index) => <li key={index}> {equipmentText} </li>)} </ul>
        </>}
        {isArray(classObj.features) && <>
            <br/>
            <h3>{classObj.display} {classType} Features</h3>
            <div className='branded-line short'/>
            {renderFeatures(classObj.features)}
        </>}
    </>;

    /**
     * Renders a section for a selected class object and its corresponding class object.
     * @param selectedClassObj - object, currently selected class. It contains properties such as classId and level.
     * @param classObj - object, represents a class and contains properties such as `id`, `display`, and `description`.
     * @returns a class info section.
     */
    const renderClassSection = (selectedClassObj, classObj) => (
        <Fragment key={`ClassSection_${classObj.id}`}> 
            <div>
                <div className={`${styles.sticky} ${styles.stickyHeader}`}>
                    <div className='flex-items-evenly'>
                        <h3>{classObj.display}</h3>
                        <button 
                            className={`btn btn-${showingMoreInfo.includes(selectedClassObj.classId) ? "outline-" : ""}brand`}
                            onClick={()=>handleToggleShowMoreInfo(selectedClassObj.classId)}
                        >
                            Show {showingMoreInfo.includes(selectedClassObj.classId) ? "Less" : "More"} Class Information
                        </button>
                    </div>
                    <div className='branded-line' />
                </div>
                <br/>
                <p>{classObj.description}</p>
                <div className={`${styles.sticky} ${styles.stickyLevel}`}>
                    <div className={`row ${styles.row}`}>
                        <div className="col-6" style={{margin:"auto"}}>Levels for {classObj.display}</div>
                        <div className="col-6 flex-items-evenly">
                            <div/>
                            <button className='btn btn-brand' style={{fontSize:"1.25rem"}} onClick={()=>handleClassChange(selectedClassObj.classId, "level", selectedClassObj.level-1)}>-</button>
                            <span>{selectedClassObj.level}</span>
                            <button className='btn btn-brand' style={{fontSize:"1.25rem"}} onClick={()=>handleClassChange(selectedClassObj.classId, "level", selectedClassObj.level+1)}>+</button>
                            <div/>
                        </div>
                    </div>
                </div>
                {showingMoreInfo.includes(selectedClassObj.classId) && renderClassMoreInfo(classObj)}
                {renderSubclassSection(selectedClassObj, classObj)}
            </div>
            <br/>
            <br/>
        </Fragment>
    )

    /**
     * Renders an info section for each selected class.
     * @returns array of class info sections.
     */
    const renderClassSections = () => {

        // return early if there are no selected classes
        if(!isArray(selectedClasses)) return;

        // render a info section for each class that has been selected
        return selectedClasses.map(selectedClassObj => renderClassSection(selectedClassObj, classData[selectedClassObj.classId]));
    }

    /**
     * Generates a list of buttons based on selected class IDs and displays them with corresponding background images.
     * @returns array of buttons with background images.
     */
    const renderBackgroundButtons = () => {

        // get only the ids in the selected array and return early 
        const selectedClassIds = getSelectedClassIds();
        if(!isArray(selectedClassIds)) return;

        // render a button for each class that has been selected. Looping through `classes` to keep buttons in the same order.
        const buttons = [];
        classes.forEach(classObj => {
            if(selectedClassIds.includes(classObj.id)){
                buttons.push(
                    <div key={classObj.id} className="d-grid gap-2">
                        <button 
                            type="button"
                            style={{ minHeight:"100px" }}
                            className={`btn btn-${selectedBackground === classObj.id ? "" : "outline-"}card`}
                            onClick={ () => setSelectedBackground(selectedBackground === classObj.id ? "" : classObj.id) } 
                        >
                            {classObj.id !== "other" ?
                                <div className='flex-items-evenly'>
                                    <div/> <LazyLoadNextImage alt={classObj.id} imageKey={`bg_${classObj.id}`} width={100} height={143} /> <div/>
                                </div>
                            : ""}
                            {classObj.display}
                        </button>
                    </div>
                )
            }
        });
        return buttons;
    }

    /**
     * Renders a section for selecting a card background based on the selected classes in a multiclassing scenario.
     * @returns card background selection section.
     */
    const renderBackgroundSelector = () => {

        // return early if we aren't multiclassing and have at least 2 selected classes
        if(!(isMulticlassing && isArray(selectedClasses, 1))) return;

        // render the card background selection section
        return (
            <>
                <h3>Card Background</h3>
                <div className='branded-line' />
                <br/>
                <p>Since you are Multiclassing, you may pick which character background you would like to use! If you do not manually select a background, we will just use the first class you selected. In your case, this would be the {classData[selectedClasses[0].classId].display} background.</p>
                <div className={`${styles.creatorGrid} ${styles.raceButtonColumns} tw-gap-3`}>
                    {renderBackgroundButtons()}
                </div>
                <br/>
                <br/>
            </>
        )
    }

    /**
     * Generates a set of buttons based on an array of class objects.
     * @returns array of buttons.
     */
    const renderClassButtons = () => {

        // return early if classes wasn't turned into an array for some reason 
        if(!isArray(classes)) return;

        // render a button for each class there is
        const buttons = [];
        classes.forEach(classObj => buttons.push(
            <div key={classObj.id} className="d-grid gap-2">
                <button 
                    type="button"
                    style={{ minHeight:"100px" }}
                    className={`btn btn-${findObjInArrayByKey(selectedClasses, "classId", classObj.id) ? "" : "outline-"}card`}
                    onClick={ () => handleClassClick(classObj.id) } 
                >
                    {classObj.id !== "other" ?
                        <div className='flex-items-evenly'>
                            <div/> <LazyLoadNextImage alt={classObj.id} imageKey={`ci_${classObj.id}`} width={75} height={75} /> <div/>
                        </div>
                    : ""}
                    {classObj.display}
                </button>
            </div>
        ));
        return buttons;
    }



    //______________________________________________________________________________________
    // ===== Hook Return =====
    return {
        renderForm: () => <>
            <h3>Classes</h3>
            <div className='branded-line' />
            <br/>
            <div className={`${styles.creatorGrid} ${styles.raceButtonColumns} tw-gap-3`}>
                {renderClassButtons()}
            </div>
            <br/>
            <div className="d-grid gap-2 col-md-6 mx-auto">
                <button 
                    type="button" 
                    className={`btn btn-${isMulticlassing ? "outline-" : ""}brand`} 
                    onClick={ () => setIsMulticlassing(!isMulticlassing) }
                > 
                    {isMulticlassing ? "Disable Multiclassing" : "Enable Multiclassing"} 
                </button>
            </div>
            <br/>
            <br/>
            {renderBackgroundSelector()}
            {renderClassSections()}
        </>, 
        data: { 
            classes: selectedClasses,
            cardBackground: selectedBackground
        } 
    };
}
export default useCharacterClass;