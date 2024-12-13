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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Clôturer les championnats ouverts
        </h1>
        <button
          onClick={closeAllChampionships}
          className="w-full mb-6 bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition duration-300"
        >
          Clôturer tous les championnats
        </button>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-300 text-gray-900">
                  Catégorie d&apos;âge
                </th>
                <th className="px-4 py-2 bg-gray-300 text-gray-900">Genre</th>
                <th className="px-4 py-2 bg-gray-300 text-gray-900">
                  Modalité
                </th>
                <th className="px-4 py-2 bg-gray-300 text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {championships.map((champ) => (
                <tr
                  key={champ.id}
                  className={champ.isClosed ? "bg-gray-200" : "bg-white"}
                >
                  <td className="px-4 py-2 border-t border-gray-300">
                    {champ.ageCategory}
                  </td>
                  <td className="px-4 py-2 border-t border-gray-300">
                    {champ.gender}
                  </td>
                  <td className="px-4 py-2 border-t border-gray-300">
                    {champ.modality}
                  </td>
                  <td className="px-4 py-2 border-t border-gray-300">
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
    </div>
  );
};

export default CloseChampionshipsPage;
