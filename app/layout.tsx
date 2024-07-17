import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

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
      weight: '400',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={featureMono.className}>{children}</body>
    </html>
  );
}
