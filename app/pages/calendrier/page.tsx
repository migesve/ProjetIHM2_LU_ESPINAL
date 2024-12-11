"use client";

import React, { useState } from "react";

interface Event {
  id: number;
  name: string;
  location: string;
  date: string;
  time: string;
  organizer: {
    name: string;
    phone: string;
    email: string;
  };
  category: string;
  team: string;
}

const events: Event[] = [
  {
    id: 1,
    name: "Match 1",
    location: "Stadium A",
    date: "2023-10-01",
    time: "10:00 AM",
    organizer: {
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
    },
    category: "Football",
    team: "Team A",
  },
];

const CalendrierPage: React.FC = () => {
  const [week, setWeek] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [team, setTeam] = useState<string>("");

  const handleWeekChange = (direction: number): void => {
    setWeek(week + direction);
  };

  const filteredEvents = events.filter((event) => {
    return (
      (category === "" || event.category === category) &&
      (team === "" || event.team.includes(team))
    );
  });

  return (
    <div className="container">
      <h1 className="title">Calendrier des Matchs et Tournois</h1>
      <div className="controls">
      <button onClick={() => handleWeekChange(-1)}>Previous Week</button>
      <span>Week {week}</span>
      <button onClick={() => handleWeekChange(1)}>Next Week</button>
      </div>
      <div className="filters">
      <label>
        Filter by Category:
        <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
        <option value="">All</option>
        <option value="Football">Football</option>
        <option value="Basketball">Basketball</option>
        </select>
      </label>
      <label>
        Filter by Team:
        <input
        type="text"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        placeholder="Enter team name"
        />
      </label>
      </div>
      <div className="list">
      {filteredEvents.map((event) => (
        <div className="card" key={event.id}>
        <h2>{event.name}</h2>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Time:</strong> {event.time}
        </p>
        <p>
          <strong>Organizer:</strong> {event.organizer.name}
        </p>
        <p>
          <strong>Contact:</strong> {event.organizer.phone},{" "}
          {event.organizer.email}
        </p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default CalendrierPage;
