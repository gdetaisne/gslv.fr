# Tâche 01 : Optimiser article Ligerio (title/meta/H1)

**Priorité** : P0 (Urgent)  
**Effort estimé** : 1 heure  
**Impact** : ⭐⭐⭐⭐⭐ (Critique)  
**Deadline** : 11 novembre 2025

---

## 📋 Contexte

L'article `/fr/blog/mon-parcours-chez-ligerio-creation-transmission` existe et contient un contenu riche (2400+ mots, 9 min lecture) mais est **sous-optimisé pour le SEO**.

### Requêtes cibles
- **Primaire** : "Guillaume Stehelin de Taisne Ligerio"
- **Secondaires** : "Guillaume Stehelin Ligerio", "Ligerio cofondateur", "Guillaume Stehelin parcours"

### Position actuelle
- ❌ Non classé dans top 50 Google FR
- LinkedIn et Crunchbase dominent la SERP

---

## 🎯 Objectif

Positionner l'article dans le **top 3 SERP** sur la requête "Guillaume Stehelin Ligerio" en optimisant les balises critiques (title, meta, H1).

---

## 🔍 Diagnostic technique

### ❌ Problème 1 : Title sous-optimisé
**Actuel** : `"Mon parcours chez Ligerio : de la création à la transmission"`

**Issues** :
- Le nom "Guillaume Stehelin" n'apparaît PAS dans le title de l'article
- Mots-clés critiques absents en début de title
- Perte de pertinence algorithmique pour la requête nominative

### ❌ Problème 2 : Meta title SEO sous-optimisé
**Actuel** : `"Mon parcours chez Ligerio – Guillaume Stehelin de Taisne | GSLV"`

**Issues** :
- Nom arrive APRÈS "Mon parcours chez Ligerio"
- Poids algorithmique décroissant (début > fin)
- Manque mot-clé "cofondateur" (contexte important)

### ❌ Problème 3 : Meta description non optimisée
**Actuel** : `"Guillaume Stehelin de Taisne revient sur la création et la croissance de Ligerio, son rôle de cofondateur et les leçons tirées avant de fonder GSLV."`

**Issues** :
- "Ligerio" arrive tard dans la phrase
- Manque de chiffres concrets (10M€, 3,9M€, 45 personnes)
- CTR potentiel non exploité

### ❌ Problème 4 : H1 manquant
**Actuel** : Le contenu commence directement par `# Mon parcours chez Ligerio : de la création à la transmission`

**Issues** :
- Le H1 ne contient PAS le nom complet "Guillaume Stehelin de Taisne"
- Signal SEO majeur perdu (Google valorise cohérence title/H1)

---

## ✅ Solution : Actions concrètes

### Action 1 : Optimiser le title de l'article
**Fichier** : `/public/data/blog/fr.json`  
**Ligne** : ~149

**Code actuel** :
```json
{
  "title": "Mon parcours chez Ligerio : de la création à la transmission",
  ...
}
```

**Code optimisé** :
```json
{
  "title": "Guillaume Stehelin de Taisne : Mon parcours chez Ligerio (2021-2025)",
  ...
}
```

**Justification** :
- Nom complet en première position (signal fort)
- Dates ajoutées (contexte + actualité)
- Garde "Mon parcours" (storytelling)

---

### Action 2 : Optimiser le meta title SEO
**Fichier** : `/public/data/blog/fr.json`  
**Ligne** : ~165

**Code actuel** :
```json
"seo": {
  "title": "Mon parcours chez Ligerio – Guillaume Stehelin de Taisne | GSLV",
  ...
}
```

**Code optimisé** :
```json
"seo": {
  "title": "Guillaume Stehelin de Taisne Ligerio : Cofondateur & Parcours | GSLV",
  ...
}
```

**Justification** :
- Nom + "Ligerio" en tête (pertinence max)
- Mot-clé "Cofondateur" ajouté (contexte)
- Limite 60 caractères respectée (non coupé dans SERP)

---

### Action 3 : Optimiser la meta description
**Fichier** : `/public/data/blog/fr.json`  
**Ligne** : ~166

**Code actuel** :
```json
"seo": {
  ...
  "description": "Guillaume Stehelin de Taisne revient sur la création et la croissance de Ligerio, son rôle de cofondateur et les leçons tirées avant de fonder GSLV.",
  ...
}
```

**Code optimisé** :
```json
"seo": {
  ...
  "description": "Guillaume Stehelin de Taisne, cofondateur Ligerio : retour sur 4 ans de croissance (10M€ CA, levée 3,9M€), départ en 2025 et leçons entrepreneuriales. Découvrez son parcours complet.",
  ...
}
```

**Justification** :
- "Ligerio" en position 6 (visibilité)
- Chiffres clés ajoutés (10M€, 3,9M€) → curiosité + CTR
- Appel à l'action ("Découvrez") → engagement
- Limite 155 caractères respectée

---

### Action 4 : Ajouter H1 optimisé dans le contenu
**Fichier** : `/public/data/blog/fr.json`  
**Ligne** : ~152 (début du champ `content`)

**Code actuel** :
```json
"content": "# Mon parcours chez Ligerio : de la création à la transmission\n\nCréer et développer une entreprise..."
```

**Code optimisé** :
```json
"content": "# Guillaume Stehelin de Taisne : Mon parcours chez Ligerio (2021-2025)\n\n**De cofondateur à la transmission** : retour sur 4 années intenses chez Ligerio, de quelques centaines de k€ à 10M€ de CA, avec une levée de fonds de 3,9M€ et 45 personnes au pic.\n\n---\n\nCréer et développer une entreprise..."
```

**Justification** :
- H1 contient requête exacte "Guillaume Stehelin de Taisne" + "Ligerio"
- Sous-titre en gras avec chiffres clés (social proof immédiat)
- Séparateur `---` pour structurer visuellement
- Cohérence parfaite title/H1/meta

---

## 📊 KPI de succès

### Court terme (7-14 jours)
| Métrique | Baseline | Objectif J+14 | Mesure |
|----------|----------|---------------|---------|
| Position SERP "Guillaume Stehelin Ligerio" | Non classé | Entrée top 20 | Google Search Console |
| Impressions article | 0 | 50+ | GSC |

### Moyen terme (21-30 jours)
| Métrique | Baseline | Objectif J+30 | Mesure |
|----------|----------|---------------|---------|
| Position SERP "Guillaume Stehelin Ligerio" | Non classé | **Top 3** ✅ | GSC |
| Impressions article | 0 | 200+ | GSC |
| CTR organique | - | 8%+ | GSC |
| Clics/mois | 0 | 15+ | GSC |

---

## ⚙️ Procédure d'exécution

### Étape 1 : Backup
```bash
cp public/data/blog/fr.json public/data/blog/fr.json.backup-2025-11-09
```

### Étape 2 : Modifications
Ouvrir `/public/data/blog/fr.json` et appliquer les 4 actions ci-dessus.

### Étape 3 : Validation
```bash
# Vérifier syntaxe JSON
node -e "JSON.parse(require('fs').readFileSync('public/data/blog/fr.json'))"
```

### Étape 4 : Test local
```bash
npm run dev
# Ouvrir http://localhost:3000/fr/blog/mon-parcours-chez-ligerio-creation-transmission
# Vérifier :
# - Title affiché correct
# - H1 visible avec nom complet
# - Meta tags dans <head> (inspect)
```

### Étape 5 : Déploiement
```bash
git add public/data/blog/fr.json
git commit -m "SEO: Optimize Ligerio article for 'Guillaume Stehelin Ligerio' keyword"
git push origin main
# Déploiement automatique (Vercel/Netlify)
```

### Étape 6 : Forcer reindexation Google
1. Ouvrir Google Search Console
2. URL Inspection : `https://gslv.fr/fr/blog/mon-parcours-chez-ligerio-creation-transmission`
3. Cliquer "Demander une indexation"
4. Attendre confirmation (quelques minutes)

---

## 🔗 Dépendances

### Pré-requis
- ✅ Google Search Console configuré (tâche 09)
- ✅ Accès écriture à `/public/data/blog/fr.json`

### Bloquants
- Aucun

### Tâches suivantes (après complétion)
- Tâche 02 : Schema Article enrichi (amplifier signal SEO)
- Tâche 03 : Campagne backlinks (autorité)
- Tâche 04 : FAQ Schema page About (featured snippet)

---

## 💡 Notes et insights

### Pourquoi ça va marcher
1. **Algorithme Google** : Poids fort sur title + H1 + meta description cohérents
2. **Contenu existant** : 2400 mots de qualité (déjà un atout)
3. **Concurrence faible** : Peu de contenu long-form sur "Guillaume Stehelin Ligerio"
4. **Freshness** : Article récent (nov 2025) → bonus algorithme

### Risques potentiels
1. **LinkedIn domine** : Profil LinkedIn très authorité (DR 99)
   - Mitigation : Backlinks (tâche 03) pour compenser
2. **Reindexation lente** : Google peut prendre 2-4 semaines
   - Mitigation : Forcer indexation via GSC
3. **Cannibalisation** : Page About pourrait concurrencer
   - Mitigation : Maillage interne clair (About → Article)

### Best practices appliquées
- ✅ Nom en début de title (SEO nominatif)
- ✅ Chiffres dans meta description (CTR +20-30%)
- ✅ Dates dans title (signal freshness)
- ✅ Cohérence sémantique (title/H1/meta/contenu)
- ✅ Longueurs optimales (title <60, desc <155)

---

## 📚 Ressources

### Documentation
- [Google : Title tag best practices](https://developers.google.com/search/docs/appearance/title-link)
- [Moz : On-page SEO guide](https://moz.com/learn/seo/on-page-factors)
- [Ahrefs : Title tag optimization](https://ahrefs.com/blog/title-tag/)

### Outils
- Google Search Console : Performance tracking
- SEMrush Position Tracking : Suivi position quotidienne
- Ahrefs Site Audit : Vérification technique

---

**Créé le** : 9 novembre 2025  
**Dernière mise à jour** : 9 novembre 2025  
**Responsable** : Guillaume Stehelin

