import { client } from '../lib/client';

export async function getServices() {
  const query = '*[_type == "services"]{servicesList[]{_key, title}}';

  const services = await client.fetch(query);
  return services[0].servicesList;
}
