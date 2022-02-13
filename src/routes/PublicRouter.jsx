import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import LoginScreen from '../pages/LoginScreen'

const PublicRouter = ({ auth, component: Component, ...rest }) => {

    return (
        <Route {...rest}
            render={props => auth.log ? <Redirect to="/" /> : <LoginScreen {...props} />} />
    )
}

export default PublicRouter