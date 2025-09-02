import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/LoginApi";
import './Login.css';

function Login() {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formData))
    }
    const [formData, setFormData] = useState({
        'email': '', 'password': ''
    })
    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    return (
        <div className="login-wrapper">
            <form className="login-container" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" autoComplete="email" value={formData.email} onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" autoComplete="current-password" value={formData.password} onChange={handleChange} />
                <Link to="/home"><button>Login</button></Link>


            </form>

        </div >
    )
}

export default Login;