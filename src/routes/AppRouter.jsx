import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Characters } from '../models/Characters'
import ManScreen from '../pages/ManScreen'
import SearchScreen from '../pages/SearchScreen'
import WomenScreen from '../pages/WomenScreen'
import LoginRouter from './LoginRouter'

const AppRouter = () => {

    const men = Characters.filter(char => char.type === "h");

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path={"/men"} render={props => (<ManScreen men={men} {...props} />)} />
                <Route exact path={"/women"} component={WomenScreen} />
                <Route exact path={"/search"} component={SearchScreen} />
            </Switch>
            <LoginRouter />
        </Router>

    )
}

export default AppRouter