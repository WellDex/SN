import React from "react"
import s from "../../../css/Profile.module.css"
import ProfileFriend from "./ProfileFriend"
import {NavLink} from "react-router-dom"

const ProfileFriends = ({friends}) => {
    let friendsObj = friends.map(f => <ProfileFriend key={f.id}
                                                     id={f.id}
                                                     avatar={f.photos.small}
                                                     name={f.name}/>)
    return (
        <section className={s.profileSection}>
            <NavLink to={"/users/friends"}
                     className={s.linkInFriendsPage}>Друзья</NavLink>
            <div className={s.profileFriendsWrapper}>
                {friendsObj}
            </div>
        </section>
    )
}

export default ProfileFriends