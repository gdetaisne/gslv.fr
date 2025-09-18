import { useTranslations } from 'next-intl'
import { BlogPost } from '../../types'
import BlogClient from './BlogClient'

// Load articles on the server side
async function getArticles(locale: string): Promise<BlogPost[]> {
  try {
    const fs = await import('fs')
    const path = await import('path')
    
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