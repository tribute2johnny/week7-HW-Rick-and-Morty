import React from'react';
import './ListItem.css';

const ListItem = ({character}) => {
    
    return(
        <div className="listItem">
            <p className="charName">{character.name}</p>
            <img className="charImage" src={character.image} alt="Waba luba dub dub"></img>
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {character.origin.name}</p>
            
            
            
        </div>
    )
    
    
    
    
}




export default ListItem;