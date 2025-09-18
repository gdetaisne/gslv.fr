'use client'

import { motion } from 'framer-motion'
import { Cookie, Settings, Eye, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../../components/Card'

export default function CookiesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Cookie className="w-8 h-8 text-primary-600" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-dark-900 mb-6"
            >
              Gestion des cookies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Dernière mise à jour : 17 septembre 2024
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-6">Qu'est-ce qu'un cookie ?</h2>
              <p className="text-gray-700 mb-6">
                Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies nous permettent de reconnaître votre appareil et de mémoriser certaines informations sur vos préférences.
              </p>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">Types de cookies utilisés</h2>
              
              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-primary-600" />
                      <h3 className="text-lg font-semibold text-dark-900">Cookies essentiels</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Cookies de session</li>
                      <li>Cookies de sécurité</li>
                      <li>Cookies de préférences de langue</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Eye className="w-6 h-6 text-accent-600" />
                      <h3 className="text-lg font-semibold text-dark-900">Cookies analytiques</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Ces cookies nous aident à comprendre comment vous utilisez notre site.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Google Analytics</li>
                      <li>Statistiques de visite</li>
                      <li>Données de performance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Settings className="w-6 h-6 text-purple-600" />
                      <h3 className="text-lg font-semibold text-dark-900">Cookies de préférences</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Ces cookies mémorisent vos choix et préférences.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Préférences de langue</li>
                      <li>Paramètres d'affichage</li>
                      <li>Préférences de contenu</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">Gestion de vos cookies</h2>
              <p className="text-gray-700 mb-6">
                Vous pouvez contrôler et gérer les cookies de plusieurs façons :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Via les paramètres de votre navigateur</li>
                <li>En utilisant notre bannière de cookies</li>
                <li>En nous contactant directement</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">Paramètres du navigateur</h2>
              <p className="text-gray-700 mb-6">
                La plupart des navigateurs vous permettent de :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Voir quels cookies sont stockés</li>
                <li>Supprimer les cookies individuellement ou en masse</li>
                <li>Bloquer les cookies de sites tiers</li>
                <li>Bloquer tous les cookies</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">Conséquences de la désactivation</h2>
              <p className="text-gray-700 mb-6">
                Si vous désactivez les cookies, certaines fonctionnalités de notre site peuvent ne pas fonctionner correctement :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Préférences de langue non mémorisées</li>
                <li>Formulaires nécessitant une reconnexion</li>
                <li>Fonctionnalités personnalisées indisponibles</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">Contact</h2>
              <p className="text-gray-700 mb-6">
                Pour toute question concernant notre utilisation des cookies, vous pouvez nous contacter à :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email :</strong> contact@gslv.cloud</p>
                <p className="text-gray-700"><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}


