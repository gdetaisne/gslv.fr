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
  locale = 'fr',
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
    description: description || 'Expert en structuration, levées de fonds et scaling pour startups et scaleups. Spécialisé en opérations coup de poing et remplacement intérimaire de dirigeant.',
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
        description: 'Expert en structuration, levées de fonds et scaling pour startups et scaleups. Spécialisé en opérations coup de poing et remplacement intérimaire de dirigeant.',
        url: baseUrl,
        logo: `${baseUrl}/images/logo/logo.png`,
        image: `${baseUrl}/images/og-image.jpg`,
        founder: {
          '@type': 'Person',
          name: 'Guillaume Stehelin de Taisne',
          jobTitle: 'CFO & COO Part-time | Consultant Opérations Coup de Poing',
          email: 'gdetaisne@gmail.com',
          telephone: ['+33 6 33 04 60 59', '+66 6 47 58 20 32'],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Paris',
            addressCountry: 'FR'
          },
          sameAs: [
            'https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/'
          ]
        },
        address: [
          {
            '@type': 'PostalAddress',
            addressLocality: 'Paris',
            addressCountry: 'FR'
          },
          {
            '@type': 'PostalAddress',
            addressLocality: 'Bangkok',
            addressCountry: 'TH'
          }
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+33 6 33 04 60 59',
          contactType: 'customer service',
          availableLanguage: ['French', 'English']
        },
        sameAs: [
          'https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/'
        ],
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 48.8566,
            longitude: 2.3522
          },
          geoRadius: '1000000'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services GSLV',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'CFO Part-time',
                description: 'Direction financière externalisée pour optimiser votre gestion et préparer vos levées de fonds',
                provider: {
                  '@type': 'Organization',
                  name: 'GSLV.fr'
                }
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'COO Part-time',
                description: 'Direction opérationnelle pour structurer et optimiser vos processus de croissance',
                provider: {
                  '@type': 'Organization',
                  name: 'GSLV.fr'
                }
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Consultant Opérations Coup de Poing',
                description: 'Remplacement intérimaire de dirigeant pour situations critiques',
                provider: {
                  '@type': 'Organization',
                  name: 'GSLV.fr'
                }
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
        jobTitle: 'CFO & COO Part-time | Consultant Opérations Coup de Poing',
        description: 'Expert en restructuration d\'entreprises avec 15+ années d\'expérience. Spécialisé en opérations coup de poing et remplacement intérimaire de dirigeant.',
        email: 'gdetaisne@gmail.com',
        telephone: ['+33 6 33 04 60 59', '+66 6 47 58 20 32'],
        address: [
          {
            '@type': 'PostalAddress',
            addressLocality: 'Paris',
            addressCountry: 'FR'
          },
          {
            '@type': 'PostalAddress',
            addressLocality: 'Bangkok',
            addressCountry: 'TH'
          }
        ],
        sameAs: [
          'https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/'
        ],
        knowsAbout: [
          'CFO Part-time',
          'COO Part-time',
          'Consultant Opérations Coup de Poing',
          'Restructuration entreprise',
          'Redressement judiciaire',
          'Levée de fonds',
          'Scaling startup',
          'Direction financière',
          'Direction opérationnelle'
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'CFO & COO Part-time | Consultant Opérations Coup de Poing',
          description: 'Expert en structuration, levées de fonds et scaling pour startups et scaleups',
          skills: [
            'Direction financière',
            'Direction opérationnelle',
            'Restructuration entreprise',
            'Redressement judiciaire',
            'Levée de fonds',
            'Scaling startup'
          ]
        }
      }

    case 'Service':
      return {
        ...commonData,
        '@type': 'Service',
        name: title || 'Services GSLV',
        description: description || 'Expert en structuration, levées de fonds et scaling pour startups et scaleups',
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
            name: 'Thailand'
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
        description: 'Expert en structuration, levées de fonds et scaling pour startups et scaleups. Spécialisé en opérations coup de poing et remplacement intérimaire de dirigeant.',
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
      title: 'GSLV.fr | CFO & COO Part-time | Consultant Opérations Coup de Poing',
      description: 'Expert en structuration, levées de fonds et scaling pour startups et scaleups. Spécialisé en opérations coup de poing et remplacement intérimaire de dirigeant.',
      url: 'https://gslv.fr/fr'
    },
    en: {
      type: 'Organization' as const,
      title: 'GSLV.fr | Part-time CFO & COO | Emergency Operations Consultant',
      description: 'Expert in structuring, fundraising and scaling for startups and scaleups. Specialized in emergency operations and interim management.',
      url: 'https://gslv.fr/en'
    }
  },
  about: {
    fr: {
      type: 'Person' as const,
      title: 'À propos | Guillaume Stehelin de Taisne',
      description: 'Découvrez le parcours de Guillaume, expert en restructuration d\'entreprises avec 15+ années d\'expérience.',
      url: 'https://gslv.fr/fr/about'
    },
    en: {
      type: 'Person' as const,
      title: 'About | Guillaume Stehelin de Taisne',
      description: 'Discover Guillaume\'s journey, business restructuring expert with 15+ years of experience.',
      url: 'https://gslv.fr/en/about'
    }
  },
  services: {
    fr: {
      type: 'Service' as const,
      title: 'Services CFO, COO et Consultant Coup de Poing',
      description: 'Direction financière, opérationnelle et interventions d\'urgence pour entreprises en difficulté.',
      url: 'https://gslv.fr/fr/services'
    },
    en: {
      type: 'Service' as const,
      title: 'CFO, COO and Emergency Consultant Services',
      description: 'Financial management, operational management and emergency interventions for companies in difficulty.',
      url: 'https://gslv.fr/en/services'
    }
  }
}
