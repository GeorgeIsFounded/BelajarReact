import React from "react";

function Button({ title, add, ...props }) {
    return (
        <button
            className={`border border-black p-2 px-6 hover:bg-red-500 hover:text-black ${add}`}
            {...props}
        >
            {title}
        </button>
    );
}

export default Button;