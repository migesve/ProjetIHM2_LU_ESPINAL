"use client"; // Use the client-side version of React

import React, { useState, useEffect } from 'react';
import '../../globals.css'; // Import global styles

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Log In</h1>
            <form onSubmit={handleSubmit} className="login-form">
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
                <button type="submit" className="login-button">Log In</button>
            </form>
        </div>
    );
};

export default LoginPage;
