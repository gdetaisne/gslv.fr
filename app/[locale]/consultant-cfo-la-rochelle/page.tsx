'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { MapPin, Building, Users, TrendingUp, Calendar, Star, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Button from '../../components/Button'
import { Card, CardContent, CardHeader } from '../../components/Card'

export default function ConsultantCFOLaRochellePage() {
  const t = useTranslations('consultant-cfo-la-rochelle')
  const locale = useLocale()

  const localServices = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Accompagnement CFO part-time",
      description: "Direction financière pour startups et PME de La Rochelle et sa région",
      features: [
        "Pilotage financier et reporting",
        "Optimisation de la trésorerie",
        "Préparation aux levées de fonds",
        "Accompagnement scaling"
      ]
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "COO opérations coup de poing",
      description: "Intervention d'urgence pour restructurer et optimiser vos opérations",
      features: [
        "Diagnostic opérationnel rapide",
        "Mise en place de processus",
        "Accompagnement équipes",
        "Suivi performance"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Conseil stratégique local",
      description: "Expertise du marché rochelais et de l'écosystème Nouvelle-Aquitaine",
      features: [
        "Connaissance du tissu économique local",
        "Réseau professionnel régional",
        "Accompagnement levées de fonds",
        "Conseil en croissance"
      ]
    }
  ]

  const coworkingSpaces = [
    {
      name: "9 Coworking",
      address: "6 rue Virginie Hériot, 17000 La Rochelle",
      description: "Espace moderne avec postes flexibles, bureaux privatifs et salles de réunion",
      price: "À partir de 21€/jour",
      features: ["Open-space", "Bureaux privatifs", "Salles de réunion", "Cuisine équipée"]
    },
    {
      name: "WorkingShare Kastler",
      address: "15 rue Alfred Kastler, 17000 La Rochelle",
      description: "Espace dédié aux professionnels de divers secteurs",
      price: "À partir de 20€/heure",
      features: ["Bureaux privatifs", "Salles de réunion", "Réseau professionnel", "Événements"]
    },
    {
      name: "WorkingShare Newton",
      address: "17 rue Isaac Newton, 17000 La Rochelle",
      description: "Espace spécialisé web et numérique",
      price: "Tarifs sur demande",
      features: ["Webdesigners", "Développeurs", "Consultants SEO", "Communauté tech"]
    },
    {
      name: "Les Cabanes Urbaines",
      address: "22 Rue Cardinal, 17000 La Rochelle",
      description: "Cadre de travail atypique et inspirant",
      price: "Tarifs flexibles",
      features: ["Coworking", "Salles de réunion", "Ambiance conviviale", "Événements"]
    }
  ]

  const localEcosystem = [
    {
      name: "Le Village by CA",
      type: "Incubateur",
      description: "Accompagnement startups avec solutions d'hébergement flexibles et réseau de mentors",
      focus: "Innovation, tech, services"
    },
    {
      name: "Pépinière Créatio®ImagéTIC",
      type: "Pépinière d'entreprises",
      description: "Bureaux à partir de 13m² pour jeunes entreprises TIC",
      focus: "Technologies de l'information"
    },
    {
      name: "La Rochelle Tech",
      type: "Communauté",
      description: "Meetups, conférences techniques et ateliers pour professionnels du numérique",
      focus: "Tech, innovation, networking"
    }
  ]

  const localStats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "50+", label: "Entreprises accompagnées" },
    { number: "100%", label: "Satisfaction client" },
    { number: "24h", label: "Réponse garantie" }
  ]

  const localNews = [
    {
      title: "La Rochelle : Nouvelle dynamique pour l'innovation tech",
      summary: "L'écosystème tech rochelais se renforce avec l'ouverture de nouveaux espaces de coworking et l'arrivée de startups innovantes.",
      date: "15 janvier 2024",
      category: "Innovation",
      source: "La Rochelle Info"
    },
    {
      title: "Startups rochelaises : levées de fonds en hausse",
      summary: "Plusieurs entreprises locales ont réussi leurs levées de fonds cette année, témoignant de la vitalité de l'écosystème entrepreneurial.",
      date: "10 janvier 2024",
      category: "Financement",
      source: "Charente Libre"
    },
    {
      title: "Le Village by CA La Rochelle : 50 startups accompagnées",
      summary: "L'incubateur du Crédit Agricole célèbre ses 2 ans avec un bilan positif et de nouveaux projets d'accompagnement.",
      date: "8 janvier 2024",
      category: "Incubation",
      source: "Sud Ouest"
    },
    {
      title: "Économie numérique : La Rochelle mise sur l'attractivité",
      summary: "La ville renforce son positionnement dans le numérique avec de nouveaux investissements et des partenariats stratégiques.",
      date: "5 janvier 2024",
      category: "Économie",
      source: "France 3 Nouvelle-Aquitaine"
    },
    {
      title: "Coworking à La Rochelle : une offre qui se diversifie",
      summary: "Les espaces de travail partagés se multiplient dans la ville, répondant à la demande croissante des entrepreneurs et freelances.",
      date: "3 janvier 2024",
      category: "Coworking",
      source: "La Rochelle Info"
    },
    {
      title: "PME rochelaises : accompagnement financier renforcé",
      summary: "De nouveaux dispositifs d'aide sont mis en place pour soutenir la croissance des entreprises locales.",
      date: "1er janvier 2024",
      category: "PME",
      source: "Charente-Maritime Entreprises"
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl mb-8"
            >
              <MapPin className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Consultant CFO & COO à La Rochelle
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Expert en direction financière et opérationnelle pour startups et PME de La Rochelle. 
              Accompagnement personnalisé dans l'écosystème entrepreneurial rochelais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  Consultation gratuite
                </Button>
              </Link>
              <Link href={`/${locale}/services`}>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  Nos services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Services adaptés à La Rochelle
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Une approche personnalisée pour l'écosystème entrepreneurial rochelais
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {localServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
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

      {/* Local Ecosystem */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            >
              L'écosystème entrepreneurial rochelais
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Découvrez les acteurs clés de l'innovation à La Rochelle
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {localEcosystem.map((actor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                        {actor.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                          {actor.name}
                        </h3>
                        <div className="text-xs sm:text-sm text-primary-600 font-medium">
                          {actor.type}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                      {actor.description}
                    </p>
                    <div className="text-xs sm:text-sm text-gray-500 font-medium">
                      Focus: {actor.focus}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coworking Spaces */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Espaces de coworking à La Rochelle
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Les meilleurs espaces pour travailler et collaborer à La Rochelle
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {coworkingSpaces.map((space, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {space.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          {space.address}
                        </div>
                        <div className="text-sm font-semibold text-primary-600">
                          {space.price}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.5</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      {space.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {space.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local News Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Actualités locales
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Restez informé de l'actualité économique et tech de La Rochelle
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {localNews.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                        {news.category}
                      </span>
                      <span className="text-xs text-gray-500">{news.date}</span>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors">
                      {news.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {news.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">
                        {news.source}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-sm text-gray-600 mb-4">
                Sources : La Rochelle Info, Charente Libre, Sud Ouest, France 3 Nouvelle-Aquitaine
              </p>
              <Button variant="outline" size="lg" className="text-sm px-6 py-3">
                Voir toutes les actualités
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {localStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Prêt à accélérer votre croissance à La Rochelle ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez comment nos services CFO & COO peuvent transformer votre entreprise rochelaise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  Consultation gratuite
                </Button>
              </Link>
              <Link href={`/${locale}/services`}>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
