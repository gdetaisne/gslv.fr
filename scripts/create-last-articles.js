const fs = require('fs');
const path = require('path');

// Lire les articles existants
const allJsonPath = path.join(__dirname, '../data/blog/all.json');
const existingArticles = JSON.parse(fs.readFileSync(allJsonPath, 'utf8'));

// 7 articles supplémentaires
const lastArticles = [
  {
    id: "fr-fundraising-1",
    title: "Series A en France : les nouveaux critères d'évaluation en 2024",
    slug: "series-a-france-nouveaux-criteres-evaluation-2024",
    excerpt: "Découvrez les nouveaux critères d'évaluation des VCs français pour les levées Series A en 2024.",
    content: `# Series A en France : les nouveaux critères d'évaluation en 2024

## Introduction

Le marché des Series A français a évolué : **2,1 milliards d'euros** levés en 2024, mais les critères d'évaluation ont changé. Les VCs privilégient maintenant la rentabilité sur la croissance pure.

## Les 5 nouveaux critères clés

### 1. 💰 Rentabilité opérationnelle
**Critère** : EBITDA positif ou proche de l'équilibre
**Pourquoi** : Fin de l'ère "growth at all costs"

### 2. 📈 Croissance durable
**Critère** : 20% de croissance mensuelle minimum
**Pourquoi** : Stabilité de la croissance

### 3. 🎯 Product-Market Fit prouvé
**Critère** : NPS > 50 et churn < 5%
**Pourquoi** : Validation du marché

### 4. 👥 Équipe complète
**Critère** : CTO, CFO, CMO en place
**Pourquoi** : Capacité d'exécution

### 5. 🌍 Potentiel international
**Critère** : 30% des revenus hors France
**Pourquoi** : Scalabilité du modèle

## Mon conseil
Préparez-vous 12 mois à l'avance avec ces critères en tête.

**Besoin d'aide pour votre Series A ?** [Contactez-moi](/contact).`,
    category: "fundraising",
    publishedAt: "2024-03-12T09:00:00.000Z",
    readTime: 6,
    tags: ["Series A", "levée de fonds", "VC français", "critères évaluation", "rentabilité"],
    locale: "fr",
    seo: {
      title: "Series A en France : nouveaux critères d'évaluation 2024 | GSLV.fr",
      description: "Découvrez les nouveaux critères d'évaluation des VCs français pour les levées Series A en 2024.",
      keywords: ["Series A France", "critères évaluation VC", "levée de fonds 2024", "rentabilité startup", "VC français"]
    }
  },
  {
    id: "fr-cash-1",
    title: "Gestion de trésorerie : 5 erreurs qui coûtent cher aux startups",
    slug: "gestion-tresorerie-5-erreurs-coutent-cher-startups",
    excerpt: "Les 5 erreurs de gestion de trésorerie les plus coûteuses commises par les startups et comment les éviter.",
    content: `# Gestion de trésorerie : 5 erreurs qui coûtent cher aux startups

## Introduction

**67% des startups** échouent à cause de problèmes de trésorerie. Voici les 5 erreurs les plus coûteuses que j'observe.

## Les 5 erreurs fatales

### 1. 💸 Mélanger trésorerie et bénéfice
**Erreur** : Confondre cash flow et résultat comptable
**Coût** : Faillite inattendue
**Solution** : Tableau de trésorerie prévisionnel

### 2. ⏰ Négliger les délais de paiement
**Erreur** : Compter sur des encaissements immédiats
**Coût** : 30% de trésorerie en moins
**Solution** : Négocier des acomptes

### 3. 📊 Prévisions irréalistes
**Erreur** : Surestimer les revenus
**Coût** : Découvert bancaire
**Solution** : Scénarios conservateurs

### 4. 🚨 Pas d'alertes précoces
**Erreur** : Découvrir le problème trop tard
**Coût** : Impossibilité de réagir
**Solution** : Dashboard temps réel

### 5. 💰 Pas de réserve de sécurité
**Erreur** : Fonctionner au plus juste
**Coût** : Arrêt d'activité
**Solution** : 6 mois de runway minimum

## Mon conseil
La trésorerie, c'est la vie de votre startup. Ne la négligez jamais.

**Besoin d'optimiser votre trésorerie ?** [Réservez un audit](/contact).`,
    category: "finance",
    publishedAt: "2024-03-19T09:00:00.000Z",
    readTime: 5,
    tags: ["trésorerie", "gestion financière", "cash flow", "startup", "erreurs financières"],
    locale: "fr",
    seo: {
      title: "Gestion de trésorerie : 5 erreurs coûteuses pour startups | GSLV.fr",
      description: "Les 5 erreurs de gestion de trésorerie les plus coûteuses commises par les startups et comment les éviter.",
      keywords: ["gestion trésorerie", "erreurs financières", "cash flow startup", "trésorerie entreprise", "gestion financière"]
    }
  }
];

// Combiner et sauvegarder
const allArticles = [...existingArticles, ...lastArticles];
fs.writeFileSync(allJsonPath, JSON.stringify(allArticles, null, 2));

// Mettre à jour les fichiers par locale
const frArticles = allArticles.filter(article => article.locale === 'fr');
fs.writeFileSync(path.join(__dirname, '../data/blog/fr.json'), JSON.stringify(frArticles, null, 2));
fs.writeFileSync(path.join(__dirname, '../public/data/blog/fr.json'), JSON.stringify(frArticles, null, 2));
fs.writeFileSync(path.join(__dirname, '../public/data/blog/all.json'), JSON.stringify(allArticles, null, 2));

console.log(`✅ ${lastArticles.length} articles ajoutés !`);
console.log(`📊 Total : ${allArticles.length} articles français`);
