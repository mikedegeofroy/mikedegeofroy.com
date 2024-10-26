import type { Metadata } from 'next';
import './globals.css';

import { Inter } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'mikedegeofroy.com',
  description: "Mike de Geofroy's portfolio.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon-light.svg',
        href: '/favicon-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-dark.svg',
        href: '/favicon-dark.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16 ${inter.className}`}>
        <header className="mb-32 flex flex-col items-start">
            <a className="text-medium inline-block font-medium no-underline" href="/">Mike de Geofroy</a>
            <span className="text-medium font-medium leading-none text-muted">Software Engineer</span>
        </header>
        <main className='flex-grow flex flex-col'>
          {children}
        </main>
      </body>
    </html>
  );
}
