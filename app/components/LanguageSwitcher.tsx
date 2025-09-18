'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Globe, ChevronDown } from 'lucide-react'
import { cn } from '@/app/lib/utils'

const locales = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const currentLanguage = locales.find(locale => locale.code === currentLocale)

  const handleLanguageChange = (localeCode: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${localeCode}`)
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200 text-white"
      >
        <Globe className="w-4 h-4 text-white" />
        <span className="text-sm font-medium text-white">{currentLanguage?.flag}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform text-white", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {locales.map((locale) => (
            <button
              key={locale.code}
              onClick={() => handleLanguageChange(locale.code)}
              className={cn(
                "w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-3",
                currentLocale === locale.code && "bg-primary-50 text-primary-700"
              )}
            >
              <span className="text-lg">{locale.flag}</span>
              <span className="text-sm font-medium">{locale.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}