import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerDetail({ player }) {
  return (
    <div>
      <h1>Player Details</h1>
      <div>
        {player.map((item) => (
          <div key={item.id}>
            <Link key={item.id} to={`/player/${item.id}`}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
