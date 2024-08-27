export type TelegramRes = { code: number };

export const sendTelegramData = async (message: string) => {
  const telegramMessageWithDate = `${message}\nДата заповнення: ${new Date().toLocaleString()}`;

  try {
    const res: TelegramRes = await fetch('/api', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: telegramMessageWithDate,
      }),
    }).then((r) => r.json());

    if (res.code !== 200) throw new Error();
  } catch (error) {
    throw new Error();
  }
};
