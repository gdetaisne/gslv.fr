import { Metadata } from 'next'
import CFOPartTimeClient from './CFOPartTimeClient'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isFr = params.locale === 'fr'
  const baseUrl = 'https://gslv.fr'
  const path = `/${params.locale}/services/cfo-part-time`

  const title = isFr
    ? 'Diagnostic opérations & systèmes | Guillaume Stehelin de Taisne'
    : 'Operating Diagnostic & Systems Review | Guillaume Stehelin de Taisne'

  const description = isFr
    ? 'Diagnostic rapide 24–48h des opérations, flux, systèmes et goulets d\'étranglement. Plan d\'action priorisé pour fondateurs et dirigeants en croissance.'
    : 'Fast 24–48h diagnostic of operations, workflows, systems and bottlenecks. Prioritized action plan for founders and operators scaling in complex environments.'

  const keywords = isFr
    ? ['diagnostic opérations', 'audit systèmes', 'operator', 'COO fractionnel', 'scaling', 'automatisation', 'flux opérationnels']
    : ['operating diagnostic', 'systems review', 'operator', 'fractional COO', 'scaling operations', 'workflow audit', 'operational bottlenecks']

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      type: 'website',
      siteName: 'GSLV.fr',
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isFr ? 'Diagnostic opérations — GSLV' : 'Operating Diagnostic — GSLV'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-image.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        'fr-FR': `${baseUrl}/fr/services/cfo-part-time`,
        'en-US': `${baseUrl}/en/services/cfo-part-time`,
      },
    },
  }
}

export default function CFOPartTimePage({ params }: Props) {
  const isFr = params.locale === 'fr'
  const baseUrl = 'https://gslv.fr'

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: isFr ? 'Diagnostic opérations et systèmes' : 'Operating Diagnostic and Systems Review',
    name: isFr ? 'Diagnostic opérations et systèmes' : 'Operating Diagnostic and Systems Review',
    description: isFr
      ? 'Diagnostic rapide des opérations, flux, systèmes et goulets d\'étranglement. Plan d\'action priorisé pour fondateurs et dirigeants en croissance.'
      : 'Fast diagnostic of operations, workflows, systems and bottlenecks. Prioritized action plan for founders and operators scaling in complex environments.',
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
    availableLanguage: ['French', 'English'],
    offers: {
      '@type': 'Offer',
      priceRange: '€750+/day',
      priceCurrency: 'EUR'
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: isFr
      ? [
          {
            '@type': 'Question',
            name: 'À qui s\'adresse ce diagnostic ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Aux fondateurs et dirigeants qui sentent que l\'exécution devient fragile : devis lents, outils mal reliés, manque de visibilité, qualité irrégulière ou croissance qui crée plus de friction que de valeur.'
            }
          },
          {
            '@type': 'Question',
            name: 'Qu\'est-ce que je reçois concrètement ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Une cartographie claire des flux, une identification des impacts business et un plan d\'action priorisé. Pas un audit décoratif — une base de travail exploitable rapidement.'
            }
          },
          {
            '@type': 'Question',
            name: 'Que se passe-t-il après le diagnostic ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Si nécessaire, je peux accompagner la mise sous contrôle : simplification des process, tableaux de bord, routines, automatisations et outillage interne.'
            }
          }
        ]
      : [
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
