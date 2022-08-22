import React from "react";

function Textarea({ label, isError = false, textError, ...props }) {
    return (
        <React.Fragment>
            <form className="border-black">
                <div>
                    <label htmlFor={label}>{label}</label>
                    <Textarea {...props} id={label} type={"text"}></Textarea>
                    {isError && <p className="error"></p>}
                </div>
            </form>
        </React.Fragment>
    );
};

export default Textarea;