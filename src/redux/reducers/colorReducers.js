const colorState = {
    color : '#FF5733'
}

export const colorReducer = (state = colorState, action) => {
    if (action.type === 'change'){
        return {
            color: action.color
        }
    }
    if (action.type === 'return'){
        return {
            color: '#FF5733'
        }
    }

    return state;
}