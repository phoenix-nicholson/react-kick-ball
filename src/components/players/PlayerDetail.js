import React from 'react';
import './player.css';

export default function PlayerDetail({ player }) {
  return (
    <div>
      <h1 className="text">Player Details</h1>
      <div>
        <div key={player.id}>
          <p>Name: {player.name}</p>
          <p>Position: {player.position}</p>
          <p>Team: {player.team_id}</p>
        </div>
      </div>
    </div>
  );
}
