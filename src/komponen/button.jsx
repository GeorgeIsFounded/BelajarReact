import React from "react";

export default function Button({ title, color= "red", ...props}) {
    return (
        <React.Fragment>
            <button
                {...props}
                style={{ backgroundColor: "cyan" }}
                className="button">{title}</button>
        </React.Fragment>
    )
} 