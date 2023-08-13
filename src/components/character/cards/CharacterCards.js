"use client"

// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
// Components -----------------------------------------------------------------------
import CharacterCard from '@/components/character/cards/CharacterCard';
import AnimatedCard from './AnimatedCard';
// Hooks ----------------------------------------------------------------------------
import { useAppContext } from '@/context/AppContext';
import useMasterInputs from '@/hooks/useMasterInputs';
// Data -----------------------------------------------------------------------------
import { amountOfCardsToLoad } from '@/data/_config';
import { characterFilters } from '@/data/filters';
// Other ----------------------------------------------------------------------------
import { isArray, isObj } from '@/util';
import { Fragment, useEffect, useState } from 'react';
import { filterCharacters } from '@/util/character';


//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const CharacterCards = ({characters, isAnimated=true, pageHasSideBar=false}) => {

    // console.log(characters)

    //______________________________________________________________________________________
    // ===== State from AppContext =====
    const { sidebarOpen } = useAppContext();

    //______________________________________________________________________________________
    // ===== Component state =====
    const [amountToLoad, setAmountToLoad] = useState(amountOfCardsToLoad);
    const [filteredCharacters, setFilteredCharacters] = useState(characters);

    //______________________________________________________________________________________
    // ===== Hooks =====
    const { renderInputsSection, dynamicInputState } = useMasterInputs(true, characterFilters)


    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        setFilteredCharacters(filterCharacters(dynamicInputState, characters));
    }, [dynamicInputState])
    

    //______________________________________________________________________________________
    // ===== Render Functions =====
    
    const renderNoCharacters = () => {
        return (
            <div className="container">
                <div className="alert alert-warning">
                    <strong>Oops! </strong> Looks like there are no characters!&nbsp;
                    {isObj(dynamicInputState, [ "race", "classes", "search" ], false) ? "Change your filters to see more!" : "Something may have gone worng!" }
                </div>
            </div>
        )
    }

    const renderCharacters = () => {
        let displayOfCharacters = [];

        if(!isArray(filteredCharacters)) return renderNoCharacters();

        for(let i = 0; i < amountToLoad; i++){
            const character = filteredCharacters[i];
            if (!isObj(character, [ "id" ])) break;

            if(isAnimated){
                displayOfCharacters.push(
                    <AnimatedCard key={character.id} characterId={character.id}>
                        <CharacterCard character={character} />
                    </AnimatedCard>
                )
            } else {
                displayOfCharacters.push( <CharacterCard key={character.id} character={character} /> )
            }
        }
        return (
            <div className={`${styles.characterCardsSection} ${styles.columnsLarge4} ${pageHasSideBar ? sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed : ""}`}>
                {displayOfCharacters}
            </div>
        );
    }

    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <Fragment>
            <div className='container'>
                {renderInputsSection()}
            </div>
            <br/>
            <br/>
            {renderCharacters()}
            <br/>
            <br/>
            { amountOfCardsToLoad <= characters.length &&
                <div className='container'>
                    <div className="d-grid gap-2 col-md-8 mx-auto">
                        <button 
                            className="tw-float-right btn btn-brand btn-lg"
                            onClick={()=>{ if(!(amountToLoad >= filteredCharacters.length)) setAmountToLoad(amountToLoad + amountOfCardsToLoad); }}
                            disabled={amountToLoad >= filteredCharacters.length}
                        >
                            {amountToLoad >= filteredCharacters.length ? filteredCharacters.length !== characters.length ? "All Filtered Characters Loaded" : "All Characters Loaded" : "Load More"}
                        </button>
                    </div>
                </div>
            }
        </Fragment>
    )
}
export default CharacterCards;