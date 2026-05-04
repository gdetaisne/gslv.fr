'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, TrendingUp, Zap, Settings, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import Button from '../../components/Button'
import { Card, CardContent, CardHeader } from '../../components/Card'

export default function PricingPage() {
  const t = useTranslations('services')
  const locale = useLocale()

  const isFr = locale === 'fr'

  const pricingPlans = [
    {
      id: 'diagnostic',
      name: isFr ? 'Diagnostic opérationnel' : 'Operating Diagnostic',
      icon: <TrendingUp className="w-8 h-8 text-sky-400" />,
      price: isFr ? '750€' : '€750',
      period: isFr ? 'HT / jour' : 'ex VAT / day',
      description: isFr
        ? 'Audit 24–48h des opérations, cash, systèmes et goulets d\'étranglement.'
        : '24–48h audit of operations, cash, systems and bottlenecks.',
      color: 'from-sky-500 to-sky-700',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
      features: isFr
        ? [
            'Cartographie des flux opérationnels',
            'Lecture cash et runway',
            'Identification des goulets à fort levier',
            'Analyse des systèmes et outils existants',
            'Priorités d\'action sur 30 jours',
            'Livrable priorisé avec plan de mise sous contrôle',
          ]
        : [
            'Operational workflow mapping',
            'Cash and runway visibility',
            'High-leverage bottleneck identification',
            'Systems and tools assessment',
            '30-day action priorities',
            'Prioritized deliverable with action plan',
          ],
      isPopular: false,
    },
    {
      id: 'fractional',
      name: isFr ? 'COO Fractionnel / Operator' : 'Fractional COO / Operator',
      icon: <Settings className="w-8 h-8 text-emerald-400" />,
      price: isFr ? '750€' : '€750',
      period: isFr ? 'HT / jour' : 'ex VAT / day',
      description: isFr
        ? 'Exécution terrain continue pour fondateurs et investisseurs.'
        : 'Ongoing hands-on execution for founders and investors.',
      color: 'from-emerald-500 to-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      features: isFr
        ? [
            'Design du modèle opérationnel',
            'Structure d\'équipe et rythme d\'exécution',
            'Construction de systèmes et dashboards KPI',
            'Automatisation des workflows',
            'Résolution des goulets de croissance',
            'Ownership directe sur les sujets critiques',
          ]
        : [
            'Operating model design',
            'Team structure and execution rhythm',
            'Systems and KPI dashboard build',
            'Workflow automation',
            'Growth bottleneck resolution',
            'Direct ownership on critical topics',
          ],
      isPopular: true,
    },
    {
      id: 'sprint',
      name: isFr ? 'Sprint Systèmes' : 'Systems Build Sprint',
      icon: <Zap className="w-8 h-8 text-indigo-400" />,
      price: isFr ? '750€' : '€750',
      period: isFr ? 'HT / jour' : 'ex VAT / day',
      description: isFr
        ? 'Design et implémentation d\'outils internes, workflows, dashboards et automatisation.'
        : 'Design and implementation of internal tools, workflows, dashboards and automation.',
      color: 'from-indigo-500 to-indigo-700',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      features: isFr
        ? [
            'Conception du système opérationnel cible',
            'Outils internes et automatisation',
            'Workflows IA-enabled',
            'Dashboards et cadence de pilotage',
            'Documentation et passage de relais',
            'Livrable autonomisable',
          ]
        : [
            'Target operating system design',
            'Internal tools and automation',
            'AI-enabled workflows',
            'Dashboards and management cadence',
            'Documentation and handover',
            'Team-ready deliverable',
          ],
      isPopular: false,
    },
    {
      id: 'crisis',
      name: isFr ? 'Intervention SWAT / Crise' : 'Crisis / SWAT Intervention',
      icon: <AlertTriangle className="w-8 h-8 text-rose-400" />,
      price: isFr ? '1 000€' : '€1,000',
      period: isFr ? 'HT / jour' : 'ex VAT / day',
      description: isFr
        ? 'Stabilisation immédiate quand les opérations, la trésorerie ou la gouvernance craquent.'
        : 'Immediate stabilization when operations, cash or governance are breaking.',
      color: 'from-rose-500 to-rose-700',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      features: isFr
        ? [
            'Diagnostic en 24–48h',
            'Prise en main rapide des sujets bloquants',
            'Visibilité cash et runway immédiate',
            'Stabilisation des opérations critiques',
            'Arbitrages simples et actionnables',
            'Support dirigeant intérimaire',
          ]
        : [
            '24–48h diagnostic',
            'Fast takeover of blocking issues',
            'Immediate cash and runway visibility',
            'Critical operations stabilization',
            'Clear and actionable arbitrations',
            'Interim executive support',
          ],
      isPopular: false,
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4"
          >
            {isFr ? 'Formats & Tarifs' : 'Formats & Pricing'}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {isFr ? 'Quatre formats. Zéro jargon.' : 'Four formats. No fluff.'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto"
          >
            {isFr
              ? 'Diagnostic, exécution fractionnée, construction de systèmes ou intervention de crise — chaque format correspond à une situation réelle.'
              : 'Diagnostic, fractional execution, systems build or crisis intervention — each format matches a real situation.'}
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
                    <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {isFr ? '⚡ Le plus demandé' : '⚡ Most requested'}
                    </span>
                  </div>
                )}
                <Card className={`h-full flex flex-col ${plan.bgColor} ${plan.borderColor} border-2 ${plan.isPopular ? 'ring-2 ring-emerald-400 ring-opacity-50' : ''}`}>
                  <CardHeader className="text-center p-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${plan.color}`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{plan.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2 text-sm">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${locale}/contact`} className="mt-auto">
                      <Button
                        variant={plan.isPopular ? 'primary' : 'secondary'}
                        className="w-full"
                      >
                        {isFr ? 'Discuter de ce besoin' : 'Discuss this need'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency block */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-slate-900 mb-4"
          >
            {isFr ? 'Facturation transparente' : 'Transparent billing'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
          >
            {isFr
              ? 'Seules les heures réellement travaillées sont facturées. Détail complet des tâches en fin de mois. La phase de cadrage est facturée selon la complexité du projet.'
              : 'Only actual hours worked are billed. Full task breakdown at end of month. The framing phase is billed based on project complexity.'}
          </motion.p>
          <Link href={`/${locale}/contact`}>
            <Button size="lg">
              {isFr ? 'Demander un cadrage' : 'Request a framing session'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {isFr ? 'Situation critique ?' : 'Critical situation?'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 mb-8"
          >
            {isFr
              ? 'Intervention SWAT disponible rapidement. Diagnostic en 24–48h, stabilisation immédiate.'
              : 'SWAT intervention available fast. 24–48h diagnostic, immediate stabilization.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={`/${locale}/contact`}>
              <Button
                size="lg"
                className="bg-rose-600 hover:bg-rose-500 text-white shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('buttons.emergencyCall')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
