const initialState = {
    success: false,
    error: null,
    message: '',
};

const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESSFUL':
            return {
                ...state,
                success: true,
                error: null,
                message: action.payload,
            };
        case 'REGISTER_FAILED':
            return {
                ...state,
                success: false,
                error: action.payload,
                message: '',
            };
        default:
            return state;
    }
};

export default RegisterReducer;
