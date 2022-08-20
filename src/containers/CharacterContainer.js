import React, { useState, useEffect } from 'react';
 import CharacterList from '../components/CharacterList';

const CharacterContainer = () => {
    
    const [characters, setCharacter] = useState([]);


    useEffect(() => {
        getCharacters();
    }, [])
    
    const getCharacters = function(){
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(characters => setCharacter(characters.results))
    }


    return(
        <div>
        <CharacterList characters={characters}/>
        </div>
    )
}





export default CharacterContainer;