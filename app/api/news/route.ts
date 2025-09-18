import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

const parser = new Parser({
  customFields: {
    feed: [],
    item: []
  }
})

export async function GET() {
  try {
    const feeds = [
      {
        url: 'https://www.francebleu.fr/la-rochelle/actu.rss',
        source: 'France Bleu La Rochelle',
        category: 'Local'
      },
      {
        url: 'https://france3-regions.francetvinfo.fr/nouvelle-aquitaine/charente-maritime/la-rochelle/rss',
        source: 'France 3 Nouvelle-Aquitaine',
        category: 'Région'
      },
      {
        url: 'https://www.sudouest.fr/charente-maritime/la-rochelle/rss',
        source: 'Sud Ouest',
        category: 'Région'
      }
    ]

    const allNews = []

    for (const feed of feeds) {
      try {
        const rss = await parser.parseURL(feed.url)
        
        // Prendre les 2 premiers articles de chaque source
        const articles = rss.items.slice(0, 2).map(item => ({
          title: item.title || 'Sans titre',
          summary: item.contentSnippet || item.description || 'Aucun résumé disponible',
          link: item.link || '#',
          pubDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString('fr-FR') : 'Date inconnue',
          source: feed.source,
          category: feed.category
        }))

        allNews.push(...articles)
      } catch (error) {
        console.error(`Erreur lors du parsing de ${feed.source}:`, error)
        // Ajouter un article de fallback si le flux ne fonctionne pas
        allNews.push({
          title: `Actualités ${feed.source}`,
          summary: `Découvrez les dernières actualités de ${feed.source} sur leur site officiel.`,
          link: feed.url.replace('/rss', ''),
          pubDate: 'Actualités en continu',
          source: feed.source,
          category: feed.category
        })
      }
    }

    // Mélanger les articles et prendre les 6 premiers
    const shuffledNews = allNews.sort(() => 0.5 - Math.random()).slice(0, 6)

    return NextResponse.json({
      success: true,
      news: shuffledNews,
      lastUpdated: new Date().toISOString()
    })

  } catch (error) {
    console.error('Erreur lors de la récupération des actualités:', error)
    
    // Retourner des articles de fallback en cas d'erreur
    const fallbackNews = [
      {
        title: "Actualités économiques La Rochelle",
        summary: "Suivez l'actualité économique et les développements des entreprises à La Rochelle et en Charente-Maritime.",
        link: "https://larochelleinfo.media/",
        pubDate: "Actualités en continu",
        source: "La Rochelle Info",
        category: "Économie"
      },
      {
        title: "Informations locales La Rochelle",
        summary: "Toute l'actualité locale : politique, économie, culture, sport et vie quotidienne à La Rochelle.",
        link: "https://www.francebleu.fr/la-rochelle/actu",
        pubDate: "Actualités en continu",
        source: "France Bleu La Rochelle",
        category: "Local"
      },
      {
        title: "Écosystème startup Nouvelle-Aquitaine",
        summary: "Découvrez les dernières innovations, levées de fonds et créations d'entreprises dans la région rochelaise.",
        link: "https://france3-regions.francetvinfo.fr/nouvelle-aquitaine/charente-maritime/la-rochelle",
        pubDate: "Actualités en continu",
        source: "France 3 Nouvelle-Aquitaine",
        category: "Startups"
      }
    ]

    return NextResponse.json({
      success: false,
      news: fallbackNews,
      lastUpdated: new Date().toISOString(),
      error: 'Fallback mode activé'
    })
  }
}
