import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeamsById } from '../../services/teams';
import TeamDetail from '../../components/teams/TeamDetail';

export default function Team(props) {
  const [team, setTeam] = useState({ players: [] });
  const id = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamsById(id);
      setTeam(data);
    };

    fetchData();
  }, [id]);
  return (
    <div>
      <TeamDetail team={team} />
    </div>
  );
}
