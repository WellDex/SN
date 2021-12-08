import React from "react"
import userPhoto from "../../../assets/userPhoto.png"
import s from "../../../css/Users.module.css"
import {NavLink} from "react-router-dom"

const Friend = ({id, name, profileAvatar, status}) => {
    return (
        <NavLink to={`/profile/${id}`}>
            <div className={s.userFriendSection}>
                <img src={profileAvatar != null ? profileAvatar : userPhoto}/>
                <div className={s.userFriendInfo}>
                    <h2>{name}</h2>
                    <p>{status}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default Friend