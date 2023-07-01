import React from "react";
import { useState, useEffect } from "react";
import races from "../processing/races";

function CharacterGenerator(props) {
    const {selectedClasses, selectedRaces, resultsRevealed, count} = props;
    const [race, setRace] = useState('');
    const [class_, setClass] = useState('');


    useEffect(() => {
        setRace(selectedRaces[Math.floor(Math.random() * selectedRaces.length)])
    }, [resultsRevealed, count])

    useEffect(() => {
        if (race) {
            const availClasses = selectedClasses.filter(job => races[race].classes.includes(job));
            setClass(availClasses[Math.floor(Math.random() * availClasses.length)]);
        }
    }, [race, resultsRevealed, count])

    return (
        <div className="generator-box">
            {class_ ? <h2>Your Randomized Character: {race} {class_}</h2> : <h2>There are no legal classes selected</h2>}
        </div>
    )
    
}

export default CharacterGenerator;