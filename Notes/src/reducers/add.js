const initialState = {
    notes: [],
    createSuccess: false,
    error: null,
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NOTE_CREATED_SUCCESS":
            return {
                ...state,
                createSuccess: true,
                error: null,
                notes: [...state.notes, action.payload],
            };
        case "NOTE_CREATED_FAILED":
            return {
                ...state,
                createSuccess: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default notesReducer;

