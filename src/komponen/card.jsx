import React from "react";

export default function Card({ warna, setWarna }) {
    
    return (
        <React.Fragment>
            <div style={{ backgroundColor: warna, height: 300, width: 300}}></div>
            <button 
              onClick={() => {
                setWarna("red")
              }}
            >MERAH</button>
            <button 
              onClick={() => {
                setWarna("yellow")
              }}
            >KUNING</button>
            <button 
              onClick={() => {
                setWarna("green")
              }}
            >HIJAU</button>
        </React.Fragment>
    )
}