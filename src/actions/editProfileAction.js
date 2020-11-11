import { infoPage, regLogPage } from '../utils/Constants';

const baseUrl = 'https://webaccounting.herokuapp.com';
export const EDIT_USER = 'EDIT_USER';

export const sucessfullEditing = user => (
    {
        type: EDIT_USER,
        user: user
    }
);

export const editProfileAction = (firstName, lastName, props) => {
    return dispatch => {
        const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
        console.log(userCredentials);
        if (!userCredentials) {
            props.history.push(`/${regLogPage}`);
        } else {
            fetch(`${baseUrl}/account/user`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Basic ${btoa(userCredentials.login + ':' + userCredentials.password)}`,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({firstName, lastName})
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('' + response.status);
                    }
                })
                .then(user => {
                    localStorage.setItem('userInfo', JSON.stringify({firstName, lastName}));
                    dispatch(sucessfullEditing(user));
                    props.history.push(`/${infoPage}`);
                })
                .catch(e => console.log(e.message));
        }

    }
}
