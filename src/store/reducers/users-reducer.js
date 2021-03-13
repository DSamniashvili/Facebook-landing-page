import {NEW_USER_JOINED} from '../actions/action-constants';

const initialState = {
    users: [],
}

const users = function (state = initialState, action) {
    switch (action.type) {
        case NEW_USER_JOINED:
            return state;
        default:
            return state;
    }
}

export default users;