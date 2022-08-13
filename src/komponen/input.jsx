import React from "react";

export default function Input({ label, isError, textError, ...props }) {
    return (
        <div className="input">
            <label className="label" htmlFor={label}>
                {label}
            </label>
            <input {...props} className="input-text" id={label} htmlFor={label} />
            {isError && <h4 className="error">{textError}</h4>}
        </div>
    )
} 