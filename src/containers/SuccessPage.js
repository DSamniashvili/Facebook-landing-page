import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {handleLogoutAction} from "../store/actions/login-actions";
import '../styles/SuccessPage.scss';
import constants from "../constants/GENERAL";

const SuccessPage = () => {
    const loggedInUser = useSelector(state => state.users.loggedInUser);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(handleLogoutAction());
        navigateToMainPage();
    }

    const navigateToMainPage = () => {
        if (history.goBack()) {
            history.goBack();
        } else {
            let path = constants.paths.homepage;
            history.push(path);
        }
    }

    useEffect(() => {
        if (!loggedInUser) {
            navigateToMainPage();
        }
    }, []);

    return (
        <div className={'success-page-container'}>
            {
                loggedInUser ?
                    <div>
                        <h1 className={'welcome-text-heading'}>Welcome, {loggedInUser.name}!</h1>
                        <button onClick={handleLogout} className={'button btn-logout'}>Logout</button>
                    </div> :
                    null
            }
        </div>
    );
}

export {SuccessPage};