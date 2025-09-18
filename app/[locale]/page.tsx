'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Zap, AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import { Card, CardContent, CardHeader } from '../components/Card'

export default function HomePage() {
  const t = useTranslations('hero')
  const tServices = useTranslations('services')
  const tTestimonials = useTranslations('testimonials')
  const tMethodology = useTranslations('methodology')
  const tStats = useTranslations('stats')
  
  // Carousel state
  const [currentImage, setCurrentImage] = useState(0)
  const [carouselImages, setCarouselImages] = useState<string[]>([])
  
  // Load carousel images
  useEffect(() => {
    // For now, we'll use placeholder images. In production, you would load from the carousel folder
    const images = [
      '/images/carousel/carousel-1.jpg',
      '/images/carousel/carousel-2.jpg',
      '/images/carousel/carousel-3.jpg',
      '/images/carousel/carousel-4.jpg',
      '/images/carousel/carousel-5.jpg'
    ]
    setCarouselImages(images)
  }, [])
  
  // Auto-rotate carousel
  useEffect(() => {
    if (carouselImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % carouselImages.length)
      }, 5000) // Change image every 5 seconds
      return () => clearInterval(interval)
    }
  }, [carouselImages.length])
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length)
  }
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      title: tServices('cfo.title'),
      description: tServices('cfo.description'),
      features: [
        'Reporting financier mensuel',
        'Gestion de trésorerie',
        'Prévisions et budgets',
        'Préparation levées de fonds',
        'Tableaux de bord KPI'
      ],
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-600" />,
      title: tServices('coo.title'),
      description: tServices('coo.description'),
      features: [
        'Structuration des processus',
        'Optimisation opérationnelle',
        'Gestion de l\'hypercroissance',
        'Mise en place d\'outils',
        'Formation des équipes'
      ],
      color: 'from-accent-500 to-accent-700'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: tServices('pompier.title'),
      description: tServices('pompier.description'),
      features: [
        '🚨 Diagnostic express (24-48h)',
        '🔧 Restructuration d\'urgence',
        '⚖️ Accompagnement en redressement judiciaire',
        '⚡ Stabilisation opérationnelle',
        '🎯 Plan de redressement personnalisé'
      ],
      color: 'from-red-500 to-red-700'
    }
  ]

  const testimonials = tTestimonials.raw('items')

  return (
    <div className="pt-16">
      {/* Hero Section with Carousel */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Carousel Background */}
        {carouselImages.length > 0 && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="relative w-full h-full">
              {carouselImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentImage ? 1 : 0,
                    scale: index === currentImage ? 1 : 1.1
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <Image
                    src={image}
                    alt={`Carousel image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    onError={() => {
                      // Fallback to gradient if image doesn't exist
                      console.log(`Image ${image} not found, using gradient fallback`)
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            >
              {t('title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto drop-shadow-lg"
            >
              {t('subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button size="lg" className="btn-hover bg-white text-primary-600 hover:bg-gray-100">
                  {t('cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" size="lg" className="btn-hover bg-white/20 text-white border-white hover:bg-white/30">
                  {t('ctaSecondary')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Carousel Controls */}
        {carouselImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions personnalisées pour chaque stade de votre croissance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-dark-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
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

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-dark-900 mb-4"
            >
              {tMethodology('title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-4"
            >
              {tMethodology('subtitle')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-500 max-w-3xl mx-auto"
            >
              {tMethodology('description')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tMethodology.raw('steps').map((step: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card hover className="h-full text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardHeader>
                </Card>
                
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-200 to-transparent transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Rotating Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-dark-900 mb-4"
            >
              {tStats('title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              {tStats('subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {tStats.raw('items').map((stat: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-dark-900 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rotating Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Animated Globe */}
                <div className="relative w-80 h-80">
                  {/* Base Globe */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 opacity-20"></div>
                  
                  {/* Rotating Dots */}
                  <div className="absolute inset-0 rounded-full">
                    {[...Array(50)].map((_, i) => {
                      const angle = (i * 360) / 50;
                      const radius = 120 + Math.sin(i * 0.5) * 20;
                      const x = Math.cos(angle * Math.PI / 180) * radius;
                      const y = Math.sin(angle * Math.PI / 180) * radius;
                      
                      return (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-primary-500 rounded-full"
                          style={{
                            left: `50%`,
                            top: `50%`,
                            transform: `translate(${x}px, ${y}px)`,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      );
                    })}
                  </div>

                  {/* Country Markers */}
                  <div className="absolute inset-0">
                    {/* France */}
                    <motion.div
                      className="absolute w-4 h-4 bg-red-500 rounded-full shadow-lg"
                      style={{ left: '45%', top: '35%' }}
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: ['0 0 0 0 rgba(239, 68, 68, 0.7)', '0 0 0 10px rgba(239, 68, 68, 0)', '0 0 0 0 rgba(239, 68, 68, 0)'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0,
                      }}
                    />
                    <div className="absolute text-xs font-semibold text-red-600" style={{ left: '50%', top: '25%' }}>
                      France
                    </div>

                    {/* Dubai */}
                    <motion.div
                      className="absolute w-4 h-4 bg-yellow-500 rounded-full shadow-lg"
                      style={{ left: '60%', top: '45%' }}
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: ['0 0 0 0 rgba(245, 158, 11, 0.7)', '0 0 0 10px rgba(245, 158, 11, 0)', '0 0 0 0 rgba(245, 158, 11, 0)'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.7,
                      }}
                    />
                    <div className="absolute text-xs font-semibold text-yellow-600" style={{ left: '65%', top: '35%' }}>
                      Dubai
                    </div>

                    {/* Thailand */}
                    <motion.div
                      className="absolute w-4 h-4 bg-green-500 rounded-full shadow-lg"
                      style={{ left: '70%', top: '55%' }}
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 10px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1.4,
                      }}
                    />
                    <div className="absolute text-xs font-semibold text-green-600" style={{ left: '75%', top: '45%' }}>
                      Thailand
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <motion.line
                      x1="45%"
                      y1="35%"
                      x2="60%"
                      y2="45%"
                      stroke="url(#gradient1)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.line
                      x1="60%"
                      y1="45%"
                      x2="70%"
                      y2="55%"
                      stroke="url(#gradient2)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.line
                      x1="70%"
                      y1="55%"
                      x2="45%"
                      y2="35%"
                      stroke="url(#gradient3)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#eab308" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#eab308" />
                        <stop offset="100%" stopColor="#22c55e" />
                      </linearGradient>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#ef4444" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              {tTestimonials('title')}
            </h2>
            <p className="text-xl text-gray-600">
              {tTestimonials('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-dark-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à accélérer votre croissance ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Réservez un appel découverte gratuit pour discuter de vos besoins
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="btn-hover">
                Réserver un appel découverte
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}