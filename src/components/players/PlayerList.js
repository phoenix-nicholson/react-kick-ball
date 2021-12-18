import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerList({ players }) {
  return (
    <div>
      <h1>Players</h1>
      <div>
        {players.map((item) => (
          <Link key={item.id} to={`players/${item.id}`}>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
