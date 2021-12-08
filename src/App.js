import React from "react"
import "./App.css"
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom"
import Header from "./app/Components/Header/Header"
import NavBar from "./app/Components/NavBar/NavBar"
import ProfileContaine from "./app/Components/ProfilePage/ProfileContaine"
import {connect, Provider} from "react-redux"
import Login from "./app/Components/Login/Login"
import store from "./app/Redux/state"
import UsersPage from "./app/Components/UserPage/UsersPage"
import {logout} from "./app/Redux/Reducers/AuthReducer"
import {compose} from "redux"
import {getIsAuth} from "./app/Components/common/Selectors/loginSelectors"

const App = ({isAuth, logout}) => {
    return (
        <div className="appWrapper">
            <Header isAuth={isAuth}
                    logout={logout}/>
            <div className="appWrapper appContent">
                <NavBar/>
                <div className="appWrapperContent">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route exact path="/profile/:userId?" render={() => <ProfileContaine/>}/>
                        <Route path="/users" render={() => <UsersPage/>}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = state => ({
    isAuth: getIsAuth(state)
})

const AppContaine = compose(withRouter,
    connect(mapStateToProps, {logout}))(App)

const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContaine/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp