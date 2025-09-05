export const addNote = (token, noteData) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:8000/notes/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(noteData),
        });

        const data = await response.json();

        if (response.ok) {
            dispatch({ type: "NOTE_ADD_SUCCESS", payload: data });
        } else {
            dispatch({ type: "NOTE_ADD_FAILURE", payload: data.message || "Failed to add note" });
        }
    } catch (error) {
        dispatch({ type: "NOTE_ADD_FAILURE", payload: error.message });
    }
};
