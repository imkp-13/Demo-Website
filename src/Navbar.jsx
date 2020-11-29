import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg">
                        <NavLink className="navbar-brand" to="/">React Website</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" id="navbar-toggle"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink activeClassName="menu-active" className="nav-link" to="/" exact>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu-active" className="nav-link" to="/about" exact>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu-active" className="nav-link" to="/service" exact>Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu-active" className="nav-link" to="/contact" exact>Contact</NavLink>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </Fragment>
    );
}

export default Navbar;