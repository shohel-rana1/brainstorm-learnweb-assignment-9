import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/brainstorm.jpg'
import './Header.css'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navColor">
            <div className="container">
                <Link className="navbar-brand" to="/home"><img className="logo img-fluid" src={logo} alt="" />Brainstorm</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <i className="fas fa-home"></i>
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <i className="fas fa-users"></i>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <i className="fab fa-servicestack"></i>
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <i className="fas fa-address-card"></i>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success btn-bg" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;