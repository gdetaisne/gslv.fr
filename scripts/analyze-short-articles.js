const fs = require('fs');
const path = require('path');

// Lire le fichier all.json
const allJsonPath = path.join(__dirname, '../data/blog/all.json');
const data = JSON.parse(fs.readFileSync(allJsonPath, 'utf8'));

console.log(`📊 Analyse de ${data.length} articles de blog...\n`);

// Analyser les articles
const shortArticles = [];
const articlesByLength = {
  '0-100': 0,
  '100-200': 0,
  '200-300': 0,
  '300-500': 0,
  '500+': 0
};

data.forEach((article, index) => {
  const contentLength = article.content ? article.content.length : 0;
  
  // Catégoriser par longueur
  if (contentLength < 100) {
    articlesByLength['0-100']++;
  } else if (contentLength < 200) {
    articlesByLength['100-200']++;
  } else if (contentLength < 300) {
    articlesByLength['200-300']++;
  } else if (contentLength < 500) {
    articlesByLength['300-500']++;
  } else {
    articlesByLength['500+']++;
  }
  
  // Articles de moins de 300 caractères
  if (contentLength < 300) {
    shortArticles.push({
      id: article.id,
      title: article.title,
      contentLength: contentLength,
      content: article.content,
      category: article.category,
      locale: article.locale,
      publishedAt: article.publishedAt
    });
  }
});

// Afficher les statistiques
console.log('📈 Répartition des articles par longueur de contenu:');
Object.entries(articlesByLength).forEach(([range, count]) => {
  const percentage = ((count / data.length) * 100).toFixed(1);
  console.log(`  ${range} caractères: ${count} articles (${percentage}%)`);
});

console.log(`\n🚨 Articles de moins de 300 caractères: ${shortArticles.length} sur ${data.length} (${((shortArticles.length / data.length) * 100).toFixed(1)}%)`);

if (shortArticles.length > 0) {
  console.log('\n📋 Liste détaillée des articles courts:');
  console.log('=' .repeat(80));
  
  shortArticles.forEach((article, index) => {
    console.log(`\n${index + 1}. ${article.title}`);
    console.log(`   ID: ${article.id}`);
    console.log(`   Catégorie: ${article.category}`);
    console.log(`   Langue: ${article.locale}`);
    console.log(`   Longueur: ${article.contentLength} caractères`);
    console.log(`   Publié: ${new Date(article.publishedAt).toLocaleDateString('fr-FR')}`);
    console.log(`   Contenu: "${article.content}"`);
    console.log('-'.repeat(80));
  });
}

// Sauvegarder la liste dans un fichier
const outputPath = path.join(__dirname, '../short-articles-report.json');
fs.writeFileSync(outputPath, JSON.stringify({
  summary: {
    totalArticles: data.length,
    shortArticles: shortArticles.length,
    percentage: ((shortArticles.length / data.length) * 100).toFixed(1)
  },
  articlesByLength,
  shortArticles
}, null, 2));

console.log(`\n💾 Rapport sauvegardé dans: ${outputPath}`);

