import React from "react"

export default function Nilai({nama, data}){
    console.log('nama', nama)
    console.table(data)
    return (
        <React.Fragment>
            <div>
                <h1>Daftar Nilai</h1>
                <h1>{nama}</h1>
                <ol>
                    {/* <li>{data[0]}</li>
                    <li>{data[1]}</li>
                    <li>{data[2]}</li>
                    <li>{data[3]}</li>
                    <li>{data[4]}</li> */}

                    {data?.map((item, index)=> {
                        return (
                            <li>Nilai Ujian ke-{index + 1} adalah {item}</li>
                        )
                    })}
                </ol>
            </div>
        </React.Fragment>
    )
}