const initialState = {
    value: 0,
    status: "",
};

export const reducer = (state = initialState, action) => {
    console.log('masuk sini')
    switch (action.type) {
        case "INCREMENT":
            console.log(state, 'jalan');
            return {
                ...state,
                value: state.value + 1,
                status: action.status,
            };
        case "DECREMENT":
            return {
                ...state,
                value: state.value - 1,
                status: action.status,
            }
        default:

        return state;
    }
}
