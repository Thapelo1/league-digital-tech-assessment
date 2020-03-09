import React from 'react';
import './Nav.css'

class NavBar extends React.Component {

    render(){

        const navLogo = {
            width: '50%'
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><img style={navLogo} className="logo img-respnsive" src="https://www.leaguedigital.com/img/league/logo.png"/></a>
                <div className="collapse navbar-collapse" id="navbarColor02">
                <NavItems/>
                </div>
            </nav>
        )
    }
}

const NavItems = props => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Technical Assessment <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Components</a>
            </li>
        </ul>
    )
}

export default NavBar;
