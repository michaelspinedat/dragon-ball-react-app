import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ManScreen from '../pages/ManScreen'
import SearchScreen from '../pages/SearchScreen'
import WomenScreen from '../pages/WomenScreen'
import LoginRouter from './LoginRouter'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={"/men"} component={ManScreen} />
                <Route exact path={"/women"} component={WomenScreen} />
                <Route exact path={"/search"} component={SearchScreen} />
            </Switch>
            <LoginRouter />            
        </Router>

    )
}

export default AppRouter