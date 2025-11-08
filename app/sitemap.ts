import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

type BlogPost = {
  slug: string
  publishedAt: string
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gslv.fr'
  const locales = ['fr', 'en']
  
  const staticPages = [
    '',
    '/about',
    '/services',
    '/values',
    '/blog',
    '/contact',
    '/consultant-cfo-la-rochelle',
    '/pricing',
    '/privacy',
    '/terms',
    '/cookies',
    '/mentions-legales'
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add static pages for each locale
  locales.forEach(locale => {
    staticPages.forEach(page => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
      })
    })
  })

  // Add REAL blog articles from JSON files
  locales.forEach(locale => {
    try {
      const filePath = path.join(process.cwd(), 'public', 'data', 'blog', `${locale}.json`)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const articles: BlogPost[] = JSON.parse(fileContents)
      
      articles.forEach(article => {
        sitemap.push({
          url: `${baseUrl}/${locale}/blog/${article.slug}`,
          lastModified: new Date(article.publishedAt),
          changeFrequency: 'monthly',
          priority: 0.7,
        })
      })
    } catch (error) {
      console.error(`Error loading blog articles for ${locale}:`, error)
    }
  })

  return sitemap
}

