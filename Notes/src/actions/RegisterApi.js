export const registerUser = (formData) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),

            });
            const data = await response.json();
            if (response.ok) {
                dispatch({
                    type: 'REGISTER_SUCCESSFUL',
                    payload: data.message,
                })

            }
            else {
                dispatch({
                    type: 'REGISTER_FAILED',
                    payload: data,
                });
            }


        }
        catch (error) {
            dispatch({
                type: 'REGISTER_FAILED',
                payload: { error: error.message },
            })
        }
    }



}