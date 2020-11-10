import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";

const initialState = {
    user: {
        firstName: '',
        lastName: '',
        login: '',
        roles: []
    }
}

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));