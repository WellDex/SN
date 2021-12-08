import React from "react"
import s from "../../css/Header.module.css"
import logo from "../../assets/logo.png"
import {Redirect} from "react-router-dom"

const Header = ({isAuth, logout}) => {
    return (
        <header className={s.headerWrapperContent}>
            <div className={"appContent " + s.headerPositionDisplay}>
                <img src={logo} className={s.logo}/>
                {isAuth
                    ? <button className={s.btnLogout}
                              onClick={logout}>
                        <i className={"material-icons"}>login</i>
                    </button>
                    : <Redirect to={"/login"}/>
                }
            </div>
        </header>
    )
}

export default Header