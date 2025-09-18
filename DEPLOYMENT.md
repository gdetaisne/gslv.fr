# 🚀 Guide de déploiement sur Captain

## Prérequis
- Compte Captain configuré
- Accès à votre VPN Captain : https://captain.captain.gslv.cloud/#/apps
- Git configuré avec votre repository

## Étapes de déploiement

### 1. Préparation du repository
```bash
# Vérifier que tous les fichiers sont commités
git add .
git commit -m "Prepare for Captain deployment"
git push origin main
```

### 2. Configuration Captain
1. Connectez-vous à votre dashboard Captain : https://captain.captain.gslv.cloud/#/apps
2. Cliquez sur "Create New App"
3. Choisissez "Deploy from Git Repository"
4. Configurez :
   - **App Name**: `gslv-cloud`
   - **Repository URL**: URL de votre repository Git
   - **Branch**: `main`
   - **Root Directory**: `/` (racine du projet)

### 3. Variables d'environnement
Dans Captain, ajoutez ces variables d'environnement :
```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
```

### 4. Configuration du domaine
1. Dans Captain, allez dans "App Configs"
2. Ajoutez votre domaine personnalisé :
   - **Domain**: `gslv.cloud` (ou votre domaine)
   - **Enable HTTPS**: ✅ Activé
   - **Force HTTPS**: ✅ Activé

### 5. Déploiement
1. Cliquez sur "Deploy" dans Captain
2. Captain va automatiquement :
   - Cloner votre repository
   - Construire l'image Docker
   - Déployer l'application
   - Configurer le reverse proxy

### 6. Vérification
Une fois déployé, votre site sera accessible sur :
- `https://gslv.cloud` (votre domaine)
- `https://gslv-cloud.captain.gslv.cloud` (URL Captain par défaut)

## Structure des fichiers pour Captain

```
gslv-cloud/
├── captain-definition    # Configuration Captain
├── Dockerfile           # Image Docker optimisée
├── .dockerignore        # Fichiers à ignorer
├── next.config.js       # Configuration Next.js avec standalone
├── package.json         # Dépendances Node.js
└── ... (autres fichiers du projet)
```

## Monitoring et logs
- **Logs**: Accessibles via Captain Dashboard > App > Logs
- **Metrics**: CPU, RAM, Network dans Captain Dashboard
- **Health Check**: Captain vérifie automatiquement le port 3000

## Mise à jour
Pour mettre à jour l'application :
1. Faites vos modifications
2. Committez et pushez vers `main`
3. Captain détectera automatiquement les changements
4. Un nouveau déploiement sera lancé automatiquement

## Support
- Documentation Captain : https://captain.captain.gslv.cloud/docs
- Logs d'erreur : Captain Dashboard > App > Logs
