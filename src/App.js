import React from 'react';
import { Route, Switch } from "react-router-dom";
import Registration from './containers/RegistrationContainer';
import Login from './containers/LoginContainer';
import UserAccount from './containers/UserAccountContainer';
import EditProfile from './containers/EditProfileContainer';
import ChangePassword from './containers/ChangePasswordContainer';
import RegLog from './components/RegLog';
import ErrorPage from './components/ErrorPage';
import { changePasswordPage, editProfilePage, infoPage, loginPage, registrationPage, regLogPage } from "./utils/Constants";





const App = () => {
  return (
    <Switch>
        <Route path={['/', `/${regLogPage}`]} exact component={RegLog}/>
        <Route path={[`/${registrationPage}`]} exact component={Registration}/>
        <Route path={`/${loginPage}`} exact component={Login}/>
        <Route path={`/${infoPage}`} exact component={UserAccount}/>
        <Route path={`/${editProfilePage}`} exact component={EditProfile}/>
        <Route path={`/${changePasswordPage}`} exact component={ChangePassword}/>
        <Route component={ErrorPage}/>
    </Switch>
);

}

export default App;