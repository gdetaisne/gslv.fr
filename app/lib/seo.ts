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
  locale = 'en',
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
    'operator',
    'fractional COO',
    'systems builder',
    'scaling operations',
    'AI operations',
    'pricing systems',
    'operational systems',
    'startup operations',
    'marketplace operations',
    'crisis operator',
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
    verification: {},
  }
}

// Meta tags spécifiques pour chaque page
export const seoConfig = {
  home: {
    fr: {
      title: 'Guillaume Stehelin de Taisne — Operator building systems that scale companies | GSLV',
      description: 'Operator et systems builder aidant les fondateurs, scale-ups et investisseurs à structurer leurs opérations, pricing, automatisation et exécution en environnements à forte croissance.',
      keywords: ['operator', 'COO fractionnel', 'systems builder', 'scaling operations', 'systèmes de pricing', 'opérations IA', 'exécution startup']
    },
    en: {
      title: 'Guillaume Stehelin de Taisne — Operator building systems that scale companies | GSLV',
      description: 'Operator and systems builder helping founders, scale-ups and investors structure operations, pricing, automation and execution in high-growth environments.',
      keywords: ['operator', 'fractional COO', 'systems builder', 'scaling operations', 'AI operations', 'pricing systems', 'startup operations']
    }
  },
  services: {
    fr: {
      title: 'Services — Systèmes opérationnels, structuration et intervention de crise | GSLV',
      description: 'Construction de systèmes opérationnels scalables, structuration de la croissance et intervention rapide en situations critiques.',
      keywords: ['systèmes opérationnels', 'COO fractionnel', 'operator', 'scaling', 'crise opérationnelle', 'automatisation']
    },
    en: {
      title: 'Services — Operating systems, scaling and crisis intervention | GSLV',
      description: 'Build scalable operating systems, structure growth from chaos and fix critical situations fast.',
      keywords: ['operating systems', 'fractional COO', 'operator', 'scaling', 'crisis operator', 'automation']
    }
  },
  about: {
    fr: {
      title: 'À propos de Guillaume Stehelin de Taisne | GSLV',
      description: "Operator avec 10+ ans d'expérience dans l'e-commerce, les marketplaces et les scale-ups internationaux. Rocket Internet, Jumia, Ligerio, Moverz.",
      keywords: ['Guillaume Stehelin de Taisne', 'operator', 'COO fractionnel', 'Rocket Internet', 'Jumia', 'Ligerio', 'Moverz', 'systems builder']
    },
    en: {
      title: 'About Guillaume Stehelin de Taisne | GSLV',
      description: 'Operator with 10+ years across e-commerce, marketplaces and international scale-ups. Rocket Internet, Jumia, Ligerio, Moverz. Now building AI-driven systems.',
      keywords: ['Guillaume Stehelin de Taisne', 'operator', 'fractional COO', 'Rocket Internet', 'Jumia', 'Ligerio', 'Moverz', 'systems builder']
    }
  },
  blog: {
    fr: {
      title: 'Blog | Opérations, systèmes & IA',
      description: "Réflexions concrètes sur les opérations, les systèmes de pricing, l'automatisation et l'exécution en environnements complexes.",
      keywords: ['blog opérations', 'systèmes pricing', 'automatisation', 'scaling', 'operator', 'IA opérations']
    },
    en: {
      title: 'Blog | Operations, systems & AI',
      description: 'Practical thinking on operations, pricing systems, automation and scaling execution in complex environments.',
      keywords: ['operations blog', 'pricing systems', 'automation', 'scaling', 'operator', 'AI operations']
    }
  },
  contact: {
    fr: {
      title: 'Contact | Réserver un appel stratégique',
      description: "Décris ta situation, tes contraintes et ce qui craque. Je reviens avec un angle d'attaque clair.",
      keywords: ['appel stratégique', 'contact Guillaume', 'operator', 'COO fractionnel', 'intervention rapide']
    },
    en: {
      title: 'Contact | Book a strategy call',
      description: 'Describe your situation, constraints and what is breaking. I will come back with a clear angle of attack.',
      keywords: ['strategy call', 'contact Guillaume', 'operator', 'fractional COO', 'rapid intervention']
    }
  }
}
