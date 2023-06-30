import React from "react";
import races from './races';

function RaceList(props) {
    const alliance = ['human', 'dwarf', 'nightelf', 'gnome'];
    const horde = ['orc', 'undead', 'tauren', 'troll'];

    const greyOut = (race) => {
        if (props.selectedRaces.includes(race)) {
            return null
        }
        return 'greyscale'
    }

    return (
        <div className="race-options">

            <ul className='race-list'>
                {alliance.map((race) => <li><img src={races.alliance[race].gender.maleImg} alt={race} className={greyOut(race)} onClick={props.clickHandler}/></li>)}
            </ul>

            <ul className='race-list'>
                {horde.map((race) => <li><img src={races.horde[race].gender.maleImg} alt={race} className={greyOut(race)} onClick={props.clickHandler}/></li>)}
            </ul>

        </div>
    )

}

export default RaceList;