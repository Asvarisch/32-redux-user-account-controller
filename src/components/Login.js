import React, { useState } from 'react';

const Login = props => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const firstName = props.firstName;
    const lastName = props.lastName;

    const handleSubmitLoginForm = () => {
        console.log(firstName);
        props.loginUser(login, password, firstName, lastName, props);
    }

    return (
        <div>
            <label >Login: </label>
            <input type="text" onChange={event => setLogin(event.target.value)} />
            <label >Password: </label>
            <input type="password" onChange={event => setPassword(event.target.value)} />
            <button onClick={handleSubmitLoginForm}>Login</button>
        </div>
    )
}

export default Login;
