'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, TrendingUp, Zap, Users, DollarSign, BarChart3, Target, Clock, Shield } from 'lucide-react'
import Link from 'next/link'
import Button from '../../components/Button'
import { Card, CardContent, CardHeader } from '../../components/Card'

export default function ServicesPage() {
  const t = useTranslations('services')

  const services = [
    {
      id: 'cfo',
      icon: <TrendingUp className="w-12 h-12 text-primary-600" />,
      title: t('cfo.title'),
      description: t('cfo.description'),
      features: [
        'Reporting financier mensuel',
        'Gestion de trésorerie et cashflow',
        'Prévisions et budgets',
        'Préparation levées de fonds',
        'Tableaux de bord KPI',
        'Analyse de rentabilité',
        'Gestion des investisseurs',
        'Audit interne'
      ],
      deliverables: [
        'Tableaux de bord financiers',
        'Prévisions 12 mois',
        'Business plan actualisé',
        'Dossier de levée de fonds'
      ],
      color: 'from-primary-500 to-primary-700',
      bgColor: 'bg-primary-50'
    },
    {
      id: 'coo',
      icon: <Zap className="w-12 h-12 text-accent-600" />,
      title: t('coo.title'),
      description: t('coo.description'),
      features: [
        'Structuration des processus',
        'Optimisation opérationnelle',
        'Gestion de l\'hypercroissance',
        'Mise en place d\'outils',
        'Formation des équipes',
        'Organisation des équipes',
        'Mise en place de KPIs',
        'Gestion de la qualité'
      ],
      deliverables: [
        'Cartographie des processus',
        'Manuels opérationnels',
        'Formation des équipes',
        'Outils de suivi'
      ],
      color: 'from-accent-500 to-accent-700',
      bgColor: 'bg-accent-50'
    },
    {
      id: 'scalability',
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: t('scalability.title'),
      description: t('scalability.description'),
      features: [
        'Diagnostic de scalabilité',
        'Plan de croissance',
        'Stratégie d\'organisation',
        'Accompagnement au changement',
        'Mise en place de gouvernance',
        'Formation des managers',
        'Optimisation des coûts',
        'Préparation aux audits'
      ],
      deliverables: [
        'Plan de scalabilité',
        'Organigramme cible',
        'Processus de gouvernance',
        'Formation des équipes'
      ],
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50'
    }
  ]

  const stages = [
    {
      name: 'Startup (0-10 employés)',
      description: 'Structuration des bases financières et opérationnelles',
      features: ['Comptabilité simplifiée', 'Premiers KPIs', 'Processus de base', 'Préparation levée de fonds'],
      price: 'À partir de 2 000€/mois'
    },
    {
      name: 'Scale-up (10-50 employés)',
      description: 'Optimisation et structuration pour la croissance',
      features: ['Reporting avancé', 'Processus automatisés', 'Gestion des équipes', 'Levées de fonds'],
      price: 'À partir de 3 500€/mois'
    },
    {
      name: 'Growth (50+ employés)',
      description: 'Gouvernance et optimisation pour l\'hypercroissance',
      features: ['Gouvernance avancée', 'Processus complexes', 'Gestion multi-équipes', 'Préparation IPO'],
      price: 'À partir de 5 000€/mois'
    }
  ]

  const formats = [
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: 'Accompagnement récurrent',
      description: 'Suivi mensuel avec reporting et optimisation continue',
      duration: '6-24 mois',
      frequency: '2-4 jours/mois'
    },
    {
      icon: <Target className="w-8 h-8 text-accent-600" />,
      title: 'Mission ponctuelle',
      description: 'Intervention ciblée sur un projet spécifique',
      duration: '1-6 mois',
      frequency: 'Selon besoins'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: 'Audit flash',
      description: 'Diagnostic rapide et recommandations',
      duration: '1-2 semaines',
      frequency: 'Ponctuel'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-dark-900 mb-6"
            >
              Nos Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Des solutions personnalisées pour chaque stade de votre croissance
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button size="lg" className="btn-hover">
                      Découvrir ce service
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="h-full">
                    <CardHeader>
                      <h3 className="text-xl font-bold text-dark-900 mb-4">
                        Livrables inclus
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {service.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                            <span className="text-gray-700">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Stades de croissance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement adapté à votre phase de développement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark-900 mb-2">
                        {stage.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {stage.description}
                      </p>
                      <div className="text-lg font-semibold text-primary-600">
                        {stage.price}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {stage.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Formats d'accompagnement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le format qui correspond le mieux à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card hover className="h-full text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {format.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 mb-2">
                      {format.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {format.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">
                        <strong>Durée:</strong> {format.duration}
                      </div>
                      <div className="text-sm text-gray-500">
                        <strong>Fréquence:</strong> {format.frequency}
                      </div>
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
              Prêt à démarrer ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Réservez un appel découverte gratuit pour définir vos besoins
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