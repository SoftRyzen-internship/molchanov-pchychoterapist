import { client } from '../lib/client';

export async function getPolitics() {
  const query = '*[_type == "politics"]{title,description}';

  const politics = await client.fetch(query);
  return politics[0];
}
