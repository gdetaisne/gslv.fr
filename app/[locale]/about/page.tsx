'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { CheckCircle, Users, TrendingUp, Target, Zap, Linkedin, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '../../components/Card'
import { useState } from 'react'

const MOVERZ_URL = 'https://moverz.fr/'

function linkifyMoverz(text: string) {
  if (!text) return text
  const parts = text.split(/(Moverz)/g)
  return parts.map((part, index) =>
    part === 'Moverz' ? (
      <Link
        key={index}
        href={MOVERZ_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="underline decoration-dotted underline-offset-2 hover:text-sky-600"
      >
        Moverz
      </Link>
    ) : (
      part
    )
  )
}

export default function AboutPage() {
  const t = useTranslations('about')
  const locale = useLocale()
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false)

  const isFr = locale === 'fr'

  const stats = isFr
    ? [
        { number: '10+', label: 'Ans de terrain' },
        { number: 'x20', label: 'Débit logistique' },
        { number: '€10M+', label: 'CA scalé' },
        { number: '550+', label: 'ETP managés' },
      ]
    : [
        { number: '10+', label: 'Years in the field' },
        { number: 'x20', label: 'Logistics throughput' },
        { number: '€10M+', label: 'Revenue scaled' },
        { number: '550+', label: 'FTE managed' },
      ]

  const expertise = isFr
    ? [
        {
          icon: <TrendingUp className="w-7 h-7 text-sky-500" />,
          title: 'Systèmes opérationnels',
          description: 'Workflows, outils internes, dashboards KPI et cadences opérationnelles qui remplacent la coordination manuelle.',
        },
        {
          icon: <Target className="w-7 h-7 text-sky-500" />,
          title: 'Diagnostic rapide',
          description: 'En 24–48h, je cartographie les contraintes et identifie les actions à plus fort levier.',
        },
        {
          icon: <Users className="w-7 h-7 text-sky-500" />,
          title: 'Structuration de la croissance',
          description: 'Modèle opérationnel, rôles, process, reporting et rythme d\'exécution pour rendre la croissance reproductible.',
        },
        {
          icon: <Zap className="w-7 h-7 text-sky-500" />,
          title: 'IA & automatisation',
          description: 'Moteurs de pricing, computer vision, workflows automatisés et assistants internes — avec du code réel.',
        },
      ]
    : [
        {
          icon: <TrendingUp className="w-7 h-7 text-sky-500" />,
          title: 'Operating systems',
          description: 'Workflows, internal tools, KPI dashboards and operating cadences that replace manual coordination.',
        },
        {
          icon: <Target className="w-7 h-7 text-sky-500" />,
          title: 'Fast diagnostic',
          description: 'Within 24–48h, I map constraints and identify the highest-leverage actions.',
        },
        {
          icon: <Users className="w-7 h-7 text-sky-500" />,
          title: 'Structuring growth',
          description: 'Operating model, roles, processes, reporting and execution rhythm to make growth repeatable.',
        },
        {
          icon: <Zap className="w-7 h-7 text-sky-500" />,
          title: 'AI & automation',
          description: 'Pricing engines, computer vision, automated workflows and internal assistants — with real code.',
        },
      ]

  const companies = [
    { name: 'Jumia', logo: '/images/companies/jumia.png', description: isFr ? 'E-commerce panafricain' : 'Pan-African e-commerce' },
    { name: 'HelloFood', logo: '/images/companies/hellofood.png', description: isFr ? 'Livraison de repas' : 'Food delivery' },
    { name: 'Ligerio', logo: '/images/companies/ligerio.png', description: isFr ? 'E-commerce premium' : 'Premium e-commerce' },
    { name: 'Aunis Ramonage', logo: '/images/companies/aunis-ramonage.png', description: isFr ? 'Services techniques' : 'Technical services' },
    { name: 'Kaymu', logo: '/images/companies/kaymu.png', description: isFr ? 'Marketplace' : 'Marketplace' },
    { name: 'Glossybox', logo: '/images/companies/glossybox.png', description: isFr ? 'Beauté & cosmétiques' : 'Beauty & cosmetics' },
    { name: 'Orami', logo: '/images/companies/orami.png', description: isFr ? 'Maternité & bébé' : 'Maternity & baby' },
    { name: 'Securclés', logo: '/images/companies/securcles.png', description: isFr ? 'Tech clés brevetée' : 'Patented key tech' },
    { name: 'Jaiye', logo: '/images/companies/jaiye.jpeg', description: isFr ? 'Plateforme digitale' : 'Digital platform' },
    { name: 'Lamudi', logo: '/images/companies/lamudi.png', description: isFr ? 'Immobilier en ligne' : 'Online real estate' },
    { name: 'Lexolia', logo: '/images/companies/lexolia.png', description: isFr ? 'Solutions digitales' : 'Digital solutions' },
    { name: 'Petloft', logo: '/images/companies/petloft.png', description: isFr ? 'Services animaux' : 'Pet services' },
  ]

  const timeline = t.raw('timeline')

  const expandLabel = isFr ? 'Voir le parcours complet' : 'See full background'
  const collapseLabel = isFr ? 'Voir moins' : 'See less'
  const moreLabel = isFr
    ? `+${timeline.length - 2} autres expériences`
    : `+${timeline.length - 2} more experiences`
  const achievementsLabel = isFr ? 'réalisations clés' : 'key achievements'
  const companiesTitle = isFr ? 'Entreprises' : 'Companies'
  const companiesSubtitle = isFr
    ? 'Des environnements variés, le même objectif : structurer, simplifier et scaler.'
    : 'Diverse environments. Same objective: structure, simplify and scale.'
  const companiesCount = isFr ? '12+ entreprises' : '12+ companies'
  const approachTitle = isFr ? 'Mon approche' : 'My approach'
  const expertiseTitle = isFr ? 'Ce que j\'apporte' : 'What I bring'
  const expertiseSubtitle = isFr
    ? 'Une approche orientée exécution, systèmes et résultats mesurables.'
    : 'An execution-first approach focused on systems and measurable results.'
  const timelineTitle = isFr ? 'Parcours et preuves' : 'Background & proof'
  const timelineSubtitle = isFr
    ? 'Des expériences utiles quand il faut structurer, simplifier et scaler.'
    : 'Experiences that matter when you need to structure, simplify and scale.'

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest text-sky-600 uppercase mb-4"
            >
              {isFr ? 'Operator · Systems Builder · Founder' : 'Operator · Systems Builder · Founder'}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
            >
              {t('title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-sky-400 rounded-full font-semibold text-sm"
            >
              {t('experience')}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              {expertiseTitle}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {expertiseSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full border border-slate-100">
                  <CardHeader>
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {timelineTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {timelineSubtitle}
            </p>
          </div>

          <div className="space-y-8">
            {/* First 2 experiences always visible */}
            {timeline.slice(0, 2).map((item: any, index: number) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-900 text-sky-400 rounded-full flex items-center justify-center font-semibold text-base">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                        {item.year}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.achievements?.length || 0} {achievementsLabel}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {linkifyMoverz(item.title)}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {linkifyMoverz(item.description)}
                    </p>
                    {item.achievements && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {item.achievements.map((achievement: string, achievementIndex: number) => (
                          <div
                            key={achievementIndex}
                            className="flex items-center space-x-2 bg-slate-50 px-3 py-2 rounded-lg"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700 font-medium">
                              {linkifyMoverz(achievement)}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {index < 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-slate-200"></div>
                )}
              </motion.div>
            ))}

            {/* Expand indicator */}
            <div className="relative">
              <div className="absolute left-8 top-0 w-0.5 h-8 bg-slate-200"></div>
              <div className="flex items-center justify-center pt-8 pb-4">
                <div className="flex items-center space-x-3 text-slate-400 text-xs uppercase tracking-wide">
                  <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                  <div className="w-16 h-0.5 bg-slate-200"></div>
                  <span>{moreLabel}</span>
                  <div className="w-16 h-0.5 bg-slate-200"></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                </div>
              </div>
              {!isTimelineExpanded && (
                <div className="text-center mb-6">
                  <button
                    onClick={() => setIsTimelineExpanded(true)}
                    className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
                  >
                    <ChevronDown className="w-5 h-5 mr-2" />
                    {expandLabel}
                  </button>
                </div>
              )}
            </div>

            {/* Additional experiences */}
            {isTimelineExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 pt-8 border-t border-gray-200"
              >
                {timeline.slice(2).map((item: any, index: number) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-slate-900 text-sky-400 rounded-full flex items-center justify-center font-semibold text-base">
                          {index + 3}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <div className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                            {item.year}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.achievements?.length || 0} {achievementsLabel}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {linkifyMoverz(item.title)}
                        </h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {linkifyMoverz(item.description)}
                        </p>
                        {item.achievements && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {item.achievements.map((achievement: string, achievementIndex: number) => (
                              <div
                                key={achievementIndex}
                                className="flex items-center space-x-2 bg-slate-50 px-3 py-2 rounded-lg"
                              >
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700 font-medium">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {index < timeline.slice(2).length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-12 bg-slate-200"></div>
                    )}
                  </motion.div>
                ))}
                <div className="text-center pt-8">
                  <button
                    onClick={() => setIsTimelineExpanded(false)}
                    className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
                  >
                    <ChevronUp className="w-5 h-5 mr-2" />
                    {collapseLabel}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* About Guillaume + photo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {approachTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('description')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-slate-100 to-sky-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/guillaume/guillaume-stehelin.jpg"
                    alt="Guillaume Stehelin de Taisne"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                      if (nextElement) nextElement.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-sky-700 flex items-center justify-center text-white text-6xl font-bold">
                    G
                  </div>
                </div>

                <Link
                  href="https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white hover:bg-blue-50 text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>

              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Guillaume Stehelin de Taisne</h3>
                <p className="text-base text-gray-500 mb-3">
                  {isFr ? 'Operator · Systems Builder · Founder' : 'Operator · Systems Builder · Founder'}
                </p>
                <Link
                  href="https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  {isFr ? 'Profil LinkedIn' : 'LinkedIn profile'}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech & Systems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('techSection.title')}
            </h2>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {t.raw('techSection.paragraphs').map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What I build Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('buildSection.title')}
            </h2>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {t.raw('buildSection.paragraphs').map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              {companiesTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {companiesSubtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-3 p-2 shadow-sm border border-gray-200">
                  <Image
                    src={company.logo}
                    alt={`Logo ${company.name}`}
                    width={48}
                    height={48}
                    className="object-contain max-w-full max-h-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                      if (nextElement) nextElement.style.display = 'flex'
                    }}
                  />
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-lg hidden">
                    {company.name.charAt(0)}
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {company.name}
                </span>
                <span className="text-xs text-gray-500 text-center mt-1">
                  {company.description}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-slate-900 text-sky-400 rounded-full font-semibold">
              <Users className="w-5 h-5 mr-2" />
              {companiesCount}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case studies / Portfolio */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('portfolioSection.title')}
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              {t('portfolioSection.intro')}
            </p>
          </div>
          <div className="space-y-6">
            {t.raw('portfolioSection.items').map((item: any, index: number) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {linkifyMoverz(item.title)}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {linkifyMoverz(item.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
