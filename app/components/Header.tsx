'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/app/lib/utils'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const t = useTranslations('navigation')
  const locale = useLocale()

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    {
      name: t('services'),
      href: `/${locale}/services`,
      hasDropdown: true,
      dropdownItems: [
        { name: 'CFO Part-time', href: `/${locale}/services#cfo` },
        { name: 'COO Part-time', href: `/${locale}/services#coo` },
        { name: 'Consultant Coup de Poing', href: `/${locale}/services#pompier` },
      ]
    },
    { name: 'Tarifs', href: `/${locale}/pricing` },
    { name: t('blog'), href: `/${locale}/blog` },
    { name: t('contact'), href: `/${locale}/contact` },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-xl font-bold text-dark-900">GSLV</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              href={`/${locale}/contact`}
              className="hidden sm:inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors btn-hover"
            >
              {t('book')}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-primary-600 py-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={cn("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
                      </button>
                      {isServicesOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-sm text-gray-600 hover:text-primary-600 py-1"
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsMenuOpen(false)
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-primary-600 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('book')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}