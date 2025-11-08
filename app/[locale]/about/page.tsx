'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, TrendingUp, Target, Lightbulb, Linkedin, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '../../components/Card'
import { useState } from 'react'

export default function AboutPage() {
  const t = useTranslations('about')
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false)

  const stats = [
    { number: '15+', label: 'Années d\'expérience' },
    { number: '50+', label: 'Entreprises restructurées' },
    { number: '€100M+', label: 'CA géré cumulé' },
    { number: '550+', label: 'Employés supervisés' }
  ]

  const expertise = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      title: 'Structuration financière',
      description: 'Mise en place de tableaux de bord, reporting et processus financiers adaptés à votre croissance.'
    },
    {
      icon: <Target className="w-8 h-8 text-accent-600" />,
      title: 'Levées de fonds',
      description: 'Accompagnement complet de la préparation à la négociation, de Seed à Series B.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Optimisation opérationnelle',
      description: 'Structuration des processus et des équipes pour gérer l\'hypercroissance.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      title: 'Scaling et hypercroissance',
      description: 'Stratégies et outils pour maintenir la performance lors de la croissance rapide.'
    }
  ]

  const timeline = t.raw('timeline')

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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6 leading-tight"
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
              className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-700 rounded-full font-semibold"
            >
              <Award className="w-5 h-5 mr-2" />
              {t('experience')}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section - 1. Domaines d'expertise */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-900 mb-4 leading-tight">
              Domaines d'expertise
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une approche complète pour accompagner votre croissance
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
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 mb-2">
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

      {/* Timeline Section - 2. Parcours professionnel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Parcours professionnel
            </h2>
            <p className="text-xl text-gray-600">
              15+ années d'expérience en restructuration d'entreprises et gestion de crise
            </p>
          </div>

          <div className="space-y-8">
            {/* Affichage des 2 premières expériences (jusqu'à SecurClés) */}
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
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {item.year}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.achievements?.length || 0} réalisations clés
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    {item.achievements && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {item.achievements.map((achievement: string, achievementIndex: number) => (
                          <div
                            key={achievementIndex}
                            className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700 font-medium">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {index < 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-primary-200 to-transparent"></div>
                )}
              </motion.div>
            ))}

            {/* Indicateur visuel + Bouton d'expansion */}
            <div className="relative">
              {/* Ligne de continuation */}
              <div className="absolute left-8 top-0 w-0.5 h-8 bg-gradient-to-b from-primary-200 to-primary-300"></div>
              
              {/* Point de continuation */}
              <div className="flex items-center justify-center pt-8 pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary-300 to-primary-200"></div>
                  <div className="w-4 h-4 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary-300 to-primary-200"></div>
                  <div className="w-4 h-4 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Texte indicateur + Bouton d'expansion */}
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 mb-4">
                  +{timeline.length - 2} autres expériences
                </p>
                {!isTimelineExpanded && (
                  <button
                    onClick={() => setIsTimelineExpanded(!isTimelineExpanded)}
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
                  >
                    <ChevronDown className="w-5 h-5 mr-2" />
                    Voir le parcours complet
                  </button>
                )}
              </div>
            </div>

            {/* Expériences supplémentaires (affichées si expandé) */}
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
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {index + 3}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <div className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                            {item.year}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.achievements?.length || 0} réalisations clés
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-dark-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        {item.achievements && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {item.achievements.map((achievement: string, achievementIndex: number) => (
                              <div
                                key={achievementIndex}
                                className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
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
                      <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-primary-200 to-transparent"></div>
                    )}
                  </motion.div>
                ))}
                
                {/* Bouton "Voir moins" en bas des expériences supplémentaires */}
                <div className="text-center pt-8">
                  <button
                    onClick={() => setIsTimelineExpanded(false)}
                    className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
                  >
                    <ChevronUp className="w-5 h-5 mr-2" />
                    Voir moins
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section - 3. Les chiffres */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-dark-900 mb-4"
            >
              Entreprises accompagnées
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Des entreprises de renom m'ont fait confiance pour leur croissance et leur structuration
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
          >
            {/* Entreprises accompagnées */}
            {[
              { name: 'Jumia', logo: '/images/companies/jumia.png', description: 'E-commerce panafricain' },
              { name: 'HelloFood', logo: '/images/companies/hellofood.png', description: 'Livraison de repas' },
              { name: 'Ligerio', logo: '/images/companies/ligerio.png', description: 'BTP et construction' },
              { name: 'Aunis Ramonage', logo: '/images/companies/aunis-ramonage.png', description: 'Services techniques' },
              { name: 'Kaymu', logo: '/images/companies/kaymu.png', description: 'Marketplace e-commerce' },
              { name: 'Glossybox', logo: '/images/companies/glossybox.png', description: 'Beauté et cosmétiques' },
              { name: 'Orami', logo: '/images/companies/orami.png', description: 'Maternité et bébé' },
              { name: 'Securclés', logo: '/images/companies/securcles.png', description: 'Tech clés à distance brevetée' },
              { name: 'Jaiye', logo: '/images/companies/jaiye.jpeg', description: 'Plateforme digitale' },
              { name: 'Lamudi', logo: '/images/companies/lamudi.png', description: 'Immobilier en ligne' },
              { name: 'Lexolia', logo: '/images/companies/lexolia.png', description: 'Solutions digitales' },
              { name: 'Petloft', logo: '/images/companies/petloft.png', description: 'Services pour animaux' }
            ].map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-3 p-2 shadow-sm border border-gray-200">
                  <Image
                    src={company.logo}
                    alt={`Logo ${company.name}`}
                    width={48}
                    height={48}
                    className="object-contain max-w-full max-h-full"
                    onError={(e) => {
                      // Fallback si l'image n'existe pas
                      e.currentTarget.style.display = 'none'
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                      if (nextElement) {
                        nextElement.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center text-2xl hidden">
                    🏢
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
            <p className="text-gray-600 mb-4">
              Et bien d'autres entreprises dans différents secteurs...
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-700 rounded-full font-semibold">
              <Users className="w-5 h-5 mr-2" />
              12+ entreprises accompagnées
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Guillaume */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
                Mon approche
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('description')}
              </p>
              <div className="space-y-4">
                {['Structuration financière', 'Levées de fonds (Seed à Series B)', 'Optimisation opérationnelle', 'Scaling et hypercroissance'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
                   <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                     {/* Photo de Guillaume */}
                     <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                       <Image
                         src="/images/guillaume/guillaume-stehelin.jpg"
                         alt="Guillaume Stehelin de Taisne – Part-time CFO & COO"
                         fill
                         className="object-cover"
                         onError={(e) => {
                           // Fallback si l'image n'existe pas
                           e.currentTarget.style.display = 'none'
                           const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                           if (nextElement) {
                             nextElement.style.display = 'flex'
                           }
                         }}
                       />
                       <div className="w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white text-6xl font-bold">
                         G
                </div>
                     </div>
                     
                     {/* Lien LinkedIn */}
                     <Link
                       href="https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="absolute bottom-4 right-4 bg-white hover:bg-blue-50 text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                     >
                       <Linkedin className="w-6 h-6" />
                     </Link>
                   </div>
                   
                   {/* Informations sous la photo */}
                   <div className="text-center mt-6">
                     <h3 className="text-2xl font-bold text-dark-900 mb-2">Guillaume Stehelin de Taisne</h3>
                     <p className="text-lg text-gray-600 mb-3">Part-time CFO & COO – Consultant Opérations Coup de Poing</p>
                     <Link
                       href="https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                     >
                       <Linkedin className="w-5 h-5 mr-2" />
                       Voir le profil LinkedIn
                     </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Domaines d'expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche complète pour accompagner votre croissance
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
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 mb-2">
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

    </div>
  )
}