import React, { useState } from 'react';

const EditProfile = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmitEditProfileForm = () => {
        props.editProfile(firstName, lastName, props);
    }

    return (
        <div>
           <label >First name: </label>
            <input type="text" onChange={event => setFirstName(event.target.value)} />
            <label >Last name: </label>
            <input type="text" onChange={event => setLastName(event.target.value)} />
            <button onClick={handleSubmitEditProfileForm}>Submit</button>
        </div>
    )
}

export default EditProfile;
