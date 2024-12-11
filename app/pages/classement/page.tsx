"use client";

import React, { useState } from "react";

interface Team {
  id: number;
  name: string;
  points: number;
  plateaux: number;
}

const categories = ["M11", "M13", "M15", "M18"];
const genres = ["Masculin", "Féminin"];
const modalites = [
    { label: "1v1", applicableTo: ["M11"] },
    { label: "2v2", applicableTo: ["M11"] },
  { label: "3v3", applicableTo: ["M11", "M13"] },
  { label: "4v4", applicableTo: ["M13", "M15", "M18"] },
  { label: "6v6", applicableTo: ["M15", "M18"] },
];

const teams: Team[] = [
  { id: 1, name: "Team A", points: 50, plateaux: 5 },
  { id: 2, name: "Team B", points: 45, plateaux: 4 },
  { id: 3, name: "Team C", points: 40, plateaux: 3 },
  { id: 4, name: "Team D", points: 35, plateaux: 4 },
  { id: 5, name: "Team E", points: 30, plateaux: 2 },
  { id: 6, name: "Team F", points: 25, plateaux: 3 },
  { id: 7, name: "Team G", points: 20, plateaux: 1 },
  { id: 8, name: "Team H", points: 15, plateaux: 1 },
  { id: 9, name: "Team I", points: 10, plateaux: 1 },
];

const ChampionnatsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedModalite, setSelectedModalite] = useState<string>("");

  const filteredModalites = modalites.filter((modalite) =>
    modalite.applicableTo.includes(selectedCategory)
  );

  return (
    <div className="championnats-container">
      <h1 className="championnats-title">Championnat</h1>
      <div className="championnats-filters">
        <label>
          Catégorie d&apos;âge:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Genre:
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">Select</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </label>
        <label>
          Modalité:
          <select
            value={selectedModalite}
            onChange={(e) => setSelectedModalite(e.target.value)}
          >
            <option value="">Select</option>
            {filteredModalites.map((modalite) => (
              <option key={modalite.label} value={modalite.label}>
                {modalite.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="championnats-table-container">
        <table className="championnats-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Points</th>
              <th>Plateaux</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={team.id}>
                <td>{index + 1}</td>
                <td>{team.name}</td>
                <td>{team.points}</td>
                <td>{team.plateaux}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChampionnatsPage;
