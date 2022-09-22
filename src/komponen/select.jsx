import React from "react";

export default function Select({ label, isError, textError, children }) {
    return(
        <div className="input">
            <label className="label" htmlFor="{label}">
                {label}
            </label>
            <select className="input-text border" id={label}>
                {children}
            </select>
            {isError && <p className="error">{textError}</p>}
        </div>
    )
}