import { useTranslations } from 'next-intl'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos Valeurs',
  description: 'Les valeurs qui guident notre approche : Investissement, Impact et Leadership dans l\'accompagnement des entreprises.',
}

export default function ValuesPage() {
  const t = useTranslations('values')

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Investment Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-t-2xl p-8">
              <h2 className="text-3xl font-bold text-white text-center">
                {t('investment.title')}
              </h2>
            </div>
            <div className="bg-red-700 rounded-b-2xl p-8 space-y-8">
              {t.raw('investment.principles').map((principle: any, index: number) => (
                <div key={index} className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {principle.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {principle.behaviors.map((behavior: string, behaviorIndex: number) => (
                      <p key={behaviorIndex} className="text-white">
                        • {behavior}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-t-2xl p-8">
              <h2 className="text-3xl font-bold text-white text-center">
                {t('impact.title')}
              </h2>
            </div>
            <div className="bg-red-700 rounded-b-2xl p-8 space-y-8">
              {t.raw('impact.principles').map((principle: any, index: number) => (
                <div key={index} className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {principle.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {principle.behaviors.map((behavior: string, behaviorIndex: number) => (
                      <p key={behaviorIndex} className="text-white">
                        • {behavior}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-t-2xl p-8">
              <h2 className="text-3xl font-bold text-white text-center">
                {t('leadership.title')}
              </h2>
            </div>
            <div className="bg-red-700 rounded-b-2xl p-8 space-y-8">
              {t.raw('leadership.principles').map((principle: any, index: number) => (
                <div key={index} className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {principle.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {principle.behaviors.map((behavior: string, behaviorIndex: number) => (
                      <p key={behaviorIndex} className="text-white">
                        • {behavior}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark-900 mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('cta.subtitle')}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-hover"
          >
            {t('cta.button')}
          </a>
        </div>
      </section>
    </div>
  )
}
