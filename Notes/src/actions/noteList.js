export const noteList = (token) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:8000/notes/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (response.ok) {
            dispatch({ type: "NOTES_FETCH_SUCCESS", payload: data });
        } else {
            dispatch({ type: "NOTES_FETCH_FAILURE", payload: data.message || "Failed to fetch notes" });
        }
    } catch (error) {
        dispatch({ type: "NOTES_FETCH_FAILURE", payload: error.message });
    }
};
