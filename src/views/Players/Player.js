import React from 'react';
import { useState, useEffect } from 'react';
import PlayerDetail from '../../components/players/PlayerDetail';
import { fetchPlayersById } from '../../services/player';

export default function Player(props) {
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayersById(id);
      setPlayer(data);
      setLoading(false);
    };

    fetchData();
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <PlayerDetail player={player} />
    </div>
  );
}
