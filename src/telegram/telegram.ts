export const sendToTelegram = async (message: string) => {
  const response = await fetch('/api/sendMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Could not send message');
  }

  return response.json();
};
