'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '../../../components/Card'
import { BlogPost } from '../../../types'

function linkify(text: string): string {
  // Transform markdown links [text](https://...) into anchor tags
  let html = text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary-600 underline">$1</a>'
  )
  // Transform raw URLs into anchor tags
  html = html.replace(
    /(https?:\/\/[^\s)]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-primary-600 underline">$1</a>'
  )
  return html
}

export default function BlogPostPage() {
  const [article, setArticle] = useState<BlogPost | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()
  const locale = useLocale()
  const t = useTranslations('buttons')

  useEffect(() => {
    const loadArticle = async () => {
      try {
        // Load all articles to find the specific one
        const response = await fetch(`/data/blog/${locale}.json`)
        const articles = await response.json()
        
        const foundArticle = articles.find((a: BlogPost) => a.slug === params.slug)
        if (foundArticle) {
          setArticle(foundArticle)
          
          // Find related articles (same category, different article)
          const related = articles
            .filter((a: BlogPost) => a.category === foundArticle.category && a.id !== foundArticle.id)
            .slice(0, 3)
          setRelatedArticles(related)
        }
      } catch (error) {
        console.error('Error loading article:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (params.slug) {
      loadArticle()
    }
  }, [params.slug, locale])

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : locale === 'en' ? 'en-US' : 'th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(date))
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article?.title,
          text: article?.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Lien copié dans le presse-papiers!')
    }
  }

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de l'article...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <p className="text-gray-600 mb-6">L'article que vous recherchez n'existe pas.</p>
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Schema.org Article Structured Data */}
      {article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: article.seo?.title || article.title,
              description: article.seo?.description || article.excerpt,
              author: {
                '@type': 'Person',
                name: 'Guillaume Stehelin de Taisne',
                url: 'https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/',
                jobTitle: 'Operator building systems that scale companies',
                worksFor: {
                  '@type': 'Organization',
                  name: 'GSLV'
                }
              },
              publisher: {
                '@type': 'Organization',
                name: 'GSLV.fr',
                url: 'https://gslv.fr',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://gslv.fr/images/logo/logo.png'
                }
              },
              datePublished: article.publishedAt,
              dateModified: article.publishedAt,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': typeof window !== 'undefined' ? window.location.href : `https://gslv.fr/${locale}/blog/${article.slug}`
              },
              keywords: article.seo?.keywords?.join(', ') || article.tags.join(', '),
              articleSection: article.category,
              wordCount: article.content.split(' ').length,
              inLanguage: locale === 'fr' ? 'fr-FR' : 'en-US'
            }, null, 2)
          }}
        />
      )}
      
      {/* Article Header */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <button
                onClick={handleShare}
                className="inline-flex items-center px-3 py-1 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Share2 className="w-4 h-4 mr-1" />
                Partager
              </button>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
              {article.title}
            </h1>

            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(article.publishedAt)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {article.readTime} min de lecture
              </div>
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                {article.tags.length} tags
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-700 leading-relaxed">
              {article.content.split('\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-6"
                  dangerouslySetInnerHTML={{ __html: linkify(paragraph) }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-900 mb-8 text-center">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.div
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover className="h-full">
                    <CardContent>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                          {relatedArticle.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {relatedArticle.readTime} min
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-dark-900 mb-2 line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {relatedArticle.excerpt}
                      </p>
                      <Link
                        href={`/${locale}/blog/${relatedArticle.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        Lire la suite
                        <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d'aide pour votre startup ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Découvrez comment nos services CFO & COO part-time peuvent accélérer votre croissance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('buttons.bookCall')}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Découvrir nos services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}