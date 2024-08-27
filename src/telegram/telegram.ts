export const sendToTelegram = async (message: string) => {
  const response = await fetch('/api', {
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

// export const sendToTelegram = async (message: string) => {
//   const response = await fetch(
//     `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
//         text: message,
//         parse_mode: 'HTML',
//       }),
//     }
//   );

//   if (!response.ok) {
//     throw new Error('Could not send message');
//   }

//   return response.json();
// };
