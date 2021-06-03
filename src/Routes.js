import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {NavBar} from './sections'
import {Home,JokeIntro} from './Pages'

const Routes = (params) => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/thejoke" component={JokeIntro}/>
                <Route exact path="/" component={Home}/>
                <Route path="*">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
