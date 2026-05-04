import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://gslv.fr'),
  title: {
    default: 'Guillaume Stehelin de Taisne — Operator building systems that scale companies | GSLV',
    template: '%s | GSLV'
  },
  description: 'Operator and systems builder helping founders, scale-ups and investors structure operations, pricing, automation and execution in high-growth environments.',
  keywords: [
    'operator',
    'fractional COO',
    'systems builder',
    'scaling operations',
    'AI operations',
    'pricing systems',
    'operational systems',
    'startup operations',
    'Guillaume Stehelin de Taisne',
    'GSLV'
  ],
  authors: [{ name: 'Guillaume Stehelin de Taisne' }],
  creator: 'Guillaume Stehelin de Taisne',
  publisher: 'GSLV.fr',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gslv.fr',
    siteName: 'GSLV.fr',
    title: 'Guillaume Stehelin de Taisne — Operator building systems that scale companies',
    description: 'Operator and systems builder helping founders, scale-ups and investors structure operations, pricing, automation and execution in high-growth environments.',
    images: [
      {
        url: 'https://gslv.fr/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Guillaume Stehelin de Taisne — Operator building systems that scale companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guillaume Stehelin de Taisne — Operator building systems that scale companies',
    description: 'Operator and systems builder helping founders, scale-ups and investors structure operations, pricing, automation and execution in high-growth environments.',
    images: ['https://gslv.fr/images/og-image.jpg'],
    creator: '@gslv_fr',
    site: '@gslv_fr',
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
  alternates: {
    canonical: 'https://gslv.fr',
    languages: {
      'fr-FR': 'https://gslv.fr/fr',
      'en-US': 'https://gslv.fr/en',
    },
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico', sizes: 'any' },
      { url: '/favicon_io/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon_io/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}