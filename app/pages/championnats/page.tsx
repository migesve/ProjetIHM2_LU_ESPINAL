"use client"; 

import React, { useState } from 'react';

const CreateChampionshipPage: React.FC = () => {
    const [name, setName] = useState('');
    const [teams, setTeams] = useState('');
    const [gender, setGender] = useState('Masculin');
    const [age, setAge] = useState('M11');
    const [modality, setModality] = useState('1v1');
    const [level, setLevel] = useState('Débutants/Niveau 1');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        console.log({ name, teams, gender, age, modality, level });
    };

    const getModalities = () => {
        switch (age) {
            case 'M11':
                return ['1v1', '2v2', '3v3'];
            case 'M13':
                return ['3v3', '4v4'];
            case 'M15':
            case 'M18':
                return ['4v4', '6v6'];
            default:
                return [];
        }
    };

    return (
        <div>
            <h1>Créer un nouveau championnat</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom du championnat:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Équipes participantes:</label>
                    <input type="text" value={teams} onChange={(e) => setTeams(e.target.value)} required />
                </div>
                <div>
                    <label>Genre:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Masculin">Masculin</option>
                        <option value="Feminin">Feminin</option>
                    </select>
                </div>
                <div>
                    <label>Âge:</label>
                    <select value={age} onChange={(e) => setAge(e.target.value)}>
                        <option value="M11">M11</option>
                        <option value="M13">M13</option>
                        <option value="M15">M15</option>
                        <option value="M18">M18</option>
                    </select>
                </div>
                <div>
                    <label>Modalité:</label>
                    <select value={modality} onChange={(e) => setModality(e.target.value)}>
                        {getModalities().map((mod) => (
                            <option key={mod} value={mod}>{mod}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Niveau:</label>
                    <select value={level} onChange={(e) => setLevel(e.target.value)}>
                        <option value="Débutants/Niveau 1">Débutants/Niveau 1</option>
                        <option value="Avancés/Niveau 2">Avancés/Niveau 2</option>
                    </select>
                </div>
                <button type="submit">Créer le championnat</button>
            </form>
        </div>
    );
};

export default CreateChampionshipPage;