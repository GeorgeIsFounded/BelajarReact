import React from "react";
import "../styles/styles.css"

function Button() {
    return (
        <React.Fragment>
            <button style={{
                backgroundColor : "red",
                color : "white",
                padding : "4px 2px",
            }}>Save</button>
        </React.Fragment>
    );
}

function Input() {
    return (
        <React.Fragment>
            <input className="" placeholder="input ..." />
        </React.Fragment>
    );
}

export {Button, Input}