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
  const [week, setWeek] = useState(0);
  const [category, setCategory] = useState("");
  const [team, setTeam] = useState("");

  const handleWeekChange = (direction: number) => {
    setWeek(week + direction);
  };

  const filteredEvents = events.filter((event) => {
    return (
      (category === "" || event.category === category) &&
      (team === "" || event.team.includes(team))
    );
  });

  return (
    <div className="calendrier-container">
      <h1 className="calendrier-title">Calendrier des Matchs et Tournois</h1>
      <div className="calendrier-controls">
        <button onClick={() => handleWeekChange(-1)}>Previous Week</button>
        <span>Week {week}</span>
        <button onClick={() => handleWeekChange(1)}>Next Week</button>
      </div>
      <div className="calendrier-filters">
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
      <div className="calendrier-event-list">
        {filteredEvents.map((event) => (
          <div className="calendrier-event-card" key={event.id}>
            <h2>{event.name}</h2>
            <p>
              <span>Location:</span> {event.location}
            </p>
            <p>
              <span>Date:</span> {event.date}
            </p>
            <p>
              <span>Time:</span> {event.time}
            </p>
            <p>
              <span>Organizer:</span> {event.organizer.name}
            </p>
            <p>
              <span>Contact:</span> {event.organizer.phone},{" "}
              {event.organizer.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendrierPage;
