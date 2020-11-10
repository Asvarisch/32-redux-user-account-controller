import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { infoPage, loginPage, registrationPage } from '../utils/Constants';

const RegLog = () => {
    const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));

    if (!userCredentials) {
        return (
            <div className="nav">
                <Link to={`/${registrationPage}`} className="nav-item btn mx-1">Register</Link>
                <Link to={`/${loginPage}`} className="nav-item btn mx-1">Login</Link>
            </div>
        )
    } else {
        return <Redirect to={`/${infoPage}`}/>
    }
}

export default RegLog
