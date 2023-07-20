import './globals.css';

import { Glory } from 'next/font/google';
import React from 'react';

import { NextAuthProvider } from './providers';

const glory = Glory({ subsets: ['latin'] });

export const metadata = {
  title: 'Swave',
  description: 'Vive la musica',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${glory.className} w-full`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
