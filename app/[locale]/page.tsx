import HomePageClient from './HomePageClient'
import { generateMetadata as buildMetadata, seoConfig } from '../lib/seo'

type LocaleKey = keyof typeof seoConfig.home

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: LocaleKey }
}) {
  const safeLocale: LocaleKey = (['en', 'fr'].includes(locale) ? locale : 'en') as LocaleKey
  const { title, description, keywords } = seoConfig.home[safeLocale]

  return buildMetadata({
    title,
    description,
    keywords,
    locale: safeLocale,
    url: `/${safeLocale === 'fr' ? 'fr' : safeLocale}`
  })
}

export default function HomePage({
  params: { locale }
}: {
  params: { locale: LocaleKey }
}) {
  const personAndOrganizationLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Guillaume Stehelin de Taisne',
      jobTitle: 'Operator building systems that scale companies',
      description: 'Operator and systems builder helping founders, scale-ups and investors structure operations, pricing, automation and execution in high-growth environments.',
      url: 'https://gslv.fr',
      sameAs: [
        'https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/'
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Moverz'
      },
      alumniOf: [
        { '@type': 'Organization', name: 'Rocket Internet' },
        { '@type': 'Organization', name: 'Jumia' }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'GSLV',
      url: 'https://gslv.fr',
      founder: {
        '@type': 'Person',
        name: 'Guillaume Stehelin de Taisne',
        jobTitle: 'Operator building systems that scale companies'
      }
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personAndOrganizationLd, null, 2) }}
      />
      <HomePageClient />
    </>
  )
}
