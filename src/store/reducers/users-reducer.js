import {
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS,
    SEND_REGISTER_USER,
    SET_CURRENT_USER,
    UPDATE_USER,
    SEND_UPDATE_USER,
    CLEAR_CURRENT_USER,
    UPDATE_USER_FAIL,
    DELETE_USER,
    SEND_AUTHENTICATE_USER,
    START_AUTHENTICATE_USER,
    SEND_AUTHENTICATE_USER_FAIL,
    LOGOUT_USER,
} from '../actions/action-constants';
import User from "../../models/user-model";

const dummyUsers = [
    {
        id: "Sat Mar 13 2021 21:42:10 GMT+0400 (Georgia Standard Time)",
        name: "Dea",
        surname: "Samniashvili",
        email: "deasamniashvili@yahoo.com",
        password: "password",
    },
];

const initialState = {
    users: dummyUsers,
    activeUser: null,
    loggedInUser: null,
    isLoading: false,
    isLoggingIn: false,
    errorMessage: '',
}

const users = function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            const activeUser = state.users.find(user => user.id === action.userId);
            if (activeUser) {
                return {
                    ...state,
                    activeUser,
                }
            } else {
                return state;
            }

        case CLEAR_CURRENT_USER:
            return {
                ...state,
                activeUser: null,
            }

        case SEND_REGISTER_USER:
        case SEND_UPDATE_USER:
            return {
                ...state,
                isLoading: true,
                errorMessage: '',
            }

        case START_AUTHENTICATE_USER:
            return {
                ...state,
                isLoggingIn: true,
                errorMessage: '',
            }

        case UPDATE_USER:
            const userIndex = state.users.findIndex(user => {
                return user.id === action.payload.id;
            });

            if (userIndex > -1) {

                const updatedUser = new User(
                    action.payload.id,
                    action.payload.name,
                    action.payload.surname,
                    action.payload.email,
                    action.payload.password,
                )

                const updatedUsers = [...state.users];
                updatedUsers[userIndex] = updatedUser;


                return {
                    ...state,
                    isLoading: false,
                    activeUser: null,
                    users: updatedUsers,
                }
            }

            return {
                ...state,
                isLoading: false,
            };

        case REGISTER_USER_SUCCESS:
            const {id, name, surname, email, password} = action.payload;
            const newUser = new User(
                id,
                name,
                surname,
                email,
                password
            );

            return {
                ...state,
                users: state.users.concat(newUser),
                isLoading: false,
            }

        case REGISTER_USER_FAIL:
        case UPDATE_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.errorMessage,
            };

        case SEND_AUTHENTICATE_USER_FAIL:
            return {
                ...state,
                isLoggingIn: false,
                errorMessage: action.payload.errorMessage,
            };

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.userId),
            }

        case SEND_AUTHENTICATE_USER:
            const {inputEmail, inputPassword} = action.payload;
            const userToAuthenticate = state.users.find(user => user.email === inputEmail && user.password === inputPassword);

            if (userToAuthenticate) {
                return {
                    ...state,
                    isLoggingIn: false,
                    loggedInUser: userToAuthenticate,
                    errorMessage: '',
                }
            }

            return {
                ...state,
                isLoggingIn: false,
                errorMessage: 'Could not find user.',
            }

        case LOGOUT_USER:
            return {
                ...state,
                loggedInUser: null,
            }
        default:
            return state;
    }
}

export default users;