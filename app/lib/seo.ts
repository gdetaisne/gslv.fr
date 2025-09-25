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
    'Guillaume Stehelin',
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
        'fr-FR': fullUrl.replace('/en/', '/fr/').replace('/th/', '/fr/'),
        'en-US': fullUrl.replace('/fr/', '/en/').replace('/th/', '/en/'),
        'th-TH': fullUrl.replace('/fr/', '/th/').replace('/en/', '/th/'),
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
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'th_TH',
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
      title: 'CFO & COO Part-time | Consultant Opérations Coup de Poing',
      description: 'Expert en structuration, levées de fonds et scaling pour startups et scaleups. Spécialisé en opérations coup de poing et remplacement intérimaire de dirigeant.',
      keywords: ['CFO part-time', 'COO part-time', 'consultant opérations coup de poing', 'restructuration entreprise', 'redressement judiciaire', 'levée de fonds', 'scaling startup']
    },
    en: {
      title: 'Part-time CFO & COO | Emergency Operations Consultant',
      description: 'Expert in structuring, fundraising and scaling for startups and scaleups. Specialized in emergency operations and interim management.',
      keywords: ['part-time CFO', 'part-time COO', 'emergency operations consultant', 'business restructuring', 'judicial recovery', 'fundraising', 'startup scaling']
    },
    th: {
      title: 'CFO & COO Part-time | ที่ปรึกษาด้านการดำเนินงานฉุกเฉิน',
      description: 'ผู้เชี่ยวชาญด้านการจัดโครงสร้าง การระดมทุน และการขยายตัวสำหรับสตาร์ทอัพและสเกลอัพ  специализированный в операциях экстренного реагирования',
      keywords: ['CFO part-time', 'COO part-time', 'ที่ปรึกษาด้านการดำเนินงานฉุกเฉิน', 'การปรับโครงสร้างธุรกิจ', 'การฟื้นฟูทางกฎหมาย', 'การระดมทุน', 'การขยายตัวสตาร์ทอัพ']
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
    },
    th: {
      title: 'บริการ CFO, COO และที่ปรึกษาฉุกเฉิน',
      description: 'การจัดการทางการเงิน การจัดการด้านการดำเนินงาน และการแทรกแซงฉุกเฉินสำหรับบริษัทที่มีปัญหา โซลูชันที่ปรับแต่งได้สำหรับแต่ละขั้นตอนการเติบโต',
      keywords: ['บริการ CFO', 'บริการ COO', 'ที่ปรึกษาฉุกเฉิน', 'การจัดการทางการเงิน', 'การจัดการด้านการดำเนินงาน', 'การแทรกแซงฉุกเฉิน']
    }
  },
  about: {
    fr: {
      title: 'À propos | Guillaume Stehelin de Taisne',
      description: 'Découvrez le parcours de Guillaume, expert en restructuration d\'entreprises avec 15+ années d\'expérience. Témoignages clients et réalisations.',
      keywords: ['Guillaume Stehelin', 'à propos', 'parcours professionnel', 'témoignages clients', 'expertise restructuration']
    },
    en: {
      title: 'About | Guillaume Stehelin de Taisne',
      description: 'Discover Guillaume\'s journey, business restructuring expert with 15+ years of experience. Client testimonials and achievements.',
      keywords: ['Guillaume Stehelin', 'about', 'professional journey', 'client testimonials', 'restructuring expertise']
    },
    th: {
      title: 'เกี่ยวกับ | Guillaume Stehelin de Taisne',
      description: 'ค้นพบเส้นทางของ Guillaume ผู้เชี่ยวชาญด้านการปรับโครงสร้างธุรกิจที่มีประสบการณ์มากกว่า 15 ปี คำรับรองจากลูกค้าและผลงาน',
      keywords: ['Guillaume Stehelin', 'เกี่ยวกับ', 'เส้นทางอาชีพ', 'คำรับรองจากลูกค้า', 'ความเชี่ยวชาญการปรับโครงสร้าง']
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
    },
    th: {
      title: 'บล็อก | คำแนะนำ CFO, COO และการดำเนินงานฉุกเฉิน',
      description: 'บทความและคำแนะนำจากผู้เชี่ยวชาญเกี่ยวกับการจัดการทางการเงิน การจัดการด้านการดำเนินงาน และการแทรกแซงฉุกเฉินในธุรกิจ',
      keywords: ['บล็อก CFO', 'บล็อก COO', 'คำแนะนำธุรกิจ', 'การจัดการทางการเงิน', 'การดำเนินงานฉุกเฉิน', 'บทความผู้เชี่ยวชาญ']
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
    },
    th: {
      title: 'ติดต่อ | จองการโทรศัพท์ค้นพบ',
      description: 'ติดต่อ Guillaume เพื่อขอคำปรึกษาฟรี การตอบกลับรับประกันภายใน 24 ชั่วโมง ปารีส กรุงเทพฯ อีเมลและโทรศัพท์',
      keywords: ['ติดต่อ Guillaume', 'คำปรึกษาฟรี', 'การโทรศัพท์ค้นพบ', 'ปารีส กรุงเทพฯ', 'การตอบกลับ 24 ชั่วโมง']
    }
  }
}
