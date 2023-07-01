import React from "react";
import classesObj from '../processing/classes';

function ClassList(props) {
    const classes = ['druid', 'hunter', 'mage', 'paladin', 'priest', 'rogue', 'shaman', 'warlock', 'warrior'];
    const {selectedClasses} = props;

    const greyOut = (job) => {
        if (selectedClasses.includes(job)) {
            return null
        }
        return 'greyscale'
    }

    return (
        <div className="class-options">

            <ul className='class-list'>
                {classes.map((job) => <li key={job}><img src={classesObj[job].img} alt={job} className={`noselect ${greyOut(job)}`} onClick={props.clickHandler}/></li>)}
            </ul>

        </div>
    )
}

export default ClassList;