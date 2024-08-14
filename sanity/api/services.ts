import { client } from '../lib/client';

export async function getServices() {
  const query = '*[_type == "services"]{_id, servicesList}';

  const services = await client.fetch(query);
  return services;
}
