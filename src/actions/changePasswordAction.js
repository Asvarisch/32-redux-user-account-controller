import { infoPage, regLogPage } from '../utils/Constants';

const baseUrl = 'https://webaccounting.herokuapp.com';

export const changePasswordAction = (login, password, props) => {
    return dispatch => {
        const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
        if (!userCredentials) {
            props.history.push(`/${regLogPage}`);
        } else {
            fetch(`${baseUrl}/account/user/password`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Basic ${btoa(userCredentials.login + ':' + userCredentials.password)}`,
                    'X-Password': `${password}`
                },
            })
                .then(response => {
                    if (response.ok) {
                        return response.status;
                    } else {
                        throw new Error('' + response.status);
                    }
                })
                .then(() => {
                    localStorage.setItem('userCredentials', JSON.stringify({login, password}));
                    props.history.push(`/${infoPage}`)
                })
                .catch(e => console.log(e.message));
        }

    }
}
