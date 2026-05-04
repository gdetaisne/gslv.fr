export interface StructuredDataProps {
  type: 'Organization' | 'Person' | 'Service' | 'Article' | 'WebSite'
  locale?: string
  url?: string
  title?: string
  description?: string
  image?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export function generateStructuredData({
  type,
  locale = 'en',
  url = 'https://gslv.fr',
  title,
  description,
  image,
  author,
  publishedTime,
  modifiedTime
}: StructuredDataProps) {
  const baseUrl = 'https://gslv.fr'
  const currentUrl = url.startsWith('https://') ? url : `${baseUrl}${url}`

  const commonData = {
    '@context': 'https://schema.org',
    '@type': type,
    url: currentUrl,
    name: title || 'GSLV.fr',
    description: description || 'Operator and systems builder helping founders, scale-ups and investors structure operations, pricing, automation and execution in high-growth environments.',
    image: image || `${baseUrl}/images/og-image.jpg`,
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en-US',
  }

  switch (type) {
    case 'Organization':
      return {
        ...commonData,
        '@type': 'Organization',
        name: 'GSLV.fr',
        alternateName: 'Guillaume Stehelin de Taisne',
        description: 'Operator and systems builder helping founders, scale-ups and investors structure operations, pricing, automation and execution in high-growth environments.',
        url: baseUrl,
        logo: `${baseUrl}/images/logo/logo.png`,
        image: `${baseUrl}/images/og-image.jpg`,
        founder: {
          '@type': 'Person',
          name: 'Guillaume Stehelin de Taisne',
          jobTitle: 'Operator building systems that scale companies',
          email: 'gdetaisne@gmail.com',
          telephone: ['+33 6 33 04 60 59'],
          sameAs: [
            'https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/'
          ]
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+33 6 33 04 60 59',
          contactType: 'customer service',
          availableLanguage: ['French', 'English']
        },
        sameAs: [
          'https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'GSLV Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Build scalable operating systems',
                description: 'Design workflows, internal tools, dashboards and automation layers that replace manual coordination.',
                provider: { '@type': 'Organization', name: 'GSLV.fr' }
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Structure growth from chaos',
                description: 'Turn fast growth into repeatable execution: roles, processes, reporting and team accountability.',
                provider: { '@type': 'Organization', name: 'GSLV.fr' }
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Fix critical situations fast',
                description: 'When cash, operations or governance are breaking, step in quickly, diagnose and stabilize.',
                provider: { '@type': 'Organization', name: 'GSLV.fr' }
              }
            }
          ]
        }
      }

    case 'Person':
      return {
        ...commonData,
        '@type': 'Person',
        name: 'Guillaume Stehelin de Taisne',
        jobTitle: 'Operator building systems that scale companies',
        description: 'Operator with 10+ years across e-commerce, marketplaces and international scale-ups. Specializes in operating systems, pricing automation and crisis stabilization.',
        email: 'gdetaisne@gmail.com',
        telephone: ['+33 6 33 04 60 59'],
        sameAs: [
          'https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/'
        ],
        knowsAbout: [
          'Operating systems design',
          'Scaling operations',
          'AI-driven pricing',
          'Process automation',
          'Crisis stabilization',
          'Fractional COO',
          'E-commerce operations',
          'Marketplace operations'
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Operator building systems that scale companies',
          description: 'Build scalable operating systems, structure growth and fix critical situations for founders and investors.',
          skills: [
            'Operating system design',
            'AI automation',
            'Pricing systems',
            'Workflow engineering',
            'Crisis management',
            'Fractional COO'
          ]
        }
      }

    case 'Service':
      return {
        ...commonData,
        '@type': 'Service',
        name: title || 'GSLV Services',
        description: description || 'Build scalable operating systems, structure growth and fix critical situations for founders and investors.',
        provider: {
          '@type': 'Organization',
          name: 'GSLV.fr',
          url: baseUrl
        },
        areaServed: [
          {
            '@type': 'Country',
            name: 'France'
          },
          {
            '@type': 'Country',
            name: 'Bahrain'
          }
        ],
        availableLanguage: ['French', 'English'],
        serviceType: 'Business Consulting',
        category: 'Financial and Operational Consulting'
      }

    case 'Article':
      return {
        ...commonData,
        '@type': 'Article',
        headline: title,
        description: description,
        author: {
          '@type': 'Person',
          name: author || 'Guillaume Stehelin de Taisne',
          url: 'https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/'
        },
        publisher: {
          '@type': 'Organization',
          name: 'GSLV.fr',
          url: baseUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/logo/logo.png`
          }
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl
        }
      }

    case 'WebSite':
      return {
        ...commonData,
        '@type': 'WebSite',
        name: 'GSLV.fr',
        url: baseUrl,
        description: 'Operator and systems builder helping founders, scale-ups and investors structure operations, pricing, automation and execution in high-growth environments.',
        inLanguage: ['fr-FR', 'en-US'],
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      }

    default:
      return commonData
  }
}

// Données structurées spécifiques pour chaque page
export const structuredDataConfig = {
  home: {
    fr: {
      type: 'Organization' as const,
      title: 'Guillaume Stehelin de Taisne — Operator building systems that scale companies | GSLV',
      description: 'Operator et systems builder aidant les fondateurs, scale-ups et investisseurs à structurer leurs opérations, pricing, automatisation et exécution en environnements à forte croissance.',
      url: 'https://gslv.fr/fr'
    },
    en: {
      type: 'Organization' as const,
      title: 'Guillaume Stehelin de Taisne — Operator building systems that scale companies | GSLV',
      description: 'Operator and systems builder helping founders, scale-ups and investors structure operations, pricing, automation and execution in high-growth environments.',
      url: 'https://gslv.fr/en'
    }
  },
  about: {
    fr: {
      type: 'Person' as const,
      title: 'À propos | Guillaume Stehelin de Taisne — Opérateur & Systems Builder',
      description: 'Operator avec 10+ ans d\'expérience dans l\'e-commerce, les marketplaces et les scale-ups internationaux. Rocket Internet, Jumia, Ligerio, Moverz.',
      url: 'https://gslv.fr/fr/about'
    },
    en: {
      type: 'Person' as const,
      title: 'About | Guillaume Stehelin de Taisne — Operator & Systems Builder',
      description: 'Operator with 10+ years across e-commerce, marketplaces and international scale-ups. Rocket Internet, Jumia, Ligerio, Moverz. Now building AI-driven systems.',
      url: 'https://gslv.fr/en/about'
    }
  },
  services: {
    fr: {
      type: 'Service' as const,
      title: 'Services — Systèmes opérationnels, structuration et intervention de crise | GSLV',
      description: 'Construction de systèmes opérationnels scalables, structuration de la croissance et intervention rapide en situations critiques.',
      url: 'https://gslv.fr/fr/services'
    },
    en: {
      type: 'Service' as const,
      title: 'Services — Operating systems, scaling and crisis intervention | GSLV',
      description: 'Build scalable operating systems, structure growth from chaos and fix critical situations fast.',
      url: 'https://gslv.fr/en/services'
    }
  }
}
