"use client";

import React, { useState } from "react";

const CreateChampionshipPage: React.FC = () => {
  const [name, setName] = useState("");
  const [teams, setTeams] = useState("");
  const [gender, setGender] = useState("Masculin");
  const [age, setAge] = useState("M11");
  const [modality, setModality] = useState("1v1");
  const [level, setLevel] = useState("Débutants/Niveau 1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ name, teams, gender, age, modality, level });
  };

  const getModalities = () => {
    switch (age) {
      case "M11":
        return ["1v1", "2v2", "3v3"];
      case "M13":
        return ["3v3", "4v4"];
      case "M15":
      case "M18":
        return ["4v4", "6v6"];
      default:
        return [];
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-md">
      <h1 className="title text-center text-2xl font-bold mb-6">
        Créer un nouveau championnat
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Nom du championnat:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Équipes participantes:
          </label>
          <input
            type="text"
            value={teams}
            onChange={(e) => setTeams(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Genre:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Masculin">Masculin</option>
            <option value="Feminin">Féminin</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Âge:</label>
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="M11">M11</option>
            <option value="M13">M13</option>
            <option value="M15">M15</option>
            <option value="M18">M18</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Modalité:</label>
          <select
            value={modality}
            onChange={(e) => setModality(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {getModalities().map((mod) => (
              <option key={mod} value={mod}>
                {mod}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Niveau:</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Débutants/Niveau 1">Débutants/Niveau 1</option>
            <option value="Avancés/Niveau 2">Avancés/Niveau 2</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Créer le championnat
        </button>
      </form>
    </div>
  );
};

export default CreateChampionshipPage;
