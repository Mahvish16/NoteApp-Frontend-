const initialState = {
    success: false,
    error: null,
};

const deleteNoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_NOTE_SUCCESS":
            return {
                ...state,
                success: true,
                error: null,
            };
        case "DELETE_NOTE_FAILURE":
            return {
                ...state,
                success: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default deleteNoteReducer;
