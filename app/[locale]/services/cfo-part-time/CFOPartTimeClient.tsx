'use client'

import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Target, Users, Clock, Euro, Phone, Mail, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Card, CardContent, CardHeader } from '../../../components/Card'
import Image from 'next/image'

export default function CFOPartTimeClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const useCases = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      title: "Levée de fonds (Seed à Série B)",
      items: [
        "Préparation pitch deck financier",
        "Modélisation financière 3 ans",
        "Négociation avec investisseurs",
        "Due diligence financière"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-accent-600" />,
      title: "Hypercroissance (scaling)",
      items: [
        "Structuration reporting investisseurs",
        "Mise en place KPI & dashboards",
        "Optimisation cash flow & BFR",
        "Recrutement équipe finance"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Structuration initiale (post-seed)",
      items: [
        "Setup comptabilité & outils",
        "Processus budgétaires",
        "Contrôle de gestion",
        "Conformité fiscale & sociale"
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Difficultés financières",
      items: [
        "Audit financier express",
        "Plan de redressement",
        "Négociation créanciers",
        "Restructuration coûts"
      ]
    }
  ]

  const missions = [
    {
      title: "Structuration financière",
      description: "Mise en place plan comptable adapté, choix et paramétrage outils (ERP, CRM, Excel), définition processus budgétaires & forecast, documentation procédures financières."
    },
    {
      title: "Reporting investisseurs & board",
      description: "Board pack mensuel (métriques + narratif), rapport trimestriel complet, préparation board meetings, communication transparente des risques."
    },
    {
      title: "Levées de fonds",
      description: "Business plan financier 3-5 ans, data room préparation, due diligence support, term sheet négociation, closing legal & financier."
    },
    {
      title: "Pilotage & KPI",
      description: "Dashboard temps réel, KPI essentiels (burn rate, runway, LTV/CAC), analyses sensibilité & scénarios, alertes précoces (cash, marge)."
    },
    {
      title: "Optimisation cash & BFR",
      description: "Prévision trésorerie 90 jours glissants, négociation délais fournisseurs, accélération encaissements clients, gestion stocks optimisée."
    },
    {
      title: "Scaling opérationnel",
      description: "Recrutement équipe finance, formation équipe aux outils, processus d'audit interne, préparation certification (si exit)."
    }
  ]

  const faqs = [
    {
      question: "Quelle est la différence entre un CFO et un DAF ?",
      answer: "Le CFO (Chief Financial Officer) a un rôle stratégique : levées de fonds, M&A, relations investisseurs, structuration financière. Le DAF (Directeur Administratif et Financier) est plus opérationnel : comptabilité, trésorerie, contrôle de gestion quotidien. Un CFO part-time combine les deux casquettes pour les startups et scale-ups."
    },
    {
      question: "Combien coûte un CFO part-time ?",
      answer: "Un CFO part-time coûte entre 6000€ et 15000€ par mois selon le temps d'intervention (1-3 jours/semaine) et l'expertise. C'est 3 à 5 fois moins cher qu'un CFO full-time (100-150k€/an + equity + charges) tout en bénéficiant d'un expert senior immédiatement opérationnel."
    },
    {
      question: "Combien de temps faut-il prévoir ?",
      answer: "Le temps minimum efficace est 1 jour/semaine (structuration de base). L'idéal est 2 jours/semaine pour un pilotage actif. Pour une levée de fonds, prévoir 3 jours/semaine pendant 3-6 mois. Le contrat est flexible et ajustable selon vos besoins."
    },
    {
      question: "Quand recruter un CFO full-time vs part-time ?",
      answer: "CFO part-time : < 50 personnes, < 10M€ CA, pre-Série B, besoin de flexibilité. CFO full-time : > 50 personnes, > 10M€ CA, post-Série B, équipe finance à manager en continu. Le CFO part-time est idéal pour structurer avant de passer full-time."
    },
    {
      question: "Un CFO part-time peut-il manager une équipe finance ?",
      answer: "Oui, via un management matriciel. Le CFO part-time forme l'équipe aux process, met en place les outils et reste disponible quotidiennement (Slack, visio). Il assure la direction stratégique pendant que le comptable/contrôleur gère l'opérationnel."
    },
    {
      question: "Quels outils utilisez-vous ?",
      answer: "Excel/Google Sheets pour la modélisation financière, Zoho CRM pour le pipeline commercial, Pennylane ou Qonto pour la comptabilité, Tableau/Looker pour les dashboards, Notion pour la documentation. Le choix dépend de votre stack existante."
    },
    {
      question: "Puis-je ajuster le temps d'intervention ?",
      answer: "Oui, le contrat est flexible avec préavis de 1 mois. Vous pouvez augmenter lors d'une levée de fonds ou réduire en période calme. Cette flexibilité est l'un des principaux avantages du CFO part-time vs full-time."
    },
    {
      question: "Que se passe-t-il en cas de besoin urgent ?",
      answer: "Intervention express sous 48h possible. Audit flash trésorerie en 1 jour, plan de sauvetage en 1 semaine. Disponibilité téléphonique illimitée incluse pour gérer les urgences."
    }
  ]

  const companies = [
    { name: 'Ligerio', logo: '/images/companies/ligerio.png' },
    { name: 'Jumia', logo: '/images/companies/jumia.png' },
    { name: 'HelloFood', logo: '/images/companies/hellofood.png' },
    { name: 'Securclés', logo: '/images/companies/securcles.png' },
    { name: 'Aunis Ramonage', logo: '/images/companies/aunis-ramonage.png' }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              CFO Part-time Paris :<br />Direction Financière Externalisée pour Startups
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Structurez vos finances, préparez vos levées de fonds et pilotez votre croissance avec un CFO senior expérimenté. 
              Intervention flexible, accompagnement sur-mesure.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-700 rounded-full font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                15+ années d'expérience
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-accent-100 text-accent-700 rounded-full font-semibold">
                <Users className="w-5 h-5 mr-2" />
                50+ entreprises accompagnées
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-700 rounded-full font-semibold">
                <Euro className="w-5 h-5 mr-2" />
                €100M+ CA géré
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fr/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Réserver un appel découverte (30 min gratuit)
              </Link>
              <Link
                href="/fr/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors"
              >
                Découvrir mon parcours
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qu'est-ce qu'un CFO part-time */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
            Qu'est-ce qu'un CFO part-time ? Définition et rôle
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Un <strong>CFO part-time</strong> (Chief Financial Officer externalisé) est un <strong>directeur financier externe</strong> qui intervient 
              de manière flexible dans votre entreprise, généralement 1 à 3 jours par semaine. Contrairement à un CFO full-time 
              ou un DAF traditionnel, le <strong>CFO externalisé</strong> offre :
            </p>
            <ul className="space-y-2">
              <li><strong>Expertise senior immédiate</strong> : 10-15+ années d'expérience opérationnelle</li>
              <li><strong>Coût réduit</strong> : 3 à 5 fois moins cher qu'un CFO full-time</li>
              <li><strong>Flexibilité</strong> : Ajustable selon vos besoins (levée de fonds, scaling, crise)</li>
              <li><strong>Scalabilité</strong> : Grandit avec vous sans engagement long terme</li>
            </ul>
            <p>
              Le <strong>consultant CFO part-time</strong> combine vision stratégique (levées de fonds, M&A, board) 
              et excellence opérationnelle (dashboards, cash management, contrôle de gestion). C'est la solution idéale 
              pour les startups et scale-ups qui ont besoin d'une <strong>direction financière externalisée</strong> professionnelle 
              sans les coûts d'un recrutement full-time.
            </p>
          </div>
        </div>
      </section>

      {/* Dans quels cas faire appel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Quand faire appel à un CFO part-time ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              6 situations où un directeur financier externe fait la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                          {useCase.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-dark-900 mb-4">
                          {useCase.title}
                        </h3>
                        <ul className="space-y-2">
                          {useCase.items.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/fr/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-lg"
            >
              Vous vous reconnaissez ? Parlons-en →
            </Link>
          </div>
        </div>
      </section>

      {/* Missions typiques */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-12 text-center">
            Que fait concrètement un CFO part-time ?
          </h2>

          <div className="space-y-6">
            {missions.map((mission, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent>
                  <h3 className="text-xl font-bold text-dark-900 mb-3">
                    {mission.title}
                  </h3>
                  <p className="text-gray-700">
                    {mission.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs & Modalités */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6 text-center">
            Tarifs CFO part-time : combien ça coûte ?
          </h2>
          
          <Card className="mb-8">
            <CardContent>
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Fourchettes marché 2025</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">CFO junior (3-7 ans exp)</span>
                  <span className="font-bold text-gray-900">800-1200€/jour</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">CFO senior (10+ ans exp)</span>
                  <span className="font-bold text-gray-900">1200-2000€/jour</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">CFO expert (15+ ans, scale-ups)</span>
                  <span className="font-bold text-primary-600">1800-2500€/jour</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary-50 border-2 border-primary-200 mb-8">
            <CardContent>
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Mon approche GSLV</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">1 jour/semaine</span>
                  <span className="font-bold text-primary-600 text-xl">à partir de 6000€/mois</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">2 jours/semaine</span>
                  <span className="font-bold text-primary-600 text-xl">à partir de 10 000€/mois</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Mission ponctuelle (levée de fonds)</span>
                  <span className="font-bold text-primary-600">Sur devis</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">Inclus :</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Disponibilité téléphonique illimitée</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Outils & licences (Excel, dashboards)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Accès réseau (investisseurs, experts)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Support administratif</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-bold text-dark-900 mb-4">Comparaison CFO full-time vs part-time</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left py-3 px-4">Critère</th>
                      <th className="text-left py-3 px-4">CFO Full-time</th>
                      <th className="text-left py-3 px-4 bg-primary-50">CFO Part-time</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold">Coût annuel</td>
                      <td className="py-3 px-4">100-150k€ + equity + charges</td>
                      <td className="py-3 px-4 bg-primary-50 font-bold text-green-600">50-80k€, flexible</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold">Disponibilité</td>
                      <td className="py-3 px-4">5 jours/semaine</td>
                      <td className="py-3 px-4 bg-primary-50">1-3 jours/semaine ajustable</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold">Délai</td>
                      <td className="py-3 px-4">3-6 mois recrutement</td>
                      <td className="py-3 px-4 bg-primary-50 font-bold text-green-600">Sous 1 semaine</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Engagement</td>
                      <td className="py-3 px-4">CDI long terme</td>
                      <td className="py-3 px-4 bg-primary-50 font-bold text-green-600">Contrat flexible mensuel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Link
              href="/fr/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-lg"
            >
              Demander un devis personnalisé →
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi Guillaume */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-12 text-center">
            Pourquoi faire confiance à GSLV ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-dark-900 mb-3">15+ années d'expérience opérationnelle</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rocket Internet (Jumia, HelloFood) : scaling international</li>
                  <li>• Ligerio : cofondateur, 0 → 10M€, levée 3,9M€</li>
                  <li>• 50+ entreprises restructurées</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-dark-900 mb-3">Double casquette CFO + COO</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vision holistique (finance + ops)</li>
                  <li>• Optimisation coûts opérationnels</li>
                  <li>• Recrutement & management équipes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-dark-900 mb-3">Expert levées de fonds</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Seed à Série B accompagnées</li>
                  <li>• Réseau investisseurs (Paris, Bangkok)</li>
                  <li>• Taux de succès levées : 80%+</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-dark-900 mb-3">Méthodologie Rocket Internet</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Process documentés & scalables</li>
                  <li>• KPI obsessionnels</li>
                  <li>• Exécution rapide (plan 100 jours)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link
              href="/fr/about"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold text-lg"
            >
              Voir mon parcours complet →
            </Link>
          </div>
        </div>
      </section>

      {/* Logos clients */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-dark-900 mb-8 text-center">
            Ils m'ont fait confiance
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, idx) => (
              <div key={idx} className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-4 shadow-sm">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-12 text-center">
            FAQ : Vos questions sur le CFO part-time
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-dark-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t text-gray-700"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/fr/contact"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold text-lg"
            >
              Une autre question ? Posez-la moi →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à structurer votre direction financière ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Que vous prépariez une levée de fonds, soyez en hypercroissance ou traversiez une passe difficile, 
              je peux vous aider. Réservons 30 minutes pour discuter de vos enjeux — sans engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/fr/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg text-lg"
              >
                Réserver mon appel découverte (gratuit)
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/90">
              <a href="mailto:guillaume@gslv.fr" className="inline-flex items-center hover:text-white">
                <Mail className="w-5 h-5 mr-2" />
                guillaume@gslv.fr
              </a>
              <a href="tel:+33633046059" className="inline-flex items-center hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                +33 6 33 04 60 59
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <ul className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Appel sans engagement
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Devis personnalisé sous 48h
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Confidentialité garantie (NDA possible)
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

