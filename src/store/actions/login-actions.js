import {
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS,
    SEND_REGISTER_USER,
    UPDATE_USER,
    SET_CURRENT_USER,
    CLEAR_CURRENT_USER,
    SEND_UPDATE_USER,
    UPDATE_USER_FAIL,
    DELETE_USER,
    START_AUTHENTICATE_USER,
    SEND_AUTHENTICATE_USER,
    SEND_AUTHENTICATE_USER_FAIL,
    LOGOUT_USER,
} from "./action-constants";
import {validateEmail, validatePassword} from "../../utils/general-functions";
import constants from "../../constants/GENERAL";

// Setting a 3sec timeout to "fake" login/register requests.
const {TIMEOUT_MS} = constants;

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const callToRegisterUserAction = (id, name, surname, email, password) => {
    return dispatch => {
        dispatch({
            type: SEND_REGISTER_USER
        });

        let userRegisterPromise = timeout(TIMEOUT_MS);
        userRegisterPromise.then((response) => {
            console.log("User Login response: " + response);

            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: {
                    registered: true,
                    id,
                    name,
                    surname,
                    email,
                    password
                }
            });
        })
            .catch(err => {
                console.log('User Login response: ', err);
                dispatch({
                    type: REGISTER_USER_FAIL,
                    payload: {
                        registered: false,
                    }
                });
            })
    }
}


export const callToUpdateUserAction = (id, name, surname, email, password) => {
    return dispatch => {
        dispatch({
            type: SEND_UPDATE_USER,
        });

        let userUpdatePromise = timeout(TIMEOUT_MS);

        userUpdatePromise.then((response) => {
            dispatch({
                type: UPDATE_USER,
                payload: {
                    updated: true,
                    id,
                    name,
                    surname,
                    email,
                    password
                }
            });
        })
            .catch(err => {
                dispatch({
                    type: UPDATE_USER_FAIL,
                    payload: {
                        updated: false,
                    }
                });
            })
    }
}


export const setCurrentUserAction = userId => {
    return {
        type: SET_CURRENT_USER,
        userId,
    }
}
export const deleteUserAction = userId => {
    return {
        type: DELETE_USER,
        userId,
    }
}

export const clearCurrentUserAction = () => {
    return {
        type: CLEAR_CURRENT_USER,
    }
}

export const sendLoginRequest = (inputEmail, inputPassword) => {
    return dispatch => {
        dispatch({
            type: START_AUTHENTICATE_USER,
        });

        const validEmail = validateEmail(inputEmail);
        const validPassword = validatePassword(inputPassword);

        setTimeout(() => {
            if(validEmail && validPassword){
                dispatch({
                    type: SEND_AUTHENTICATE_USER,
                    payload: {
                        inputEmail,
                        inputPassword,
                    }
                });
            } else {
                dispatch({
                    type: SEND_AUTHENTICATE_USER_FAIL,
                    payload: {
                        errorMessage: 'Please provide correct username and password.',
                    }
                });
            }
        }, TIMEOUT_MS);
    }
}

export const handleLogoutAction = () => {
    return {
        type: LOGOUT_USER,
    }
}