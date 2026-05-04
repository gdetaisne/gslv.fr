'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, ChevronDown, Clock, Target, TrendingUp, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useLocale } from 'next-intl'
import { Card, CardContent, CardHeader } from '../../../components/Card'
import Image from 'next/image'

export default function CFOPartTimeClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const locale = useLocale()

  const useCases = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      title: 'Execution is slowing down under growth',
      items: [
        'Customer data scattered across disconnected tools',
        'Manual follow-ups with no reliable tracking',
        'Too much dependency on a few key individuals'
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-accent-600" />,
      title: 'Financial and operational visibility is missing',
      items: [
        'No reliable view of real costs',
        'Cash and performance hard to monitor',
        'No clarity on what is actually degrading margin'
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Teams are compensating with workarounds',
      items: [
        'Double entry between disconnected tools',
        'Implicit, undocumented processes',
        'High cognitive load just to keep operations running'
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: 'Growth is creating more friction than value',
      items: [
        'Current systems cannot absorb increased volume',
        'Service quality degrades as the company scales',
        'No clear plan on what to build or fix first'
      ]
    }
  ]

  const deliverables = [
    {
      title: 'Fast workflow mapping',
      description: 'A full picture of your operating flow — from lead qualification to invoicing — with friction points and problematic handoffs identified.'
    },
    {
      title: 'Business impact assessment',
      description: 'What is costing time, quality or margin, and what is creating drag in daily execution.'
    },
    {
      title: 'Prioritized 30-day action plan',
      description: 'A short, concrete list of initiatives with a clear order: what to fix first, what to simplify, what to automate.'
    },
    {
      title: 'Tooling and automation recommendations',
      description: 'Pragmatic choices on tools, source of truth, control routines and useful automations — focused on ROI, not complexity.'
    }
  ]

  const proofPoints = [
    'Ligerio: €0 → €10M+ revenue in 4 years — logistics throughput x20 without adding operational headcount',
    'Moverz: AI-driven pricing engine — €1M+ in quote requests within 3 months of launch',
    'Rocket Internet / Jumia: SWAT operator across 20+ entities and 550+ FTE',
    'Cross-functional approach: operations, financial control and systems design'
  ]

  const faqs = [
    {
      question: 'Who is this diagnostic for?',
      answer: 'Founders and operators who feel execution is becoming fragile: slow processes, disconnected tools, no visibility, inconsistent quality, or growth that is creating more friction than value.'
    },
    {
      question: 'What do I actually receive?',
      answer: 'A clear workflow map, a business impact assessment and a prioritized action plan. Not a decorative audit — a working base you can act on immediately.'
    },
    {
      question: 'How long does the diagnostic take?',
      answer: 'Intentionally short: a few exchanges, a read of your critical tools and workflows, then a structured restitution with priorities. The goal is a fast, usable output — not a long project.'
    },
    {
      question: 'What happens after the diagnostic?',
      answer: 'If needed, I can lead the build-out: process simplification, dashboards, control routines, automations and internal tooling. The diagnostic defines the scope and priorities for what comes next.'
    },
    {
      question: 'Do you also intervene in urgent situations?',
      answer: 'Yes. When operations are breaking, I can step in to stabilize critical workflows, clarify priorities and restore minimum viable control before building more durable systems.'
    }
  ]

  const companies = [
    { name: 'Ligerio', logo: '/images/companies/ligerio.png' },
    { name: 'Jumia', logo: '/images/companies/jumia.png' },
    { name: 'HelloFood', logo: '/images/companies/hellofood.png' },
    { name: 'Securcles', logo: '/images/companies/securcles.png' },
    { name: 'Aunis Ramonage', logo: '/images/companies/aunis-ramonage.png' }
  ]

  const budgetItems = [
    { label: 'Workflow and friction point mapping', value: 'Included' },
    { label: '30-day prioritized action plan', value: 'Included' },
    { label: 'Tooling and automation recommendations', value: 'Included' },
  ]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4">
              Operating Diagnostic
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Fast diagnostic of operations, systems and bottlenecks
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Within 24–48h, I map your workflows, tools and constraints to identify the highest-leverage actions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="inline-flex items-center px-6 py-3 bg-sky-500/10 text-sky-400 border border-sky-500/30 rounded-full font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                24–48h diagnostic
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full font-semibold">
                <Users className="w-5 h-5 mr-2" />
                Operations · Systems · Cash
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-full font-semibold">
                <TrendingUp className="w-5 h-5 mr-2" />
                Prioritized action plan
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-600 text-white rounded-lg font-bold text-lg hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Book a strategy call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-slate-200 rounded-lg font-bold text-lg hover:bg-slate-900 transition-colors"
              >
                See the track record
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* This is not another audit */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            This is not another audit
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              The goal is not to produce a polished report that sits in a drawer. This diagnostic is designed to quickly identify where your company is losing time, service quality or margin.
            </p>
            <p>
              I look at real workflows, handoffs, tools, control points and how teams are compensating today. Then I prioritize what needs to be fixed, simplified or automated — and in which order.
            </p>
          </div>
        </div>
      </section>

      {/* Signals I often see */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Signals I often see
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If several of these resonate, there is likely a real systems problem worth addressing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
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
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                          {useCase.title}
                        </h3>
                        <ul className="space-y-2">
                          {useCase.items.map((item) => (
                            <li key={item} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
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
        </div>
      </section>

      {/* What the diagnostic produces */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            What the diagnostic produces
          </h2>

          <div className="space-y-6">
            {deliverables.map((item) => (
              <Card key={item.title} className="hover:shadow-lg transition-shadow">
                <CardContent>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Budget and format */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Budget and format
          </h2>

          <Card className="mb-8">
            <CardContent>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                What you are really buying
              </h3>
              <div className="space-y-4">
                {budgetItems.map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-3 border-b last:border-0">
                    <span className="text-gray-700">{row.label}</span>
                    <span className="font-bold text-gray-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-sky-50 border-2 border-sky-200">
            <CardContent>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Budget reference</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Fast diagnostic</span>
                  <span className="font-bold text-sky-700 text-xl">From €750 ex VAT / day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Follow-on execution</span>
                  <span className="font-bold text-sky-700">Scoped separately</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">How to use this</h4>
                <ul className="space-y-2">
                  {[
                    'Start small with a clear picture of the situation',
                    'Avoid launching a large, undefined project from day one',
                    'Prioritize what actually changes execution'
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why work with me */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Why work with me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {proofPoints.map((point) => (
              <Card key={point}>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{point}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center text-sky-600 hover:text-sky-700 font-bold text-lg"
            >
              See full background
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Environments */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Some environments</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company) => (
              <div key={company.name} className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-4 shadow-sm">
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={faq.question} className="cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-900 pr-4">{faq.question}</h3>
                    <ChevronDown className={`w-6 h-6 text-sky-600 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a clear picture of your operations?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Describe your activity, your tools and what is blocking execution today. I will come back with a concrete first angle of attack.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-600 text-white rounded-lg font-bold hover:bg-sky-700 transition-colors shadow-lg text-lg"
              >
                Book a strategy call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-slate-300">
              <a href="mailto:gdetaisne@gmail.com" className="inline-flex items-center hover:text-white">
                gdetaisne@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
