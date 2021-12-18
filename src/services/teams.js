import { client, checkError } from './client';

export async function fetchTeams() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/teams?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}

export async function fetchTeamsById(id) {
  const resp = await client.from('teams').select('*,players(*)').match({ id }).single();
  return checkError(resp);
}
