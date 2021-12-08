import React from "react"
import Preloader from "../../common/preloader/preloader"
import s from "../../../css/Users.module.css"
import User from "./User"

const Users = ({users, handleScroll, isLoading, followUnfollowFilter}) => {
    let usersObj = users.map(u => {
        return <User key={u.id}
                     id={u.id}
                     name={u.name}
                     profileAvatar={u.photos.small}
                     status={u.status}
                     followed={u.followed}
                     followUnfollowFilter={followUnfollowFilter}/>
    })
    return (
        <div className={s.usersWrapper} onScroll={handleScroll}>
            {usersObj}
            {isLoading && <Preloader/>}
        </div>
    )
}

export default Users