"use client";

import React, { useState } from "react";

interface Championship {
  id: number;
  ageCategory: string;
  gender: string;
  modality: string;
  isClosed: boolean;
}

const initialChampionships: Championship[] = [
  { id: 1, ageCategory: "M11", gender: "Masculin", modality: "1v1", isClosed: false },
  { id: 2, ageCategory: "M13", gender: "Feminin", modality: "3v3", isClosed: false },
  { id: 3, ageCategory: "M15", gender: "Masculin", modality: "4v4", isClosed: false },
  { id: 4, ageCategory: "M18", gender: "Feminin", modality: "6v6", isClosed: false },
];

const CloseChampionshipsPage: React.FC = () => {
  const [championships, setChampionships] = useState<Championship[]>(initialChampionships);

  const closeChampionship = (id: number) => {
    setChampionships((prev) =>
      prev.map((champ) =>
        champ.id === id ? { ...champ, isClosed: true } : champ
      )
    );
  };

  const closeAllChampionships = () => {
    setChampionships((prev) =>
      prev.map((champ) => ({ ...champ, isClosed: true }))
    );
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-md">
      <h1 className="title text-center text-2xl font-bold mb-6">
        Clôturer les championnats ouverts
      </h1>
      <button
        onClick={closeAllChampionships}
        className="w-full mb-4 bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition duration-300"
      >
        Clôturer tous les championnats
      </button>
      <div className="championnats-table-container">
        <table className="championnats-table w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                Catégorie d&apos;âge
              </th>
              <th className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                Genre
              </th>
              <th className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                Modalité
              </th>
              <th className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {championships.map((champ) => (
              <tr
                key={champ.id}
                className={`${
                  champ.isClosed ? "bg-gray-200 dark:bg-gray-800" : ""
                }`}
              >
                <td className="px-4 py-2 border-t border-gray-300 dark:border-gray-700">
                  {champ.ageCategory}
                </td>
                <td className="px-4 py-2 border-t border-gray-300 dark:border-gray-700">
                  {champ.gender}
                </td>
                <td className="px-4 py-2 border-t border-gray-300 dark:border-gray-700">
                  {champ.modality}
                </td>
                <td className="px-4 py-2 border-t border-gray-300 dark:border-gray-700">
                  {champ.isClosed ? (
                    <span className="text-gray-500">Clôturé</span>
                  ) : (
                    <button
                      onClick={() => closeChampionship(champ.id)}
                      className="bg-blue-500 text-white py-1 px-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                    >
                      Clôturer
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

export default CloseChampionshipsPage;
