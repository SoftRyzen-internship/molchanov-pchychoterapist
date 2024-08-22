import type { Metadata } from 'next';
import './globals.css';
import { Montserrat, Geologica } from 'next/font/google';
import clsx from 'clsx';
import { Header } from '@/layout/Header/header';

export const metadata: Metadata = {
  title: '',
  description: '',
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
      <body className={clsx(montserrat.variable, geologica.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
