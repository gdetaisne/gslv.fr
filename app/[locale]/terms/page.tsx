'use client'

import { motion } from 'framer-motion'
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../../components/Card'

export default function TermsPage() {
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
              <FileText className="w-8 h-8 text-primary-600" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-dark-900 mb-6"
            >
              Conditions d'utilisation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Dernière mise à jour : 31 mars 2026
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
              <h2 className="text-2xl font-bold text-dark-900 mb-6">1. Acceptation des conditions</h2>
              <p className="text-gray-700 mb-6">
                En accédant et en utilisant ce site web, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">2. Description du service</h2>
              <p className="text-gray-700 mb-6">
                gslv.fr est exploité par TENEO W.L.L et présente des services de CFO et COO part-time pour les startups et scale-ups. Nos services incluent :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Direction financière externalisée</li>
                <li>Direction opérationnelle</li>
                <li>Accompagnement en scalabilité</li>
                <li>Conseil en levées de fonds</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">3. Utilisation du site</h2>
              <p className="text-gray-700 mb-6">
                Vous vous engagez à utiliser ce site de manière légale et conforme à ces conditions. Il est interdit de :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Utiliser le site à des fins illégales ou non autorisées</li>
                <li>Tenter d'accéder à des zones restreintes du site</li>
                <li>Transmettre des virus ou tout code malveillant</li>
                <li>Collecter des informations sur d'autres utilisateurs</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">4. Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-6">
                Le contenu de ce site, incluant les textes, images, logos et logiciels, est protégé par les droits de propriété intellectuelle et appartient à TENEO W.L.L ou à ses concédants de licence.
              </p>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">5. Limitation de responsabilité</h2>
              <p className="text-gray-700 mb-6">
                Dans la mesure permise par la loi applicable, TENEO W.L.L ne sera pas responsable des dommages directs, indirects, accessoires ou consécutifs résultant de l&apos;utilisation de ce site.
              </p>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">6. Modification des conditions</h2>
              <p className="text-gray-700 mb-6">
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet dès leur publication sur ce site.
              </p>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">7. Droit applicable</h2>
              <p className="text-gray-700 mb-6">
                Ces conditions sont régies par les lois applicables dans le Kingdom of Bahrain. Tout litige sera soumis à la compétence des juridictions compétentes du Bahrain, sauf disposition impérative contraire applicable à l&apos;utilisateur.
              </p>

              <h2 className="text-2xl font-bold text-dark-900 mb-6">8. Contact</h2>
              <p className="text-gray-700 mb-6">
                Pour toute question concernant ces conditions d'utilisation, vous pouvez nous contacter à :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Société :</strong> TENEO W.L.L</p>
                <p className="text-gray-700 mb-2"><strong>Email :</strong> gdetaisne@gmail.com</p>
                <p className="text-gray-700 mb-2"><strong>Téléphone :</strong> +33 6 33 04 60 59</p>
                <p className="text-gray-700"><strong>Adresse :</strong> Office 21, Building 6, Road 355, Block 327, Adliya, Kingdom of Bahrain</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}


