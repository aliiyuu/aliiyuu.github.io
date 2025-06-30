import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Alicia Yu',
  description: "Alicia Yu's software development portfolio.",
  keywords: ['portfolio', 'developer', 'designer', 'data scientist', 'Alicia Yu'],
  authors: [{ name: 'Alicia Yu' }],
  creator: 'Alicia Yu',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliiyuu.github.io',
    title: 'Alicia Yu',
    description: "Alicia Yu's software development portfolio.",
    siteName: 'Alicia Yu',
    images: [
      {
        url: '/og-image.jpg', // Add an Open Graph image
        width: 1200,
        height: 630,
        alt: "Alicia Yu's Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alicia Yu",
    description: "Alicia Yu's software development portfolio.",
    images: ['/og-image.jpg'],
    creator: '@aliiyuu',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7C6FBE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}