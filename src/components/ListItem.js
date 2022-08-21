import React from'react';
import './ListItem.css';

const ListItem = ({character, onCharacterClick}) => {

    const handleClick = function() {
        onCharacterClick(character);
    }
    
    return(
        <div className="listItem">
            <p className="charName" onClick={handleClick}>{character.name}</p>
            <img className="charImage" src={character.image} alt="Waba luba dub dub"></img>
            
            
            
            
        </div>
    )
    
    
    
    
}




export default ListItem;