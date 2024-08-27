import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { TELEGRAM_CHAT_ID, TELEGRAM_TOKEN } = process.env;
  try {
    const { text } = await req.json();
    const URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { code: response.status },
        { status: response.status }
      );
    }
    return NextResponse.json({ code: 200 }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ code: 500 }, { status: 500 });
  }
}
