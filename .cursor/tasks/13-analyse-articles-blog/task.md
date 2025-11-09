# 📊 Tâche 13 : Analyse SEO/UX des Articles de Blog

**Statut** : 🟡 En cours  
**Priorité** : P1  
**Effort estimé** : 3h  
**Impact** : ⭐⭐⭐⭐  
**Deadline** : 12 novembre 2025  
**Créée le** : 9 novembre 2025

---

## 🎯 Objectif

Réaliser une analyse complète des 9 articles de blog existants sous deux angles :
1. **Point de vue Google (SEO)** : optimisation technique, keywords, structure, indexabilité
2. **Point de vue humain (UX/qualité)** : valeur ajoutée, clarté, engagement, pertinence

L'objectif est d'identifier les forces, faiblesses et opportunités d'amélioration pour chaque article.

---

## 📋 Scope

### Articles à analyser (9 au total)

**Source** : `/public/data/blog/fr.json`

1. **fr-ligerio-2025-parcours** (✅ Déjà optimisé en Task 01)
2. **fr-cfo-responsabilites**
3. **fr-startup-finance-mistakes**
4. **fr-cfo-vs-daf**
5. **fr-fundraising-checklist**
6. **fr-redressement-judiciaire-guide**
7. **fr-pret-treso-vs-leve-fonds**
8. **fr-indicateurs-financiers-startup**
9. **fr-restructuration-entreprise-difficulte**

### Critères d'analyse

#### A) Point de vue Google (SEO)

Pour chaque article :
- **Title tag** : longueur optimale (50-60 car), présence keyword principal
- **Meta description** : longueur optimale (120-160 car), incitation au clic
- **H1** : unique, différent du title, keyword principal
- **Structure Hn** : hiérarchie logique (H2, H3, H4)
- **Mots-clés** : densité, positionnement, long-tail
- **Longueur** : nombre de mots (min 1500 pour ranking)
- **Internal linking** : liens vers autres pages/articles
- **External linking** : sources autoritaires
- **Images** : alt text, optimisation
- **Schema markup** : Article structuré
- **URL** : optimisée, lisible
- **Intention de recherche** : match avec query utilisateur

#### B) Point de vue humain (UX/Qualité)

Pour chaque article :
- **Hook/Intro** : capte l'attention dans les 3 premières lignes ?
- **Clarté** : langage simple, pas de jargon inutile
- **Structure** : navigation facile, sections logiques
- **Valeur ajoutée** : apporte vraiment de l'info utile ? Actionable ?
- **Crédibilité** : références, exemples concrets, chiffres
- **Originalité** : contenu différenciant vs concurrence
- **CTA** : appel à l'action clair en fin d'article
- **Longueur perçue** : lecture fluide ou trop dense ?
- **Ton** : adapté à la cible (founder, CFO, CEO)

---

## 📊 Livrables

1. **Rapport d'analyse détaillé** (dans `results.md`)
   - Tableau synthétique : note SEO + note UX par article (sur 10)
   - Top 3 meilleurs articles + pourquoi
   - Top 3 articles à améliorer en priorité + pourquoi

2. **Recommandations concrètes**
   - Quick wins (1-2h chacun) : 3-5 actions immédiates
   - Amélioration structure (4-6h) : articles à refondre
   - Nouvelles opportunités : sujets manquants vs keywords cibles

3. **Plan d'action priorisé**
   - Ordre d'optimisation des articles
   - Estimation effort/impact par article

---

## 🔍 Méthodologie

1. **Lecture article par article** en contexte réel (comme un lecteur)
2. **Analyse SEO technique** (title, meta, H1-H6, keywords)
3. **Scoring** SEO (sur 10) + UX (sur 10)
4. **Synthèse forces/faiblesses** par article
5. **Recommandations priorisées** (quick wins en premier)

---

## 🎯 Critères de succès

- ✅ Analyse complète des 9 articles
- ✅ Grille de scoring objective et reproductible
- ✅ Recommandations concrètes et actionnables
- ✅ Priorisation claire (effort vs impact)
- ✅ Plan d'action pour les 2 prochaines semaines

---

## 📎 Ressources

- [Articles FR](/public/data/blog/fr.json)
- [SEO Audit](../../seo-audit.md)
- [Roadmap 6 mois](../../roadmap.md)
- [Task 01 - Optimisation Ligerio](../01-reputation-ligerio/task.md)

---

## 💡 Notes

- Ne pas coder, uniquement analyser et recommander
- Focus sur les articles FR (priorité marché français)
- Tenir compte du contexte : blog pour attirer clients CFO/COO
- Article Ligerio déjà optimisé (Task 01) mais à intégrer dans l'analyse globale

---

**Responsable** : Guillaume Stehelin (avec support AI)  
**Review** : À faire après completion

