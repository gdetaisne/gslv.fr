import HomePageClient from './HomePageClient'
import { generateMetadata as buildMetadata, seoConfig } from '../lib/seo'

type LocaleKey = keyof typeof seoConfig.home

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: LocaleKey }
}) {
  const safeLocale: LocaleKey = (['fr', 'en', 'th'].includes(locale) ? locale : 'fr') as LocaleKey
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
      jobTitle: 'Part-time CFO & COO',
      url: 'https://gslv.fr',
      worksFor: {
        '@type': 'Organization',
        name: 'GSLV'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'GSLV',
      url: 'https://gslv.fr',
      founder: {
        '@type': 'Person',
        name: 'Guillaume Stehelin de Taisne',
        jobTitle: 'Part-time CFO & COO'
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
