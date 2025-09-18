'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()

  const footerLinks = {
    services: [
      { name: 'CFO Part-time', href: `/${locale}/services#cfo` },
      { name: 'COO Part-time', href: `/${locale}/services#coo` },
      { name: 'Scalabilité', href: `/${locale}/services#scalability` },
    ],
    company: [
      { name: t('links.privacy'), href: `/${locale}/privacy` },
      { name: t('links.terms'), href: `/${locale}/terms` },
      { name: t('links.cookies'), href: `/${locale}/cookies` },
    ],
    blog: [
      { name: 'Scaling & Opérations', href: `/${locale}/blog?category=scaling` },
      { name: 'Finance pour startups', href: `/${locale}/blog?category=finance` },
      { name: 'Outils & Processus', href: `/${locale}/blog?category=tools` },
      { name: 'Levées de fonds', href: `/${locale}/blog?category=fundraising` },
    ],
  }

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold">GSLV.cloud</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-sm">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/guillaume-stehelin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/gslv_cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Blog</h3>
            <ul className="space-y-2">
              {footerLinks.blog.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact d'urgence</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a
                  href="mailto:gdetaisne@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  gdetaisne@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a
                  href="tel:+33633046059"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +33 6 33 04 60 59
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a
                  href="tel:+66647582032"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +66 6 47 58 20 32
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Paris, France & Bangkok, Thailand</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}