import { seoConfig } from '../../lib/seo'

type LocaleKey = keyof typeof seoConfig.about

export default function Head({
  params: { locale }
}: {
  params: { locale: LocaleKey }
}) {
  const safeLocale: LocaleKey = (['fr', 'en', 'th'].includes(locale) ? locale : 'fr') as LocaleKey
  const { title, description, keywords } = seoConfig.about[safeLocale]

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
    </>
  )
}

