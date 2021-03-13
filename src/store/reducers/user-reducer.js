import {USER_LOGGED_IN} from '../actions/action-constants';

const initialState = {
    user: {},
}

const user = function (state = initialState, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return state;
        default:
            return state;
    }
}

export default user;