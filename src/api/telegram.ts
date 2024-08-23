const baseUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/`;

export const sendMessage = async (message: string): Promise<void> => {
  const url = `${baseUrl}sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
      text: message,
    }),
  });

  if (!response.ok) {
    throw new Error('Could not send message');
  }
};
