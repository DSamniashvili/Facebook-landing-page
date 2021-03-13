import {REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, SEND_REGISTER_USER} from '../actions/action-constants';
import User from "../../models/user-model";

const dummyUsers = [
    {
        id:"Sat Mar 13 2021 21:42:10 GMT+0400 (Georgia Standard Time)",
        name:"Dea",
        surname:"Samniashvili",
        email:"dea@dea.com",
        password:"password",
    },
]

const initialState = {
    users: dummyUsers,
    activeUser: null,
    isLoading: false,
}

const users = function (state = initialState, action) {
    switch (action.type) {
        case SEND_REGISTER_USER:
            return {
                ...state,
                isLoading: true,
            }
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
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
}

export default users;