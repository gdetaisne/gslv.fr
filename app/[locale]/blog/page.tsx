import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import { BlogPost } from '../../types'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Insights on Operations, Scaling & AI Systems | Guillaume Stehelin de Taisne',
  description: 'Long-form articles by Guillaume Stehelin de Taisne on building operational systems, scaling e-commerce, fractional COO practice, and AI-driven operations. Written from 10+ years of hands-on experience across Ligerio, Rocket Internet/Jumia, and Moverz.',
  keywords: ['operations', 'scaling', 'fractional COO', 'e-commerce operations', 'AI systems', 'Guillaume Stehelin de Taisne', 'Ligerio', 'Jumia', 'Moverz'],
  openGraph: {
    title: 'Insights on Operations, Scaling & AI Systems | GSLV.fr',
    description: 'Long-form articles by Guillaume Stehelin de Taisne — operator and systems builder with 10+ years across Ligerio, Rocket Internet/Jumia, and Moverz.',
    url: 'https://gslv.fr/en/blog',
    type: 'website',
    siteName: 'GSLV.fr',
  },
  twitter: {
    card: 'summary',
    title: 'Insights on Operations, Scaling & AI Systems | GSLV.fr',
    description: 'Long-form articles on building operational systems, scaling e-commerce, and AI-driven operations.',
  },
  alternates: {
    canonical: 'https://gslv.fr/en/blog',
  },
}

async function getArticles(locale: string): Promise<BlogPost[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'blog', `${locale}.json`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error loading articles:', error)
    return []
  }
}

export default async function BlogPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const articles = await getArticles(locale)
  return <BlogClient articles={articles} />
}