'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../../components/Card'

export default function PrivacyPage() {
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
              <Shield className="w-8 h-8 text-primary-600" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-dark-900 mb-6"
            >
              Politique de confidentialité
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
              <h2 className="text-2xl font-bold text-dark-900 mb-6">1. Collecte des données</h2>
              <p className="text-gray-700 mb-6">
                Nous collectons les informations que vous nous fournissez directement, notamment lorsque vous :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Remplissez notre formulaire de contact</li>
                <li>Vous abonnez à notre newsletter</li>
                <li>Naviguez sur notre site web</li>
                <li>Communiquez avec nous par email</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">2. Utilisation des données</h2>
              <p className="text-gray-700 mb-6">
                Nous utilisons vos données personnelles pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Répondre à vos demandes et vous fournir nos services</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                <li>Respecter nos obligations légales</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">3. Partage des données</h2>
              <p className="text-gray-700 mb-6">
                Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf dans les cas suivants :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter une obligation légale</li>
                <li>Avec nos prestataires de services (sous contrat de confidentialité)</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">4. Sécurité des données</h2>
              <p className="text-gray-700 mb-6">
                Nous mettons en place des mesures de sécurité appropriées pour protéger vos données personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction.
              </p>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">5. Vos droits</h2>
              <p className="text-gray-700 mb-6">
                Conformément au RGPD, vous avez le droit de :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Accéder à vos données personnelles</li>
                <li>Rectifier vos données personnelles</li>
                <li>Supprimer vos données personnelles</li>
                <li>Limiter le traitement de vos données</li>
                <li>Vous opposer au traitement de vos données</li>
                <li>Portabilité de vos données</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">6. Contact</h2>
              <p className="text-gray-700 mb-6">
                Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à :
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


