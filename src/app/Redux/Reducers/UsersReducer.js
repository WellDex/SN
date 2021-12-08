import {usersAPI} from "../../api/api"

const SET_USERS = "src/app/Redux/Reducers/UsersReducer/SET_USERS"

let initialState = {
    users: []
}

const usersReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case SET_USERS: {
            return {
                ...state,
                users: actions.users
            }
        }
        default: {
            return state
        }
    }
}

//AC
export const setUsers = users => ({
    type: SET_USERS,
    users
})

//Thunk
export const getUsers = (pageNumber, usersCount = 48) => async dispatch => {
    let data = await usersAPI.getUsers(usersCount, pageNumber)
    dispatch(setUsers(data.items))
}

export const getFollowUsers = (pageNumber, usersCount = 100, isFriend = true) => async dispatch => {
    let data = await usersAPI.getUsers(usersCount, pageNumber, isFriend)
    dispatch(setUsers(data.items))
}

export const follow = userId => async dispatch => {
    let data = await usersAPI.follow(userId)
}

export const unfollow = userId => async dispatch => {
    let data = await usersAPI.unfollow(userId)
}


export default usersReducer
