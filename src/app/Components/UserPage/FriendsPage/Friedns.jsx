import React from "react"
import Friend from "./Friend"
import Preloader from "../../common/preloader/preloader"
import s from "../../../css/Users.module.css"

const Friends = ({friends, handleScroll, isLoading}) => {
    let friendsObj = friends.map(u => {
        if (u.followed === true) {
            return <Friend key={u.id}
                           id={u.id}
                           name={u.name}
                           profileAvatar={u.photos.small}
                           status={u.status}/>
        }
    })

    return (
        <div className={s.usersFriendsWrapper} onScroll={handleScroll}>
            {friendsObj && friendsObj}
            {!friendsObj && <h1>You have no friends at the moment</h1>}
            {isLoading && <Preloader/>}
        </div>
    )
}

export default Friends