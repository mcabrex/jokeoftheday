import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {NavBar} from './sections'
import {Home,Joke} from './Pages'

const Routes = (params) => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/thejoke" component={Joke}/>
                <Route exact path="/" component={Home}/>
                <Route path="*">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
