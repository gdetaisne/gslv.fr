# Favicons GSLV.fr

Ce dossier contient toutes les icônes nécessaires pour l'affichage optimal du logo GSLV sur tous les appareils et navigateurs.

## 📁 Structure des fichiers

```
public/
├── favicon.ico              # Icône principale (16x16, 32x32, 48x48)
├── icon-192x192.png         # Icône PWA (192x192)
├── icon-512x512.png         # Icône PWA (512x512)
├── apple-touch-icon.png     # Icône iOS (180x180)
└── images/
    └── logo/
        └── logo.png         # Logo principal (source)
```

## 🎨 Spécifications techniques

### favicon.ico
- **Format** : ICO (multi-tailles)
- **Tailles** : 16x16, 32x32, 48x48 pixels
- **Usage** : Onglets de navigateur, barre d'adresse
- **Fond** : Transparent recommandé

### icon-192x192.png
- **Format** : PNG
- **Taille** : 192x192 pixels
- **Usage** : PWA, Android, Chrome
- **Fond** : Transparent ou adapté au thème

### icon-512x512.png
- **Format** : PNG
- **Taille** : 512x512 pixels
- **Usage** : PWA, Android, Chrome (haute résolution)
- **Fond** : Transparent ou adapté au thème

### apple-touch-icon.png
- **Format** : PNG
- **Taille** : 180x180 pixels
- **Usage** : iOS (ajout à l'écran d'accueil)
- **Fond** : Transparent recommandé

## 🔧 Génération des favicons

### Méthode 1 : Outils en ligne (recommandé)
1. **Favicon.io** : https://favicon.io/favicon-converter/
   - Uploadez votre logo principal
   - Téléchargez le package complet
   - Placez les fichiers dans `/public/`

2. **RealFaviconGenerator** : https://realfavicongenerator.net/
   - Plus d'options de personnalisation
   - Génère un code HTML optimisé

### Méthode 2 : Logiciels
- **GIMP** (gratuit) : Export en différentes tailles
- **Photoshop** : Export pour le web
- **Canva** : Création et redimensionnement

## ✅ Test et validation

### Navigateurs
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Edge (desktop)

### Mobile
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Ajout à l'écran d'accueil iOS
- [ ] Ajout à l'écran d'accueil Android

### PWA
- [ ] Installation PWA
- [ ] Icône dans le launcher
- [ ] Splash screen

## 🚀 Déploiement

1. Placez tous les fichiers dans `/public/`
2. Vérifiez les références dans `app/layout.tsx`
3. Testez localement
4. Déployez sur votre serveur
5. Videz le cache du navigateur

## 📝 Notes

- Les icônes sont référencées dans `app/layout.tsx`
- Le manifest PWA est dans `app/manifest.json`
- Les métadonnées Open Graph utilisent `og-image.jpg`
- Testez régulièrement sur différents appareils
