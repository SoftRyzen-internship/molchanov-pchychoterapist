import { client } from '../lib/client';

interface FaqItem {
  _key: string;
  question: string;
  answer: string;
}

export async function getFaq(): Promise<FaqItem[]> {
  const query = '*[_type == "faq"]{faqList[]{_key, question, answer}}';
  const faq = await client.fetch(query);
  return faq[0].faqList;
}
