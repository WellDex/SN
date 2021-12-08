import {profileAPI} from "../../api/api"
import {stopSubmit} from "redux-form"

const SET_PROFILE = "src/app/Redux/Reducers/ProfileReducer/SET_PROFILE"
const SET_STATUS = "src/app/Redux/Reducers/ProfileReducer/SET_STATUS"
const SET_PHOTO = "src/app/Redux/Reducers/ProfileReducer/SET_PHOTO"
const ADD_POST = "src/app/Redux/Reducers/ProfileReducer/ADD_POST"
const DELETE_POST = "src/app/Redux/Reducers/ProfileReducer/DELETE_POST"

let initialState = {
    profile: null,
    posts: [],
    status: '',
}

const profileReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case SET_PROFILE: {
            return {
                ...state,
                profile: actions.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: actions.status
            }
        }
        case SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: actions.image}
            }
        }
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, actions.newPost]
            }
        }
        case DELETE_POST:{
            return {
                ...state,
                posts: state.posts.filter(p => p.id != actions.id)
            }
        }
        default: {
            return state
        }
    }
}

//AC
export const setProfile = profile => ({type: SET_PROFILE, profile})
export const setStatus = status => ({type: SET_STATUS, status})
export const addPost = newPost => ({type: ADD_POST, newPost})
export const setPhoto = image => ({type: SET_PHOTO, image})
export const deletePost = id =>  ({type: DELETE_POST, id})

//Thunk
export const getProfile = userId => async dispatch => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setProfile(data))
}

export const getStatus = userId => async dispatch => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateProfile = newProfile => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let data = await profileAPI.putProfile(newProfile)
    if (data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit("profileEditForm", {_error: data.messages[0]}))
    }
}

export const updateStatus = newStatus => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let data = await profileAPI.putStatus(newStatus)
    if (data.resultCode === 0) {
        dispatch(getStatus(userId))
    } else {
        dispatch(stopSubmit("EditStatus", {_error: data.messages[0]}))
    }
}

export const updatePhoto = file => async dispatch => {
    let data = await profileAPI.putProfilePhoto(file)
    if (data.resultCode === 0) {
        dispatch(setPhoto(data.data.photos))
    }
}

export const loadPostInLocalStorage = () => dispatch => {
    if (localStorage.getItem("posts") !== null) {
        let newPosts = JSON.parse(localStorage.getItem("posts"))
        for (let post of newPosts) {
            dispatch(addPost(post))
        }
    }
}

export default profileReducer