import React, { useState, useEffect } from 'react';
import CharacterDetail from '../components/CharacterDetail';
import CharacterList from '../components/CharacterList';
import PageSelector from '../components/PageSelector';
import './CharacterContainer.css';

const CharacterContainer = ({pages}) => {
    
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null)


    useEffect(() => {
        getCharacters(pages[0].url);
    }, [pages])
    
    const getCharacters = url =>{
        fetch(url)
        .then(res => res.json())
        .then(characters => setCharacters(characters.results))
    }

    const onCharacterClick = (character) => {
        setSelectedCharacter(character);
    }

    const handleSelectChange = event => {
        getCharacters(event.target.value);
    }



    return(
        <div>
        <div className="view-box">
         {selectedCharacter ? <CharacterDetail character={selectedCharacter}/> : <img className="head-image" src={ require(`./kindpng_1021587.png`)}/>}
         <div className="view-box-text">
         {selectedCharacter ? <></>: <p>Show Me What You Got!</p>}
         {selectedCharacter ? <></>: <p>Click on a character to display what they got here!!</p>}
         </div>
         </div>
         <h1 className="h1-list">Characters</h1>
        <div className="outer-container">
        <PageSelector
        handleSelectChange={handleSelectChange}
        pages={pages}
        />
        <CharacterList 
        characters={characters} onCharacterClick={onCharacterClick}/>
        
        </div>
        </div>
    )
}





export default CharacterContainer;