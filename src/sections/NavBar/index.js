import React from 'react'
import { useLocation } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({home,...props}) => {
    const location = useLocation();
    console.log(location.pathname)
      return (
        <nav>
            <ul className="main-nav">
                <li><a className="nav-home" href="/">Home</a></li>
                {
                    location.pathname !== '/thejoke' &&
                    <React.Fragment>
                        <li className="push"><a className="nav-about" href="#about">About Us</a></li>
                        <li><a className="nav-work" href="#work">The Work</a></li>
                        <li><a className="nav-started" href="#started">Get Started</a></li>
                    </React.Fragment>
                }
            </ul>
        </nav>
    )
}

export default NavBar
