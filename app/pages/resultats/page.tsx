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

  const handleWeekChange = (direction: number): void => {
    setWeek(week + direction);
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
      <button onClick={() => handleWeekChange(1)}>Next Week</button>
      </div>
      <div className="filters">
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="M11">M11</option>
        <option value="M13">M13</option>
        </select>
      </label>
      <label>
        Genre:
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">All</option>
        <option value="Masculin">Masculin</option>
        <option value="Féminin">Féminin</option>
        </select>
      </label>
      </div>
      <div className="list">
      {filteredResults.map((result) => (
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
      ))}
      </div>
    </div>
  );
};

export default RésultatsPage;
