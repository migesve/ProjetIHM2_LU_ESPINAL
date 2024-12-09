"use client"; // Use the client-side version of React

import React, { useState, useEffect } from 'react';
import '../../globals.css'; // Import global styles

const SignUpPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Handle sign up logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="signup-container">
            <h1 className="signup-title">Sign Up</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;