import React, { useState, useEffect } from "react";
import './Register.css'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from "../actions/RegisterApi";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const registrationSuccess = useSelector(state => state.register.success);
    const registrationError = useSelector(state => state.register.error);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(registerUser(formData))
    }
    useEffect(() => {
        if (registrationSuccess) {
            navigate('/login');
        }
    }, [registrationSuccess, navigate]);

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
                {registrationError?.email && (
                    <p style={{ color: 'red' }}>{registrationError.email[0]}</p>
                )}
                {registrationError?.error && (
                    <p style={{ color: 'red' }}>{registrationError.error}</p>
                )}

            </form>

        </div>
    )

}
export default Register;