import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://gslv.fr'
  const locales = ['fr', 'en']
  
  const staticPages = [
    '',
    '/about',
    '/services',
    '/blog',
    '/contact'
  ]

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // Add static pages for each locale
  locales.forEach(locale => {
    staticPages.forEach(page => {
      const url = `${baseUrl}/${locale}${page}`
      const priority = page === '' ? '1.0' : '0.8'
      const changefreq = page === '' ? 'daily' : 'weekly'
      
      sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
  })

  // Add blog articles
  const blogCategories = ['scaling', 'finance', 'tools', 'fundraising']
  locales.forEach(locale => {
    blogCategories.forEach(category => {
      for (let i = 1; i <= 50; i++) {
        const url = `${baseUrl}/${locale}/blog/${category}-article-${i}`
        sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
      }
    })
  })

  sitemap += `
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

