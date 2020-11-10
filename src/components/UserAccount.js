import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { changePasswordPage, editProfilePage, regLogPage } from '../utils/Constants';

const UserAccount = props => {
    const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));

    const handleLogout = () => {
        localStorage.removeItem('userCredentials');
        props.history.push(`/${regLogPage}`);
    }

    if (userCredentials) {
        return (
            <div>
                <p>First name: {props.firstName}</p>
                <p>Last name: {props.lastName}</p>
                <button onClick={() => props.history.push(`/${editProfilePage}`)}>Edit profile</button>
                <button onClick={() => props.history.push(`/${changePasswordPage}`)}>Change password</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    } else {
        return <Redirect to={`/${regLogPage}`} />
    }
}

export default UserAccount;