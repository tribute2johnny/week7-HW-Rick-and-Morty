import React from 'react';
import './CharacterDetail.css';

const CharacterDetail = ({character}) => {

    return (
        <div className="char-detail">
            <div>
                <img className="char-image" src={character.image} alt="Wubba lubba dub dub"></img>
            </div>
            <div className="char-info">
                <p className="char-name">{character.name}</p>
                <p>Status: {character.status}</p>
                <p>Gender: {character.gender}</p>
                <p>Species: {character.species}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
                
            </div>
        </div>
    )
}



export default CharacterDetail;