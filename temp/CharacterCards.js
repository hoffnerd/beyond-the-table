"use client"

// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
// Components -----------------------------------------------------------------------
import Loading from '@/components/layout/Loading';
import AnimatedCard from './AnimatedCard';
import CharacterCard from '@/components/character/cards/CharacterCard';
// Hooks ----------------------------------------------------------------------------
import { useAppContext } from '@/context/AppContext';
import useMasterInputs from '@/hooks/useMasterInputs';
// Data -----------------------------------------------------------------------------
import { amountOfCardsToLoad } from '@/data/_config';
import { characterFilters } from '@/data/filters';
// Other ----------------------------------------------------------------------------
import { callAPI, isArray, isObj } from '@/util';
import { Fragment, useEffect, useState } from 'react';
import { filterCharacters } from '@/util/character';


//______________________________________________________________________________________
// ===== Component =====

/* This is the character page of the site */
const CharacterCards = ({apiPath="character", isAnimated=true, pageHasSideBar=false}) => {

    // console.log(characters)

    //______________________________________________________________________________________
    // ===== State from AppContext =====
    const { sidebarOpen } = useAppContext();

    //______________________________________________________________________________________
    // ===== Component state =====
    const [amountToLoad, setAmountToLoad] = useState(amountOfCardsToLoad);
    const [characters, setCharacters] = useState("loading");
    const [filteredCharacters, setFilteredCharacters] = useState(null);

    //______________________________________________________________________________________
    // ===== Hooks =====
    const { renderInputsSection, dynamicInputState } = useMasterInputs(characters !== "loading" && characters !== "error", characterFilters)


    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if(!(isObj(dynamicInputState) && isArray(characters))) return;
        setFilteredCharacters(filterCharacters(dynamicInputState, characters));
    }, [dynamicInputState, characters])

    useEffect(() => {
        if(characters !== "loading") return;
        readCharactersFromAPI();
    }, [characters])
    

    //______________________________________________________________________________________
    // ===== Functions Used in Use Effects =====

    const readCharactersFromAPI = async () => {
        const { done, characters: chars } = await callAPI({ url: apiPath, method: "GET" })
        console.table(chars);

        if (!(done && isArray(chars))) {
            setCharacters("error")
            console.error({ done, chars })
            return;
        }
        setCharacters(chars)
    }



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

    const renderLoadMoreButton = () => {
        if(!(amountOfCardsToLoad && isArray(characters) && amountOfCardsToLoad <= characters.length)) return;
        const disabled = isArray(filteredCharacters) && amountToLoad >= filteredCharacters.length;
        return(
            <div className='container'>
                <div className="d-grid gap-2 col-md-8 mx-auto">
                    <button 
                        className="tw-float-right btn btn-brand btn-lg"
                        onClick={()=>{ if(!disabled) setAmountToLoad(amountToLoad + amountOfCardsToLoad); }}
                        disabled={disabled}
                    >
                        {disabled ? filteredCharacters.length !== characters.length ? "All Filtered Characters Loaded" : "All Characters Loaded" : "Load More"}
                    </button>
                </div>
            </div>
        )
    }


    //______________________________________________________________________________________
    // ===== Component Return =====
    if(characters === "error") return renderError();
    if(characters === "loading") return <Loading center={true} />;
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
            {renderLoadMoreButton()}
        </Fragment>
    )
}
export default CharacterCards;