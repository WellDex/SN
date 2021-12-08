import React from "react"
import s from "../../css/Login.module.css"
import {Field, reduxForm} from "redux-form"

const LoginForm = ({handleSubmit, captcha, error}) => {
    return (
        <form onSubmit={handleSubmit} className={s.loginFormElementColumn}>
            <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
            />
            <Field
                name="password"
                component="input"
                type="password"
                placeholder="Password"
            />
            {captcha && <img src={captcha}/>}
            {captcha &&
            <Field
                name="captcha"
                component="input"
                placeholder="Symbol from image"
            />
            }
            {
                error && <div className={s.formError}>{error}</div>
            }
            <button type="submit">Login</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm({form: "login"})(LoginForm)