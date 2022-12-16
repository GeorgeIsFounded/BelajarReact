import React from "react";

function InputSearch({ label, isError = false, textError, ...props }) {
  return (
    <React.Fragment>
      <form className="center-flex form w-full">
        <div className="flex flex-col">
          <label htmlFor={label} className="text-gray-400">{label}</label>
          <input
            {...props}
            id={label}
            className="border-b border-gray-400 bg-transparent w-[700px] py-2 px-2"
          ></input>
          {isError && <p className="text-white text-[10px] w-full bg-red-600 text-center rounded-bl-xl rounded-br-xl">{label} is empty</p>}
        </div>
      </form>
    </React.Fragment>
  );
}

export default InputSearch;