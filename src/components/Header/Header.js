import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Images/logo.png'

function Header() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-lg">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="30" height="24" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/' exact>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/courses'>Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/my-courses'>My Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/about'>About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
