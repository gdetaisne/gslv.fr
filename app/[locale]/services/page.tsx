'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Zap, AlertTriangle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '../../components/Card'
import Button from '../../components/Button'

export default function ServicesPage() {
  const locale = useLocale()
  const t = useTranslations('services')
  const tHero = useTranslations('hero')

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      title: t('cfo.title'),
      description: t('cfo.description'),
      features: t.raw('cfo.features'),
      color: 'from-primary-500 to-primary-700',
      id: 'cfo'
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-600" />,
      title: t('coo.title'),
      description: t('coo.description'),
      features: t.raw('coo.features'),
      color: 'from-accent-500 to-accent-700',
      id: 'coo'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: t('pompier.title'),
      description: t('pompier.description'),
      features: t.raw('pompier.features'),
      color: 'from-red-500 to-red-700',
      id: 'pompier'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-dark-900 mb-6"
            >
              {tHero('title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
            >
              {tHero('subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href={`/${locale}/contact`}>
                <Button className="btn-hover">
                  {tHero('cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline">
                  {tHero('ctaSecondary')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-dark-900 mb-4"
            >
              Nos Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Des solutions personnalisées pour chaque situation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-dark-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow">
                    <ul className="space-y-3">
                      {service.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link href={`/${locale}/contact`}>
                        <Button className="w-full">
                          Demander une intervention
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Situation critique ? Besoin d'une intervention ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contactez-moi immédiatement pour une intervention d'urgence
            </p>
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Appel d'urgence - 24h
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}