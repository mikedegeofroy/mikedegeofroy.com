import type { Metadata } from 'next';
import Image from 'next/image';
import arrowIcon from '@/public/arrow.svg';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import Quote from '@/components/Quote';

const featureMono = localFont({
  src: [
    {
      path: './fonts/FeatureMono-Hairline.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/FeatureMono-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/FeatureMono-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/FeatureMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/FeatureMono-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/FeatureMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

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
      <body className={`min-h-svh flex flex-col ${featureMono.className}`}>
        <header className='flex w-screen overflow-x-hidden flex-col justify-between p-5 text-xl md:text-3xl font-light'>
          <div className='flex justify-between'>
            <Link href='/'>
              <div className='flex items-center'>
                <h1>SELECTED PROJECTS</h1>
                <Image
                  className='dark:invert h-4 w-4 md:h-5 md:w-5 m-1'
                  priority
                  src={arrowIcon}
                  alt={'arrow icon'}
                />
              </div>
            </Link>
            <Quote />
            <h1 className='hidden md:block'>{new Date().getFullYear()}</h1>
          </div>
        </header>
        <main className='flex-grow flex flex-col text-xl md:text-3xl font-light px-5 pb-5'>
          {children}
        </main>
      </body>
    </html>
  );
}
