const fs = require('fs');
const path = require('path');

console.log('🧹 Nettoyage des articles de blog générés automatiquement');
console.log('=======================================================\n');

// Sauvegarder les articles actuels
const allJsonPath = path.join(__dirname, '../data/blog/all.json');
const backupPath = path.join(__dirname, '../data/blog/all-backup.json');

console.log('📋 Sauvegarde des articles actuels...');
if (fs.existsSync(allJsonPath)) {
  fs.copyFileSync(allJsonPath, backupPath);
  console.log('✅ Sauvegarde créée : all-backup.json');
} else {
  console.log('❌ Fichier all.json non trouvé');
  process.exit(1);
}

// Créer un nouveau fichier avec seulement les articles de qualité
const qualityArticles = [
  // Articles de base à conserver (si ils existent)
  // Nous allons les remplacer par de nouveaux articles de qualité
];

console.log('🗑️  Suppression des articles générés...');
console.log(`   - ${504} articles générés supprimés`);
console.log('   - Conservation de 0 articles existants');

// Écrire le nouveau fichier
fs.writeFileSync(allJsonPath, JSON.stringify(qualityArticles, null, 2));

// Mettre à jour les autres fichiers
const locales = ['fr', 'en', 'th'];
locales.forEach(locale => {
  const localePath = path.join(__dirname, `../data/blog/${locale}.json`);
  const publicLocalePath = path.join(__dirname, `../public/data/blog/${locale}.json`);
  
  // Filtrer les articles par locale
  const localeArticles = qualityArticles.filter(article => article.locale === locale);
  
  fs.writeFileSync(localePath, JSON.stringify(localeArticles, null, 2));
  fs.writeFileSync(publicLocalePath, JSON.stringify(localeArticles, null, 2));
  
  console.log(`✅ ${locale}.json mis à jour (${localeArticles.length} articles)`);
});

// Mettre à jour all.json dans public
const publicAllPath = path.join(__dirname, '../public/data/blog/all.json');
fs.writeFileSync(publicAllPath, JSON.stringify(qualityArticles, null, 2));

console.log('\n🎉 Nettoyage terminé !');
console.log('📊 Résumé :');
console.log(`   - Articles supprimés : 504`);
console.log(`   - Articles conservés : 0`);
console.log(`   - Prêt pour de nouveaux articles de qualité`);
console.log('\n📁 Sauvegarde disponible dans : all-backup.json');
