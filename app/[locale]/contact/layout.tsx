import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Call — Work with Guillaume Stehelin de Taisne | GSLV.fr',
  description: 'Book a call with Guillaume Stehelin de Taisne — operator and systems builder. Available for fractional COO missions, operating diagnostics, and crisis interventions. Based in La Rochelle, working globally.',
  keywords: ['book a call', 'fractional COO', 'operator', 'Guillaume Stehelin de Taisne', 'contact', 'La Rochelle'],
  openGraph: {
    title: 'Book a Call — Work with Guillaume Stehelin de Taisne',
    description: 'Available for fractional COO missions, operating diagnostics, and crisis interventions. Book a 30-minute call.',
    url: 'https://gslv.fr/en/contact',
    type: 'website',
    siteName: 'GSLV.fr',
  },
  twitter: {
    card: 'summary',
    title: 'Book a Call | GSLV.fr',
    description: 'Available for fractional COO missions, operating diagnostics, and crisis interventions.',
  },
  alternates: {
    canonical: 'https://gslv.fr/en/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
