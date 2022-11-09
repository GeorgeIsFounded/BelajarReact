export const increment = () => {
    console.log('jalan action')
    return {
        type : "INCREMENT",
        status: "Berhasil di tambahkan"
    };
};

export const decrement = () => {
    return {
        type : "DECREMENT",
        status: "Berhasil di tambahkan"
    };
};