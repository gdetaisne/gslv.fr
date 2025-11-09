# ✅ Phase 2 : Schema Article + Infographies

**Date** : 9 novembre 2025  
**Durée** : 3h30 (partiel)  
**Statut** : ⏸️ Stand-by (2/5 terminés : Schema + Specs)

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

### 2. Specs Infographies Canva ✅

**Durée** : 3h  
**Fichier** : `.cursor/tasks/15-phase-2-schema-infographies/infographies-specs.md`

**5 infographies spécifiées** :

1. **📊 Les 5 Causes d'Échec des Startups** (article #1)
   - Format : Barres horizontales avec % et icônes (CB Insights data)
   - Slug : `5-causes-echec-startups.png`
   - Contenu : 5 causes principales avec % + barre graphique

2. **📈 Processus Levée de Fonds en 10 Étapes** (article #5)
   - Format : Timeline verticale 6-12 mois
   - Slug : `processus-levee-fonds-10-etapes.png`
   - Contenu : 10 étapes avec durée et sous-actions

3. **🛠️ Comparatif Outils Pilotage Financier** (article #3)
   - Format : Tableau 8 critères × 4 outils
   - Slug : `comparatif-outils-pilotage-financier.png`
   - Contenu : Excel vs Zoho vs Pennylane vs Fygr

4. **📅 Timeline Idéale Board Startup** (article #10)
   - Format : Timeline horizontale année 1 en 4 phases
   - Slug : `timeline-board-startup.png`
   - Contenu : Constitution → Onboarding → Routine → Optimisation

5. **⚙️ Les 4 Piliers Méthodologie Rocket Internet** (article #8)
   - Format : Grille 2×2 colorée
   - Slug : `4-piliers-rocket-internet.png`
   - Contenu : Plan 100j, KPI, Recrutement, Process

**Caractéristiques techniques** :
- Format : 800×1200px (Pinterest-friendly)
- Palette GSLV : Bleu marine #1E3A8A, orange #F97316
- Police : Inter ou Montserrat
- Export : PNG (<500Ko) + PDF
- Destination : `/public/images/infographies/`

**Impact SEO/UX attendu** :
- Alt text optimisés → ranking Google Images
- +30-45% temps sur page
- +50-100% partages sociaux

---

## 📋 Actions restantes (Phase 2)

### 3. Créer les 5 infographies dans Canva 🔲

**Durée estimée** : 3h (production manuelle)  
**Prérequis** : Specs détaillées ✅ (voir `infographies-specs.md`)

**Checklist production** :
- [ ] Créer compte Canva / ouvrir Canva
- [ ] Créer infographie #1 (5 causes échec)
- [ ] Créer infographie #2 (levée fonds 10 étapes)
- [ ] Créer infographie #3 (comparatif outils)
- [ ] Créer infographie #4 (timeline board)
- [ ] Créer infographie #5 (4 piliers Rocket Internet)
- [ ] Exporter PNG + PDF pour chaque
- [ ] Déposer dans `/public/images/infographies/`
- [ ] Intégrer dans articles avec alt text optimisé
- [ ] Partager sur LinkedIn

---

### 4. Créer 3 lead magnets (templates) 🔲

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

### 5. Ajouter Schema FAQPage (optionnel) 🔲

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
- [x] Specs détaillées 5 infographies
- [ ] Créer 5 infographies dans Canva (3h production manuelle)
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

**Temps passé Phase 2** : 3h30 / 12h  
**Avancement** : 29% (Schema terminé ✅, Specs infographies ✅, création Canva + lead magnets restants)

**Complété par** : Guillaume Stehelin (avec support AI)  
**Review** : Vérifier rich snippets dans Google Search Console à partir du 16 nov

