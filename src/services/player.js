import { client } from './client';
import { checkError } from './client';

export async function fetchPlayer() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/players?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}

export async function fetchPlayersById(id) {
  const resp = await client.from('players').select('*,players(*)').match({ id }).single();
  return checkError(resp);
}
