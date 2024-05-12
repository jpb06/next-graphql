import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import './globals.css';
import { Menu } from '../components/menu/Menu';
import { Providers } from '../logic/tanstack-query/query-client.provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next / graphql',
  description: 'Toying with graphql',
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html
    lang="en"
    className="animate-fade-in hero min-h-screen bg-gradient-to-tr from-[#2e1065] via-[#1e1b4b] via-45% to-[#0c4a6e]"
  >
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="darkreader-lock" />
    </head>
    <body
      className={`flex h-full w-full flex-col items-center pt-6 ${inter.className}`}
    >
      <Menu />
      <Providers>{children}</Providers>
    </body>
  </html>
);
export default RootLayout;
