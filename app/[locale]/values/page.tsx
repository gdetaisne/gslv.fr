'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Metadata } from 'next'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ValuesPage() {
  const t = useTranslations('values')
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({})

  const toggleExpanded = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
  }

  const values = [
    {
      id: 'investment',
      title: t('investment.title'),
      icon: '/images/values/investment.svg',
      bgGradient: 'from-emerald-500 to-teal-600',
      principles: t.raw('investment.principles')
    },
    {
      id: 'impact',
      title: t('impact.title'),
      icon: '/images/values/impact.svg',
      bgGradient: 'from-blue-500 to-indigo-600',
      principles: t.raw('impact.principles')
    },
    {
      id: 'leadership',
      title: t('leadership.title'),
      icon: '/images/values/leadership.svg',
      bgGradient: 'from-purple-500 to-pink-600',
      principles: t.raw('leadership.principles')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-accent-500/5 to-primary-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl mb-8">
              <span className="text-3xl">💎</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-dark-900 mb-6 leading-tight">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.id}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${value.bgGradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl">
                          {value.id === 'investment' && '🚀'}
                          {value.id === 'impact' && '⚡'}
                          {value.id === 'leadership' && '👑'}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleExpanded(value.id)}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                      >
                        {expandedCards[value.id] ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4">
                      {value.title}
                    </h2>
                    
                    <div className="space-y-3">
                      {value.principles.slice(0, expandedCards[value.id] ? value.principles.length : 2).map((principle: any, principleIndex: number) => (
                        <div key={principleIndex} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                          <h3 className="font-semibold text-sm leading-tight">
                            {principle.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedCards[value.id] && (
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                    <div className="space-y-4">
                      {value.principles.map((principle: any, principleIndex: number) => (
                        <div key={principleIndex} className="border-l-4 border-primary-200 pl-4">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {principle.title}
                          </h4>
                          <ul className="space-y-1">
                            {principle.behaviors.map((behavior: string, behaviorIndex: number) => (
                              <li key={behaviorIndex} className="text-sm text-gray-600 flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {behavior}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-dark-900 via-gray-900 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300">Années d'expertise</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Entreprises accompagnées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Engagement valeurs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-dark-900 mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('cta.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
