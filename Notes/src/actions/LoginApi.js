export const loginUser = (formData) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),

            });
            const data = await response.json();
            if (response.ok) {
                dispatch({
                    type: 'LOGIN_SUCCESSFUL',
                    payload: {
                        access: data.access,
                        refresh: data.refresh,
                    }
                })

            }
            else {
                dispatch({
                    type: 'LOGIN_FAILED',
                    payload: data,
                });
            }


        }
        catch (error) {
            dispatch({
                type: 'Login_FAILED',
                payload: error.message
            })
        }
    }



}