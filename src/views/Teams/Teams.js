import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/teams';
import TeamList from '../../components/teams/TeamList.js';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <TeamList teams={teams} />
    </div>
  );
}
