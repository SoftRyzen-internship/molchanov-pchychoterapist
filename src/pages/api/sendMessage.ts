import type { NextApiRequest, NextApiResponse } from 'next';

const baseUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { message } = req.body;
    const url = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Could not send message');
      }
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
