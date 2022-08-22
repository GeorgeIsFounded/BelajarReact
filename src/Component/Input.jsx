import React from "react";

function Input({ label, isError = false, textError, ...props }) {
    return (
      <React.Fragment>
        <form className="center-flex form">
          <div className="flex flex-column">
            <label htmlFor={label}>{label}</label>
            <input {...props} id={label} type={"text"}></input>
            {isError && <p className="error"></p>}
        </div>
      </form>
    </React.Fragment>
  );
};

export default Input;