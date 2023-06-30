import React from "react";

function CharacterGeneratorButton(props) {
    const {selectedClasses, selectedRaces} = props;

    return (
        <button className='generate-button button'>Randomize your character!</button>
    )
}

export default CharacterGeneratorButton;