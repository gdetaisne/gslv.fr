# GSLV.cloud - Site Vitrine

Site vitrine professionnel pour GSLV.cloud, spécialisé dans les services CFO & COO part-time pour startups et scaleups.

## 🚀 Fonctionnalités

- **Multilingue** : Français, Anglais, Thaïlandais
- **Blog SEO** : 500+ articles générés automatiquement
- **Design moderne** : Interface startup-friendly et responsive
- **Prise de rendez-vous** : Intégration Calendly
- **SEO optimisé** : Sitemap, métadonnées, structured data
- **Performance** : Next.js 14 avec optimisations

## 🛠️ Technologies

- **Framework** : Next.js 14 avec App Router
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Internationalisation** : next-intl
- **Déploiement** : Docker + Traefik

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/your-username/gslv-cloud.git
cd gslv-cloud

# Installer les dépendances
npm install

# Générer le contenu du blog
npm run generate-blog

# Démarrer en développement
npm run dev
```

## 🚀 Déploiement

### Avec Docker

```bash
# Construire et démarrer les services
docker-compose up -d

# Vérifier les logs
docker-compose logs -f gslv-cloud
```

### Avec Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

## 🌐 Configuration

### Variables d'environnement

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://gslv.fr
NEXT_PUBLIC_CALENDLY_URL=your-calendly-url
```

### Configuration Traefik

Le fichier `docker-compose.yml` inclut la configuration Traefik pour :
- HTTPS automatique avec Let's Encrypt
- Redirection HTTP vers HTTPS
- Dashboard Traefik sur `traefik.gslv.cloud`

## 📝 Contenu

### Génération du blog

Le script `scripts/generate-blog-content.js` génère automatiquement 500+ articles dans les 3 langues :

```bash
npm run generate-blog
```

### Structure des articles

- **Catégories** : Scaling, Finance, Outils, Levées de fonds
- **Langues** : FR, EN, TH
- **SEO** : Métadonnées optimisées pour chaque article

## 🎨 Design System

### Couleurs

- **Primary** : Bleu (#0ea5e9)
- **Accent** : Vert (#22c55e)
- **Dark** : Gris foncé (#0f172a)

### Composants

- `Button` : Boutons avec variants et tailles
- `Card` : Cartes avec effets hover
- `Header` : Navigation responsive
- `Footer` : Pied de page complet
- `LanguageSwitcher` : Sélecteur de langue

## 📱 Responsive

Le site est entièrement responsive avec :
- Mobile-first design
- Breakpoints Tailwind
- Navigation mobile optimisée
- Images adaptatives

## 🔍 SEO

- Sitemap XML automatique
- Métadonnées Open Graph
- Structured Data (JSON-LD)
- Robots.txt optimisé
- URLs canoniques

## 📊 Performance

- Next.js 14 avec optimisations
- Images optimisées
- Lazy loading
- Code splitting automatique
- Cache headers

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amazing-feature`)
3. Commit (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Email** : gdetaisne@gmail.com
- **Site** : https://gslv.fr
- **LinkedIn** : https://linkedin.com/in/guillaume-stehelin

