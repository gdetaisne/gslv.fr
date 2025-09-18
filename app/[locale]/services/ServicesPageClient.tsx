'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Zap, AlertTriangle, ArrowRight, Euro } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '../../components/Card'
import Button from '../../components/Button'

export default function ServicesPageClient() {
  const locale = useLocale()
  const t = useTranslations('services')

  const services = [
    {
      id: 'cfo',
      title: t('cfo.title'),
      description: t('cfo.description'),
      features: t.raw('cfo.features'),
      budget: t.raw('cfo.budget'),
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      id: 'coo',
      title: t('coo.title'),
      description: t('coo.description'),
      features: t.raw('coo.features'),
      budget: t.raw('coo.budget'),
      icon: Zap,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      id: 'pompier',
      title: t('pompier.title'),
      description: t('pompier.description'),
      features: t.raw('pompier.features'),
      budget: t.raw('pompier.budget'),
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg">
                      Discuter de ce service
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className={`w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                          <service.icon className="w-16 h-16" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        
                        {/* Budget Section - Alternance de côté */}
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-3">
                              <Euro className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{service.budget.title}</h3>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-center">
                              <span className="text-2xl font-bold text-primary-600">{service.budget.price}</span>
                            </div>
                            <p className="text-gray-600 text-sm text-center">{service.budget.description}</p>
                            <p className="text-gray-500 text-xs italic text-center">{service.budget.note}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Prêt à transformer votre entreprise ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Contactez-moi pour une consultation gratuite et découvrez comment je peux vous aider
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary-600 hover:bg-gray-100">
                Réserver un appel découverte
              </Button>
            </Link>
            <Link href={`/${locale}/pricing`}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Voir les tarifs
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
