import React from "react";

export default function NamaProduk({ data }) {
    return (
        <React.Fragment>
            <h1>Data Produk di Indonesia</h1>
            {data?.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>Data ke {index + 1}</h1>
                        <h3>jenis: {item.jenis}</h3>
                        <h3>jenis: {item.produk}</h3>
                        <div>
                            <h2>Tipe</h2>
                            <div>
                                {item?.brand?.map((value, index2) => {
                                    return (
                                        <div key={index2}>
                                            <p>{value.nama}</p>
                                            <p>{value.harga}</p>
                                            <p></p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}