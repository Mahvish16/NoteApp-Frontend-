import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../actions/LoginApi";
import './Login.css';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = useSelector(state => state.login.access);


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
    useEffect(() => {
        if (accessToken) {
            console.log('Access token:', accessToken);
            navigate('/home')
        }
    }, [accessToken]);
    return (
        <div className="login-wrapper">
            <form className="login-container" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" autoComplete="email" value={formData.email} onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" autoComplete="current-password" value={formData.password} onChange={handleChange} />
                <button type="submit">Login</button>


            </form>

        </div >
    )
}

export default Login;