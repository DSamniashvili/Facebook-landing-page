import {REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, SEND_REGISTER_USER} from "./action-constants";

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const callToRegisterUserAction = (id, name, surname, email, password) => {
    return async dispatch => {

        let userRegisterPromise = new Promise((resolve, reject) => {
            dispatch({
                type: SEND_REGISTER_USER
            });


            setTimeout(() => {
                resolve('User authenticated successfully');
            }, 3000);
        });

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


// const callToAuthenticate = ({inputUserName, inputPassword}) => {
//     let {username, password} = state.loginInitials;
//     password = cryptr.decrypt(password);
//
//     const inValidUserName = !inputUserName || inputUserName.length === 0 || username !== inputUserName;
//     const inValidPassword = !inputPassword || inputPassword.length === 0 || password !== inputPassword;
//
//     let userLoginPromise = new Promise((resolve, reject) => {
//         dispatch({type: 'SEND_AUTHENTICATE_USER', payload: {}});
//
//         if (inValidUserName || inValidPassword) {
//             reject('Could not authenticate user');
//         }
//
//         setTimeout(function () {
//             resolve('User authenticated successfully');
//         }, 500);
//     })
//
//     userLoginPromise.then((response) => {
//         console.log("User Login response: " + response)
//         dispatch({type: 'AUTHENTICATE_USER', payload: {isAuth: true}});
//     })
//         .catch(err => {
//             console.log('User Login response: ', err);
//             dispatch({type: 'AUTHENTICATE_USER', payload: {isAuth: false}});
//         })
// }