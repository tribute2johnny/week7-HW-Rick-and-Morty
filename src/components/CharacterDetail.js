import React from 'react';

const CharacterDetail = ({character}) => {

    return (
        <div className="charImage">
            <div>
                <img className="charImageDetail" src={character.image} alt="Wubba lubba dub dub"></img>
            </div>
            <div>
                <p className="charName">{character.name}</p>
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