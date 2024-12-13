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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">
          Calendrier des Matchs et Tournois
        </h1>
        <div className="mb-6">
          <button
            onClick={() => handleWeekChange(-1)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2"
          >
            Previous Week
          </button>
          <span className="text-gray-700 font-medium">Week {week}</span>
          <button
            onClick={() => handleWeekChange(1)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ml-2"
          >
            Next Week
          </button>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <label className="text-gray-700">
            Filtrer par Catégorie:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Toutes</option>
              <option value="Football">M11</option>
              <option value="Basketball">M13</option>
              <option value="Basketball">M15</option>
              <option value="Basketball">M18</option>
            </select>
          </label>
          <label className="text-gray-700">
            Filtrer par Équipe:
            <input
              type="text"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              placeholder="Enter team name"
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-100 p-4 rounded-lg shadow-md text-left"
            >
              <h2 className="text-lg font-bold text-gray-800">{event.name}</h2>
              <p className="text-gray-700">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="text-gray-700">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-gray-700">
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-gray-700">
                <strong>Organizer:</strong> {event.organizer.name}
              </p>
              <p className="text-gray-700">
                <strong>Contact:</strong> {event.organizer.phone},{" "}
                {event.organizer.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendrierPage;
