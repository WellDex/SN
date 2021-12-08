import React from "react"
import {NavLink, Redirect, Route} from "react-router-dom"
import FriendsContaine from "./FriendsPage/FriendsContaine"
import UsersContaine from "./UsersPage/UsersContaine"
import s from "../../css/Users.module.css"
import {getIsAuth} from "../common/Selectors/loginSelectors"
import {connect} from "react-redux"

const UsersPage = ({isAuth}) => {
    if (!isAuth) {
        return <Redirect to={"/login"}/>
    }
    return (
        <div className={s.usersWrapperContent}>
            <div className={s.usersPageHead}>
                <nav className={s.usersPageNav}>
                    <NavLink to={"/users/friends"} activeClassName={s.activeLink}>My friends</NavLink>
                    <NavLink to={"/users/users"} activeClassName={s.activeLink}>Search new friends</NavLink>
                </nav>
            </div>
            <switch>
                <Route exact path="/users/friends" render={() => <FriendsContaine/>}/>
                <Route exact path="/users/users" render={() => <UsersContaine/>}/>
            </switch>
        </div>
    )
}

let mapStateToProps = state => ({
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, {})(UsersPage)