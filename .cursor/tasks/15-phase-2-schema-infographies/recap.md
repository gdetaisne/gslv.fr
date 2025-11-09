# ✅ Phase 2 : Schema Article + Infographies

**Date** : 9 novembre 2025  
**Durée** : 30 min (partiel)  
**Statut** : 🟡 En cours (1/4 terminé)

---

## 🎯 Objectif Phase 2

Enrichir les articles piliers avec Schema Article et créer des infographies visuelles pour améliorer le SEO et l'engagement.

**Cible** : Rich snippets Google + engagement rate +30%

---

## ✅ Actions réalisées

### 1. Schema Article enrichi (TOUS les articles) ✅

**Durée** : 30 min  
**Impact** : TOUS les articles du blog

**Schema ajouté** dans `/app/[locale]/blog/[slug]/page.tsx` :
- Type : Article
- Author : Guillaume Stehelin de Taisne (avec LinkedIn + job title)
- Publisher : GSLV.fr (avec logo)
- Dates : publishedAt + modifiedAt
- Keywords : depuis seo.keywords ou tags
- Article section : category
- Word count : calculé dynamiquement
- InLanguage : fr-FR ou en-US
- MainEntityOfPage : URL de l'article

**Champs enrichis par rapport au Schema basique** :
- Author avec jobTitle + worksFor (Organization)
- Keywords dynamiques
- ArticleSection (catégorie)
- WordCount (nombre de mots)

**Gain estimé** : rich snippets Google (auteur, date, temps lecture) → +15-25% CTR.

---

## 📋 Actions restantes (Phase 2)

### 2. Créer 5 infographies Canva 🔲

**Durée estimée** : 3h  
**Articles cibles** : 7, 8, 9, 10, 5

| Article | Infographie | Format | Outils |
|---------|-------------|--------|--------|
| #7 - Association cofondateurs | Les 4 piliers d'une association réussie | Vertical 800×1200 | Canva |
| #8 - Rocket Internet | Plan des 100 jours (timeline) | Horizontal 1200×800 | Canva |
| #9 - Ratios financiers | Benchmarks SaaS vs e-commerce (tableau) | Horizontal 1200×800 | Canva |
| #10 - Board startup | Composition board par stade (organigramme) | Vertical 800×1200 | Canva |
| #5 - Levée fonds | Timeline 6 mois levée de fonds | Horizontal 1200×800 | Canva |

**Intégration** : `/public/images/blog/[slug]-infographie.png`

---

### 3. Créer 3 lead magnets (templates) 🔲

**Durée estimée** : 3h  
**Objectif** : conversion leads qualifiés

| Lead magnet | Format | Article lié | Outil |
|-------------|--------|-------------|-------|
| Template pitch deck (14 slides) | Google Slides | #5 - Levée fonds | Google Slides |
| Banque 100 questions investisseurs | PDF (12 pages) | #5 - Levée fonds | Google Docs → PDF |
| Calculateur burn rate & runway | Google Sheets | #9 - Ratios financiers | Google Sheets |

**Hébergement** : Google Drive public + lien dans articles

**CTA** : "📥 Téléchargez gratuitement notre [template/calculateur]"

---

### 4. Ajouter Schema FAQPage (optionnel) 🔲

**Durée estimée** : 2h  
**Articles cibles** : articles avec FAQ implicites

Exemple article #5 (Levée fonds) :
- "Quand lever des fonds ?"
- "Combien lever ?"
- "Comment obtenir des intros chaudes ?"
- "Quelle est la structure d'un pitch deck ?"
- "Combien de temps prend une levée ?"

**Format Schema** :
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quand lever des fonds ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le bon moment..."
      }
    }
  ]
}
```

---

## 📊 Impact estimé Phase 2 complète

### SEO
- **Rich snippets** : 100% des articles (auteur, date, temps lecture)
- **Position moyenne** : +2-3 positions (Schema améliore crédibilité)
- **CTR** : +15-25% (snippets enrichis = + visible)

### Engagement
- **Temps sur page** : +40-50% (infographies = rétention)
- **Partages sociaux** : +30-40% (infographies Pinterest/LinkedIn)
- **Téléchargements lead magnets** : 20-30/mois

### Conversion
- **Leads qualifiés** : +10-15/mois (via lead magnets)
- **Emails collectés** : base email = retargeting possible

---

## 🚀 Prochaines étapes

**Priorité 1** (à faire maintenant) :
- [x] Schema Article TOUS les articles
- [ ] Créer 5 infographies Canva (3h)
- [ ] Créer 3 lead magnets (3h)

**Priorité 2** (optionnel) :
- [ ] Ajouter Schema FAQPage articles 5, 7, 9, 10
- [ ] Optimiser images (compression, lazy loading)

---

## 📁 Fichiers modifiés

```
/Users/guillaumestehelin/gslv.fr/app/[locale]/blog/[slug]/page.tsx
```

**Changements** :
- +42 lignes : Schema Article enrichi (JSON-LD)
- Dynamique : s'applique à TOUS les articles automatiquement
- Keywords, wordCount, author enrichis

---

**Temps passé Phase 2** : 30 min / 12h  
**Avancement** : 4% (Schema terminé, infographies + lead magnets restants)

**Complété par** : Guillaume Stehelin (avec support AI)  
**Review** : Vérifier rich snippets dans Google Search Console à partir du 16 nov

