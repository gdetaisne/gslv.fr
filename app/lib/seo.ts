import { Metadata } from 'next'

export interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  locale?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = 'https://gslv.fr/images/og-image.jpg',
  url = 'https://gslv.fr',
  locale = 'fr',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Guillaume Stehelin de Taisne',
  section,
  tags = []
}: SEOProps): Metadata {
  const fullTitle = title.includes('GSLV') ? title : `${title} | GSLV.fr`
  const fullUrl = url.startsWith('https://') ? url : `https://gslv.fr${url}`
  
  const defaultKeywords = [
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
    'Guillaume Stehelin de Taisne',
    'GSLV'
  ]

  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords]))

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: author }],
    creator: author,
    publisher: 'GSLV.fr',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://gslv.fr'),
    alternates: {
      canonical: fullUrl,
      languages: {
        'fr-FR': fullUrl.replace('/en/', '/fr/'),
        'en-US': fullUrl.replace('/fr/', '/en/'),
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: 'GSLV.fr',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type,
      publishedTime,
      modifiedTime,
      authors: [author],
      section,
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
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
    verification: {
      google: 'VOTRE_CODE_GOOGLE_ICI', // Remplacez par votre code Google Search Console
    },
  }
}

// Meta tags spécifiques pour chaque page
export const seoConfig = {
  home: {
    fr: {
      title: 'Guillaume Stehelin de Taisne – Part-time CFO & COO | GSLV',
      description: 'Guillaume Stehelin de Taisne, Part-time CFO & COO. Structuration financière, opérations et restructuration pour startups et scale-ups.',
      keywords: ['CFO part-time', 'COO part-time', 'consultant opérations coup de poing', 'restructuration entreprise', 'redressement judiciaire', 'levée de fonds', 'scaling startup']
    },
    en: {
      title: 'Guillaume Stehelin de Taisne – Part-time CFO & COO | GSLV',
      description: 'Guillaume Stehelin de Taisne, Part-time CFO & COO. Financial structuring, operations and turnaround support for startups and scale-ups.',
      keywords: ['part-time CFO', 'part-time COO', 'emergency operations consultant', 'business restructuring', 'judicial recovery', 'fundraising', 'startup scaling']
    }
  },
  services: {
    fr: {
      title: 'Services CFO, COO et Consultant Coup de Poing',
      description: 'Direction financière, opérationnelle et interventions d\'urgence pour entreprises en difficulté. Solutions personnalisées pour chaque stade de croissance.',
      keywords: ['services CFO', 'services COO', 'consultant coup de poing', 'direction financière', 'direction opérationnelle', 'intervention urgence']
    },
    en: {
      title: 'CFO, COO and Emergency Consultant Services',
      description: 'Financial management, operational management and emergency interventions for companies in difficulty. Personalized solutions for each growth stage.',
      keywords: ['CFO services', 'COO services', 'emergency consultant', 'financial management', 'operational management', 'emergency intervention']
    }
  },
  about: {
    fr: {
      title: 'À propos de Guillaume Stehelin de Taisne | GSLV',
      description: 'Découvrez le parcours de Guillaume Stehelin de Taisne, Part-time CFO & COO avec 15+ années d\'expérience en restructuration et hypercroissance.',
      keywords: ['Guillaume Stehelin de Taisne', 'à propos', 'parcours professionnel', 'témoignages clients', 'expertise restructuration']
    },
    en: {
      title: 'About Guillaume Stehelin de Taisne | GSLV',
      description: 'Discover the journey of Guillaume Stehelin de Taisne, Part-time CFO & COO with 15+ years in restructuring and hypergrowth contexts.',
      keywords: ['Guillaume Stehelin de Taisne', 'about', 'professional journey', 'client testimonials', 'restructuring expertise']
    }
  },
  blog: {
    fr: {
      title: 'Blog | Conseils CFO, COO et Opérations Coup de Poing',
      description: 'Articles et conseils d\'experts sur la direction financière, opérationnelle et les interventions d\'urgence en entreprise.',
      keywords: ['blog CFO', 'blog COO', 'conseils entreprise', 'direction financière', 'opérations coup de poing', 'articles experts']
    },
    en: {
      title: 'Blog | CFO, COO and Emergency Operations Tips',
      description: 'Expert articles and advice on financial management, operational management and emergency business interventions.',
      keywords: ['CFO blog', 'COO blog', 'business advice', 'financial management', 'emergency operations', 'expert articles']
    }
  },
  contact: {
    fr: {
      title: 'Contact | Réservez votre appel découverte',
      description: 'Contactez Guillaume pour une consultation gratuite. Réponse garantie sous 24h. Paris, Bangkok. Email et téléphone.',
      keywords: ['contact Guillaume', 'consultation gratuite', 'appel découverte', 'Paris Bangkok', 'réponse 24h']
    },
    en: {
      title: 'Contact | Book your discovery call',
      description: 'Contact Guillaume for a free consultation. Guaranteed response within 24h. Paris, Bangkok. Email and phone.',
      keywords: ['contact Guillaume', 'free consultation', 'discovery call', 'Paris Bangkok', '24h response']
    }
  }
}
