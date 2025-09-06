const initialState = {
    notes: [],
    loading: false,
    error: null,
};

const noteListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NOTES_FETCH_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "NOTES_FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                notes: action.payload,
                error: null,
            };
        case "NOTES_FETCH_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case "DELETE_NOTE_SUCCESS":
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload),
                error: null,
            }

        default:
            return state;
    }
};

export default noteListReducer;
