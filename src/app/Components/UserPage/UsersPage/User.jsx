import React from "react"
import userPhoto from "../../../assets/userPhoto.png"
import s from "../../../css/Users.module.css"
import {NavLink} from "react-router-dom"

const User = ({id, name, profileAvatar, status, followed, followUnfollowFilter}) => {
    return (
        <div className={s.userSection}>
            <NavLink to={`/profile/${id}`}>
                <img src={profileAvatar != null ? profileAvatar : userPhoto}/>
            </NavLink>
            <div className={s.userInfo}>
                <div>
                    <h2>{name}</h2>
                    <p>{status}</p>
                </div>
                {
                    followed
                        ? <button onClick={() => followUnfollowFilter(id, "unfollow")}>
                            <i className={"material-icons " + s.userFollow}>how_to_reg</i>
                        </button>
                        : <button onClick={() => followUnfollowFilter(id, "follow")}>
                            <i className="material-icons">person_add</i>
                        </button>
                }
            </div>
        </div>
    )
}

export default User