import React from'react';

const ListItem = ({character}) => {
    
    return(
        <div>
            <p>Name: {character.name}</p>
            <img src={character.image} alt="Waba luba dub dub"></img>
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {character.origin.name}</p>
            <hr></hr>
            
            
        </div>
    )
    
    
    
    
}




export default ListItem;