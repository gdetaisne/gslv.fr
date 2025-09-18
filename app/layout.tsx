import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://gslv.fr'),
  title: {
    default: 'GSLV.fr | CFO & COO Part-time | Consultant Opérations Coup de Poing',
    template: '%s | GSLV.fr'
  },
  description: 'Expert en structuration, levées de fonds et scaling pour startups et scaleups. Spécialisé en opérations coup de poing et remplacement intérimaire de dirigeant.',
  keywords: [
    'CFO part-time',
    'COO part-time', 
    'consultant opérations coup de poing',
    'restructuration entreprise',
    'redressement judiciaire',
    'levée de fonds',
    'scaling startup',
    'direction financière',
    'direction opérationnelle',
    'crise entreprise',
    'Guillaume Stehelin',
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
    locale: 'fr_FR',
    url: 'https://gslv.fr',
    siteName: 'GSLV.fr',
    title: 'GSLV.fr | CFO & COO Part-time | Consultant Opérations Coup de Poing',
    description: 'Expert en structuration, levées de fonds et scaling pour startups et scaleups. Spécialisé en opérations coup de poing et remplacement intérimaire de dirigeant.',
    images: [
      {
        url: 'https://gslv.fr/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GSLV.fr - CFO & COO Part-time',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSLV.fr | CFO & COO Part-time | Consultant Opérations Coup de Poing',
    description: 'Expert en structuration, levées de fonds et scaling pour startups et scaleups. Spécialisé en opérations coup de poing et remplacement intérimaire de dirigeant.',
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
      'th-TH': 'https://gslv.fr/th',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" href="/sitemap.xml" />
        <meta name="google-site-verification" content="google-site-verification-code" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}