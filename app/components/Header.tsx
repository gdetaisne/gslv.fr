 'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/app/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const t = useTranslations('navigation')
  const locale = useLocale()

  const dropdownItems = [
    { name: 'Build scalable operating systems', href: `/${locale}/services#cfo` },
    { name: 'Structure growth from chaos', href: `/${locale}/services#coo` },
    { name: 'Fix critical situations fast', href: `/${locale}/services#pompier` },
    { name: 'Fractional COO · La Rochelle', href: `/${locale}/consultant-cfo-la-rochelle` },
  ]

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    {
      name: t('services'),
      href: `/${locale}/services`,
      hasDropdown: true,
      dropdownItems,
    },
    { name: 'Pricing', href: `/${locale}/pricing` },
    { name: t('blog'), href: `/${locale}/blog` },
  ]

  const bookLabel = 'Book a call'
  const brandTagline = 'Operator · Systems · AI'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo + name */}
          <Link href={`/${locale}`} className="flex items-center">
            <div className="w-9 h-9 flex items-center justify-center">
              <img
                src="/images/logo/logo.png"
                alt="GSLV Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                  if (nextElement) nextElement.style.display = 'flex'
                }}
              />
              <div className="w-9 h-9 bg-slate-700 rounded-md flex items-center justify-center hidden">
                <span className="text-white font-semibold text-sm">G</span>
              </div>
            </div>
            <span className="hidden md:inline-block ml-3 text-sm font-semibold text-slate-100">
              Guillaume Stehelin de Taisne
              <span className="text-slate-400 font-normal ml-1">· {brandTagline}</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center space-x-1 text-sm text-slate-200 hover:text-white transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 rounded-lg shadow-lg border border-slate-800 py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
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
                    className="text-sm text-slate-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile menu */}
          <div className="flex items-center space-x-3">
            <Link
              href={`/${locale}/contact`}
              className="hidden sm:inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors shadow-md text-sm font-medium"
            >
              {bookLabel}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800 py-4 bg-slate-950/95">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-left text-slate-200 hover:text-white py-2 text-sm"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform',
                            isServicesOpen && 'rotate-180'
                          )}
                        />
                      </button>
                      {isServicesOpen && (
                        <div className="ml-4 mt-1 space-y-1">
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
                      className="block text-sm text-slate-200 hover:text-white py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 border-t border-slate-800">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors shadow-md text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {bookLabel}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
