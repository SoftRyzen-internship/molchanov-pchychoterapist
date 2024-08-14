import { client } from '../lib/client';

export async function getFaq() {
  const query = '*[_type == "faq"]{_id, faqList}';

  const faq = await client.fetch(query);
  return faq;
}
