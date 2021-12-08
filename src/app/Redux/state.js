import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import profileReducer from "./Reducers/ProfileReducer"
import {reducer as formReducer} from "redux-form"
import authReducer from "./Reducers/AuthReducer"
import usersReducer from "./Reducers/UsersReducer"

const reducers = combineReducers({
    profilePage: profileReducer,
    auth: authReducer,
    users: usersReducer,
    form: formReducer
})

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)))

export default store