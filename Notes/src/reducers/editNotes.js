const initialState = {
    updatedNote: null,
    success: false,
    error: null,
};

const editNoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_NOTE_SUCCESS":
            return {
                ...state,
                updatedNote: action.payload,
                success: true,
                error: null,
            };
        case "EDIT_NOTE_FAILURE":
            return {
                ...state,
                success: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default editNoteReducer;
