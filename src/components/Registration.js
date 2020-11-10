import React, { useState } from 'react';
import { loginPage } from '../utils/Constants';

const Registration = props => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmitRegisterForm = () => {
        const user = {
            login: login,
            password: password,
            firstName: firstName,
            lastName: lastName
        }
        props.registerUser(user, props);
        
    }


    return (
        <div>
            <label >First name: </label>
            <input type="text" onChange={event => setFirstName(event.target.value)} />
            <label >Last name: </label>
            <input type="text" onChange={event => setLastName(event.target.value)} />
            <label >Login: </label>
            <input type="text" onChange={event => setLogin(event.target.value)} />
            <label >Password: </label>
            <input type="password" onChange={event => setPassword(event.target.value)} />
            <button onClick={handleSubmitRegisterForm}>Register</button>
        </div>
    )


}

export default Registration
