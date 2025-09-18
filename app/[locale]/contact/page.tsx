'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from 'lucide-react'
import Button from '../../components/Button'
import { Card, CardContent, CardHeader } from '../../components/Card'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const t = useTranslations('contact')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Envoi de l'email via l'API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'gdetaisne@gmail.com',
          subject: `Demande d'intervention d'urgence - ${formData.company || 'Particulier'}`,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          stage: formData.stage,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }
    } catch (error) {
      console.error('Erreur:', error)
      // Fallback: redirection vers mailto
      const subject = encodeURIComponent(`Demande d'intervention d'urgence - ${formData.company || 'Particulier'}`)
      const body = encodeURIComponent(`
Nom: ${formData.name}
Email: ${formData.email}
Entreprise: ${formData.company}
Situation: ${formData.stage}

Message:
${formData.message}
      `)
      window.location.href = `mailto:gdetaisne@gmail.com?subject=${subject}&body=${body}`
    }
    
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: 'Email d\'urgence',
      value: 'gdetaisne@gmail.com',
      link: 'mailto:gdetaisne@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: 'Téléphone France',
      value: '+33 6 33 04 60 59',
      link: 'tel:+33633046059'
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: 'Téléphone Thaïlande',
      value: '+66 6 47 58 20 32',
      link: 'tel:+66647582032'
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: 'Localisation',
      value: 'Paris, France & Bangkok, Thailand',
      link: null
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: 'Disponibilité',
      value: '24h/24 - Interventions d\'urgence',
      link: null
    }
  ]

  const stages = [
    '🚨 Situation critique (0-48h)',
    '⚠️ Difficultés majeures (1-2 semaines)',
    '🔧 Restructuration (1-3 mois)',
    '📊 Audit préventif',
    'Autre'
  ]

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="p-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                Message envoyé !
              </h2>
              <p className="text-gray-600 mb-6">
                Votre demande d'intervention d'urgence a été transmise à gdetaisne@gmail.com. 
                Je vous réponds sous 24h maximum.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Envoyer un autre message
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

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
              className="text-4xl md:text-5xl font-bold text-dark-900 mb-6"
            >
              {t('title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Garantie de réponse */}
      <section className="py-12 bg-red-50 border-b border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-4"
          >
            <Shield className="w-8 h-8 text-red-600" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-800 mb-2">
                Garantie de réponse sous 24h
              </h3>
              <p className="text-red-700">
                Toute demande d'intervention d'urgence reçoit une réponse dans les 24h maximum
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-dark-900 mb-2">
                    Demande d'information / contact
                  </h2>
                  <p className="text-gray-600">
                    Besoin d'informations ? Envoyez-moi un message
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Votre nom complet"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>

                    <div>
                      <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.stage')} *
                      </label>
                      <select
                        id="stage"
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez votre stade</option>
                        {stages.map((stage) => (
                          <option key={stage} value={stage}>
                            {stage}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Décrivez brièvement votre situation d'urgence..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full btn-hover"
                      isLoading={isSubmitting}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande d\'urgence'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-dark-900 mb-2">
                    Contact d'urgence
                  </h2>
                  <p className="text-gray-600">
                    Situation critique ? Contactez-moi immédiatement
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark-900">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-primary-600 hover:text-primary-700 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}