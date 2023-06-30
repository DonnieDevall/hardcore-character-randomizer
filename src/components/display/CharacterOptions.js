import React from 'react';
import { useState } from 'react';
import RaceList from './RaceList';
import ClassList from './ClassList';
import '../display/CharacterOptions.css';


function CharacterOptions() {
    const [selectedRaces, setSelectedRaces] = useState(['dwarf', 'gnome', 'human', 'nightelf', 'orc', 'tauren', 'troll', 'undead']);
    const [selectedClasses, setSelectedClasses] = useState(['hunter', 'mage', 'paladin', 'priest', 'rogue', 'shaman', 'warlock', 'warrior']);

    const raceSelector = ({target}) => {
        if (selectedRaces.includes(target.alt)) {
            setSelectedRaces((prev) => prev.filter((race) => race !== target.alt))
        } else {
            setSelectedRaces((prev) => [...prev, target.alt])
        }
    }

    const classesSelector = ({target}) => {
        if (selectedClasses.includes(target.alt)) {
            setSelectedClasses((prev) => prev.filter((job) => job !== target.alt))
        } else {
            setSelectedClasses((prev) => [...prev, target.alt])
        }
    }

    function toggleClearRaces() {
        if (selectedRaces.length > 0) {
            setSelectedRaces([])
        } else {
            setSelectedRaces(['dwarf', 'gnome', 'human', 'nightelf', 'orc', 'tauren', 'troll', 'undead'])
        }
    }

    function toggleClearClasses() {
        if (selectedClasses.length > 0) {
            setSelectedClasses([])
        } else {
            setSelectedClasses(['hunter', 'mage', 'paladin', 'priest', 'rogue', 'shaman', 'warlock', 'warrior'])
        }
    }

    return (
        <div>
            <div className='main-body'>
                <h2>Pick which races and classes you would like to include</h2>
                
                <h2>Races</h2>
                <button className="button noselect" onClick={toggleClearRaces}>Select/Clear All</button>
                <RaceList selectedRaces={selectedRaces} clickHandler={raceSelector} />

                <h2>Classes</h2>
                <button className="button noselect" onClick={toggleClearClasses}>Select/Clear All</button>
                <ClassList selectedClasses={selectedClasses} clickHandler={classesSelector} />
            </div>
        </div>
    )
}

export default CharacterOptions;