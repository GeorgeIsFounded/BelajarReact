import React from "react"

export default function Identitas({nama = "siswa", kelas = "x", nilai = "0"}){
    return (
        <div className="identitas">
          <p>Nama : {nama}</p>
          <p>Kelas : {kelas}</p>
          <p>Nilai : {nilai}</p>
        </div>
    )
}