export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: 'scaling' | 'finance' | 'tools' | 'fundraising'
  publishedAt: Date
  readTime: number
  tags: string[]
  locale: 'fr' | 'en' | 'th'
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  avatar?: string
  rating: number
  locale: 'fr' | 'en' | 'th'
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  color: string
}

export interface ContactForm {
  name: string
  email: string
  company: string
  stage: string
  message: string
}

export interface Locale {
  code: 'fr' | 'en' | 'th'
  name: string
  flag: string
}

