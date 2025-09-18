import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gslv.fr'
  const locales = ['fr', 'en', 'th']
  
  const staticPages = [
    '',
    '/about',
    '/services',
    '/blog',
    '/contact'
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

  // Add blog articles (simplified - in production, you'd load from your data)
  const blogCategories = ['scaling', 'finance', 'tools', 'fundraising']
  locales.forEach(locale => {
    blogCategories.forEach(category => {
      for (let i = 1; i <= 50; i++) {
        sitemap.push({
          url: `${baseUrl}/${locale}/blog/${category}-article-${i}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        })
      }
    })
  })

  return sitemap
}

