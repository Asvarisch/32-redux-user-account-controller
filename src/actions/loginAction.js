import { infoPage, loginPage } from "../utils/Constants";

const baseUrl = 'https://webaccounting.herokuapp.com';
export const LOGIN_USER = 'LOGIN_USER';

export const sucessfullLogin = user => (
    {
        type: LOGIN_USER,
        user: user
    }
);

export const loginUserAction = (login, password, props) => {
    return dispatch => {
        fetch(`${baseUrl}/account/login`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(login + ':' + password)}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(user => {
                localStorage.setItem('userCredentials', JSON.stringify({login, password}));
                localStorage.setItem('userInfo', JSON.stringify({firstName: user.firstName, lastName: user.lastName}));
                dispatch(sucessfullLogin(user));
                props.history.push(`/${infoPage}`);
                
            })
            .catch(e => {
                props.history.push(`/${loginPage}`);
                console.log(e.message);
            });
    }
}
