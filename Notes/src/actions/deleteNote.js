export const deleteNote = (token, id) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:8000/notes/${id}/`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            dispatch({ type: "DELETE_NOTE_SUCCESS", payload: id });
        } else {
            const data = await response.json();
            dispatch({
                type: "DELETE_NOTE_FAILURE",
                payload: data.message || "Failed to delete note",
            });
        }
    } catch (error) {
        dispatch({ type: "DELETE_NOTE_FAILURE", payload: error.message });
    }
};
