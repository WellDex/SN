import React from "react"
import s from "../../../css/Profile.module.css"
import {NavLink} from "react-router-dom"
import userPhoto from "../../../assets/userPhoto.png"

const ProfileFriend = ({id, avatar, name}) =>{
    return(
        <NavLink to={`/profile/${id}`}>
            <div className={s.userFriendSection}>
                <img src={avatar != null ? avatar : userPhoto}/>
                <p>{name}</p>
            </div>
        </NavLink>
    )
}

export default ProfileFriend