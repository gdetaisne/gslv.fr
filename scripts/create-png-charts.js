const fs = require('fs');
const path = require('path');

console.log('🖼️ Création de graphiques PNG');
console.log('============================\n');

// Créer le dossier charts s'il n'existe pas
const chartsDir = path.join(__dirname, '../public/images/charts');
if (!fs.existsSync(chartsDir)) {
  fs.mkdirSync(chartsDir, { recursive: true });
}

// Créer des graphiques HTML simples qui seront convertis en images
const createChartHTML = (title, data, colors, type = 'bar') => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    body { 
      font-family: Arial, sans-serif; 
      margin: 0; 
      padding: 20px; 
      background: white;
    }
    .chart-container {
      width: 600px;
      height: 300px;
      position: relative;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .chart-title {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
      color: #1f2937;
    }
    .bar {
      height: 40px;
      margin: 10px 0;
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      color: white;
      font-weight: bold;
    }
    .bar-label {
      flex: 1;
    }
    .bar-value {
      font-size: 16px;
    }
    .source {
      position: absolute;
      bottom: 10px;
      right: 20px;
      font-size: 12px;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <div class="chart-container">
    <div class="chart-title">${title}</div>
    ${data.map((item, index) => `
      <div class="bar" style="background: linear-gradient(90deg, ${colors[index]} 0%, ${colors[index]}dd 100%); width: ${item.width}%;">
        <div class="bar-label">${item.label}</div>
        <div class="bar-value">${item.value}</div>
      </div>
    `).join('')}
    <div class="source">Source: ${data[0].source || 'Études internes'}</div>
  </div>
</body>
</html>`;
};

// Données pour les graphiques
const chartsData = {
  startupFailure: {
    title: "Causes d'échec des startups",
    data: [
      { label: "Problèmes financiers", value: "73%", width: 100, source: "CB Insights 2024" },
      { label: "Problèmes de marché", value: "20%", width: 27, source: "CB Insights 2024" },
      { label: "Autres causes", value: "7%", width: 10, source: "CB Insights 2024" }
    ],
    colors: ["#1e40af", "#e5e7eb", "#e5e7eb"]
  },
  financialReporting: {
    title: "Reporting financier en temps réel",
    data: [
      { label: "Pas de reporting temps réel", value: "68%", width: 100, source: "PwC Global SME Survey" },
      { label: "Reporting temps réel", value: "32%", width: 47, source: "PwC Global SME Survey" }
    ],
    colors: ["#059669", "#e5e7eb"]
  },
  fundraisingFailures: {
    title: "Échecs de levées de fonds",
    data: [
      { label: "Échouent sans préparation financière", value: "85%", width: 100, source: "Ernst & Young" },
      { label: "Réussissent avec préparation", value: "15%", width: 18, source: "Ernst & Young" }
    ],
    colors: ["#dc2626", "#e5e7eb"]
  }
};

// Créer les fichiers HTML pour chaque graphique
Object.entries(chartsData).forEach(([key, chart]) => {
  const html = createChartHTML(chart.title, chart.data, chart.colors);
  const filename = `${key}.html`;
  fs.writeFileSync(path.join(chartsDir, filename), html);
  console.log(`✅ Créé: ${filename}`);
});

console.log('\n📊 Graphiques HTML créés !');
console.log('💡 Pour les convertir en PNG, vous pouvez :');
console.log('   1. Ouvrir les fichiers HTML dans un navigateur');
console.log('   2. Faire une capture d\'écran');
console.log('   3. Ou utiliser un outil comme Puppeteer pour l\'automatiser');
console.log('\n🎨 Les graphiques sont maintenant prêts !');
