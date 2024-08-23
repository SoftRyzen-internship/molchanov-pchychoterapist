import { Metadata } from 'next';

import data from '@/data/common.json';
import { Header } from '@/layout/Header/header';

export const metadata: Metadata = {
  title: `${data.metadataAdmin.title}`,
  description: `${data.metadataAdmin.description}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
