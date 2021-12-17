import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamDetail({ team }) {
  return (
    <div>
      <h1>Players</h1>
      <div>
        {team.map((item) => (
          <Link key={item.id} to={`/team/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
