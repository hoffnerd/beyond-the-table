"use client"

// React/Next -----------------------------------------------------------------------
import { useEffect, useState } from 'react';
// Context --------------------------------------------------------------------------
import { useAppContext } from '@/context/AppContext';
// Styles ---------------------------------------------------------------------------
import styles from '@/styles/components/CharacterCard.module.css'
// Components -----------------------------------------------------------------------
import CharacterCard from '@/components/character/cards/CharacterCard';
import AnimatedCard from './AnimatedCard';
import LoadingCard from './LoadingCard';
import CardBack from './CardBack';
// Hooks ----------------------------------------------------------------------------
import useSWRFetch from '@/hooks/useSWRFetch';
import useMasterInputs from '@/hooks/useMasterInputs';
// Data -----------------------------------------------------------------------------
import { amountOfCardsToLoad } from '@/data/_config';
import { characterFilters } from '@/data/filters';
// Other ----------------------------------------------------------------------------
import { isArray, isObj } from '@/util';
import { filterCharacters } from '@/util/character';


//______________________________________________________________________________________
// ===== Component =====

const CharacterCards = ({ children, childrenType=false, path="characters", pageHasSideBar=false}) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const SWROptions = { revalidateIfStale: false, revalidateOnFocus: false };

    //______________________________________________________________________________________
    // ===== State from AppContext =====
    const { sidebarOpen } = useAppContext();

    //______________________________________________________________________________________
    // ===== Component state =====
    const [amountToLoad, setAmountToLoad] = useState(amountOfCardsToLoad);
    const [filteredCharacters, setFilteredCharacters] = useState(null);

    //______________________________________________________________________________________
    // ===== Hooks =====
    // const [ initialized, characters ] = useFetch({ url: apiPath, cache: 'no-store' });
    const { isLoading, error, data: characters } = useSWRFetch(path, SWROptions);
    const { renderInputsSection, dynamicInputState } = useMasterInputs(!isLoading, characterFilters)


    //______________________________________________________________________________________
    // ===== Use Effects =====
    useEffect(() => {
        if(!(isObj(dynamicInputState) && characters && Array.isArray(characters))) return;
        setFilteredCharacters(filterCharacters(dynamicInputState, characters));
    }, [dynamicInputState, characters])
    


    //______________________________________________________________________________________
    // ===== Render Functions =====
    
    const renderError = () => (
        <div className="container">
            <div className="alert alert-danger tw-text-center">
                <strong>Oops! </strong> Something has gone wrong trying to fetch the characters! Try again later.
            </div>
        </div>
    )
    
    const renderNoCharacters = () => {
        if((isArray(characters) && isArray(filteredCharacters)) || isLoading || filteredCharacters === null) return;
        if (childrenType === "noCharacters") return children;
        return <div className="container">
            <div className="alert alert-warning tw-text-center">
                <strong>Oops! </strong> Looks like there are no characters!&nbsp;
                {isObj(dynamicInputState, [ "race", "classes", "search" ], false) ? "Change your filters to see more!" : "Something may have gone wrong!" }
            </div>
        </div>
    }

    const renderCard = (index) => {
        if (isLoading || filteredCharacters === null) return <LoadingCard />;
        
        const character = isArray(filteredCharacters) ? filteredCharacters[index] : null;

        if (!isObj(character, [ "id" ])) return;
        
        return <AnimatedCard 
            key={character.id} 
            characterId={character.id}
            cardFront={ <CharacterCard character={character} childOfLink={true} /> }
            cardBack={ <CardBack character={character} childOfLink={true} /> }
        />
    }

    const renderCharacters = () => {
        let displayOfCharacters = [];
        for(let i = 0; i < amountToLoad; i++){
            displayOfCharacters.push( <div key={i}>{ renderCard(i) }</div> );
        }
        return displayOfCharacters;
    }

    const renderLoadMoreButton = () => {
        // if(!(amountOfCardsToLoad && isArray(characters) && amountOfCardsToLoad <= characters.length)) return;
        if(!((isArray(characters) && isArray(filteredCharacters)) || isLoading || filteredCharacters === null)) return;
        const disabled = isArray(filteredCharacters) && amountToLoad >= filteredCharacters.length;
        return <div className='container'>
            <div className="d-grid gap-2 col-md-8 mx-auto">
                <button 
                    className="tw-float-right btn btn-brand btn-lg"
                    onClick={()=>{ if(!(isLoading || disabled)) setAmountToLoad(amountToLoad + amountOfCardsToLoad); }}
                    disabled={isLoading || disabled}
                >
                    {isLoading ? "...Loading..." : disabled ? filteredCharacters.length !== characters.length ? "All Filtered Characters Loaded" : "All Characters Loaded" : "Load More"}
                </button>
            </div>
        </div>
    }


    //______________________________________________________________________________________
    // ===== Component Return =====
    if(error) return renderError();
    return <>
        <div className={`container ${styles.characterCardsInputs}`}> {renderInputsSection()} </div>
        <br/>
        <br/>
        {renderNoCharacters()}
        <div className={`${styles.characterCardsSection} ${styles.columnsLarge4} ${pageHasSideBar ? sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed : ""}`}>
            {renderCharacters()}
        </div>
        <br/>
        <br/>
        {renderLoadMoreButton()}
    </>
}
export default CharacterCards;