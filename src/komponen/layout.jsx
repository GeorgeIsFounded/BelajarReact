import React from "react";

export default function Layout({children}){
    return (
        <div className="layout">
            <p>ini adalah layout</p>
            {children}
        </div>
    )
}