import { loginPage } from "../utils/Constants";

const baseUrl = 'https://webaccounting.herokuapp.com';
export const REGISTER_USER = 'REGISTER_USER';

export const sucessfullRegistration = user => (
    {
        type: REGISTER_USER,
        user: user
    }
);

export const registerUserAction = (userData, props) => {
    return dispatch => {
        fetch(`${baseUrl}/account/user`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(user => {
                dispatch(sucessfullRegistration(user));
                props.history.push(`/${loginPage}`);
            })
            .catch(e => console.log(e.message));
    }
}
