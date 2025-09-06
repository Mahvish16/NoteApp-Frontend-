export const editNote = (token, id, updatedNoteData) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:8000/notes/${id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(updatedNoteData),
        });

        const data = await response.json();

        if (response.ok) {
            dispatch({ type: "EDIT_NOTE_SUCCESS", payload: data });
        } else {
            dispatch({ type: "EDIT_NOTE_FAILURE", payload: data.message || "Failed to update note" });
        }
    } catch (error) {
        dispatch({ type: "EDIT_NOTE_FAILURE", payload: error.message });
    }
};
