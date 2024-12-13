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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Championnat
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <label className="text-gray-700">
            Catégorie d&apos;âge:
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label className="text-gray-700">
            Genre:
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </label>
          <label className="text-gray-700">
            Modalité:
            <select
              value={selectedModalite}
              onChange={(e) => setSelectedModalite(e.target.value)}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-300 text-gray-900">Position</th>
                <th className="px-4 py-2 bg-gray-300 text-gray-900">Team</th>
                <th className="px-4 py-2 bg-gray-300 text-gray-900">Points</th>
                <th className="px-4 py-2 bg-gray-300 text-gray-900">
                  Plateaux
                </th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={team.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-2 border-t border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border-t border-gray-300">
                    {team.name}
                  </td>
                  <td className="px-4 py-2 border-t border-gray-300">
                    {team.points}
                  </td>
                  <td className="px-4 py-2 border-t border-gray-300">
                    {team.plateaux}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChampionnatsPage;
