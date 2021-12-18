import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamList({ teams }) {
  return (
    <div>
      <h1>Teams</h1>
      <div>
        {teams.map((item) => (
          <Link key={item.id} to={`/teams/${item.id}`}>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
