import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import { authTypes } from '../types/authTypes';

const Navbar = () => {

    const history = useHistory();

    const { dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({ type: authTypes.logout });
        history.replace("/login");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">
                    Dragon Ball
                </span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/men">
                                Men
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/women">
                                Women
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/search">
                                Search
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <button className="btn btn-primary"
                        onClick={handleLogout}
                    >Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar