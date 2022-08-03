// import React from "react";

// export default function Button({ title, onClick, name, id, disable }) {
//     return (
//         <React.Fragment>
//             <button
//                 name={name}
//                 id={id}
//                 disable={disable}
//                 onClick={onClick}
//                 style={{ backgroundColor: "cyan" }}
//                 className="button">{title}</button>
//         </React.Fragment>
//     )
// }

import React from "react";

export default function Button({ title, color = 'grey', disabled, ...props }) {
    return (
        <React.Fragment>
            <button
            disabled={disabled}
                {...props}
                style={{
                    backgroundColor: color,
                    opacity: disabled ? 0.5 : 1
                }}
                className="button">
                {title}
            </button>
        </React.Fragment>
    )
}