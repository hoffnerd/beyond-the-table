"use client"

// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
// Components -----------------------------------------------------------------------
import Loading from '@/components/layout/Loading';
import CharacterCard from '@/components/character/cards/CharacterCard';
import AnimatedCard from './AnimatedCard';
// Hooks ----------------------------------------------------------------------------
import { useAppContext } from '@/context/AppContext';
import useFetch from '@/hooks/useFetch';
import useMasterInputs from '@/hooks/useMasterInputs';
// Data -----------------------------------------------------------------------------
import { amountOfCardsToLoad } from '@/data/_config';
import { characterFilters } from '@/data/filters';
// Other ----------------------------------------------------------------------------
import { callAPI, isArray, isObj } from '@/util';
import { Fragment, useEffect, useState } from 'react';
import { filterCharacters } from '@/util/character';
import LoadingCard from './LoadingCard';


//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const CharacterCards = ({ children, childrenType=false, apiPath="characters", isAnimated=true, pageHasSideBar=false}) => {

    //______________________________________________________________________________________
    // ===== State from AppContext =====
    const { sidebarOpen } = useAppContext();

    //______________________________________________________________________________________
    // ===== Component state =====
    const [amountToLoad, setAmountToLoad] = useState(amountOfCardsToLoad);
    const [filteredCharacters, setFilteredCharacters] = useState(null);

    //______________________________________________________________________________________
    // ===== Hooks =====
    const [ initialized, characters ] = useFetch({ url: apiPath, cache: 'no-store' });
    const { renderInputsSection, dynamicInputState } = useMasterInputs(initialized, characterFilters)


    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if(!(isObj(dynamicInputState) && isArray(characters))) return;
        setFilteredCharacters(filterCharacters(dynamicInputState, characters));
    }, [dynamicInputState, characters])
    


    //______________________________________________________________________________________
    // ===== Render Functions =====
    
    const renderError = () => {
        return (
            <div className="container">
                <div className="alert alert-danger">
                    <strong>Oops! </strong> Something has gone wrong trying to fetch the characters! Try again later.
                </div>
            </div>
        )
    }
    
    const renderNoCharacters = () => {
        return (
            <div className="container">
                <div className="alert alert-warning">
                    <strong>Oops! </strong> Looks like there are no characters!&nbsp;
                    {isObj(dynamicInputState, [ "race", "classes", "search" ], false) ? "Change your filters to see more!" : "Something may have gone wrong!" }
                </div>
            </div>
        )
    }
    
    const renderLoading = () => {
        let displayOfCharacters = [];
        for(let i = 0; i < amountToLoad; i++){
            displayOfCharacters.push( <LoadingCard/> );
        }
        return displayOfCharacters;
    }

    const renderCharacters = () => {
        let displayOfCharacters = [];

        if(!isArray(filteredCharacters)) return childrenType === "noCharacters" ? children : renderNoCharacters();

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
        return displayOfCharacters;
    }

    const renderLoadMoreButton = () => {
        // if(!(amountOfCardsToLoad && isArray(characters) && amountOfCardsToLoad <= characters.length)) return;
        const disabled = isArray(filteredCharacters) && amountToLoad >= filteredCharacters.length;
        return(
            <div className='container'>
                <div className="d-grid gap-2 col-md-8 mx-auto">
                    <button 
                        className="tw-float-right btn btn-brand btn-lg"
                        onClick={()=>{ if(!(characters === "loading" || disabled)) setAmountToLoad(amountToLoad + amountOfCardsToLoad); }}
                        disabled={characters === "loading" || disabled}
                    >
                        {characters === "loading" ? "...Loading..." : disabled ? filteredCharacters.length !== characters.length ? "All Filtered Characters Loaded" : "All Characters Loaded" : "Load More"}
                    </button>
                </div>
            </div>
        )
    }


    //______________________________________________________________________________________
    // ===== Component Return =====
    if(characters === "error") renderError();
    return (
        <Fragment>
            <div className='container'>
                {renderInputsSection()}
            </div>
            <br/>
            <br/>
            <div className={`${styles.characterCardsSection} ${styles.columnsLarge4} ${pageHasSideBar ? sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed : ""}`}>
                {characters === "loading" ? renderLoading() : renderCharacters()}
            </div>
            <br/>
            <br/>
            {renderLoadMoreButton()}
        </Fragment>
    )
}
export default CharacterCards;