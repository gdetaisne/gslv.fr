import { Metadata } from 'next'
import CFOPartTimeClient from './CFOPartTimeClient'

export const metadata: Metadata = {
  title: 'CFO Part-time Paris | Direction Financière Externalisée Startup | GSLV',
  description: 'CFO part-time pour startups et scale-ups : structuration financière, reporting investisseurs, préparation levées de fonds. Intervention flexible, expert senior. +50 entreprises accompagnées.',
  keywords: [
    'CFO part-time',
    'CFO part-time Paris',
    'directeur financier externe',
    'direction financière startup',
    'CFO externalisé',
    'consultant CFO',
    'DAF externe',
    'levée de fonds CFO',
    'direction financière externalisée',
    'CFO freelance'
  ],
  openGraph: {
    title: 'CFO Part-time Paris : Expert Direction Financière | GSLV',
    description: 'CFO senior externalisé : structuration, levées de fonds, pilotage. 15+ ans exp, 50+ entreprises. Intervention flexible.',
    url: 'https://gslv.fr/fr/services/cfo-part-time',
    type: 'website',
    images: [
      {
        url: 'https://gslv.fr/images/services/cfo-part-time-og.jpg',
        width: 1200,
        height: 630,
        alt: 'CFO Part-time Paris - GSLV'
      }
    ]
  },
  alternates: {
    canonical: 'https://gslv.fr/fr/services/cfo-part-time'
  }
}

export default function CFOPartTimePage() {
  // Schema Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'CFO Part-time',
    name: 'CFO Part-time Paris',
    description: 'Direction financière externalisée pour startups et scale-ups : structuration financière, reporting investisseurs, levées de fonds.',
    provider: {
      '@type': 'Person',
      name: 'Guillaume Stehelin de Taisne',
      jobTitle: 'CFO & COO Part-time',
      url: 'https://gslv.fr'
    },
    areaServed: {
      '@type': 'Country',
      name: 'France'
    },
    availableLanguage: ['French', 'English'],
    offers: {
      '@type': 'Offer',
      priceRange: '€6000-€15000/month',
      priceCurrency: 'EUR'
    }
  }

  // Schema FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quelle est la différence entre un CFO et un DAF ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le CFO (Chief Financial Officer) a un rôle stratégique : levées de fonds, M&A, relations investisseurs, structuration financière. Le DAF (Directeur Administratif et Financier) est plus opérationnel : comptabilité, trésorerie, contrôle de gestion quotidien. Un CFO part-time combine les deux casquettes pour les startups et scale-ups.'
        }
      },
      {
        '@type': 'Question',
        name': 'Combien coûte un CFO part-time ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un CFO part-time coûte entre 6000€ et 15000€ par mois selon le temps d\'intervention (1-3 jours/semaine) et l\'expertise. C\'est 3 à 5 fois moins cher qu\'un CFO full-time (100-150k€/an + equity + charges) tout en bénéficiant d\'un expert senior immédiatement opérationnel.'
        }
      },
      {
        '@type': 'Question',
        name: 'Combien de temps faut-il prévoir pour un CFO part-time ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le temps minimum efficace est 1 jour/semaine (structuration de base). L\'idéal est 2 jours/semaine pour un pilotage actif. Pour une levée de fonds, prévoir 3 jours/semaine pendant 3-6 mois. Le contrat est flexible et ajustable selon vos besoins.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quand recruter un CFO full-time vs part-time ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CFO part-time : < 50 personnes, < 10M€ CA, pre-Série B, besoin de flexibilité. CFO full-time : > 50 personnes, > 10M€ CA, post-Série B, équipe finance à manager en continu. Le CFO part-time est idéal pour structurer avant de passer full-time.'
        }
      },
      {
        '@type': 'Question',
        name: 'Un CFO part-time peut-il manager une équipe finance ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, via un management matriciel. Le CFO part-time forme l\'équipe aux process, met en place les outils et reste disponible quotidiennement (Slack, visio). Il assure la direction stratégique pendant que le comptable/contrôleur gère l\'opérationnel.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quels outils utilise un CFO part-time ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Excel/Google Sheets pour la modélisation financière, Zoho CRM pour le pipeline commercial, Pennylane ou Qonto pour la comptabilité, Tableau/Looker pour les dashboards, Notion pour la documentation. Le choix dépend de votre stack existante.'
        }
      },
      {
        '@type': 'Question',
        name: 'Puis-je ajuster le temps d\'intervention en cours de route ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, le contrat est flexible avec préavis de 1 mois. Vous pouvez augmenter lors d\'une levée de fonds ou réduire en période calme. Cette flexibilité est l\'un des principaux avantages du CFO part-time vs full-time.'
        }
      },
      {
        '@type': 'Question',
        name: 'Que se passe-t-il en cas de besoin urgent ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Intervention express sous 48h possible. Audit flash trésorerie en 1 jour, plan de sauvetage en 1 semaine. Disponibilité téléphonique illimitée incluse pour gérer les urgences (négociation banque, crise de trésorerie, due diligence express).'
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

