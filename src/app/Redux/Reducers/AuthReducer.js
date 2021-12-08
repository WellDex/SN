import {authAPI, securityAPI} from "../../api/api"
import {stopSubmit} from "redux-form"

const SET_USER_DATA = "src/app/Redux/Reducers/AuthReducer/SET_USER_DATA"
const GET_CAPTCHA_URL = "src/app/Redux/Reducers/AuthReducer/GET_CAPTCHA_URL"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

//AC
export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})

export const setCaptchaUrl = captchaUrl => ({
    type: GET_CAPTCHA_URL,
    data: {captchaUrl}
})

//Thunk
export const getAuthUserData = () => async dispatch => {
    let data = await authAPI.me();

    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe = true, captcha) => async dispatch => {
    await authAPI.login(email, password, rememberMe, captcha).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }

            let message = data.messages.length > 0 ? data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}))
        }
    })
}

export const logout = () => async dispatch => {
    let data = await authAPI.logout();

    if(data.resultCode === 0){
        dispatch(setUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async dispatch => {
    await securityAPI.getCaptchaUrl().then(url => dispatch(setCaptchaUrl(url)))
}

export default authReducer