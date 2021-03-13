import {REGISTER_USER, UPDATE_USER, USER_LOGGED_IN} from '../actions/action-constants';

const initialState = {
    activeUser: null,
}

const user = function (state = initialState, action) {
    switch (action.type) {
        // case UPDATE_USER:
        //     return state;
        default:
            return state;
    }
}

export default user;