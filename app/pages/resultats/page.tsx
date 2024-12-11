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
    <div className="container">
      <h1 className="title">Résultats des Matchs</h1>
      <div className="controls">
      <button onClick={() => handleWeekChange(-1)}>Previous Week</button>
      <select
        value={selectedWeek}
        onChange={(e) => {
        setSelectedWeek(e.target.value);
        setWeek(Number(e.target.value));
        }}
      >
        <option value="">Choose Week</option>
        {[...Array(10)].map((_, index) => (
        <option key={index} value={index}>
          Week {index}
        </option>
        ))}
      </select>
      <button onClick={() => handleWeekChange(1)}>Next Week</button>
      </div>
      <div className="filters">
      <label>
        Catégorie d&apos;âge:
        <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
          {cat}
          </option>
        ))}
        </select>
      </label>
      <label>
        Genre:
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">All</option>
        {genres.map((gen) => (
          <option key={gen} value={gen}>
          {gen}
          </option>
        ))}
        </select>
      </label>
      <label>
        Modalité:
        <select
        value={modalite}
        onChange={(e) => setModalite(e.target.value)}
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
      <div className="list">
      {filteredResults.length > 0 ? (
        filteredResults.map((result) => (
        <div className="card" key={result.id}>
          <h2>{result.match}</h2>
          <p>
          <strong>Date:</strong> {result.date}
          </p>
          <p>
          <strong>Time:</strong> {result.time}
          </p>
          <p>
          <strong>Location:</strong> {result.location}
          </p>
          <p>
          <strong>Score:</strong> {result.teamA} {result.score}{" "}
          {result.teamB}
          </p>
        </div>
        ))
      ) : (
        <p>No results found for this week or filters.</p>
      )}
      </div>
    </div>
  );
};

export default RésultatsPage;
