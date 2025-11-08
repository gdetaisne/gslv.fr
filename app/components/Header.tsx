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
        { name: 'CFO La Rochelle', href: `/${locale}/consultant-cfo-la-rochelle` },
      ]
    },
    { name: t('values'), href: `/${locale}/values` },
    { name: 'Tarifs', href: `/${locale}/pricing` },
    { name: t('blog'), href: `/${locale}/blog` },
    { name: t('contact'), href: `/${locale}/contact` },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-800 to-slate-900 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/images/logo/logo.png" 
                alt="GSLV Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback vers l'ancien logo si l'image n'existe pas
                  e.currentTarget.style.display = 'none'
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                  if (nextElement) {
                    nextElement.style.display = 'flex'
                  }
                }}
              />
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center hidden">
                <span className="text-white font-bold text-lg">G</span>
              </div>
            </div>
          </Link>
          <div className="hidden md:flex flex-col ml-3 text-slate-100 leading-tight">
            <span className="text-sm font-semibold">Guillaume Stehelin de Taisne</span>
            <span className="text-xs text-slate-300">Part-time CFO & COO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center space-x-1 text-slate-200 hover:text-white transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg border border-slate-700 py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
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
                    className="text-slate-200 hover:text-white transition-colors"
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
              className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all btn-hover shadow-lg"
            >
              {t('book')}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700 py-4 bg-slate-800">
            <nav className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1 text-slate-200">
                <span className="text-sm font-semibold">Guillaume Stehelin de Taisne</span>
                <span className="text-xs text-slate-400">Part-time CFO & COO</span>
              </div>
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-left text-slate-200 hover:text-white py-2"
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
                              className="block text-sm text-slate-300 hover:text-white py-1"
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
                      className="block text-slate-200 hover:text-white py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all mt-4 shadow-lg"
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