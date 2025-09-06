import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../actions/LoginApi";
import './Login.css';
import { Link } from "react-router-dom";


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = useSelector(state => state.login.access);
    const error = useSelector(state => state.login.error);



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
    }, [accessToken, navigate]);
    return (
        <div className="login-wrapper">
            <form className="login-container" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" autoComplete="email" value={formData.email} onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" autoComplete="current-password" value={formData.password} onChange={handleChange} />
                <button type="submit">Login</button>
                {error && (
                    <p style={{ color: 'red', marginTop: '10px' }}>
                        {typeof error === 'string'
                            ? error
                            : error?.detail || 'check Your email and password'}
                    </p>
                )}
                <p>
                    Don't have an account? <Link to="/">Register here</Link>
                </p>



            </form>

        </div >
    )
}

export default Login;