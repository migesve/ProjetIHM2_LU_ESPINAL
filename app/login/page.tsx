"use client"; // Enables client-side interactivity

import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        alert(`Email: ${email}, Password: ${password}`);
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>Connexion</h1>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label>Mot de passe:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Se connecter</button>
        </form>
    );
}
