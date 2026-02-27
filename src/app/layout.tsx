import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { baseUrl } from '@/app/sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Jacoy Yue · Portfolio',
    template: '%s | Jacoy Yue',
  },
  description: 'Jacoy Yue - Developer, Designer, Explorer.',
  openGraph: {
    title: 'Jacoy Yue',
    description: 'Jacoy Yue - Developer, Designer, Explorer.',
    url: baseUrl,
    siteName: 'Jacoy Yue',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#0a0a0a]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  )
}
