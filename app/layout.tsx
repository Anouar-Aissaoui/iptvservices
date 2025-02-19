import { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    template: '%s | IPTV Guide',
    default: 'IPTV Guide - Best IPTV Services'
  },
  description: 'Discover the best IPTV services with comprehensive reviews, comparisons, and guides for streaming entertainment.',
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  themeColor: '#ffffff'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}