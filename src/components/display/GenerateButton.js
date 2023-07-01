import React from "react";

function GenerateButton(props) {
    return (
        <div>
            <button className="generate-button button noselect" onClick={props.onClick}>Randomize!</button>
        </div>
    )
}

export default GenerateButton;