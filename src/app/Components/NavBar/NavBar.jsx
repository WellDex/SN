import React from "react"
import s from "../../css/NavBar.module.css"
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.navbarWrapperContent}>
            <ul>
                <li>
                    <NavLink to='/'>
                        <i className="material-icons">home</i>
                        <span>My page</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/users/friends'>
                        <i className={"material-icons"}>people</i>
                        <span>Friends</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar