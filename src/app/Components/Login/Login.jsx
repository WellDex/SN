import React from "react"
import s from "../../css/Login.module.css"
import {LoginReduxForm} from "./LoginForm"
import {login} from "../../Redux/Reducers/AuthReducer"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {getCaptcha, getIsAuth} from "../common/Selectors/loginSelectors"


const Login = ({isAuth, captcha, login}) => {
    let submit = formData => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={s.background}>
            <div className={s.loginPositionCenter}>
                <LoginReduxForm onSubmit={submit} captcha={captcha}/>
            </div>
        </div>
    )
}

let mapStateToProps = state => ({
    isAuth: getIsAuth(state),
    captcha: getCaptcha(state)
})

export default connect(mapStateToProps, {login})(Login)