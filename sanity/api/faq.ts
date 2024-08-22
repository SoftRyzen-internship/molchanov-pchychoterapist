import { client } from '../lib/client';

export async function getFaq() {
  const query = '*[_type == "faq"]{faqList[]{_key, question, answer}}';
  const faq = await client.fetch(query);
  return faq[0].faqList;
}
