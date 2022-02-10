import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen'

const LoginRouter = () => {
    console.log("Hola mundo")
    return (
        <Switch>
            <Route exact path={"/login"} component={LoginScreen} />
        </Switch>
    )
}

export default LoginRouter