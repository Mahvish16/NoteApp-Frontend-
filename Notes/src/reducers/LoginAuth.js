const initalstate = {
    error: null,
    success: false,
}
const LoginReducer = (state = initalstate, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESSFUL':
            return {
                ...state,
                success: action.payload.access,
                error: null,
            }
        case 'REGISTER_FAILED':
            return {
                ...state,
                error: action.payload,
                success: false,
            }
        default:
            return state;
    }
}

export default LoginReducer;