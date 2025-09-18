import { Metadata } from 'next'
import { seoConfig } from '../lib/seo'
import { generateStructuredData, structuredDataConfig } from '../lib/structured-data'
import HomePageClient from './HomePageClient'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params
  const config = seoConfig.home[locale as keyof typeof seoConfig.home] || seoConfig.home.fr
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(', '),
    openGraph: {
      title: config.title,
      description: config.description,
      url: `https://gslv.fr/${locale}`,
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'th_TH',
    },
    twitter: {
      title: config.title,
      description: config.description,
    },
    alternates: {
      canonical: `https://gslv.fr/${locale}`,
    },
  }
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params
  const structuredData = generateStructuredData({
    ...structuredDataConfig.home[locale as keyof typeof structuredDataConfig.home] || structuredDataConfig.home.fr,
    locale
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2)
        }}
      />
      <HomePageClient />
    </>
  )
}
