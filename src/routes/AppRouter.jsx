import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Characters } from '../models/Characters'
import CharacterScreen from '../pages/CharacterScreen'
import ManScreen from '../pages/ManScreen'
import SearchScreen from '../pages/SearchScreen'
import WomenScreen from '../pages/WomenScreen'
import LoginRouter from './LoginRouter'

const AppRouter = () => {

    const men = Characters.filter(char => char.type === "h");
    const women = Characters.filter(char => char.type === "m");

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path={"/men"}
                    render={props => (<ManScreen men={men} {...props} />)} />
                <Route exact path={"/women"}
                    render={props => (<WomenScreen women={women} {...props} />)} />
                <Route exact path={"/search"} component={SearchScreen} />
                <Route exact path="/character/:id" component={CharacterScreen} />
            </Switch>
            <LoginRouter />
        </Router>

    )
}

export default AppRouter