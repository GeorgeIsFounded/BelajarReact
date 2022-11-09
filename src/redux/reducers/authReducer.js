const initialState = {
    name : '',
    email : '',
    password : '',
    isAuth : false,
}

export const authProcess = (state = initialState, action) => {
    if (action.type === 'Login') {
        return {
            ...state,
            name : action.name,
            email : action.email,
            password : action.password,
            isAuth : true,
        }
    }

    return state;
}