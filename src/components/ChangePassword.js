import React, { useState } from 'react';

const ChangePassword = props => {
    const [password, setPassword] = useState('');
   
    const handleSubmitChangePasswordForm = () => {
        props.changePassword(props.login, password, props);
    }

    return (
        <div>
           <label >New password: </label>
            <input type="password" onChange={event => setPassword(event.target.value)} />
            <button onClick={handleSubmitChangePasswordForm}>Submit</button>
        </div>
    )
}

export default ChangePassword;