/* ═══════════════════════════════════════════════════
   NABILA HULWANA — PORTFOLIO SCRIPT
═══════════════════════════════════════════════════ */

/* ── NAV SCROLL ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

/* ── NAV ACTIVE LINK ── */
const sections = ['profile','experiences','projects','certificates','contact'];
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.dataset.section === current);
  });
});

/* ═══════════════════════════════════════════════════
   EXPERIENCE SLIDER
═══════════════════════════════════════════════════ */
const expState = {};
function slideExp(id, dir) {
  const wrap = document.getElementById('sl-' + id);
  const slides = wrap.querySelector('.exp-slides');
  const imgs = slides.querySelectorAll('img');
  if (!expState[id]) expState[id] = 0;
  expState[id] = (expState[id] + dir + imgs.length) % imgs.length;
  slides.style.transform = `translateX(-${expState[id] * 100}%)`;
}

/* ═══════════════════════════════════════════════════
   PROJECT DATA
═══════════════════════════════════════════════════ */
const projects = {

  p1: {
    title: 'FHV Vehicle Trip in NYC Analysis & Prediction',
    cat: 'Data Analysis',
    catFilter: 'data',
    desc: `Data sourced from the New York City Taxi and Limousine Commission (TLC) — official NYC.gov website.\n\n<b>Business Objective:</b> Optimize driver allocation and pricing strategies to improve the operational efficiency of FHV services (Uber & Lyft), which handle over 600,000 trips per day.\n\n<b>Focus Areas:</b>\n1. Data cleaning and analysis using SQL & Python\n2. Building a Machine Learning model to predict trip duration\n3. Creating an interactive Tableau dashboard comparing Uber & Lyft performance\n4. Trip prediction, peak hour analysis, average driver earnings, daily order volume, and pickup/dropoff zone distribution\n5. Key insights: peak hours, busiest zones, and optimal driver allocation`,
    tech: ['Python','SQL','Tableau'],
    links: [
      { label: 'PPT', icon: 'fas fa-file-powerpoint', url: 'https://drive.google.com/file/d/1p9wDmf0Gp6D4YEnL0laxI8uhOPwShsfV/view?usp=sharing' },
      { label: 'Kaggle', icon: 'fas fa-code', url: 'https://www.kaggle.com/code/nabilahulwana/analysis-data-of-fhv-lisence-in-nyc' },
    ],
    media: [
      { type: 'img', src: 'myprojects/taxianalysis/taxi1.png' },
      { type: 'img', src: 'myprojects/taxianalysis/taxi2.png' },
      { type: 'img', src: 'myprojects/taxianalysis/taxi3.png' },
      { type: 'img', src: 'myprojects/taxianalysis/taxi4.png' },
      { type: 'img', src: 'myprojects/taxianalysis/taxi5.png' },
      { type: 'img', src: 'myprojects/taxianalysis/taxi6.png' },
      { type: 'img', src: 'myprojects/taxianalysis/taxi7.png' },
      { type: 'img', src: 'myprojects/taxianalysis/taxi8.png' },
      { type: 'pdf', src: 'myprojects/taxianalysis/ppttaxi.pdf', label: 'Download PPT PDF' },
    ]
  },

  p2: {
    title: 'HR Attrition Analysis',
    cat: 'Data Analysis',
    catFilter: 'data',
    desc: `<b>Objective:</b> Identify the key factors driving high employee attrition (resignation rates).\n\n<b>Methodology:</b>\n• Dataset: IBM HR Analytics from Kaggle (1,470 employee records)\n• Data cleaning, handling missing values & duplicates, and feature engineering using Python (Pandas)\n• Statistical analysis and data visualization using Pandas, Seaborn, Matplotlib, and Excel\n• Built an interactive Power BI dashboard for operational insights\n\n<b>Key Insights:</b>\n• Low Income: 55% of attrition comes from employees earning under $2,000/month\n• Young Age Group: Employees aged 18–26 have the highest resignation rate\n• Job Role & Tenure: Entry-level roles like Sales Executive and Lab Technician show high turnover\n• Work-Life Balance: Low WLB and Environment Satisfaction scores are strong resignation predictors\n• Marital Status: Single employees carry a higher resignation risk`,
    tech: ['Python','SQL','Power BI','Excel','GitHub'],
    links: [
      { label: 'PPT', icon: 'fas fa-file-powerpoint', url: 'https://drive.google.com/file/d/1lrkkQ0Os66MAdBX2xEvuluNdFhYn3v1Q/view?usp=sharing' },
      { label: 'Kaggle', icon: 'fas fa-code', url: 'https://www.kaggle.com/code/nabilahulwana/hr-analytics-a-case-study-on-employee-attrition' },
      { label: 'Power BI Dashboard', icon: 'fas fa-chart-bar', url: 'https://drive.google.com/file/d/1EXKROfxeIs3ftUMMWxpANOcGnSTekh0J/view?usp=sharing' },
    ],
    media: [
      { type: 'img', src: 'myprojects/hranalisis/hr1.png' },
      { type: 'img', src: 'myprojects/hranalisis/hr2.png' },
      { type: 'img', src: 'myprojects/hranalisis/hr3.png' },
      { type: 'img', src: 'myprojects/hranalisis/hr4.png' },
      { type: 'img', src: 'myprojects/hranalisis/hr5.png' },
      { type: 'img', src: 'myprojects/hranalisis/hr6.png' },
      { type: 'img', src: 'myprojects/hranalisis/hr7.png' },
      { type: 'img', src: 'myprojects/hranalisis/hr8.png' },
      { type: 'img', src: 'myprojects/hranalisis/hr9.png' },
      { type: 'img', src: 'myprojects/hranalisis/hr10.png' },
      { type: 'pdf', src: 'myprojects/hranalisis/ppt - HR Attrition.pdf', label: 'Download PPT PDF' },
    ]
  },

  p3: {
    title: 'Optimization of Airbnb LA Analysis with AI Agent IBM Granite',
    cat: 'Data Analysis · AI',
    catFilter: 'data',
    desc: `Quantitative & Qualitative Analysis of Airbnb Los Angeles listings (June 2025) to determine pricing strategies, competitive advantages, and AI-based classification.\n\n<b>Dataset:</b> 32,442 Airbnb Los Angeles listings (79 columns)\n\n<b>Analysis Process:</b>\n• Data cleaning, price normalization, and handling missing values\n• EDA and data querying using Pandas Agent\n• Used IBM Granite for AI-based classification from listing descriptions:\n  — Guest type (Solo, Family, Business)\n  — Host type (Elite/Superhost, Professional)\n  — Booking policy type (Strict/Flexible)\n• Visualization of profit analysis, demand trends, price distribution, and revenue by room type\n\n<b>Key Insights:</b>\n• Market segmentation between premium areas (Bel-Air, Malibu) and high-volume areas\n• 50% of listings priced within the competitive range of $107–$228 per night\n• High-quality hosts (Superhost, 100% response rate) achieve the highest occupancy\n• Listings categorized as "Business" or "Couple" by AI can command above-market pricing`,
    tech: ['IBM Granite','LangChain','Python','Pandas'],
    links: [
      { label: 'Kaggle', icon: 'fas fa-code', url: 'https://www.kaggle.com/code/nabilahulwana/analysis-of-airbnb-la-using-ibm-granite' },
      { label: 'PPT', icon: 'fas fa-file-powerpoint', url: 'https://drive.google.com/file/d/13Zp7343i7t8R-1_VAbd9B-yCR3h-2VTF/view?usp=sharing' },
    ],
    media: [
      { type: 'img', src: 'myprojects/airbnb/airbnb1.png' },
      { type: 'img', src: 'myprojects/airbnb/airbnb2.png' },
      { type: 'img', src: 'myprojects/airbnb/airbnb3.png' },
      { type: 'img', src: 'myprojects/airbnb/airbnb4.png' },
      { type: 'img', src: 'myprojects/airbnb/airbnb5.png' },
      { type: 'pdf', src: 'myprojects/airbnb/PPT Capstone Projects.pdf', label: 'Download PPT PDF' },
    ]
  },

  p4: {
    title: 'DQFashion Sales Analysis 2017: Transaction & Revenue',
    cat: 'Data Analysis',
    catFilter: 'data',
    desc: `<b>Project Objective:</b> Analyze sales patterns, branch performance, and product categories to support data-driven business strategy.\n\n<b>Dataset:</b> 118,000+ sales transactions across 4 branches in Indonesia\n<b>Tools:</b> Power Query, Power Pivot, PivotTable, Excel Dashboard\n\n<b>Key Insights:</b>\n• Total 2017 revenue reached IDR 59.9 Billion from 396 transactions and 236,000+ units sold\n• Sales peaked in June driven by Eid al-Fitr momentum; February recorded the lowest sales\n• Dress/Gown category generated the highest revenue; accessories had high volume but low revenue\n• Jakarta branch led in transaction count; Medan branch had the highest average transaction value\n• Sales patterns show significant weekend uplift, especially on Sundays\n\n<b>Business Target:</b> Projected revenue growth from IDR 59.9B to IDR 73B (+22%) in 2018 through promotional strategies, product bundling, and branch optimization.`,
    tech: ['Excel','Power Query','Power Pivot','DAX'],
    links: [
      { label: 'Dashboard Excel', icon: 'fas fa-file-excel', url: 'https://docs.google.com/spreadsheets/d/17QrRXMXzql1refVmZ3UsJkgw5d6Khfwq/edit?usp=sharing' },
      { label: 'PPT', icon: 'fas fa-file-powerpoint', url: 'https://drive.google.com/file/d/1pDiMcr2Yc9nKKiCqYnEa4iluJCrhpHTg/view?usp=sharing' },
    ],
    media: [
      { type: 'img', src: 'myprojects/exceldqlab/transaction.png' },
      { type: 'img', src: 'myprojects/exceldqlab/finance.png' },
      { type: 'pdf', src: 'myprojects/exceldqlab/PPT - DQLab Fashion Analysis.pdf', label: 'Download PPT PDF' },
      { type: 'pdf', src: 'myprojects/exceldqlab/certificate1.pdf', label: 'Download Certificate 1' },
      { type: 'pdf', src: 'myprojects/exceldqlab/certificate2.pdf', label: 'Download Certificate 2' },
    ]
  },

  p5: {
    title: 'Python Hackathon: DQLab Retail Crisis & Recovery',
    cat: 'Data Analysis · Hackathon',
    catFilter: 'data',
    desc: `<b>Project:</b> Automated Sales Pipeline & Market Basket Analysis\n<b>Tools:</b> Python (Pandas, Mlxtend, Matplotlib), Openpyxl\n<b>Dataset:</b> 6-month retail transaction data (DQFresh Mart)\n\n<b>Project Objective:</b> Reverse a 6-month sales decline by detecting consistently growing niche products (Rising Stars) and recommending bundling strategies.\n\n<b>Pipeline & Methodology:</b>\n• Rising Star Detection: Used 3-day Moving Average. Products flagged if they showed a consecutive upward trend for more than 12 days, then ranked by Growth % and normalized to Base 100\n• Potential Packaging: Applied Apriori algorithm (Association Rules) on a transaction basket matrix with parameters: min_support 1%, Lift > 2, with at least one item being a Rising Star product\n\n<b>Output:</b>\n• retail_insight.xlsx: Excel file with 2 sheets — full Rising Star list and Potential Packaging recommendations\n• rising_star_index.png: Relative growth line chart (Base 100)\n• rising_star_actual.png: Actual sales value line chart`,
    tech: ['Python','Pandas','Mlxtend','Openpyxl','Matplotlib'],
    links: [
      { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/nabilahlw/DQLabHackathon-RetailCrisisRecovery.git' },
      { label: 'LinkedIn Post', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/posts/nabila-hulwana_dqlab-python-hackathon-ugcPost-7467843472805236737-F7gN/' },
    ],
    media: [
      { type: 'img', src: 'myprojects/hackathondqlab/index.png' },
      { type: 'img', src: 'myprojects/hackathondqlab/actual.png' },
      { type: 'pdf', src: 'myprojects/hackathondqlab/ppy python hackathon.pdf', label: 'Download PPT PDF' },
      { type: 'pdf', src: 'myprojects/hackathondqlab/Hackathon Questions.pdf', label: 'Download Hackathon Questions' },
    ]
  },

  p6: {
    title: 'TMDB Movie End-to-End Data Pipeline (Bronze → Silver → Gold → Dashboard & Cloud)',
    cat: 'Data Engineering',
    catFilter: 'engineering',
    desc: `<b>Pipeline Process:</b>\n• Data ingested from the TMDB API and Kaggle datasets (movies & credits)\n• Ingestion & Orchestration: Apache Airflow automates 5 sequential tasks every Monday\n• Medallion Architecture (PostgreSQL & dbt):\n  — Bronze: Raw ingestion from API and CSV\n  — Silver & Gold: Data transformation across 14 dbt models from staging to Business-Ready Data Mart\n• Distributed Processing: PySpark ETL for JSON schema extraction, data cleaning, and performance labeling at scale\n• Data Streaming: Kafka + Debezium CDC via PostgreSQL WAL\n• Hybrid Storage & OLAP: Data Lake (7 Parquet files) on MinIO S3-Compatible, BigQuery (Cloud Data Warehouse), and ClickHouse OLAP\n• Data Visualization: Interactive dashboard built with Streamlit\n\n<b>Key Insights & Features:</b>\n• Revenue and profit trend analysis for the film industry (1992–2016)\n• Identification of the most profitable genres and directors with the highest ROI\n• Film performance classification: Mega Blockbuster, Blockbuster, Profitable, to Loss\n• Query optimization using indexing, partitioning, and materialized views`,
    tech: ['PostgreSQL','PySpark','dbt','Kafka','ClickHouse','MinIO','Streamlit','Airflow','BigQuery'],
    links: [
      { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/nabilahlw/tmdb-pipeline-project.git' },
      { label: 'PPT', icon: 'fas fa-file-powerpoint', url: 'https://drive.google.com/file/d/1qMtpFDz7-v6o20gDUy6q3oLnVrdvzOSk/view?usp=sharing' },
    ],
    media: [
      { type: 'img', src: 'myprojects/tmdbpipeline/arsitekturtmdb.png' },
      { type: 'pdf', src: 'myprojects/tmdbpipeline/PPT - tmdb pipeline.pdf', label: 'Download PPT PDF' },
      { type: 'pdf', src: 'myprojects/tmdbpipeline/tmdb pipeline - documentation.pdf', label: 'Download Documentation' },
    ]
  },

  p7: {
    title: 'FINOTE - Digital Wallet App',
    cat: 'Mobile Development',
    catFilter: 'app',
    desc: `<b>App Purpose:</b> A Flutter and Firebase-based personal finance tracker that helps users record income and monitor daily financial activity — simple, secure, and easy to use.\n\n<b>Key Features:</b>\n• Secure login & registration system using Firebase Authentication\n• Full CRUD for income and expense transactions\n• Clean, organized transaction history for easy monitoring\n• Built with OOP principles for cleaner, more scalable code\n\n<b>Tools & Technologies:</b>\n• Flutter (Frontend & UI Framework)\n• Firebase: Authentication, Cloud Firestore, Realtime Database\n• Android Studio`,
    tech: ['Flutter','Firebase','Dart','Android Studio'],
    links: [
      { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/nabilahlw/finote.git' },
    ],
    media: [
      { type: 'img', src: 'myprojects/finote/finote1.png' },
      { type: 'img', src: 'myprojects/finote/finote2.png' },
      { type: 'img', src: 'myprojects/finote/finote3.png' },
      { type: 'img', src: 'myprojects/finote/finote4.png' },
      { type: 'img', src: 'myprojects/finote/finote5.png' },
      { type: 'img', src: 'myprojects/finote/finote6.png' },
    ]
  },

  p8: {
    title: 'TRAIN IN - Ticketing Website',
    cat: 'Web Development',
    catFilter: 'app',
    desc: `<b>App Purpose:</b> TrainIN is a web-based train e-ticketing system built with JavaScript and PHP, enabling users to:\n• Search trip schedules and select train class/type\n• Input passenger and booker details in a structured form\n• Upload payment proof (jpg/png)\n• Print invoices\n• All transaction data is stored and managed through MySQL (phpMyAdmin)\n\n<b>Key Features:</b>\n• Schedule and train type search\n• CRUD for departure schedules and passenger data\n• Online payment upload and invoice-to-image printing\n• Clean data management via phpMyAdmin\n\n<b>Tools & Technologies:</b>\n• Frontend: HTML, CSS, JavaScript\n• Backend: PHP\n• Database: MySQL (phpMyAdmin)`,
    tech: ['PHP','HTML','CSS','JavaScript','MySQL'],
    links: [
      { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/nabilahlw/train_in.git' },
      { label: 'Drive Folder', icon: 'fab fa-google-drive', url: 'https://drive.google.com/drive/folders/1j7Zw--s86KhMUaV8FxTHavpYXvEboi8A?usp=drive_link' },
    ],
    media: [
      { type: 'img', src: 'myprojects/keretain/kereta1.png' },
      { type: 'img', src: 'myprojects/keretain/kereta2.png' },
      { type: 'img', src: 'myprojects/keretain/kereta3.png' },
      { type: 'img', src: 'myprojects/keretain/kereta4.png' },
      { type: 'img', src: 'myprojects/keretain/kereta5.png' },
      { type: 'img', src: 'myprojects/keretain/kereta6.png' },
    ]
  }
};

/* ═══════════════════════════════════════════════════
   PROJECT PAGES / PAGINATION
═══════════════════════════════════════════════════ */
let currentPage = 0;
const ITEMS_PER_PAGE = 6;
let activeFilter = 'all';
let filteredKeys = [];

function getFilteredKeys() {
  const all = Object.keys(projects);
  if (activeFilter === 'all') return all;
  return all.filter(k => projects[k].catFilter === activeFilter);
}

function renderProjects() {
  filteredKeys = getFilteredKeys();
  currentPage = 0;

  const totalPages = Math.ceil(filteredKeys.length / ITEMS_PER_PAGE);
  const pagesEl = document.getElementById('projPages');
  const dotsEl  = document.getElementById('projDots');

  let html = '';
  for (let p = 0; p < totalPages; p++) {
    const pageKeys = filteredKeys.slice(p * ITEMS_PER_PAGE, (p + 1) * ITEMS_PER_PAGE);
    html += `<div class="proj-page">`;
    pageKeys.forEach(k => {
      const proj = projects[k];
      const thumb = proj.media.find(m => m.type === 'img');
      const thumbSrc = thumb ? thumb.src : '';
      html += `
        <div class="proj-card" onclick="openModal('${k}')">
          <div class="proj-thumb-wrap">
            <img src="${thumbSrc}" onerror="this.style.display='none'" alt="${proj.title}">
            <div class="proj-title-overlay">${proj.title}</div>
          </div>
          <div class="proj-body">
            <span class="proj-cat-badge">${proj.cat}</span>
            <h3>${proj.title}</h3>
          </div>
        </div>`;
    });
    const empty = ITEMS_PER_PAGE - pageKeys.length;
    for (let e = 0; e < empty; e++) html += `<div></div>`;
    html += `</div>`;
  }
  pagesEl.innerHTML = html;

  let dotsHtml = '';
  for (let i = 0; i < totalPages; i++) {
    dotsHtml += `<button class="proj-dot ${i===0?'active':''}" onclick="goPage(${i})">${i+1}</button>`;
  }
  dotsEl.innerHTML = dotsHtml;

  goPage(0);
}

function goPage(n) {
  currentPage = n;
  const pagesEl = document.getElementById('projPages');
  pagesEl.style.transform = `translateX(-${n * 100}%)`;
  document.querySelectorAll('.proj-dot').forEach((d,i) => d.classList.toggle('active', i===n));
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  document.querySelectorAll('.filt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderProjects();
    });
  });
});

/* ═══════════════════════════════════════════════════
   PROJECT MODAL
═══════════════════════════════════════════════════ */
let modalSlideIndex = 0;
let currentMediaList = [];

function openModal(id) {
  const proj = projects[id];
  if (!proj) return;

  document.getElementById('mTitle').textContent = proj.title;
  document.getElementById('mCat').textContent = proj.cat;

  document.getElementById('mDesc').innerHTML = proj.desc.replace(/\n/g, '<br>');

  const linksEl = document.getElementById('mLinks');
  linksEl.innerHTML = proj.links.map(l =>
    `<a href="${l.url}" target="_blank"><i class="${l.icon}"></i> ${l.label}</a>`
  ).join('');

  const techEl = document.getElementById('mTech');
  techEl.innerHTML = proj.tech.map(t => `
    <div class="tech-icon">
      <i class="${getTechIcon(t)}"></i>
      <span class="ti-label">${t}</span>
    </div>`).join('');

  currentMediaList = proj.media;
  modalSlideIndex = 0;
  buildModalSlides();

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function buildModalSlides() {
  const slides = document.getElementById('mSlides');
  slides.innerHTML = currentMediaList.map((m, i) => {
    if (m.type === 'img') {
      return `<img src="${m.src}" alt="slide ${i+1}" onerror="this.src='https://placehold.co/600x400/EADEBF/788E77?text=Image+${i+1}'">`;
    } else if (m.type === 'pdf') {
      return `
        <div class="pdf-slide">
          <embed src="${m.src}" type="application/pdf" width="100%" height="100%">
          <a class="pdf-download-btn" href="${m.src}" download target="_blank">
            <i class="fas fa-download"></i> ${m.label || 'Download PDF'}
          </a>
        </div>`;
    }
    return '';
  }).join('');
  updateModalSlide();
}

function updateModalSlide() {
  const slides = document.getElementById('mSlides');
  slides.style.transform = `translateX(-${modalSlideIndex * 100}%)`;
  const count = document.getElementById('mCount');
  count.textContent = `${modalSlideIndex + 1} / ${currentMediaList.length}`;
}

function slideModal(dir) {
  modalSlideIndex = (modalSlideIndex + dir + currentMediaList.length) % currentMediaList.length;
  updateModalSlide();
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

/* ═══════════════════════════════════════════════════
   TECH ICON HELPER
═══════════════════════════════════════════════════ */
function getTechIcon(name) {
  const map = {
    'Python':         'devicon-python-plain colored',
    'SQL':            'devicon-mysql-plain colored',
    'Tableau':        'devicon-tableau-plain colored',
    'Power BI':       'devicon-powerbi-plain colored',
    'Excel':          'fas fa-file-excel',
    'GitHub':         'devicon-github-plain',
    'Flutter':        'devicon-flutter-plain colored',
    'Firebase':       'devicon-firebase-plain colored',
    'Dart':           'devicon-dart-plain colored',
    'PHP':            'devicon-php-plain colored',
    'HTML':           'devicon-html5-plain colored',
    'CSS':            'devicon-css3-plain colored',
    'JavaScript':     'devicon-javascript-plain colored',
    'MySQL':          'devicon-mysql-plain colored',
    'PostgreSQL':     'devicon-postgresql-plain colored',
    'PySpark':        'devicon-apachespark-plain colored',
    'dbt':            'fas fa-layer-group',
    'Kafka':          'fas fa-stream',
    'ClickHouse':     'fas fa-database',
    'MinIO':          'fas fa-archive',
    'Streamlit':      'fas fa-chart-area',
    'Airflow':        'fas fa-wind',
    'BigQuery':       'fab fa-google',
    'Pandas':         'fas fa-table',
    'Matplotlib':     'fas fa-chart-bar',
    'Mlxtend':        'fas fa-project-diagram',
    'Openpyxl':       'fas fa-file-excel',
    'IBM Granite':    'fas fa-brain',
    'LangChain':      'fas fa-link',
    'Power Query':    'fas fa-filter',
    'Power Pivot':    'fas fa-cubes',
    'DAX':            'fas fa-function',
    'Android Studio': 'fab fa-android',
  };
  return map[name] || 'fas fa-code';
}

/* ═══════════════════════════════════════════════════
   CERTIFICATES MODAL
═══════════════════════════════════════════════════ */
function openCert(title, previewUrl, downloadUrl) {
  document.getElementById('certModalTitle').textContent = title;

  const dl = document.getElementById('certModalDl');
  dl.href = downloadUrl;

  const body = document.getElementById('certModalBody');
  body.innerHTML = `
    <iframe
      src="${previewUrl}"
      style="width:100%; height:72vh; border:none; border-radius:8px;"
      allow="autoplay"
      loading="lazy">
    </iframe>`;

  document.getElementById('certModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCert() {
  document.getElementById('certModalOverlay').classList.remove('open');
  document.getElementById('certModalBody').innerHTML = '';
  document.body.style.overflow = '';
}

function closeCertOutside(e) {
  if (e.target === document.getElementById('certModalOverlay')) closeCert();
}

/* ── Global Escape Key ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeCert(); }
  if (document.getElementById('modalOverlay').classList.contains('open')) {
    if (e.key === 'ArrowRight') slideModal(1);
    if (e.key === 'ArrowLeft')  slideModal(-1);
  }
});