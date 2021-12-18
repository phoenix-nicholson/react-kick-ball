import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPlayer } from '../../services/player';
import PlayerList from '../../components/players/PlayerList';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayer();
      setPlayers(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <PlayerList players={players} />
    </div>
  );
}
