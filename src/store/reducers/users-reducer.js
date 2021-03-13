import {
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS,
    SEND_REGISTER_USER,
    SET_CURRENT_USER,
    UPDATE_USER,
    SEND_UPDATE_USER,
    CLEAR_CURRENT_USER,
    UPDATE_USER_FAIL,
} from '../actions/action-constants';
import User from "../../models/user-model";

const dummyUsers = [
    {
        id: "Sat Mar 13 2021 21:42:10 GMT+0400 (Georgia Standard Time)",
        name: "Dea",
        surname: "Samniashvili",
        email: "dea@dea.com",
        password: "password",
    },
]

const initialState = {
    users: dummyUsers,
    activeUser: {},
    isLoading: false,
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
                activeUser: {},
            }

        case SEND_REGISTER_USER:
        case SEND_UPDATE_USER:
            return {
                ...state,
                isLoading: true,
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
                    activeUser: {},
                    users: updatedUsers,
                }
            }

            return {
                ...state,
                isLoading: false,
            };

        case REGISTER_USER_SUCCESS:
            const {id, name, surname, email, password, registered} = action.payload;
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
            };

        default:
            return state;
    }
}

export default users;