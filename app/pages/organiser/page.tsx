"use client";

import React, { useState } from "react";

interface Plateaux {
  id: number;
  date: string;
  location: string;
  ageCategory: string;
  isOrganized: boolean;
}

const initialPlateaux: Plateaux[] = [
  { id: 1, date: "2023-12-01", location: "Stadium A", ageCategory: "M11", isOrganized: false },
  { id: 2, date: "2023-12-05", location: "Stadium B", ageCategory: "M13", isOrganized: false },
  { id: 3, date: "2023-12-10", location: "Stadium C", ageCategory: "M15", isOrganized: true },
  { id: 4, date: "2023-12-15", location: "Stadium D", ageCategory: "M18", isOrganized: false },
];

const OrganizePlateauxPage: React.FC = () => {
  const [plateaux, setPlateaux] = useState<Plateaux[]>(initialPlateaux);

  const applyToOrganize = (id: number) => {
    setPlateaux((prev) =>
      prev.map((plateau) =>
        plateau.id === id ? { ...plateau, isOrganized: true } : plateau
      )
    );
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-md">
      <h1 className="title text-center text-2xl font-bold mb-6">
        Organiser un plateaux
      </h1>
      <p className="text-center mb-4 text-gray-700 dark:text-gray-300">
        Sélectionnez un plateaux sans organisateur pour vous porter candidat.
      </p>
      <div className="championnats-table-container">
        <table className="championnats-table w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                Date
              </th>
              <th className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                Lieu
              </th>
              <th className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                Catégorie d&apos;âge
              </th>
              <th className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {plateaux.map((plateau) => (
              <tr
                key={plateau.id}
                className={`${
                  plateau.isOrganized ? "bg-gray-200 dark:bg-gray-800" : ""
                }`}
              >
                <td className="px-4 py-2 border-t border-gray-300 dark:border-gray-700">
                  {plateau.date}
                </td>
                <td className="px-4 py-2 border-t border-gray-300 dark:border-gray-700">
                  {plateau.location}
                </td>
                <td className="px-4 py-2 border-t border-gray-300 dark:border-gray-700">
                  {plateau.ageCategory}
                </td>
                <td className="px-4 py-2 border-t border-gray-300 dark:border-gray-700">
                  {plateau.isOrganized ? (
                    <span className="text-gray-500">Déjà organisé</span>
                  ) : (
                    <button
                      onClick={() => applyToOrganize(plateau.id)}
                      className="bg-blue-500 text-white py-1 px-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                    >
                      Postuler
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrganizePlateauxPage;
