const fs = require('fs');
const path = require('path');

// Categories and their respective topics
const categories = {
  scaling: {
    name: 'Scaling & Opérations',
    topics: [
      'Stratégies de croissance rapide',
      'Gestion des équipes en expansion',
      'Processus de scalabilité',
      'Outils de gestion de la croissance',
      'Organisation des opérations',
      'Gestion de la qualité à grande échelle',
      'Automatisation des processus',
      'Gestion des performances',
      'Stratégies de recrutement',
      'Culture d\'entreprise en croissance'
    ]
  },
  finance: {
    name: 'Finance pour startups',
    topics: [
      'Gestion de trésorerie',
      'Prévisions financières',
      'Tableaux de bord financiers',
      'Gestion des coûts',
      'Analyse de rentabilité',
      'Gestion des investisseurs',
      'Reporting financier',
      'Audit interne',
      'Gestion des risques financiers',
      'Optimisation fiscale'
    ]
  },
  tools: {
    name: 'Outils & Processus',
    topics: [
      'Outils de gestion de projet',
      'CRM et gestion client',
      'Outils de comptabilité',
      'Plateformes de collaboration',
      'Outils d\'analyse de données',
      'Automatisation marketing',
      'Gestion des ressources humaines',
      'Outils de communication',
      'Plateformes de vente',
      'Outils de reporting'
    ]
  },
  fundraising: {
    name: 'Levées de fonds',
    topics: [
      'Préparation de la levée',
      'Pitch deck et présentation',
      'Négociation avec les investisseurs',
      'Due diligence',
      'Valuation et évaluation',
      'Types de financement',
      'Investisseurs et VCs',
      'Droit des affaires',
      'Gestion post-levée',
      'Stratégies de sortie'
    ]
  }
};

// SEO keywords for each category
const seoKeywords = {
  scaling: ['scaling', 'croissance', 'opérations', 'équipes', 'processus', 'startup', 'scale-up'],
  finance: ['finance', 'startup', 'trésorerie', 'budget', 'investisseurs', 'levée de fonds', 'comptabilité'],
  tools: ['outils', 'logiciels', 'processus', 'automatisation', 'productivité', 'gestion', 'startup'],
  fundraising: ['levée de fonds', 'investisseurs', 'VC', 'financement', 'pitch', 'valuation', 'startup']
};

// Generate article content
function generateArticle(category, topic, index, locale) {
  const titles = {
    fr: {
      scaling: [
        `Comment ${topic.toLowerCase()} pour accélérer votre croissance`,
        `Les 5 clés du ${topic.toLowerCase()} en startup`,
        `${topic}: guide complet pour les entrepreneurs`,
        `Optimiser ${topic.toLowerCase()}: les meilleures pratiques`,
        `${topic} et hypercroissance: ce qu'il faut savoir`
      ],
      finance: [
        `Gestion financière: ${topic.toLowerCase()} pour startups`,
        `Les bases de ${topic.toLowerCase()} en entreprise`,
        `Comment maîtriser ${topic.toLowerCase()} en startup`,
        `${topic}: guide pratique pour entrepreneurs`,
        `Optimiser ${topic.toLowerCase()}: conseils d'expert`
      ],
      tools: [
        `Top 10 des outils pour ${topic.toLowerCase()}`,
        `Comment choisir les bons outils pour ${topic.toLowerCase()}`,
        `${topic}: comparatif des meilleures solutions`,
        `Outils indispensables pour ${topic.toLowerCase()}`,
        `Automatiser ${topic.toLowerCase()}: les meilleurs outils`
      ],
      fundraising: [
        `Guide complet: ${topic.toLowerCase()} pour startups`,
        `Comment réussir ${topic.toLowerCase()} en startup`,
        `${topic}: les erreurs à éviter`,
        `Préparer ${topic.toLowerCase()}: checklist complète`,
        `Maîtriser ${topic.toLowerCase()}: conseils d'expert`
      ]
    },
    en: {
      scaling: [
        `How to ${topic.toLowerCase()} to accelerate your growth`,
        `The 5 keys to ${topic.toLowerCase()} in startups`,
        `${topic}: complete guide for entrepreneurs`,
        `Optimizing ${topic.toLowerCase()}: best practices`,
        `${topic} and hypergrowth: what you need to know`
      ],
      finance: [
        `Financial management: ${topic.toLowerCase()} for startups`,
        `The basics of ${topic.toLowerCase()} in business`,
        `How to master ${topic.toLowerCase()} in startups`,
        `${topic}: practical guide for entrepreneurs`,
        `Optimizing ${topic.toLowerCase()}: expert advice`
      ],
      tools: [
        `Top 10 tools for ${topic.toLowerCase()}`,
        `How to choose the right tools for ${topic.toLowerCase()}`,
        `${topic}: comparison of the best solutions`,
        `Essential tools for ${topic.toLowerCase()}`,
        `Automating ${topic.toLowerCase()}: the best tools`
      ],
      fundraising: [
        `Complete guide: ${topic.toLowerCase()} for startups`,
        `How to succeed in ${topic.toLowerCase()} for startups`,
        `${topic}: mistakes to avoid`,
        `Preparing ${topic.toLowerCase()}: complete checklist`,
        `Mastering ${topic.toLowerCase()}: expert advice`
      ]
    },
    th: {
      scaling: [
        `วิธี${topic.toLowerCase()}เพื่อเร่งการเติบโต`,
        `5 กุญแจสำคัญของ${topic.toLowerCase()}ในสตาร์ทอัพ`,
        `${topic}: คู่มือฉบับสมบูรณ์สำหรับผู้ประกอบการ`,
        `การเพิ่มประสิทธิภาพ${topic.toLowerCase()}: วิธีปฏิบัติที่ดีที่สุด`,
        `${topic}และการเติบโตอย่างรวดเร็ว: สิ่งที่คุณต้องรู้`
      ],
      finance: [
        `การจัดการทางการเงิน: ${topic.toLowerCase()}สำหรับสตาร์ทอัพ`,
        `พื้นฐานของ${topic.toLowerCase()}ในธุรกิจ`,
        `วิธีเชี่ยวชาญ${topic.toLowerCase()}ในสตาร์ทอัพ`,
        `${topic}: คู่มือปฏิบัติสำหรับผู้ประกอบการ`,
        `การเพิ่มประสิทธิภาพ${topic.toLowerCase()}: คำแนะนำจากผู้เชี่ยวชาญ`
      ],
      tools: [
        `10 อันดับเครื่องมือสำหรับ${topic.toLowerCase()}`,
        `วิธีเลือกเครื่องมือที่เหมาะสมสำหรับ${topic.toLowerCase()}`,
        `${topic}: การเปรียบเทียบโซลูชันที่ดีที่สุด`,
        `เครื่องมือจำเป็นสำหรับ${topic.toLowerCase()}`,
        `การทำให้${topic.toLowerCase()}เป็นอัตโนมัติ: เครื่องมือที่ดีที่สุด`
      ],
      fundraising: [
        `คู่มือฉบับสมบูรณ์: ${topic.toLowerCase()}สำหรับสตาร์ทอัพ`,
        `วิธีประสบความสำเร็จใน${topic.toLowerCase()}สำหรับสตาร์ทอัพ`,
        `${topic}: ข้อผิดพลาดที่ควรหลีกเลี่ยง`,
        `การเตรียม${topic.toLowerCase()}: รายการตรวจสอบที่สมบูรณ์`,
        `การเชี่ยวชาญ${topic.toLowerCase()}: คำแนะนำจากผู้เชี่ยวชาญ`
      ]
    }
  };

  const title = titles[locale][category][index % titles[locale][category].length];
  const slug = title.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const content = generateContent(topic, category, locale);
  const excerpt = content.substring(0, 150) + '...';
  const readTime = Math.ceil(content.split(' ').length / 200);

  return {
    id: `${locale}-${category}-${index}`,
    title,
    slug,
    excerpt,
    content,
    category,
    publishedAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
    readTime,
    tags: seoKeywords[category].slice(0, 5),
    locale,
    seo: {
      title: `${title} | GSLV.fr`,
      description: excerpt,
      keywords: seoKeywords[category]
    }
  };
}

function generateContent(topic, category, locale) {
  const paragraphs = {
    fr: [
      `Dans le monde des startups, ${topic.toLowerCase()} est un enjeu majeur pour assurer une croissance durable.`,
      `Les entrepreneurs doivent maîtriser les aspects techniques et stratégiques de ${topic.toLowerCase()} pour réussir.`,
      `Cet article vous présente les meilleures pratiques et les pièges à éviter.`,
      `Nous aborderons également les outils et méthodes les plus efficaces.`,
      `En conclusion, ${topic.toLowerCase()} nécessite une approche structurée et adaptée à votre contexte.`
    ],
    en: [
      `In the startup world, ${topic.toLowerCase()} is a major challenge for ensuring sustainable growth.`,
      `Entrepreneurs must master both the technical and strategic aspects of ${topic.toLowerCase()} to succeed.`,
      `This article presents the best practices and pitfalls to avoid.`,
      `We will also cover the most effective tools and methods.`,
      `In conclusion, ${topic.toLowerCase()} requires a structured approach adapted to your context.`
    ],
    th: [
      `ในโลกของสตาร์ทอัพ ${topic.toLowerCase()}เป็นความท้าทายสำคัญในการรับประกันการเติบโตที่ยั่งยืน`,
      `ผู้ประกอบการต้องเชี่ยวชาญทั้งด้านเทคนิคและกลยุทธ์ของ${topic.toLowerCase()}เพื่อความสำเร็จ`,
      `บทความนี้จะนำเสนอแนวทางปฏิบัติที่ดีที่สุดและข้อผิดพลาดที่ควรหลีกเลี่ยง`,
      `เราจะพูดถึงเครื่องมือและวิธีการที่มีประสิทธิภาพมากที่สุดด้วย`,
      `สรุปแล้ว ${topic.toLowerCase()}ต้องการแนวทางที่มีโครงสร้างและปรับให้เหมาะกับบริบทของคุณ`
    ]
  };

  return paragraphs[locale].join(' ');
}

// Generate all articles
function generateAllArticles() {
  const articles = [];
  const locales = ['fr', 'en', 'th'];
  const articlesPerCategory = Math.ceil(500 / (Object.keys(categories).length * locales.length));

  locales.forEach(locale => {
    Object.keys(categories).forEach(category => {
      const categoryTopics = categories[category].topics;
      
      for (let i = 0; i < articlesPerCategory; i++) {
        const topic = categoryTopics[i % categoryTopics.length];
        const article = generateArticle(category, topic, i, locale);
        articles.push(article);
      }
    });
  });

  return articles;
}

// Save articles to JSON files
function saveArticles(articles) {
  const outputDir = path.join(__dirname, '..', 'data', 'blog');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Group articles by locale
  const articlesByLocale = {};
  articles.forEach(article => {
    if (!articlesByLocale[article.locale]) {
      articlesByLocale[article.locale] = [];
    }
    articlesByLocale[article.locale].push(article);
  });

  // Save each locale's articles
  Object.keys(articlesByLocale).forEach(locale => {
    const filePath = path.join(outputDir, `${locale}.json`);
    fs.writeFileSync(filePath, JSON.stringify(articlesByLocale[locale], null, 2));
    console.log(`Generated ${articlesByLocale[locale].length} articles for ${locale}`);
  });

  // Save all articles in one file
  const allArticlesPath = path.join(outputDir, 'all.json');
  fs.writeFileSync(allArticlesPath, JSON.stringify(articles, null, 2));
  console.log(`Generated ${articles.length} total articles`);
}

// Run the generation
const articles = generateAllArticles();
saveArticles(articles);

