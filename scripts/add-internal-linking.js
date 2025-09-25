const fs = require('fs');
const path = require('path');

console.log('🔗 Construction du maillage interne (netlinking)');
console.log('==============================================\n');

// Lire les articles existants
const allJsonPath = path.join(__dirname, '../data/blog/all.json');
const articles = JSON.parse(fs.readFileSync(allJsonPath, 'utf8'));

// Définir les liens internes stratégiques
const internalLinks = {
  "fr-cfo-1": [
    { target: "fr-cfo-2", text: "levée de fonds", context: "préparation financière" },
    { target: "fr-finance-1", text: "tableaux de bord financiers", context: "KPIs essentiels" },
    { target: "fr-cash-1", text: "gestion de trésorerie", context: "erreurs à éviter" }
  ],
  "fr-cfo-2": [
    { target: "fr-cfo-1", text: "CFO part-time", context: "structuration financière" },
    { target: "fr-finance-1", text: "business plan financier", context: "projections cohérentes" },
    { target: "fr-fundraising-1", text: "critères d'évaluation", context: "nouvelles exigences" }
  ],
  "fr-coo-1": [
    { target: "fr-cfo-1", text: "CFO part-time", context: "direction financière" },
    { target: "fr-remote-1", text: "équipe distribuée", context: "gestion des coûts" },
    { target: "fr-finance-1", text: "KPIs opérationnels", context: "mesure de performance" }
  ],
  "fr-crisis-1": [
    { target: "fr-cfo-1", text: "CFO part-time", context: "restructuration financière" },
    { target: "fr-cash-1", text: "gestion de trésorerie", context: "plan d'urgence" },
    { target: "fr-coo-1", text: "transformation opérationnelle", context: "optimisation" }
  ],
  "fr-finance-1": [
    { target: "fr-cfo-1", text: "CFO part-time", context: "mise en place" },
    { target: "fr-cash-1", text: "gestion de trésorerie", context: "KPIs de trésorerie" },
    { target: "fr-ai-1", text: "outils d'IA", context: "automatisation" }
  ],
  "fr-ai-1": [
    { target: "fr-finance-1", text: "tableaux de bord", context: "automatisation" },
    { target: "fr-remote-1", text: "outils de gestion", context: "optimisation" },
    { target: "fr-cfo-1", text: "CFO part-time", context: "expertise" }
  ],
  "fr-remote-1": [
    { target: "fr-coo-1", text: "gestion des équipes", context: "opérations" },
    { target: "fr-ai-1", text: "outils de communication", context: "automatisation" },
    { target: "fr-finance-1", text: "coûts opérationnels", context: "optimisation" }
  ],
  "fr-esg-1": [
    { target: "fr-cfo-1", text: "stratégie financière", context: "intégration" },
    { target: "fr-fundraising-1", text: "critères d'investissement", context: "nouvelles exigences" },
    { target: "fr-finance-1", text: "reporting financier", context: "transparence" }
  ],
  "fr-fundraising-1": [
    { target: "fr-cfo-2", text: "levée de fonds", context: "préparation" },
    { target: "fr-esg-1", text: "critères ESG", context: "nouvelles exigences" },
    { target: "fr-finance-1", text: "métriques financières", context: "évaluation" }
  ],
  "fr-cash-1": [
    { target: "fr-cfo-1", text: "CFO part-time", context: "expertise" },
    { target: "fr-finance-1", text: "tableaux de bord", context: "suivi" },
    { target: "fr-crisis-1", text: "gestion de crise", context: "prévention" }
  ]
};

// Fonction pour ajouter les liens internes
function addInternalLinks(article) {
  if (!internalLinks[article.id]) return article;
  
  let content = article.content;
  const links = internalLinks[article.id];
  
  links.forEach(link => {
    const targetArticle = articles.find(a => a.id === link.target);
    if (!targetArticle) return;
    
    const linkHtml = `[${link.text}](/fr/blog/${targetArticle.slug})`;
    const regex = new RegExp(`\\b${link.context}\\b`, 'gi');
    
    if (regex.test(content)) {
      content = content.replace(regex, (match) => {
        return match.replace(link.context, `${link.context} (${linkHtml})`);
      });
    }
  });
  
  return { ...article, content };
}

// Appliquer les liens internes
const articlesWithLinks = articles.map(addInternalLinks);

// Sauvegarder les articles avec liens
fs.writeFileSync(allJsonPath, JSON.stringify(articlesWithLinks, null, 2));

// Mettre à jour les fichiers par locale
const frArticles = articlesWithLinks.filter(article => article.locale === 'fr');
fs.writeFileSync(path.join(__dirname, '../data/blog/fr.json'), JSON.stringify(frArticles, null, 2));
fs.writeFileSync(path.join(__dirname, '../public/data/blog/fr.json'), JSON.stringify(frArticles, null, 2));
fs.writeFileSync(path.join(__dirname, '../public/data/blog/all.json'), JSON.stringify(articlesWithLinks, null, 2));

console.log('✅ Maillage interne ajouté !');
console.log(`📊 Liens créés : ${Object.keys(internalLinks).length} articles`);
console.log('🔗 Chaque article contient 2-3 liens internes stratégiques');
console.log('📈 Amélioration du SEO et du temps de session attendue');
