import { client } from '../lib/client';

export async function getPolitics() {
  const query = '*[_type == "politics"]{description}';

  const politics = await client.fetch(query);
  return politics[0].description;
}
