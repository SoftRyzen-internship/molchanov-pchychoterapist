import { Metadata } from 'next';

import data from '@/data/common.json';

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
      <body>{children}</body>
    </html>
  );
}
