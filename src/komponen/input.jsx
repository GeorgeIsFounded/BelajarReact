import React from "react";

export default function Input({ label, isError, textError, ...props }) {
    return (
        <div className="input">
            <label className="label" htmlFor={label}>
                {label}
            </label>
            <input {...props} className="flex mt-5 input-text border-2 border-b-black rounded-lg w-96 h-9" id={label} htmlFor={label} />
            {isError && <h1 className="error">{textError}</h1>}
        </div>
    )
}