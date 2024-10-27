import type { Metadata } from 'next';
import './globals.css';

import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '@mikedegeofroy',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mikedegeofroy.com',
    title: 'Mike de Geofroy',
    description: 'Software Engineering student at ITMO University.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 675,
        alt: 'Software Engineering student at ITMO University.',
      },
    ],
  },
  twitter: {
    title: 'Mike de Geofroy',
    description: 'Software Engineering student at ITMO University.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 675,
        alt: 'Software Engineering student at ITMO University.',
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
      <head>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-6XF7T03ZY9'
          strategy='afterInteractive'
          async
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6XF7T03ZY9');
          `}
        </Script>
      </head>
      <body
        className={`mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16 ${inter.className}`}
      >
        <header className='mb-32 flex flex-col items-start'>
          <a
            className='text-medium inline-block font-medium no-underline'
            href='/'
          >
            Mike de Geofroy
          </a>
          <span className='text-medium font-medium leading-none text-foreground-muted dark:text-muted'>
            Software Engineer
          </span>
        </header>
        <main className='flex-grow flex flex-col text-xl md:text-3xl font-light px-5 pb-5'>
          {children}
        </main>
      </body>
    </html>
  );
}
