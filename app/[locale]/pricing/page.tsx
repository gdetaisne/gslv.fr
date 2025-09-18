'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, TrendingUp, Zap, Clock, Euro, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import Button from '../../components/Button'
import { Card, CardContent, CardHeader } from '../../components/Card'

export default function PricingPage() {
  const t = useTranslations('pricing')
  const locale = useLocale()

  const pricingPlans = [
    {
      id: 'pompier',
      name: 'Consultant Opérations Coup de Poing',
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      price: '1000€',
      period: 'HT / jour',
      description: 'Intervention d\'urgence - Remplacement intérimaire de dirigeant',
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      features: [
        '🚨 Prise de commande immédiate (24-48h)',
        '👔 Remplacement intérimaire de dirigeant',
        '🔧 Restructuration d\'urgence',
        '⚖️ Accompagnement en redressement judiciaire',
        '⚡ Stabilisation opérationnelle',
        '🎯 Plan de redressement personnalisé',
        '📞 Disponibilité 24h/24 pendant l\'intervention',
        '📊 Reporting quotidien de la situation'
      ],
      isPopular: true
    },
    {
      id: 'cfo',
      name: 'CFO Part-time',
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      price: '750€',
      period: 'HT / jour',
      description: 'Direction financière externalisée',
      color: 'from-primary-500 to-primary-700',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      features: [
        '📊 Reporting financier mensuel',
        '💰 Gestion de trésorerie et cashflow',
        '📈 Prévisions et budgets',
        '💼 Préparation levées de fonds',
        '📋 Tableaux de bord KPI',
        '🔍 Audit financier préventif',
        '📞 Support par téléphone/email',
        '📅 Réunions de suivi mensuelles'
      ],
      isPopular: false
    },
    {
      id: 'coo',
      name: 'COO Part-time',
      icon: <Zap className="w-8 h-8 text-accent-600" />,
      price: '750€',
      period: 'HT / jour',
      description: 'Direction opérationnelle externalisée',
      color: 'from-accent-500 to-accent-700',
      bgColor: 'bg-accent-50',
      borderColor: 'border-accent-200',
      features: [
        '⚙️ Structuration des processus',
        '🚀 Optimisation opérationnelle',
        '📈 Gestion de l\'hypercroissance',
        '🛠️ Mise en place d\'outils',
        '👥 Formation des équipes',
        '📊 Tableaux de bord opérationnels',
        '📞 Support par téléphone/email',
        '📅 Réunions de suivi mensuelles'
      ],
      isPopular: false
    }
  ]

  const billingInfo = [
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: 'Facturation à l\'heure effective',
      description: 'Seules les heures réellement travaillées sont facturées'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-600" />,
      title: 'Détail des tâches effectuées',
      description: 'Liste complète des tâches réalisées en fin de mois'
    },
    {
      icon: <Euro className="w-6 h-6 text-primary-600" />,
      title: 'Phase de cadrage facturée',
      description: 'Tarif selon la complexité du projet'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-dark-900 mb-6"
          >
            Tarifs & Facturation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
          >
            Des tarifs transparents et une facturation claire pour chaque intervention
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      🔥 Le plus demandé
                    </span>
                  </div>
                )}
                <Card className={`h-full flex flex-col ${plan.bgColor} ${plan.borderColor} border-2 ${plan.isPopular ? 'ring-2 ring-red-500 ring-opacity-50' : ''}`}>
                  <CardHeader className="text-center p-8">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${plan.color}`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-dark-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-dark-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex-grow flex flex-col">
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${locale}/contact`} className="mt-auto">
                      <Button 
                        variant={plan.isPopular ? "primary" : "secondary"} 
                        className={`w-full btn-hover ${plan.isPopular ? 'bg-red-600 hover:bg-red-700 text-white' : ''}`}
                      >
                        {t('buttons.requestQuote')}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-dark-900 mb-4"
            >
              Modalités de Facturation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Transparence totale sur la facturation et les prestations
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {billingInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-dark-900 mb-4">
              Phase de Cadrage
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              La phase de cadrage est facturée en fonction de la complexité du projet. 
              Un devis détaillé vous sera fourni avant toute intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="btn-hover">
                  {t('buttons.requestCustomQuote')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Situation critique ? Intervention immédiate !
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Tarif pompier : 1000€ HT/jour - Disponible 24h/24
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={`/${locale}/contact`}>
              <Button
                size="lg"
                className="bg-white text-red-700 hover:bg-gray-100 focus:ring-white shadow-lg hover:shadow-xl btn-hover"
              >
                <Phone className="w-5 h-5 mr-2" /> {t('buttons.emergencyCall')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
