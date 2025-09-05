const initalstate = {
    error: null,
    token: null,
}
const LoginReducer = (state = initalstate, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESSFUL':
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
        default:
            return state;
    }
}

export default LoginReducer;