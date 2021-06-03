import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {NavBar,Footer} from './sections'
import {Home,JokeIntro} from './Pages'

const Routes = (params) => {
    const [home,setHome] = useState(true)

    return (
        <Router>
            <NavBar home={home}/>
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
