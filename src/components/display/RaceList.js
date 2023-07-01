import React from "react";
import races from '../processing/races';

function RaceList(props) {
    const raceList = ['human', 'dwarf', 'nightelf', 'gnome', 'orc', 'undead', 'tauren', 'troll'];

    const greyOut = (race) => {
        if (props.selectedRaces.includes(race)) {
            return null
        }
        return 'greyscale'
    }

    return (
        <div className="race-options">

            <ul className='race-list'>
                {raceList.map((race) => <li key={race}><img src={races[race].gender.maleImg} alt={race} className={`noselect ${greyOut(race)}`} onClick={props.clickHandler}/></li>)}
            </ul>

        </div>
    )

}

export default RaceList;