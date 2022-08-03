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

export default function Button({ title, color='red', ...props}) {
    return (
        <React.Fragment>
            <button
                {...props}
                style={{ backgroundColor: "cyan" }}
                className="button">{title}</button>
        </React.Fragment>
    )
}