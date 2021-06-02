import './NavBar.css'

const NavBar = (params) => {
    return (
        <nav>
            <ul className="main-nav">
                <li><a className="nav-home">Home</a></li>
                <li className="push"><a className="nav-about" href="#about">About Us</a></li>
                <li><a className="nav-work" href="#work">The Work</a></li>
                <li><a className="nav-started" href="#started">Get Started</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
