"use client";

import { useEffect, useState } from "react";
import { isArray, isObj } from "@/util";


//______________________________________________________________________________________
// ===== Hook =====
const useDice = () => {

    //______________________________________________________________________________________
    // ===== Dice =====
    const d2 = { sides: 2 }
    const d4 = { sides: 4 }
    const d6 = { sides: 6 }
    const d8 = { sides: 8 }
    const d10 = { sides: 10 }
    const d12 = { sides: 12 }
    const d20 = { sides: 20 }
    const d100 = { sides: 100 }
    const diceSet = { d2, d4, d6, d8, d10, d12, d20, d100 }
    
    //______________________________________________________________________________________
    // ===== Hook State =====
    // const [ data, setData ] = useState("loading");



    //______________________________________________________________________________________
    // ===== Use Effects =====
    // useEffect(() => {
    // }, [])
    
    

    //______________________________________________________________________________________
    // ===== Functions =====

    /**
     * Generates a random number between 1 and the specified number of sides.
     * @param sides - int, number of sides on a dice.
     * @returns int, random number between 1 and the specified number of sides.
     */
    const roll = (sides) => Math.floor(Math.random() * sides) + 1;

    /**
     * Takes an array of dice and returns an array of rolled results for each die.
     * @param arrayOfDice - array of objects || array of strings || array of numbers, dice that will be rolled, such as a "d6" or "d20".
     * @param [options=null] - optional object: options for this custom hook. All options available:
     * - `total`: bool, will get the total of all the dice rolled.
     * - `advantage`: bool, will get the highest roll of all the dice rolled.
     * - `disadvantage`: bool, will get the lowest roll of all the dice rolled.
     * @returns array of ints, array of results from rolling the dice in the `arrayOfDice`.
     */
    const rollDice = (arrayOfDice, options=null) => {
        
        // return early if the given parameter is not an array
        if(!isArray(arrayOfDice)) return console.error("`rollDice` was not given an array!", { arrayOfDice, diceSet });

        // foreach die in the arrayOfDice, roll and add a result to the array that will be returned
        let results = [];
        arrayOfDice.forEach(die => {
            let sides = 0;

            // if this die is and object with sides, get this dies sides to roll with
            if(isObj(die, [ "sides" ])) sides = die.sides;
            
            // if this die is a string and is within `diceSet`, get that dies sides to roll with
            else if (isObj(diceSet, [die])) sides = diceSet[die].sides;

            // if this die is a number, assume this is the number of sides  to roll with
            else if((!isNaN(die)) && (!isArray(die, -1))) sides = die;

            // if this die is not an object, not a string, and not a number, console the error
            else console.error("Error! `rollDice` was given a die that does not exist!", {die, diceSet, arrayOfDice});

            // if sides has been set, roll with those sides and add to results
            if(sides) results.push( roll(sides) )
        });

        // if `total`, `advantage`, or `disadvantage` is set an options, this will handle those options
        let total = 0;
        let highestRoll = 0;
        let lowestRoll = 999;
        isObj(options, [ "total", "advantage", "disadvantage" ], false) && results.forEach(result => {
            
            // check if this result is a number
            if(!isNaN(result)) {
                
                // if `total` is a given option, add to the total
                total = isObj(options, [ "total" ]) ? total += result : total;
                
                // if `advantage` is a given option and this result is greater than the current highestRoll, set it to the highestRoll
                highestRoll = isObj(options, [ "advantage" ]) && result > highestRoll ? result : highestRoll;
                
                // if `disadvantage` is a given option and this result is less than the current lowestRoll, set it to the lowestRoll
                lowestRoll = isObj(options, [ "disadvantage" ]) && result < lowestRoll ? result : lowestRoll;
            }
            
            // console error if this result is not a number
            else console.error("result is not a number!", {result});
        });

        // return
        return { 
            results,
            total: isObj(options, [ "total" ]) ? total : undefined,
            advantage: isObj(options, [ "advantage" ]) ? highestRoll : undefined,
            disadvantage: isObj(options, [ "disadvantage" ]) ? lowestRoll : undefined,
        };
    }



    //______________________________________________________________________________________
    // ===== Hook Return =====
    return { ...diceSet, diceSet, roll, rollDice };
}
export default useDice;