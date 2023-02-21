import React from "react";

function ButtonD({ title, add, ...props }) {
    return (
        <button
            className={`border border-black p-2 px-6 hover:text-red-500 hover:bg-black ${add}`}
            {...props}
        >
            {title}
        </button>
    );
}

export default ButtonD;