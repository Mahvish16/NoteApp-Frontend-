const initalstate = {
    error: null,
    success: false,
}
const RegisterReducer = (state = initalstate, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESSFUL':
            return {
                ...state,
                success: action.payload,
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

export default RegisterReducer;