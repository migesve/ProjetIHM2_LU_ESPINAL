"use client";

import React, { useState } from "react";

interface Result {
  id: number;
  match: string;
  date: string;
  time: string;
  location: string;
  teamA: string;
  teamB: string;
  score: string;
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

const results: Result[] = [
  {
    id: 1,
    match: "Match 1",
    date: "2023-10-01",
    time: "10:00 AM",
    location: "Stadium A",
    teamA: "Team A",
    teamB: "Team B",
    score: "3-2",
  },
  {
    id: 2,
    match: "Match 2",
    date: "2023-10-02",
    time: "12:00 PM",
    location: "Stadium B",
    teamA: "Team C",
    teamB: "Team D",
    score: "1-3",
  },
];

const RésultatsPage: React.FC = () => {
  const [week, setWeek] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [modalite, setModalite] = useState<string>("");
  const [selectedWeek, setSelectedWeek] = useState<string>("");

  const filteredModalites = modalites.filter((modalite) =>
    modalite.applicableTo.includes(category)
  );

  const handleWeekChange = (direction: number): void => {
    setWeek(week + direction);
    setSelectedWeek("");
  };

  const filteredResults = results.filter((result) => {
    return (
      (category === "" || result.date.includes(category)) &&
      (genre === "" || result.match.includes(genre))
    );
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">
          Résultats des Matchs
        </h1>
        <div className="mb-6">
          <button
            onClick={() => handleWeekChange(-1)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2"
          >
            Previous Week
          </button>
          <select
            value={selectedWeek}
            onChange={(e) => {
              setSelectedWeek(e.target.value);
              setWeek(Number(e.target.value));
            }}
            className="border border-gray-300 rounded-md py-2 px-3 mx-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Choose Week</option>
            {[...Array(10)].map((_, index) => (
              <option key={index} value={index}>
                Week {index}
              </option>
            ))}
          </select>
          <button
            onClick={() => handleWeekChange(1)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ml-2"
          >
            Next Week
          </button>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <label className="text-gray-700">
            Catégorie d&apos;âge:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>
          <label className="text-gray-700">
            Genre:
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All</option>
              {genres.map((gen) => (
                <option key={gen} value={gen}>
                  {gen}
                </option>
              ))}
            </select>
          </label>
          <label className="text-gray-700">
            Modalité:
            <select
              value={modalite}
              onChange={(e) => setModalite(e.target.value)}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All</option>
              {filteredModalites.map((mod) => (
                <option key={mod.label} value={mod.label}>
                  {mod.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex flex-col gap-4">
          {filteredResults.length > 0 ? (
            filteredResults.map((result) => (
              <div
                key={result.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md text-left"
              >
                <h2 className="text-lg font-bold text-gray-800">
                  {result.match}
                </h2>
                <p className="text-gray-700">
                  <strong>Date:</strong> {result.date}
                </p>
                <p className="text-gray-700">
                  <strong>Time:</strong> {result.time}
                </p>
                <p className="text-gray-700">
                  <strong>Location:</strong> {result.location}
                </p>
                <p className="text-gray-700">
                  <strong>Score:</strong> {result.teamA} {result.score}{" "}
                  {result.teamB}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-700">No results found for this week or filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RésultatsPage;
