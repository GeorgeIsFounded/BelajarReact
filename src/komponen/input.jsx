import React from "react";

export default function Input({ label, isError, textError, ...props }) {
    return (
        <div className="input">
            <label className="label" htmlFor={label}>
                {label}
            </label>
            <input {...props} className="flex mt-2 input-text border-b-2 border-black mb-2 hover:border-2  w-[270px] h-8" id={label} htmlFor={label} />
            {isError && <h1 className="error">{textError}</h1>}
        </div>
    )
}