'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, CheckCircle, ArrowRight, Linkedin } from 'lucide-react'
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
  const locale = useLocale()
  const isFr = locale === 'fr'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Send failed')
      }
    } catch {
      const subject = encodeURIComponent(`Strategy call request — ${formData.company || formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nNeed: ${formData.stage}\n\n${formData.message}`
      )
      window.location.href = `mailto:gdetaisne@gmail.com?subject=${subject}&body=${body}`
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const stages = isFr
    ? [
        'Construire un système opérationnel',
        'Structurer la croissance',
        'Intervention de crise / SWAT',
        'Sprint systèmes (outils, automatisation)',
        'COO Fractionnel (mission continue)',
        'Autre',
      ]
    : [
        'Build an operating system',
        'Structure growth from chaos',
        'Crisis / SWAT intervention',
        'Systems build sprint (tools, automation)',
        'Fractional COO (ongoing)',
        'Other',
      ]

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-slate-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center px-4"
        >
          <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">
            {isFr ? 'Message envoyé !' : 'Message sent!'}
          </h2>
          <p className="text-slate-300 mb-6">
            {isFr
              ? 'Votre demande a été transmise. Je reviens vers vous rapidement avec un premier retour.'
              : 'Your request has been sent. I will come back to you quickly with a first angle of attack.'}
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            {isFr ? 'Envoyer une autre demande' : 'Send another request'}
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4"
            >
              {isFr ? 'Contact' : 'Contact'}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {t('title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {isFr ? 'Demande de contact' : 'Request a conversation'}
                  </h2>
                  <p className="text-gray-600">
                    {isFr
                      ? 'Quelques lignes suffisent pour cadrer un premier retour utile.'
                      : 'A few lines are enough to frame a useful first response.'}
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder={isFr ? 'Votre nom complet' : 'Your full name'}
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="your@email.com"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder={isFr ? 'Votre entreprise' : 'Your company'}
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      >
                        <option value="">
                          {isFr ? 'Sélectionnez votre besoin principal' : 'Select your primary need'}
                        </option>
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
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder={
                          isFr
                            ? 'Décris ta situation : ce qui bloque, ce que tu veux construire, à quelle vitesse.'
                            : 'Describe your situation: what is breaking, what you want to build, how fast you need to move.'
                        }
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      {isSubmitting
                        ? (isFr ? 'Envoi...' : 'Sending...')
                        : t('form.submit')}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {isFr ? 'Contact direct' : 'Direct contact'}
                  </h2>
                  <p className="text-gray-600">
                    {isFr
                      ? 'Préfères un échange direct ? Voici comment me joindre.'
                      : 'Prefer a direct conversation? Here is how to reach me.'}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-sky-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Email</p>
                        <a href="mailto:gdetaisne@gmail.com" className="text-sky-600 hover:text-sky-700">
                          gdetaisne@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="w-5 h-5 text-sky-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          {isFr ? 'Localisation' : 'Location'}
                        </p>
                        <p className="text-gray-600">Bahrain / Remote-first</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-sky-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          {isFr ? 'Délai de réponse' : 'Response time'}
                        </p>
                        <p className="text-gray-600">
                          {isFr ? 'Réponse sous 24h' : 'Within 24h'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Linkedin className="w-5 h-5 text-sky-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">LinkedIn</p>
                        <a
                          href="https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:text-sky-700 text-sm"
                        >
                          guillaume-stehelin-de-taisne
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to expect */}
              <Card className="bg-slate-950 border-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4">
                    {isFr ? 'Ce que vous recevrez' : 'What you will get'}
                  </h3>
                  <ul className="space-y-3">
                    {(isFr
                      ? [
                          'Un premier retour avec un angle d\'attaque clair',
                          'Une évaluation rapide de votre situation',
                          'Un format d\'engagement adapté à votre besoin',
                          'Pas de pitch générique, pas de devis à l\'aveugle',
                        ]
                      : [
                          'A first response with a clear angle of attack',
                          'A fast assessment of your situation',
                          'An engagement format matched to your need',
                          'No generic pitch, no blind proposal',
                        ]
                    ).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
