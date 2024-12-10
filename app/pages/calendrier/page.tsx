import React from 'react';

const matches = [
    { date: '2023-10-01', teams: 'Team A vs Team B' },
    { date: '2023-10-05', teams: 'Team C vs Team D' },
    { date: '2023-10-10', teams: 'Team E vs Team F' },
    // Add more matches as needed
];

const CalendrierPage: React.FC = () => {
    return (
        <div>
            <h1>Match Dates</h1>
            <ul>
                {matches.map((match, index) => (
                    <li key={index}>
                        <strong>{match.date}</strong>: {match.teams}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CalendrierPage;