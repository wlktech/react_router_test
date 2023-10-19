import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav/Nav.css'

export default function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark shadow">
            <div className="container">
                <NavLink to={'/'} className="navbar-brand">
                    <div className="d-flex">
                        <div className='me-2'>
                            <img src="http://localhost:3000/logo.png" className='rounded shadow' width={60} alt="" />
                        </div>
                        <div className=''>
                            <span className="fw-bold d-block mb-0 pb-0 logo">WLK-TECH</span>
                            <span className='sologan mt-0 pt-0'>Grow Your Business With Us.</span>
                        </div>
                    </div>
                </NavLink>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/about'} className="nav-link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/contact'} className="nav-link">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/api'} className="nav-link">
                                API Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}
