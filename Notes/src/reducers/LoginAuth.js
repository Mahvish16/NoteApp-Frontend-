const initalstate = {
    error: null,
    token: null,
}
const LoginReducer = (state = initalstate, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                access: action.payload.access,
                error: null,
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                error: action.payload,
                token: null,
            }
        case 'LOGOUT':
            return {
                ...state,
                access: null,
                error: null,
            };
        default:
            return state;
    }
}

export default LoginReducer;