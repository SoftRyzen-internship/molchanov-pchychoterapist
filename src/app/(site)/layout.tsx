import type { Metadata } from 'next';
import './globals.css';
import { Montserrat, Geologica } from 'next/font/google';
import clsx from 'clsx';
import { Header } from '@/layout/Header/header';
import { Footer } from '@/layout/Footer/footer';

export const metadata: Metadata = {
  title: 'Сергій Молчанов | Психолог',
  description:
    'Унікальна програма психотерапії, яка поєднує елементи тілесної роботи та танцювальних рухів для розв`язання конфліктів.',
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE)
    : undefined,
  openGraph: {
    title: 'Сергій Молчанов | Психолог',
    description:
      'Унікальна програма психотерапії, яка поєднує елементи тілесної роботи та танцювальних рухів для розв`язання конфліктів.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_METADATA_BASE,

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Сергій Молчанов | Психолог Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Сергій Молчанов | Психолог',
    description:
      'Унікальна програма психотерапії, яка поєднує елементи тілесної роботи та танцювальних рухів для розв`язання конфліктів.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_CANONICAL,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const geologica = Geologica({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-geologica',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(montserrat.variable, geologica.variable, )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
