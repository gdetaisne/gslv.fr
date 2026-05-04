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
      alternateName: 'Guillaume Stehelin',
      jobTitle: 'Operator building systems that scale companies',
      description: 'Operator with 10+ years of experience building and scaling operational, pricing and automation systems in fast-growing companies. Co-founded Ligerio (€10M revenue in 4 years, logistics throughput x20). Founded Moverz (AI pricing engine, €1M+ GMV in 3 months). Former Finance & Operations at Rocket Internet / Jumia across 20+ entities and 550+ FTE.',
      url: 'https://gslv.fr',
      email: 'gdetaisne@gmail.com',
      sameAs: [
        'https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/',
        'https://moverz.fr/auteurs/guillaume/'
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Moverz',
        url: 'https://moverz.fr',
        foundingDate: '2025',
        description: 'AI-driven pricing and operations engine for the moving services market'
      },
      alumniOf: [
        {
          '@type': 'Organization',
          name: 'Rocket Internet SE',
          url: 'https://www.rocket-internet.com'
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Harvard University',
          url: 'https://www.harvard.edu'
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Université Paris Dauphine'
        }
      ],
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: 'Founder & CEO',
          occupationLocation: { '@type': 'Country', name: 'Bahrain' },
          description: 'Founded Moverz in 2025. Built AI-driven pricing engine generating €1M+ GMV in 3 months.',
          startDate: '2025'
        },
        {
          '@type': 'Occupation',
          name: 'Co-Founder',
          occupationLocation: { '@type': 'City', name: 'La Rochelle, France' },
          description: 'Co-founded Ligerio (2021-2025). Scaled from €0 to €10M+ revenue with 50-100% YoY growth. Logistics throughput x20 without increasing operational headcount. Team of 40+.',
          startDate: '2021',
          endDate: '2025'
        },
        {
          '@type': 'Occupation',
          name: 'Finance & Operations — Rocket Internet / Jumia',
          description: 'Led finance and operations across 20+ entities and 550+ FTE (incl. 60+ direct reports) across Africa and Europe. Built finance and control functions from scratch. SWAT operator in high-risk environments.',
          startDate: '2013',
          endDate: '2018'
        }
      ],
      knowsAbout: [
        'Operational systems design',
        'Scaling e-commerce operations',
        'AI-driven pricing engines',
        'Logistics optimization',
        'Financial control and cash management',
        'Fractional COO',
        'Workflow automation',
        'Crisis management and restructuring',
        'Multi-country operations',
        'Computer vision in pricing workflows'
      ],
      subjectOf: [
        {
          '@type': 'PodcastEpisode',
          name: '10M de CA en 5 ans en vendant des matériaux de construction',
          episodeNumber: '286',
          url: 'https://lepanier.io/10m-de-ca-en-5-ans-en-vendant-des-materiaux-de-construction/',
          datePublished: '2024-05-10',
          partOfSeries: {
            '@type': 'PodcastSeries',
            name: 'Le Panier',
            url: 'https://lepanier.io'
          }
        }
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
