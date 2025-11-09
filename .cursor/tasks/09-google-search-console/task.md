# Tâche 09 : Configurer Google Search Console

**Priorité** : P0 (Urgent)  
**Effort estimé** : 30 minutes  
**Impact** : ⭐⭐⭐⭐⭐ (Critique)  
**Deadline** : 10 novembre 2025

---

## 📋 Contexte

Google Search Console (GSC) est **l'outil indispensable** pour :
- Suivre les performances SEO (impressions, clics, positions)
- Détecter les erreurs d'indexation
- Mesurer Core Web Vitals
- Forcer la reindexation de pages
- Soumettre le sitemap

**Actuellement** : Le code de vérification dans `/app/layout.tsx` est un placeholder :
```typescript
verification: {
  google: 'VOTRE_CODE_GOOGLE_ICI'
}
```

**Conséquence** : Aucune donnée SEO disponible → **pilotage à l'aveugle**.

---

## 🎯 Objectif

Configurer Google Search Console pour tracker toutes les métriques SEO de gslv.fr et débloquer les tâches de suivi.

---

## ✅ Actions concrètes

### Action 1 : Créer la propriété dans Google Search Console

**Procédure** :

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Cliquer sur "Ajouter une propriété"
3. Choisir **"Domaine"** (recommandé) ou **"Préfixe d'URL"**
   - **Option Domaine** : `gslv.fr` (couvre http/https, www/non-www, tous sous-domaines)
   - **Option Préfixe** : `https://gslv.fr` (plus simple mais moins complet)

**Recommandation** : Utiliser **"Domaine"** pour couverture complète.

4. Cliquer "Continuer"
5. Google affiche les méthodes de vérification disponibles

---

### Action 2 : Choisir la méthode de vérification

**Option A : Balise HTML (recommandé pour Next.js)**

Google donne un code type :
```html
<meta name="google-site-verification" content="abc123xyz456..." />
```

**À faire** :
1. Copier le code `abc123xyz456...`
2. Remplacer dans `/app/layout.tsx` :

```typescript
// Ligne ~113
verification: {
  google: 'abc123xyz456...' // Remplacer par le vrai code
}
```

3. Déployer sur production
4. Retourner dans GSC et cliquer "Vérifier"

---

**Option B : DNS (recommandé si accès DNS)**

Google donne un enregistrement TXT :
```
Nom : @
Type : TXT
Valeur : google-site-verification=abc123xyz456...
```

**À faire** :
1. Aller sur le registrar DNS (OVH, Cloudflare, Namecheap...)
2. Ajouter l'enregistrement TXT
3. Attendre propagation DNS (5-30 min)
4. Retourner dans GSC et cliquer "Vérifier"

**Avantage** : Fonctionne même si le site change de technologie.

---

### Action 3 : Soumettre le sitemap

Une fois la propriété vérifiée :

1. Dans GSC, aller dans **"Sitemaps"** (menu gauche)
2. Cliquer sur **"Ajouter un nouveau sitemap"**
3. Entrer : `sitemap.xml`
4. Cliquer "Envoyer"
5. Attendre quelques heures → Google crawle et indexe

**Vérification** :
- Le sitemap doit afficher **"Réussite"** (vert)
- Nombre d'URLs découvertes : ~40-50 (pages statiques + articles blog)

---

### Action 4 : Activer les rapports clés

Dans GSC, configurer :

1. **Rapport de performance** : Activé par défaut
   - Données disponibles sous 48-72h
   - Métriques : impressions, clics, CTR, position moyenne

2. **Couverture d'index** : Vérifier aucune erreur
   - Pages validées : toutes les pages importantes indexées
   - Pages exclues : vérifier qu'aucune page critique n'est bloquée

3. **Core Web Vitals** : Activer les rapports
   - LCP, FID, CLS
   - Données disponibles sous 7-14 jours (besoin de volume)

4. **Ergonomie mobile** : Vérifier aucune erreur
   - Toutes les pages doivent être "Adaptées aux mobiles"

---

## 📊 KPI de succès

### Immédiat (J+1)
- ✅ Propriété GSC vérifiée (badge vert)
- ✅ Sitemap soumis et accepté
- ✅ 0 erreur d'indexation critique

### Court terme (J+7)
- ✅ Premières données de performance visibles
- ✅ ~40-50 pages indexées
- ✅ Aucune erreur Core Web Vitals

### Moyen terme (J+30)
- ✅ Historique de données complet (impressions, clics, positions)
- ✅ Suivi position "Guillaume Stehelin Ligerio" actif
- ✅ Rapports automatiques configurés

---

## ⚙️ Procédure d'exécution

### Étape 1 : Créer la propriété GSC
```
1. https://search.google.com/search-console
2. Ajouter propriété → Domaine → gslv.fr
3. Copier code de vérification
```

### Étape 2 : Modifier le code
**Fichier** : `/app/layout.tsx`  
**Ligne** : ~113

```typescript
verification: {
  google: 'REMPLACER_PAR_LE_CODE_REEL' // ⬅️ Coller le code ici
}
```

### Étape 3 : Déployer
```bash
git add app/layout.tsx
git commit -m "feat: Configure Google Search Console verification"
git push origin main
# Attendre déploiement automatique (2-5 min)
```

### Étape 4 : Vérifier dans GSC
```
1. Retour sur GSC
2. Cliquer "Vérifier"
3. ✅ Badge vert "Propriété vérifiée"
```

### Étape 5 : Soumettre sitemap
```
1. Menu "Sitemaps"
2. Ajouter : sitemap.xml
3. Envoyer
4. Attendre 1-2h → vérifier statut "Réussite"
```

### Étape 6 : Configurer les alertes (optionnel mais recommandé)
```
1. Paramètres → Utilisateurs et autorisations
2. Ajouter votre email principal
3. Activer notifications :
   - Erreurs d'indexation critiques
   - Problèmes de sécurité
   - Nouveaux messages
```

---

## 🔗 Dépendances

### Pré-requis
- ✅ Compte Google (gmail)
- ✅ Accès propriétaire au domaine gslv.fr
- ✅ Accès modification `/app/layout.tsx`

### Bloquants
- ❌ Si pas d'accès DNS : utiliser balise HTML
- ❌ Si balise HTML ne fonctionne pas : vérifier déploiement effectif

### Tâches débloquées après complétion
- Tâche 01 : Optimiser article Ligerio (suivi position)
- Tâche 02 : Schema Article (vérification Rich Results)
- Tâche 05-08 : Pages piliers (suivi trafic)
- Tâche 12 : Audit Core Web Vitals (données)

---

## 💡 Notes et insights

### Pourquoi c'est critique
- **Toutes les tâches SEO** dépendent des données GSC
- Impossible de mesurer ROI sans tracking
- Google Search Console = gratuit et officiel (source primaire)

### Données disponibles dans GSC

1. **Performance (SERP)**
   - Requêtes qui génèrent des impressions
   - Positions moyennes par mot-clé
   - CTR par page
   - Évolution temporelle

2. **Couverture d'index**
   - Pages crawlées vs indexées
   - Erreurs d'indexation (404, redirections, robots.txt)
   - Pages exclues (duplicates, canonical, noindex)

3. **Core Web Vitals**
   - LCP, FID, CLS par page
   - Classement "Bon / À améliorer / Mauvais"
   - Impact sur ranking

4. **Liens**
   - Backlinks externes (qui pointe vers nous)
   - Liens internes (structure du site)
   - Textes d'ancre

5. **Actions manuelles**
   - Pénalités Google (spam, liens artificiels)
   - Historique des actions

### Erreurs fréquentes à éviter
- ❌ Ne pas vérifier la propriété → données jamais disponibles
- ❌ Oublier le sitemap → indexation lente et incomplète
- ❌ Ne pas activer les alertes → manquer des erreurs critiques
- ❌ Utiliser plusieurs comptes Google → données fragmentées

### Best practices
- ✅ Vérifier la propriété avec 2 méthodes (balise HTML + DNS) → sécurité
- ✅ Ajouter 2-3 utilisateurs (owner + collaborateurs) → continuité
- ✅ Configurer Data Studio pour dashboards avancés
- ✅ Exporter données mensuellement (backup CSV)

---

## 📚 Ressources

### Documentation officielle
- [Google Search Console : Guide de démarrage](https://support.google.com/webmasters/answer/9128668)
- [Vérification de propriété](https://support.google.com/webmasters/answer/9008080)
- [Soumettre un sitemap](https://support.google.com/webmasters/answer/183668)

### Tutoriels
- [Moz : GSC Setup Guide](https://moz.com/learn/seo/google-search-console)
- [Ahrefs : GSC Complete Guide](https://ahrefs.com/blog/google-search-console/)

### Outils complémentaires
- Google Analytics 4 : Compléter avec données comportementales
- SEMrush Position Tracking : Suivi position quotidien (GSC = hebdo)
- Ahrefs Site Explorer : Backlinks plus complets que GSC

---

**Créé le** : 9 novembre 2025  
**Dernière mise à jour** : 9 novembre 2025  
**Responsable** : Guillaume Stehelin  
**Urgence** : Cette tâche **débloque toutes les autres** → à faire EN PREMIER.

