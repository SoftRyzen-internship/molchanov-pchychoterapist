import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const URL = process.env.URL;
      const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

      if (!URL || !CHAT_ID) {
        throw new Error('URL or CHAT_ID not defined');
      }

      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      });

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
