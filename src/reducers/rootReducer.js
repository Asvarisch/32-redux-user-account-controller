import { EDIT_USER } from "../actions/editProfileAction";
import { LOGIN_USER } from "../actions/loginAction";
import { REGISTER_USER } from "../actions/registerAction";

export const rootReducer = (state, action) => {
    switch (action.type) {
        case REGISTER_USER:
        case LOGIN_USER:
        case EDIT_USER:
            return { ...state, user: action.user };
        default:
            return state;
    }
}
