import React from "react";

export default function Input({ label, isError, textError, ...props }) {
    return (
        <div className="input">
            <label className="label" htmlFor={label}>
                {label}
            </label>
            <input {...props} className="flex mt-2 input-text border-x-2 border-black mb-2 hover:bg-black hover:text-white hover:placeholder-white w-96 h-8" id={label} htmlFor={label} />
            {isError && <h1 className="error">{textError}</h1>}
        </div>
    )
}