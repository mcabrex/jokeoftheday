import './NavBar.css'

const NavBar = (params) => {
    return (
        <nav>
            <a className="nav-about" href="#about">About Us</a>
            <a className="nav-work" href="#work">The Work</a>
            <a className="nav-started" href="#started">Get Started</a>
        </nav>
    )
}

export default NavBar
