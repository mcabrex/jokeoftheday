import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {NavBar} from './sections'


import App from './App'

const Routes = (params) => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="*">
                    <App />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
