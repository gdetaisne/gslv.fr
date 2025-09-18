'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { MapPin, Building, Users, TrendingUp, Calendar, Star, ArrowRight, CheckCircle, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import Button from '../../components/Button'
import { Card, CardContent, CardHeader } from '../../components/Card'

interface NewsItem {
  title: string
  summary: string
  link: string
  pubDate: string
  source: string
  category: string
}

export default function ConsultantCFOLaRochellePage() {
  const t = useTranslations('consultant-cfo-la-rochelle')
  const locale = useLocale()
  const [localNews, setLocalNews] = useState<NewsItem[]>([])
  const [isLoadingNews, setIsLoadingNews] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  // Fonction pour récupérer les actualités
  const fetchNews = async () => {
    try {
      setIsLoadingNews(true)
      const response = await fetch('/api/news')
      const data = await response.json()
      
      if (data.success && data.news) {
        setLocalNews(data.news)
        setLastUpdated(data.lastUpdated)
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des actualités:', error)
    } finally {
      setIsLoadingNews(false)
    }
  }

  // Charger les actualités au montage du composant
  useEffect(() => {
    fetchNews()
  }, [])

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
      name: "Le Bastion Coworking",
      address: "24 Rue du Bastion Saint-Nicolas, 17000 La Rochelle",
      description: "500m² d'espace de travail en face de la gare, ouvert 24h/24, 7j/7",
      price: "À partir de 25€/jour",
      features: ["Bureaux partagés", "Bureaux privatifs", "Salles de réunion", "Wi-Fi haut débit", "Événements networking"],
      link: "https://coworking-larochelle.fr/"
    },
    {
      name: "9 Coworking",
      address: "6 rue Virginie Hériot, 17000 La Rochelle",
      description: "Espace moderne avec postes flexibles et bureaux privatifs",
      price: "À partir de 21€/jour",
      features: ["Open-space", "Bureaux privatifs", "Salles de réunion", "Cuisine équipée", "Parking"],
      link: "https://9coworking.fr/"
    },
    {
      name: "WorkingShare Kastler",
      address: "15 rue Alfred Kastler, 17000 La Rochelle",
      description: "Espace professionnel avec bureaux privatifs et salles de réunion équipées",
      price: "À partir de 20€/heure",
      features: ["Bureaux privatifs", "Salles de réunion", "Wi-Fi haut débit", "Équipements visioconférence"],
      link: "https://workin.space/coworking/france/charente-maritime-17/la-rochelle-17000/"
    },
    {
      name: "Les Cabanes Urbaines",
      address: "22 Rue Cardinal, 17000 La Rochelle",
      description: "Cadre de travail atypique et inspirant dans le centre historique",
      price: "Tarifs flexibles",
      features: ["Coworking créatif", "Salles de réunion", "Ambiance conviviale", "Événements culturels"],
      link: "http://www.lescabanesurbaines.fr/"
    }
  ]

  const localEcosystem = [
    {
      name: "La Rochelle Technopole",
      type: "Structure d'animation économique",
      description: "Accompagnement des projets innovants et développement économique local",
      focus: "Innovation, développement économique, accompagnement",
      link: "https://www.larochelle-innovation.com/"
    },
    {
      name: "Le Village by CA La Rochelle",
      type: "Incubateur",
      description: "Incubateur du Crédit Agricole offrant financement, mentorat et réseau",
      focus: "Financement, mentorat, réseau, incubation",
      link: "https://levillagebyca.com/"
    },
    {
      name: "Pépinière Créatio®ImagéTIC",
      type: "Pépinière d'entreprises",
      description: "Bureaux à partir de 13m² pour jeunes entreprises innovantes TIC",
      focus: "Technologies de l'information, innovation, hébergement",
      link: "https://www.creatio-imagetic.fr/"
    },
    {
      name: "La Rochelle Tech",
      type: "Communauté tech",
      description: "Meetups, conférences techniques et ateliers pour professionnels du numérique",
      focus: "Tech, innovation, networking, formation",
      link: "https://www.meetup.com/fr-FR/La-Rochelle-Tech/"
    }
  ]

  const localStats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "50+", label: "Entreprises accompagnées" },
    { number: "100%", label: "Satisfaction client" },
    { number: "24h", label: "Réponse garantie" }
  ]

  const startupEcosystemStats = [
    { number: "200+", label: "Startups actives", description: "Entreprises innovantes dans l'agglomération rochelaise" },
    { number: "45M€", label: "Levées de fonds 2023", description: "Investissements captés par les startups locales" },
    { number: "12", label: "Incubateurs & accélérateurs", description: "Structures d'accompagnement pour entrepreneurs" },
    { number: "8%", label: "Croissance emploi tech", description: "Évolution annuelle des emplois numériques" },
    { number: "1500+", label: "Emplois numériques", description: "Professionnels du digital à La Rochelle" },
    { number: "25+", label: "Événements tech/an", description: "Meetups, conférences et ateliers organisés" }
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
                className="group"
              >
                <a 
                  href={actor.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                          {actor.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-primary-600 transition-colors">
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
                      <div className="text-xs sm:text-sm text-gray-500 font-medium mb-4">
                        Focus: {actor.focus}
                      </div>
                      <div className="flex items-center text-primary-600 text-sm font-medium">
                        <span>En savoir plus</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
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
                className="group"
              >
                <a 
                  href={space.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
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
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {space.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-primary-600 text-sm font-medium">
                        <span>Voir le site</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
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
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4"
            >
              Restez informé de l'actualité économique et tech de La Rochelle
            </motion.p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={fetchNews}
                disabled={isLoadingNews}
                className="flex items-center gap-2 px-4 py-2 text-sm text-primary-600 hover:text-primary-700 disabled:opacity-50 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isLoadingNews ? 'animate-spin' : ''}`} />
                {isLoadingNews ? 'Chargement...' : 'Actualiser'}
              </button>
              {lastUpdated && (
                <span className="text-xs text-gray-500">
                  Dernière mise à jour : {new Date(lastUpdated).toLocaleTimeString('fr-FR')}
                </span>
              )}
            </div>
          </div>

          {isLoadingNews ? (
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-6 h-6 animate-spin text-primary-600" />
                <span className="text-gray-600">Chargement des actualités...</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {localNews.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <a 
                  href={news.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                          {news.category}
                        </span>
                        <span className="text-xs text-gray-500">{news.pubDate}</span>
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
                </a>
              </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-sm text-gray-600 mb-4">
                Sources : La Rochelle Info, Charente Libre, Sud Ouest, France 3 Nouvelle-Aquitaine
              </p>
              <a 
                href="https://larochelleinfo.media/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="text-sm px-6 py-3">
                  Voir toutes les actualités
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Startup Ecosystem Stats Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            >
              L'écosystème des startups à La Rochelle en chiffres
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Un écosystème dynamique qui attire les talents et les investissements
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {startupEcosystemStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                      {stat.number}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
