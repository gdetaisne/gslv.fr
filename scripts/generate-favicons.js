const fs = require('fs');
const path = require('path');

console.log('🎨 Générateur de favicons pour GSLV.fr');
console.log('=====================================\n');

// Instructions pour l'utilisateur
console.log('📋 Instructions pour créer vos favicons :');
console.log('');
console.log('1. Placez votre logo principal dans : /public/images/logo/logo.png');
console.log('');
console.log('2. Créez les fichiers suivants dans /public/ :');
console.log('   - favicon.ico (16x16, 32x32, 48x48 pixels)');
console.log('   - icon-192x192.png (192x192 pixels)');
console.log('   - icon-512x512.png (512x512 pixels)');
console.log('   - apple-touch-icon.png (180x180 pixels)');
console.log('');
console.log('3. Recommandations :');
console.log('   - Format : PNG avec transparence pour les .png');
console.log('   - Format : ICO pour le favicon.ico');
console.log('   - Couleurs : Gardez le dégradé métallique de votre logo');
console.log('   - Fond : Transparent ou adapté au thème');
console.log('');
console.log('4. Outils recommandés :');
console.log('   - En ligne : https://favicon.io/favicon-converter/');
console.log('   - En ligne : https://realfavicongenerator.net/');
console.log('   - Logiciel : GIMP, Photoshop, ou Canva');
console.log('');
console.log('5. Test :');
console.log('   - Ouvrez votre site dans le navigateur');
console.log('   - Vérifiez que l\'icône apparaît dans l\'onglet');
console.log('   - Testez sur mobile (ajout à l\'écran d\'accueil)');
console.log('');

// Vérifier si le dossier logo existe
const logoDir = path.join(__dirname, '../public/images/logo');
if (!fs.existsSync(logoDir)) {
  console.log('❌ Le dossier /public/images/logo/ n\'existe pas encore.');
  console.log('   Création du dossier...');
  fs.mkdirSync(logoDir, { recursive: true });
  console.log('✅ Dossier créé !');
} else {
  console.log('✅ Le dossier /public/images/logo/ existe déjà.');
}

// Vérifier si le logo principal existe
const logoPath = path.join(logoDir, 'logo.png');
if (fs.existsSync(logoPath)) {
  console.log('✅ Logo principal trouvé : /public/images/logo/logo.png');
} else {
  console.log('❌ Logo principal manquant : /public/images/logo/logo.png');
  console.log('   Placez votre logo dans ce fichier pour continuer.');
}

console.log('');
console.log('🚀 Une fois les fichiers créés, redémarrez votre serveur de développement !');
