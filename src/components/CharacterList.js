import React from 'react';
import ListItem from './ListItem';
import './CharacterList.css';

const CharacterList = ({characters}) => {

    const allCharacters = characters.map((character, index) => {
        return <ListItem character={character} key={index}/>
        
        



    })


    return(
        <div>
            <ul className="listContainer">
                {allCharacters}
            </ul>
        </div>
    )
}




export default CharacterList;