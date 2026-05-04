import { Metadata } from 'next'
import { seoConfig } from '../../lib/seo'
import ServicesPageClient from './ServicesPageClient'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params
  const config = seoConfig.services[locale as keyof typeof seoConfig.services] || seoConfig.services.en
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(', '),
    openGraph: {
      title: config.title,
      description: config.description,
      url: `https://gslv.fr/${locale}/services`,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    },
    twitter: {
      title: config.title,
      description: config.description,
    },
    alternates: {
      canonical: `https://gslv.fr/${locale}/services`,
    },
  }
}

export default function ServicesPage() {
  return <ServicesPageClient />
}