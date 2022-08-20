import React from 'react';
import ListItem from './ListItem';

const CharacterList = ({characters}) => {

    const allCharacters = characters.map((character, index) => {
        return <ListItem character={character} key={index}/>
        
        



    })


    return(
        <div>
            <ul>
                {allCharacters}
            </ul>
        </div>
    )
}




export default CharacterList;