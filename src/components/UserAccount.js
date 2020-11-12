import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { changePasswordPage, editProfilePage, regLogPage } from '../utils/Constants';

const UserAccount = props => {
    const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
    // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo) {
            setFirstName(userInfo.firstName);
            setLastName(userInfo.lastName);
        }

    }, [firstName, lastName]);

    const handleLogout = () => {
        localStorage.removeItem('userCredentials');
        localStorage.removeItem('userInfo');
        props.history.push(`/${regLogPage}`);
    }

    if (userCredentials) {
        return (
            <div>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
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