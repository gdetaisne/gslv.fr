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
      color: 'from-sky-500 to-sky-600',
      hoverColor: 'hover:from-sky-600 hover:to-sky-700'
    },
    {
      id: 'coo',
      title: t('coo.title'),
      description: t('coo.description'),
      features: t.raw('coo.features'),
      budget: t.raw('coo.budget'),
      icon: Zap,
      color: 'from-sky-500 to-sky-600',
      hoverColor: 'hover:from-sky-600 hover:to-sky-700'
    },
    {
      id: 'pompier',
      title: t('pompier.title'),
      description: t('pompier.description'),
      features: t.raw('pompier.features'),
      budget: t.raw('pompier.budget'),
      icon: AlertTriangle,
      color: 'from-rose-500 to-rose-600',
      hoverColor: 'hover:from-rose-600 hover:to-rose-700'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
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
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                    <service.icon className="w-8 h-8" />
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
                      {t('buttons.discussService')}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="h-full border border-slate-100">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className={`w-24 h-24 mx-auto rounded-3xl bg-slate-900 flex items-center justify-center text-sky-400 mb-6`}>
                          <service.icon className="w-12 h-12" />
                        </div>
                        <h3 className="hidden lg:block text-2xl font-bold text-gray-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="hidden lg:block text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        
                        {/* Budget Section - Alternance de côté */}
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mr-3">
                              <Euro className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{service.budget.title}</h3>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-center">
                              <span className="text-2xl font-bold text-slate-900">{service.budget.price}</span>
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
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            {t('cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-200/90 mb-8"
          >
            {t('cta.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="text-lg px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white">
                {t('buttons.bookCall')}
              </Button>
            </Link>
            <Link href={`/${locale}/about`}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent border-slate-700 text-slate-200 hover:bg-slate-900/60">
                {t('buttons.viewPricing')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
