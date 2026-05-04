import { Metadata } from 'next'
import CFOPartTimeClient from './CFOPartTimeClient'

const baseUrl = 'https://gslv.fr'

export const metadata: Metadata = {
  title: 'Operating Diagnostic & Systems Review | Guillaume Stehelin de Taisne',
  description: 'Fast 24–48h diagnostic of operations, workflows, systems and bottlenecks. Prioritized action plan for founders and operators scaling in complex environments.',
  keywords: ['operating diagnostic', 'systems review', 'operator', 'fractional COO', 'scaling operations', 'workflow audit', 'operational bottlenecks'],
  openGraph: {
    title: 'Operating Diagnostic & Systems Review | Guillaume Stehelin de Taisne',
    description: 'Fast 24–48h diagnostic of operations, workflows, systems and bottlenecks. Prioritized action plan for founders and operators scaling in complex environments.',
    url: `${baseUrl}/en/services/cfo-part-time`,
    type: 'website',
    siteName: 'GSLV.fr',
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Operating Diagnostic — GSLV'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operating Diagnostic & Systems Review | Guillaume Stehelin de Taisne',
    description: 'Fast 24–48h diagnostic of operations, workflows, systems and bottlenecks.',
    images: [`${baseUrl}/images/og-image.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/en/services/cfo-part-time`,
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Operating Diagnostic and Systems Review',
  name: 'Operating Diagnostic and Systems Review',
  description: 'Fast diagnostic of operations, workflows, systems and bottlenecks. Prioritized action plan for founders and operators scaling in complex environments.',
  provider: {
    '@type': 'Person',
    name: 'Guillaume Stehelin de Taisne',
    jobTitle: 'Operator building systems that scale companies',
    url: baseUrl,
    sameAs: ['https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/']
  },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' }
  ],
  availableLanguage: ['English'],
  offers: {
    '@type': 'Offer',
    priceRange: '€750+/day',
    priceCurrency: 'EUR'
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is this diagnostic for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Founders and operators who feel execution is becoming fragile: slow processes, disconnected tools, no visibility, inconsistent quality, or growth that is creating more friction than value.'
      }
    },
    {
      '@type': 'Question',
      name: 'What do I actually receive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A clear workflow map, a business impact assessment and a prioritized action plan. Not a decorative audit — a working base you can act on immediately.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens after the diagnostic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If needed, I can lead the build-out: process simplification, dashboards, control routines, automations and internal tooling. The diagnostic defines the scope and priorities for what comes next.'
      }
    }
  ]
}

export default function CFOPartTimePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CFOPartTimeClient />
    </>
  )
}
