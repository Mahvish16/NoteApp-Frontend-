import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../actions/logout";

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = useSelector(state => state.login.access);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    };
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/home">Home</Link></li>
                {accessToken && (
                    <li>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
