import React, { useState, useEffect } from 'react';
 import CharacterList from '../components/CharacterList';
 import PageSelector from '../components/PageSelector';
 import './CharacterContainer.css';

const CharacterContainer = ({pages}) => {
    
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        getCharacters(pages[0].url);
    }, [pages])
    
    const getCharacters = url =>{
        fetch(url)
        .then(res => res.json())
        .then(characters => setCharacters(characters.results))
    }

    const handleSelectChange = event => {
        getCharacters(event.target.value);
    }


    return(
        <div>
    
        <div className="outerContainer">
        <PageSelector
        handleSelectChange={handleSelectChange}
        pages={pages}
        />
        <CharacterList 
        characters={characters}/>
        </div>
        </div>
    )
}





export default CharacterContainer;