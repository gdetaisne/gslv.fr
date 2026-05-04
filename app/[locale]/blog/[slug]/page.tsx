import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import { BlogPost } from '../../../types'
import BlogPostClient from './BlogPostClient'

type Props = {
  params: { locale: string; slug: string }
}

async function getArticle(locale: string, slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'blog', `${locale}.json`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const articles: BlogPost[] = JSON.parse(fileContents)
    return articles.find(a => a.slug === slug) ?? null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle(params.locale, params.slug)
  const baseUrl = 'https://gslv.fr'

  if (!article) {
    return {
      title: 'Article not found | GSLV.fr',
      description: 'This article could not be found.',
    }
  }

  const title = article.seo?.title || `${article.title} | GSLV.fr`
  const description = article.seo?.description || article.excerpt
  const keywords = article.seo?.keywords || article.tags
  const url = `${baseUrl}/${params.locale}/blog/${params.slug}`

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Guillaume Stehelin de Taisne', url: baseUrl }],
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'GSLV.fr',
      publishedTime: new Date(article.publishedAt).toISOString(),
      authors: ['Guillaume Stehelin de Taisne'],
      tags: article.tags,
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-image.jpg`],
    },
    alternates: {
      canonical: url,
    },
  }
}

export default function BlogPostPage() {
  return <BlogPostClient />
}
