'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Zap, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import Button from '../components/Button'
import { Card, CardContent, CardHeader } from '../components/Card'

export default function HomePage() {
  const t = useTranslations('hero')
  const tServices = useTranslations('services')
  const tTestimonials = useTranslations('testimonials')

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      title: tServices('cfo.title'),
      description: tServices('cfo.description'),
      features: [
        'Reporting financier mensuel',
        'Gestion de trésorerie',
        'Prévisions et budgets',
        'Préparation levées de fonds',
        'Tableaux de bord KPI'
      ],
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-600" />,
      title: tServices('coo.title'),
      description: tServices('coo.description'),
      features: [
        'Structuration des processus',
        'Optimisation opérationnelle',
        'Gestion de l\'hypercroissance',
        'Mise en place d\'outils',
        'Formation des équipes'
      ],
      color: 'from-accent-500 to-accent-700'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: tServices('pompier.title'),
      description: tServices('pompier.description'),
      features: [
        '🚨 Diagnostic express (24-48h)',
        '🔧 Restructuration d\'urgence',
        '💰 Levées de fonds de dernière chance',
        '⚡ Stabilisation opérationnelle',
        '🎯 Plan de redressement personnalisé'
      ],
      color: 'from-red-500 to-red-700'
    }
  ]

  const testimonials = [
    {
      name: 'Marie Dubois',
      company: 'TechStart',
      role: 'CEO',
      content: 'Guillaume nous a accompagnés dans notre levée de fonds Series A. Son expertise financière et sa connaissance du marché ont été déterminantes.',
      rating: 5
    },
    {
      name: 'Jean Martin',
      company: 'ScaleUp Pro',
      role: 'Founder',
      content: 'Grâce à son accompagnement opérationnel, nous avons pu structurer nos processus et passer de 10 à 50 employés en 18 mois.',
      rating: 5
    },
    {
      name: 'Sophie Chen',
      company: 'GrowthLab',
      role: 'COO',
      content: 'Un partenaire de confiance qui comprend les enjeux des startups en croissance. Très professionnel et réactif.',
      rating: 5
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
              {t('title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
            >
              {t('subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button size="lg" className="btn-hover">
                  {t('cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  {t('ctaSecondary')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions personnalisées pour chaque stade de votre croissance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card hover className="h-full">
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
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              {tTestimonials('title')}
            </h2>
            <p className="text-xl text-gray-600">
              {tTestimonials('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-dark-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
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
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à accélérer votre croissance ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Réservez un appel découverte gratuit pour discuter de vos besoins
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="btn-hover">
                Réserver un appel découverte
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}