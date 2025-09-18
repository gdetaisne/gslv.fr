'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Metadata } from 'next'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ValuesPage() {
  const t = useTranslations('values')
  const locale = useLocale()
  const [expandedPrinciples, setExpandedPrinciples] = useState<{[key: string]: boolean}>({})

  const togglePrinciple = (principleId: string) => {
    setExpandedPrinciples(prev => ({
      ...prev,
      [principleId]: !prev[principleId]
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-accent-500/3 to-primary-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl mb-8">
              <span className="text-3xl">💎</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${value.bgGradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl">
                          {value.id === 'investment' && '🚀'}
                          {value.id === 'impact' && '⚡'}
                          {value.id === 'leadership' && '👑'}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-6">
                      {value.title}
                    </h2>
                  </div>
                </div>

                {/* Principles List */}
                <div className="p-6 bg-gray-50">
                  <div className="space-y-4">
                    {value.principles.map((principle: any, principleIndex: number) => {
                      const principleId = `${value.id}-${principleIndex}`
                      const isExpanded = expandedPrinciples[principleId]
                      
                      return (
                        <div key={principleIndex} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                          <button
                            onClick={() => togglePrinciple(principleId)}
                            className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                          >
                            <h3 className="font-semibold text-gray-900 pr-4">
                              {principle.title}
                            </h3>
                            <div className="flex-shrink-0">
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                              )}
                            </div>
                          </button>
                          
                          {isExpanded && (
                            <div className="px-4 pb-4 bg-gray-50">
                              <ul className="space-y-2">
                                {principle.behaviors.map((behavior: string, behaviorIndex: number) => (
                                  <li key={behaviorIndex} className="text-sm text-gray-700 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {behavior}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/90 text-sm sm:text-base">Années d'expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90 text-sm sm:text-base">Entreprises accompagnées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/90 text-sm sm:text-base">Engagement valeurs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {t('cta.subtitle')}
            </p>
          <a
            href={`/${locale}/contact`}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center"
          >
              {t('cta.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
