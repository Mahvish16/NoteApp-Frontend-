import React, { useState, useEffect } from "react";
import './Register.css'
import { useDispatch } from 'react-redux';
import { registerUser } from "../actions/RegisterApi";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(registerUser(formData))
        navigate('/login')

    }

    const [formData, setFormData] = useState({
        'name': '',
        'email': '',
        'password': '',
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <div className="form-wrapper">
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>Registration</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
                <label htmlFor="email">Email:</label>
                <input name="email" type="email" id="email" value={formData.email} onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input name="password" type="password" id="password" value={formData.password} onChange={handleChange} />
                <button type="submit">Register</button>
                <Link to="/login">
                    Already have account? Sign in
                </Link>

            </form>

        </div>
    )

}
export default Register;