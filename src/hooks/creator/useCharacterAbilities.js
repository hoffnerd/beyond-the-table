"use client";

// React/Next -----------------------------------------------------------------------
import { Fragment, useEffect, useState } from 'react';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/Creator.module.css'
// Hooks ----------------------------------------------------------------------------
import useDice from '../useDice';
// Components -----------------------------------------------------------------------
// Data -----------------------------------------------------------------------------
import { abilitiesPossible, skillsByAbility } from '@/data/character';
// Other ----------------------------------------------------------------------------
import { convertObjToArray, fireSwal, isArray, isObj } from '@/util';
import { renderFontAwesomeIcons } from '@/util/icons';
import { calculateModifierNumber } from '@/util/character';


//______________________________________________________________________________________
// ===== Hook =====

const useCharacterAbilities = (unprocessedCharacter=null) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const defaultModifiers = { strength:0, dexterity:0, constitution:0, intelligence:0, wisdom:0, charisma:0 }


    //______________________________________________________________________________________
    // ===== Initial State =====

    const initialScores = { 
        strength: isObj(unprocessedCharacter, ["strength"]) ? unprocessedCharacter.strength : 10, 
        dexterity: isObj(unprocessedCharacter, ["dexterity"]) ? unprocessedCharacter.dexterity : 10, 
        constitution: isObj(unprocessedCharacter, ["constitution"]) ? unprocessedCharacter.constitution : 10, 
        intelligence: isObj(unprocessedCharacter, ["intelligence"]) ? unprocessedCharacter.intelligence : 10, 
        wisdom: isObj(unprocessedCharacter, ["wisdom"]) ? unprocessedCharacter.wisdom : 10, 
        charisma: isObj(unprocessedCharacter, ["charisma"]) ? unprocessedCharacter.charisma : 10 
    }

    const initialModifiers = isObj(unprocessedCharacter) && isObj(unprocessedCharacter.modifiers) ? {
        strength: unprocessedCharacter.modifiers.strength ? unprocessedCharacter.modifiers.strength : defaultModifiers.strength, 
        dexterity: unprocessedCharacter.modifiers.dexterity ? unprocessedCharacter.modifiers.dexterity : defaultModifiers.dexterity, 
        constitution: unprocessedCharacter.modifiers.constitution ? unprocessedCharacter.modifiers.constitution : defaultModifiers.constitution, 
        intelligence: unprocessedCharacter.modifiers.intelligence ? unprocessedCharacter.modifiers.intelligence : defaultModifiers.intelligence, 
        wisdom: unprocessedCharacter.modifiers.wisdom ? unprocessedCharacter.modifiers.wisdom : defaultModifiers.wisdom, 
        charisma: unprocessedCharacter.modifiers.charisma ? unprocessedCharacter.modifiers.charisma : defaultModifiers.charisma, 
    } : defaultModifiers;

    const initialModifiersOverriding = isObj(unprocessedCharacter) && isArray(unprocessedCharacter.modifiersOverriding) ? unprocessedCharacter.modifiersOverriding : [];
    const initialSavingThrows = isObj(unprocessedCharacter) && isObj(unprocessedCharacter.savingThrows) ? unprocessedCharacter.savingThrows : {};
    const initialSkills = isObj(unprocessedCharacter) && isObj(unprocessedCharacter.skills) ? unprocessedCharacter.skills : {};



    //______________________________________________________________________________________
    // ===== Hook State =====
    const [scores, setScores] = useState(initialScores);
    const [modifiers, setModifiers] = useState(initialModifiers);
    const [modifiersOverriding, setModifiersOverriding] = useState(initialModifiersOverriding);
    const [savingThrows, setSavingThrows] = useState(initialSavingThrows);
    const [skills, setSkills] = useState(initialSkills);




    //______________________________________________________________________________________
    // ===== Hooks =====
    const { d6, rollDice } = useDice();



    //______________________________________________________________________________________
    // ===== Use Effects =====

    /**
     * useEffect to calculate modifiers in state.
     * @dependencies `scores` and `modifiersOverriding`
     */
    useEffect(() => {

        // return early if we don't have scores and abilitiesPossible
        if(!(isObj(scores) && isArray(abilitiesPossible))) return;

        // calculate modifiers for those that are not being overridden
        let hasUpdatedModifier = false;
        let modifiersToSet = { ...modifiers };
        abilitiesPossible.forEach(abilityObj => {
            if(!modifiersOverriding.includes(abilityObj.key)){
                hasUpdatedModifier = true;
                modifiersToSet[abilityObj.key] = calculateModifierNumber(scores[abilityObj.key]);
            }
        });

        // if an update has been made, set the modifiers
        if(hasUpdatedModifier) setModifiers(modifiersToSet);
    }, [scores, modifiersOverriding]);



    //______________________________________________________________________________________
    // ===== Getters =====

    /**
     * Returns the state and setter for a given state name if it exists, otherwise it returns nulls.
     * @param stateToGet - string, represents the state you want to retrieve from the `states` object.
     * @returns array, contains the requested state and its corresponding setter function. If the 
     * requested state does not exist, it returns an array containing null values.
     */
    const getStates = (stateToGet) => {

        // a single object that holds all the state
        const states = {
            scores: [ scores, setScores ],
            modifiers: [ modifiers, setModifiers ],
            savingThrows: [ savingThrows, setSavingThrows ],
            skills: [ skills, setSkills ]
        }

        // if the requested state exists, return that state and setter. If not, return nulls
        return isObj(states, [stateToGet]) ? states[stateToGet] : [ null, ()=>null ]
    }

    const getModifiers = () => {
        if(!isArray(modifiersOverriding)) return {};

        let modifiersToReturn = {};
        modifiersOverriding.forEach(modifierKey => modifiersToReturn[modifierKey] = modifiers[modifierKey] );
        return modifiersToReturn;
    }


    //______________________________________________________________________________________
    // ===== Handlers =====

    /**
     * Rolls four six-sided dice, calculates the total score by subtracting the lowest roll if disadvantage 
     * is present, updates the scores in the state, and displays the results to the user.
     * @param abilityObj - object, contains information about the ability being rolled.
     */
    const handleRoll = (abilityObj) => {

        // roll the dice and get the results, total, and lowest roll
        const { results, total, disadvantage } = rollDice([ d6, d6, d6, d6 ], { total:true, disadvantage:true });

        // return early and console error if there are no results
        if(!isArray(results)) return console.error("`handleRoll`s results is not an array!", {results});
        
        // get the score of this roll
        const score = disadvantage && disadvantage !== 999 ? total - disadvantage : 10;

        // set the score in the state and give feedback to the user
        setScores(prevScores=>({ ...prevScores, [abilityObj.key]:score }));
        fireSwal({ icon:"success", text: `You rolled ${results.join(", ")} for a total of ${total}, take away your lowest roll of ${disadvantage}, your ${abilityObj.display} ability score roll is ${score}.` }) 
    }

    /**
     * Adds the `stateKey` to the `state` object with a value of true if it doesn't exist, or removes the `stateKey` from the `state` object.
     * @param state - object, state object we want to effect. From the useState hook.
     * @param setState - function, state setter from the useState hook.
     * @param stateKey - string, represents the key in the state object that needs to be toggled.
     */
    const handleToggle = (state, setState, stateKey) => {

        // return early by adding this key to state  if it doesn't exist
        if(!isObj(state, [ stateKey ])) return setState(prevState=>({ ...prevState, [stateKey]: true }));

        // remove this key from state
        let shallowCopyOfState = {...state};
        delete shallowCopyOfState[stateKey];
        setState({...shallowCopyOfState});
    }

    /**
     * Checks if an `abilityKey` is already in the `modifiersOverriding` array, and if so, removes it; otherwise, it adds it to the array.
     * @param abilityKey - The `abilityKey` parameter is a string that represents the key of an ability.
     */
    const handleModifiersOverriding = (abilityKey) => {

        // return early by adding this abilityKey to state if it doesn't exist
        if(!modifiersOverriding.includes(abilityKey)) return setModifiersOverriding(prevModifiersOverriding=>[ ...prevModifiersOverriding, abilityKey ]);

        // filter out this abilityKey from state and set it
        let shallowCopyOfModifiersOverriding = [ ...modifiersOverriding ];
        setModifiersOverriding(shallowCopyOfModifiersOverriding.filter(abilityKeyOverriding => abilityKeyOverriding !== abilityKey))
    }



    //______________________________________________________________________________________
    // ===== Render Functions =====

    /**
     * Renders a toggler component based on the provided state and state  key, with an optional display text.
     * @param stateToGet - string, represents the state we want to retrieve from the `getStates` function.
     * @param stateKey - string, represents the key of the state object that we want to use for this toggler.
     * @param display - string, represents the text or label that will be displayed on the toggler button.
     * @returns a toggler component.
     */
    const renderToggler = (stateToGet, stateKey, display) => {

        // get the state we want to use for this toggler
        const [ state, setState ] = getStates(stateToGet);

        // this toggler will be in a disabled state if it doesn't exist in state
        const disabled = !isObj(state, [ stateKey ]);

        // return toggler
        return (
            <div key={`${stateToGet}_${stateKey}`} className={`${styles.paddingWrapper} ${isObj(state, [ stateKey ]) ? "" : styles.disabled}`}>
                <div className={styles.abilitiesRow}>
                    <div className={`${styles.descriptor} ${styles.fullSpan}`}>
                        <button className={`btn btn${disabled ? "-outline" : ""}-brand`} style={{borderWidth:"5px"}} onClick={()=>handleToggle(state, setState, stateKey)} >
                            {disabled ? <div style={{ width:"14px", height:"24px" }} /> : renderFontAwesomeIcons("faCheck")}
                        </button>
                        &nbsp;
                        <div className="tw-my-auto" onClick={()=>handleToggle(state, setState, stateKey)}>{display}</div>
                    </div>
                </div>
            </div>
        )
    }

    /**
     * Renders a list of skill proficiencies based on a given ability key.
     * @param abilityKey - string, represents the key of an ability. It is used to retrieve the corresponding skills from the `skillsByAbility` object.
     * @returns a sections of Skill Proficiencies to render for the given ability.
     */
    const renderSkills = (abilityKey) => {
        
        // return early if the this ability doesn't exist within skillsByAbility
        if(!(isObj(skillsByAbility, [ abilityKey ]) && isArray(skillsByAbility[abilityKey]))) return;

        // return Skill Proficiencies options for this ability
        return (
            <Fragment>
                <h4 style={{paddingTop:"1rem",paddingLeft:"1rem"}}>Skill Proficiencies</h4>
                <div className={styles.abilities}>
                    {skillsByAbility[abilityKey].map(skillObj => renderToggler("skills", skillObj.key, skillObj.display) )}
                </div>
            </Fragment>
        );
    }

    /**
     * Renders a counter component, which allows the user to increment or decrement a value in the state based on the provided stateToGet and abilityKey.
     * @param stateToGet - string, represents the state we want to retrieve from the `getStates` function.
     * @param abilityKey - string, key used to access a specific value in the state object. It is used to determine 
     * which value in the state object should be incremented or decremented when the counter buttons are clicked.
     * @returns a counter component
     */
    const renderCounter = (stateToGet, abilityKey) => {

        // get the state we want to use for this counter but return early if it doesn't exist
        const [ state, setState ] = getStates(stateToGet);
        if(!(state && (state[abilityKey] || state[abilityKey] === 0))) return;

        // disable the counter if we are dealing with modifiers and this ability's modifier calculation is not being overridden
        const disabled = stateToGet === "modifiers" && !modifiersOverriding.includes(abilityKey);

        // return the counter
        return (
            <Fragment>
                <button 
                    className={`btn btn-brand ${styles.btnCounterDown}`}
                    onClick={ ()=>((!disabled) && setState((prevState=>({ ...prevState, [abilityKey]:prevState[abilityKey]-1 })))) }
                    disabled={disabled}
                >
                    -
                </button>
                <div className={styles.count}>{state[abilityKey]}</div>
                <button 
                className={`btn btn-brand ${styles.btnCounterUp}`}
                    onClick={ ()=>((!disabled) && setState((prevState=>({ ...prevState, [abilityKey]:prevState[abilityKey]+1 })))) }
                    disabled={disabled}
                >
                    +
                </button>
            </Fragment>
        )
    };

    /**
     * Renders a row with a button to override modifiers and a counter.
     * @param abilityObj - object, contains information about an ability score. It should have a `key`, which represents the unique identifier for the ability score.
     * @returns row with a button to override modifiers and a counter.
     */
    const renderOverrideModifierRow = (abilityObj) => (
        <div className={styles.abilitiesRow}>
            <div className={styles.descriptor}>
                <button 
                    className={`btn btn${modifiersOverriding.includes(abilityObj.key) ? "" : "-outline"}-brand`}
                    style={{borderWidth:"5px"}}
                    onClick={()=>handleModifiersOverriding(abilityObj.key)}
                >
                    {modifiersOverriding.includes(abilityObj.key) ? renderFontAwesomeIcons("faCheck") : <div style={{ width:"14px", height:"24px", maxwidth:"14px", maxHeight:"24px" }} />}
                </button>
                &nbsp;
                <div className="tw-my-auto" onClick={()=>handleModifiersOverriding(abilityObj.key)}>Override Modifier</div>
            </div>
            {renderCounter("modifiers", abilityObj.key)}
        </div>
    )

    /**
     * Renders a row for an ability score with a descriptor and a counter.
     * @param abilityObj - object, contains information about an ability score. It should have a `key`, which represents the unique identifier for the ability score.
     * @returns row for an ability score with a descriptor and a counter.
     */
    const renderAbilityScoreRow = (abilityObj) => (
        <div className={styles.abilitiesRow}>
            <div className={styles.descriptor}>Ability Score</div>
            {renderCounter("scores", abilityObj.key)}
        </div>
    )

    /**
     * Renders a section for each ability possible, including icons, buttons, ability scores, override modifiers, saving throw proficiency, and skills.
     * @returns sections for each ability possible. Each section includes a grid with two columns. The first column displays the ability icon and name,
     * and the second column includes a button to roll for that ability. There is also a branded line separating each section. Additionally, the function 
     * renders the ability score row, override modifier row, saving throw proficiency toggler, and skills.
     */
    const renderAbilities = () => {

        // return early if there are no abilities
        if(!isArray(abilitiesPossible)) return;

        // render a section for each ability possible
        return abilitiesPossible.map(abilityObj => (
            <Fragment key={abilityObj.key}>
                <div className="tw-grid tw-grid-cols-2 tw-gap-4">
                    <div className="tw-flex">
                        <h3 style={{minWidth:"40px"}}>{renderFontAwesomeIcons(abilityObj.icon)}</h3>
                        <h3>{abilityObj.display}</h3>
                    </div>
                    <div className="tw-flow-root" style={{paddingRight:"1rem"}}>
                        <button className={`btn btn-brand ${styles.btnRoll} tw-float-right`} onClick={()=>handleRoll(abilityObj)} title="Roll!">{renderFontAwesomeIcons("faDice")} Roll</button>
                    </div>
                </div>
                <div className='branded-line short' />
                <div className={styles.abilities}>
                    <div className={styles.paddingWrapper}>{renderAbilityScoreRow(abilityObj)}</div>
                    <div className={`${styles.paddingWrapper} ${!modifiersOverriding.includes(abilityObj.key) ? styles.disabled : ""}`}>
                        {renderOverrideModifierRow(abilityObj)}
                    </div>
                    {renderToggler("savingThrows", abilityObj.key, `Saving Throw Proficiency`)}
                </div>
                {renderSkills(abilityObj.key)}

                <br/>
                <br/>
            </Fragment>
        ));
    }



    //______________________________________________________________________________________
    // ===== Hook Return =====
    return {
        renderForm: () => renderAbilities(), 
        data: { ...scores, modifiers:getModifiers(), savingThrows, skills } 
    };
}
export default useCharacterAbilities;