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
    desc: `Data comes from the New York City Taxi and Limousine Commission (TLC). Data source: official NYC.gov website.\n\n<b>Business Objective:</b> Optimize driver allocation and pricing strategy to improve the operational efficiency of FHV services (Uber & Lyft), which serve more than 600 thousand trips per day.\n\n<b>Focus:</b>\n1. Data cleaning and analysis using SQL & Python\n2. Building a Machine Learning model to predict trip duration\n3. Creating an interactive Tableau dashboard to compare Uber & Lyft services\n4. Trip prediction, peak-hour analysis, average driver pay, daily order volume, and pickup and drop-off zone distribution\n5. Key insights: peak hours, busiest zones, and driver allocation`,
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
    desc: `<b>Objective:</b> Identify the main factors behind high attrition (resignations).\n\n<b>Analysis Methodology:</b>\n• Used the IBM HR Analytics dataset from Kaggle (1,470 employee records)\n• Data cleaning, handling missing values & duplicate data, and feature engineering using Python (Pandas)\n• Statistical analysis and data visualization using Pandas, Seaborn, Matplotlib, and Excel\n• Built an interactive Power BI dashboard for operational insights\n\n<b>Key Insights:</b>\n• Low Income: 55% of attrition comes from employees earning < $2,000\n• Young Age Group: Employees aged 18–26 have the highest resignation rate\n• Job Role & Tenure: Entry-level positions such as Sales Executive and Lab Technician have high turnover\n• Work-Life Balance: Low WLB and Environment Satisfaction scores are strong drivers of resignation\n• Marital Status: Single employees have a higher risk of resigning`,
    tech: ['Python','SQL','Power BI','Excel','GitHub'],
    links: [
      { label: 'PPT', icon: 'fas fa-file-powerpoint', url: 'https://drive.google.com/file/d/1lrkkQ0Os66MAdBX2xEvuluNdFhYn3v1Q/view?usp=sharing' },
      { label: 'Kaggle', icon: 'fas fa-code', url: 'https://www.kaggle.com/code/nabilahulwana/hr-analytics-a-case-study-on-employee-attrition' },
      { label: 'Power BI Dashboard', icon: 'fas fa-chart-bar', url: 'https://drive.google.com/file/d/1EXKROfxeIs3ftUMMWxpANOcGnSTekh0J/view?usp=sharing' },
    ],
    media: [
      { type: 'img', src: 'myprojects/hranalisis/hr4.png' },
      { type: 'img', src: 'myprojects/hranalisis/hr1.png' },
      { type: 'img', src: 'myprojects/hranalisis/hr2.png' },
      { type: 'img', src: 'myprojects/hranalisis/hr3.png' },
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
    desc: `Quantitative & qualitative analysis of Los Angeles Airbnb properties (June 2025) to determine pricing strategy and Airbnb advantages, with AI-based classification.\n\n<b>Data:</b> 32,442 Los Angeles Airbnb listings (79 data columns)\n\n<b>Analysis Process:</b>\n• Performed data cleaning, price normalization, and missing value handling\n• EDA and data queries using a Pandas Agent\n• Used IBM Granite for AI classification based on listing descriptions:\n  — Guest type (Solo, Family, Business)\n  — Host type (Elite/Superhost, Professional)\n  — Booking rule type (Strict/Flexible)\n• Visualized profit analysis, demand, price distribution, and room type revenue\n\n<b>Key Insights:</b>\n• Market segmentation between premium areas (Bel-Air, Malibu) and high-volume areas\n• 50% of listing prices fall within a competitive range of $107–$228 per night\n• High-quality hosts (Superhost, 100% response rate) have the highest occupancy\n• Listings in the AI categories "Business" or "Couple" can set prices above the market average`,
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
    title: 'DQFashion Sales Analysis 2017 : Transaction & Revenue',
    cat: 'Data Analysis',
    catFilter: 'data',
    desc: `<b>Project Objective:</b> Analyze sales patterns, branch performance, and product categories to support data-driven business strategy.\n\n<b>Data:</b> 118 thousand+ sales transactions from 4 branches in Indonesia\n<b>Tools:</b> Power Query, Power Pivot, PivotTable, Excel Dashboard\n\n<b>Key Insights:</b>\n• Total revenue in 2017 reached Rp 59.9 Billion from 396 transactions and 236 thousand products sold\n• Sales peaked in June due to the Eid al-Fitr momentum, while February was the lowest month\n• The Dress category generated the highest revenue, while accessories had high volume but low revenue\n• The Jakarta branch led in number of transactions, while Medan had the largest transaction value\n• Sales patterns show a significant increase on weekends, especially Sundays\n\n<b>Business Target:</b> Projected 2018 revenue growth from Rp 59.9 B to Rp 73 Billion (+22%) through promotion, bundling, and branch optimization strategies.`,
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
    desc: `<b>Project:</b> Automated Sales Pipeline & Market Basket Analysis\n<b>Tools:</b> Python (Pandas, Mlxtend, Matplotlib), Openpyxl\n<b>Data:</b> Retail transactions from the last 6 months (DQFresh Mart)\n\n<b>Project Objective:</b> Reverse the sales decline of the last 6 months by detecting small products that grow consistently (Rising Star) and determining bundling strategies.\n\n<b>Pipeline & Methodology:</b>\n• Rising Star Detection: Used a 3-day Moving Average. Products are filtered if they show a consecutive upward trend of > 12 days, then Growth % is calculated and normalized to Base 100\n• Potential Packaging: Used the Apriori Algorithm (Association Rules) on the transaction basket matrix with min_support 1%, Lift > 2, and at least one item being a Rising Star product\n\n<b>Output:</b>\n• retail_insight.xlsx: Excel file with 2 sheets — the full Rising Star list and Potential Packaging recommendations\n• rising_star_index.png: Relative growth line chart (Base 100)\n• rising_star_actual.png: Line chart of actual sales values`,
    tech: ['Python','Pandas','Mlxtend','Openpyxl','Matplotlib'],
    links: [
      { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/nabilahlw/DQLabHackathon-RetailCrisisRecovery.git' },
      { label: 'LinkedIn Post', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/posts/nabila-hulwana_dqlab-python-hackathon-ugcPost-7467843472805236737-F7gN/' },
    ],
    media: [
      { type: 'img', src: 'myprojects/hackathondqlab/poster.png' },
      { type: 'img', src: 'myprojects/hackathondqlab/index.png' },
      { type: 'img', src: 'myprojects/hackathondqlab/actual.png' },
      { type: 'pdf', src: 'myprojects/hackathondqlab/ppt python hackathon.pdf', label: 'Download PPT PDF' },
      { type: 'pdf', src: 'myprojects/hackathondqlab/Hackathon Questions.pdf', label: 'Download Hackathon Problem Set' },
      { type: 'pdf', src: 'myprojects/hackathondqlab/certificate of Achievement - Hackaton Retail Crisis & Recovery Visualization Challenge using Python - DQLab.pdf', label: 'Download Hackathon Certificate of Top 100 Finalist' },
    ]
  },

  p6: {
    title: 'TMDB Movie End-to-End Data Pipeline (Bronze → Silver → Gold → Dashboard & Cloud)',
    cat: 'Data Engineering',
    catFilter: 'engineering',
    desc: `<b>Pipeline Process:</b>\n• Pulled data from the TMDB API and Kaggle datasets (movies & credits)\n• Ingestion & Orchestration: Apache Airflow automates 5 sequential tasks every Monday\n• Medallion Architecture (PostgreSQL & dbt):\n  — Bronze: Raw ingestion from the API and CSV\n  — Silver & Gold: Data transformation with 14 dbt models, from staging to a Business-Ready Data Mart\n• Distributed Processing: Used PySpark ETL for JSON schema extraction, data cleaning, and performance labeling in a distributed manner\n• Data Streaming: Used Kafka + Debezium CDC via PostgreSQL WAL\n• Hybrid Storage & OLAP: Data Lake (7 Parquet files) on MinIO S3-Compatible, BigQuery (Cloud Data Warehouse), and ClickHouse OLAP\n• Data Visualization: Interactive dashboard with Streamlit\n\n<b>Key Insights & Features:</b>\n• Revenue and profit trend analysis of the film industry from 1992–2016\n• Identification of the most profitable genres and directors with the highest ROI\n• Film performance classification: Mega Blockbuster, Blockbuster, Profitable, to Loss\n• Query optimization using indexing, partitioning, and materialized views`,
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
    desc: `<b>App Objective:</b> A personal finance tracker built with Flutter and Firebase that helps users record income and monitor their daily financial condition with simple, secure, and easy-to-use transaction recording.\n\n<b>Key Features:</b>\n• Secure login & registration system using Firebase Authentication\n• CRUD for income and expense transactions\n• Neatly organized, easy-to-monitor transaction history\n• Developed using OOP concepts for cleaner and more scalable code\n\n<b>Tools & Technologies:</b>\n• Flutter (Frontend & UI Framework)\n• Firebase: Authentication, Cloud Firestore, Realtime Database\n• Android Studio`,
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
    desc: `<b>App Objective:</b> TrainIN is a web-based train e-ticketing system developed with JavaScript and PHP. The application allows users to:\n• Search travel schedules and choose the type of train that fits their needs\n• Enter booker data and passenger details in a structured way\n• Upload proof of payment (jpg/png)\n• Print invoices\n• All transaction data is stored and managed properly through MySQL (phpMyAdmin)\n\n<b>Key Features:</b>\n• Schedule and train type search\n• CRUD for departure schedules and passenger data\n• Online payment and invoice printing as an image\n• Neatly organized data in phpMyAdmin\n\n<b>Tools & Technologies:</b>\n• Frontend: HTML, CSS, JavaScript\n• Backend: PHP\n• Database: MySQL (phpMyAdmin)`,
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
  },

  p9: {
    title: 'Campus Integration System (SIAKAD, SIMPEG & SIKEU)',
    cat: 'Web Development',
    catFilter: 'app',
    desc: `<b>App Objective:</b> Integrate 3 campus academic systems (SIAKAD, SIMPEG, SIKEU), each with its own separate MySQL database, so that data can be read across systems in real time.\n\n<b>Key Features:</b>\n• SIAKAD: management of student, lecturer, and course data\n• SIMPEG: management of employee and position data\n• SIKEU: management of student invoices with online payment via Midtrans Snap\n• Cross-database Eloquent Relationships to read data across systems (e.g., SIKEU displays student data from SIAKAD)\n• Auto-generated unique codes for each entity (NIM, NIDN, invoice code, etc.)\n\n<b>Tools & Technologies:</b>\n• Laravel (multi-database connection)\n• MySQL (3 separate databases: siakad, simpeg, sikeu)\n• Midtrans Snap (payment gateway)\n• Eloquent ORM`,
    tech: ['Laravel','PHP','MySQL','Midtrans'],
    links: [{ label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/nabilahlw/integrated-campus-information-system.git' },
      {
      label: 'Demo Video',
      icon: 'fas fa-play-circle',
      url: 'https://drive.google.com/file/d/1FYWI-2kRL4NmZh30aE1Zw5yYQr9VFBIK/view?usp=sharing'
    }],
    media: [
      { type: 'img', src: 'myprojects/sistemintegrasi/images/dashboardsiakad.png' },
      { type: 'img', src: 'myprojects/sistemintegrasi/images/dashboard2_sikeu.png' },
      { type: 'img', src: 'myprojects/sistemintegrasi/images/form_jabatan.png' },
      { type: 'img', src: 'myprojects/sistemintegrasi/images/form_pegawai.png' },
      { type: 'img', src: 'myprojects/sistemintegrasi/images/form_mhs.png' },
      { type: 'img', src: 'myprojects/sistemintegrasi/images/tabel1.png' },
      { type: 'img', src: 'myprojects/sistemintegrasi/images/tabel2.png' },
      { type: 'pdf', src: 'myprojects/sistemintegrasi/dokumentasi-sistemintegrasi.pdf', label: 'Download Documentation PDF' },
    ]
  },
  p10: {
    title: 'WhatsApp Documentation Automation Bot',
    cat: 'Automation & Bot Development',
    catFilter: 'app',
    desc: `<b>App Objective:</b> Build an AI-based automated WhatsApp bot that receives activity documentation photos/videos from a WhatsApp Group, intelligently classifies school and class names (including tolerance for typos/new words), then automatically uploads them to a structured Google Drive folder hierarchy.\n\n<b>Key Features:</b>\n• <b>Strict & AI-Powered Smart Normalization:</b> A high-precision string processing algorithm to read the level (elementary/junior high), school name, and class code. Equipped with a fuzzy matching system to automatically correct typos (e.g., "Hebit/Hebut" → "Hebat"), plus the ability to dynamically create a new folder when a new school name is detected.\n• <b>Auto-Folder Hierarchy in Google Drive:</b> Automatically creates and organizes folders in Google Drive based on class name and the current month-year (Parent Folder → Class Name → Month-Year → File).\n• <b>Multi-Media Handler:</b> Supports image and video uploads with dynamic file format extraction (JPEG, PNG, MP4, MOV, etc.) and timeout protection.\n• <b>WhatsApp Session & Group Listener:</b> Session persistence integration using LocalAuth to monitor incoming messages from the target group in real time.\n• <b>Auto Reply with Interactive Path:</b> Sends an automatic WhatsApp response after a successful upload, including the Google Drive folder path location.`,
    tech: ['Node.js','Google Drive API','Gemini AI'],
    links: [
      { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/nabilahlw/documentation-automation-whatsapp-web.js.git' },
      { label: 'Demo Video', icon: 'fas fa-play-circle', url: 'https://drive.google.com/file/d/1mJBEVsjqIqzRrnYgQi2r6_dWnk7NWzKJ/view?usp=drive_link' },
      { label: 'Article', icon: 'fas fa-file-alt', url: 'https://garuda.kemdiktisaintek.go.id/documents/detail/6688499' },
    ],
    media: [
      { type: 'img', src: 'myprojects/whatsapp-bot/bot1.png' },
      { type: 'img', src: 'myprojects/whatsapp-bot/bot2.png' },
      { type: 'img', src: 'myprojects/whatsapp-bot/bot3.png' },
      { type: 'img', src: 'myprojects/whatsapp-bot/bot4.png' },
      { type: 'pdf', src: 'myprojects/whatsapp-bot/dokumentasi-whatsappbot.pdf', label: 'Download Article' },
      { type: 'pdf', src: 'myprojects/whatsapp-bot/nabilahulwana-senatib.pdf', label: 'Download Certificate PDF' },
    ]
  },
p11: {
  title: 'Integrated Clinic Information System',
cat: 'Enterprise Information System',
catFilter: 'app',
desc: `<b>Project Objective:</b> Group assignment. Developed a web-based integrated clinic management system to digitalize and streamline clinic operations, from patient registration, medical examinations, billing, and online payments to business analytics in a single platform.\n\n<b>Key Features:</b>\n• <b>Role-Based Access Control:</b> Multi-role authentication and authorization for Administrator, Registration Staff, Doctor, Cashier, and Head of Clinic.\n• <b>Patient & Medical Record Management:</b> Complete CRUD modules for patients, doctors, employees, clinic departments (Poli), medical services, medicines, doctor schedules, examinations, diagnoses, prescriptions, and visit history.\n• <b>Integrated Billing & Online Payment:</b> Automatic invoice generation based on examination results, with manual payment support and Midtrans Sandbox integration using Snap API, webhook callbacks, and SHA-512 signature verification.\n• <b>Analytics Dashboard & Reporting:</b> Interactive dashboard displaying clinic KPIs, revenue trends, visit statistics, Top 5 services, departments, diagnoses, complaints, and shift distribution, with PDF & Excel export.\n• <b>Corporate Application Integration:</b> End-to-end integration among the registration, medical examination, billing, payment gateway, and reporting modules so clinic data stays consistent in real time across the system.`,
tech: [
'Laravel 12',
'PHP',
'MySQL',
'Midtrans API',
'Blade',
'AdminLTE',
'Chart.js'
  ],
  links: [
    {
      label: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/nabilahlw/integrated-clinic-system.git'
    },
    {
      label: 'Demo Video',
      icon: 'fas fa-play-circle',
      url: 'https://drive.google.com/file/d/1DyRJNCp9D8Prj58OhHP8pTIZheKkiaSs/view?usp=sharing'
    },
  ],
  media: [
    { type: 'img', src: 'myprojects/clinic-integrated-system/clicic1.png' },
    { type: 'img', src: 'myprojects/clinic-integrated-system/clinic2.png' },
    { type: 'img', src: 'myprojects/clinic-integrated-system/clinic3.png' },
    { type: 'img', src: 'myprojects/clinic-integrated-system/clinic4.png' },
    { type: 'img', src: 'myprojects/clinic-integrated-system/clinic5.png' },
    { type: 'img', src: 'myprojects/clinic-integrated-system/clinic6.png' },
    { type: 'img', src: 'myprojects/clinic-integrated-system/clinic7.png' },
    { type: 'img', src: 'myprojects/clinic-integrated-system/clinic8.png' },
    { type: 'img', src: 'myprojects/clinic-integrated-system/clinic9.png' },
    { type: 'img', src: 'myprojects/clinic-integrated-system/clinic10.png' },
    { type: 'img', src: 'myprojects/clinic-integrated-system/clinic11.png' },
    { type: 'pdf', src: 'myprojects/clinic-integrated-system/dokumentasi-group-project.pdf', label: 'Project Documentation (PDF)' },
  ]
}

};

/* ═══════════════════════════════════════════════════
   PROJECT GRID (single page, scroll down)
═══════════════════════════════════════════════════ */
let activeFilter = 'all';
let filteredKeys = [];

function getFilteredKeys() {
  const all = Object.keys(projects);
  if (activeFilter === 'all') return all;
  return all.filter(k => projects[k].catFilter === activeFilter);
}

function renderProjects() {
  filteredKeys = getFilteredKeys();
  const pagesEl = document.getElementById('projPages');

  let html = '';
  filteredKeys.forEach(k => {
    const proj = projects[k];
    const thumb = proj.media.find(m => m.type === 'img');
    const thumbSrc = thumb ? thumb.src : '';
    html += `
      <div class="proj-card" onclick="openModal('${k}')">
        <div class="proj-thumb-wrap">
          <img src="${thumbSrc}" onerror="this.style.display='none'" alt="${proj.title}">
        </div>
        <div class="proj-body">
          <span class="proj-cat-badge">${proj.cat}</span>
          <h3>${proj.title}</h3>
          <p class="proj-tech-preview">${proj.tech.join(' · ')}</p>
        </div>
      </div>`;
  });
  pagesEl.innerHTML = html;
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
    'Laravel':        'devicon-laravel-plain colored',
    'Midtrans':       'fas fa-credit-card',
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
    'Node.js':        'devicon-nodejs-plain colored',
  };
  return map[name] || 'fas fa-code';
}

/* ═══════════════════════════════════════════════════
   CERTIFICATES MODAL
═══════════════════════════════════════════════════ */
const CERTS = [
  { title: 'SmartPath Bootcamp — Advanced Tableau: Data Storytelling & Geospatial Visualization',
    file: 'certificates/Certificate - Advanced Tableau - SmartPath.jpg',
    isImg: true,
    dl: 'https://drive.google.com/file/d/1FitDy0euaLKGKZa-jCuEpqRA9xQW-EkA/view?usp=sharing' },

  { title: 'Presenter — Implementation of Artificial Intelligence in a Cloud-Based WhatsApp Photo and Video Documentation Automation System to Google Drive — Universitas Duta Bangsa',
    file: 'certificates/Certificate - Pemakalah Senatib UDB 2026.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/1RB4wMEemnxj60suHRJrCsihXq7joeQX6/view?usp=sharing' },

  { title: 'Classifying & Summarizing Data Using IBM Granite — IBM SkillsBuild',
    file: 'certificates/Certificate - Classifying Data Using IBM Granite - IBM SkillsBuild.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/11w8fnLLrl1kTyiWylzaSy0zxa56sd0s8/view?usp=sharing' },

  { title: 'SmartPath Bootcamp — Comprehensive SQL Mastery',
    file: 'certificates/Certificate - Comprehensive SQL Mastery - SmartPath.jpg',
    isImg: true,
    dl: 'https://drive.google.com/file/d/1ZsyO_0PwIoGDcXJWfmKA6U9K-EMzfBae/view?usp=sharing' },

  { title: 'Bootcamp Data Analyst — Special Skill Indonesia',
    file: 'certificates/Certificate - Data Analyst Bootcamp - Special Skill.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/13OegvjcMMcwtL4tf86d6A7ok-1oW_AZu/view?usp=sharing' },

  { title: 'Data Engineering Mini Bootcamp Batch 7 — rubythalib.ai',
    file: 'certificates/Certificate - Data Engineering Bootcamp - rubythalib.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/1qPOSrGff845JOT_zNaJUwZGKp4lbfO7z/view?usp=sharing' },

  { title: 'Belajar Penerapan Data Science dengan Microsoft Fabric — Dicoding',
    file: 'certificates/Certificate - Data Science dengan Microsoft Fabric - Dicoding.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/1VbzMMW02c1rI98VttQri2od3dx-a4RNg/view?usp=sharing' },

  { title: 'Data Summarization & Classification Using IBM Granite — IBM SkillsBuild',
    file: 'certificates/Certificate - DataSummmarization&Classification - IBM SkillsBuild.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/1edbxx5RtR6Uvh0_kYVHwAmDOEhQsXz9G/view?usp=sharing' },

  { title: 'EF SET English Certificate — B2 Upper Intermediate (60/100)',
    file: 'certificates/Certificate - EF SET English Certificate B2.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/1f7E_acxqKdw6Tq3w-cQi1PhMk3hVgokw/view?usp=sharing' },

  { title: 'ID/X Partners Data Engineering Project Based Internship Program',
    file: 'certificates/Certificate of Completion-DataEng-RAKAMIN.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/1y83cEircqMBFgJMXc6ghzp6eMLW_YbaU/view?usp=sharing' },

  { title: 'SmartPath Bootcamp — Excel Proficiency to Business Strategy',
    file: 'certificates/Certificate - Excel Proficiency to Business Strategy - SmartPath.jpg',
    isImg: true,
    dl: 'https://drive.google.com/file/d/1IAdUKlO00ZTeQ5-MqCzuGxm9wDEQYOEO/view?usp=sharing' },

  { title: 'Introduction to Data Engineering — IBM / Coursera',
    file: 'certificates/Certificate - IntroTo Data Engineering - IBM Coursera.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/1VnTyRk_yrVM0mzvcm0N0MRAUAQgoErei/view?usp=sharing' },

  { title: 'Preparing Data for Analysis with Microsoft Excel — Coursera',
    file: 'certificates/Certificate - Preparing Data for Analysis with Excel - Coursera.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/10uPr3--f5sYse-UQfeIQdJCVnC7lZorC/view?usp=sharing' },

  { title: 'Participant, Digital Open Source StartUp Workshop — Fikom UDB',
    file: 'certificates/Certificate - StartUp Digital Open Source - Fikom UDB.jpg',
    isImg: true,
    dl: 'https://drive.google.com/file/d/1lfbt5-Rfq6tfjHMaC_had0-l99UxfkCj/view?usp=sharing' },

  { title: 'Certificate of Achievement — Hackathon Retail Crisis & Recovery (Top 100, Rank #88/464)',
    file: 'certificates/certificate of Achievement - Hackaton Retail Crisis & R...very Visualization Challenge using Python - DQLab.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/1_bxGeNfbSish9Lcyj2MtboVZfk_9SuXj/view?usp=sharing' },

  { title: 'Bootcamp Data Analyst with Excel Batch 22 — DQLab (Certificate of Graduation)',
    file: 'certificates/Certificate of Completion - Bootcamp Data Analyst with Excel Batch 22 - DQLab.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/12vdkBmxI0Lu3afrMpXmsfy9O4aETUihw/view?usp=sharing' },

  { title: 'Student Transcript — Data Classification & Summarization (IBM SkillsBuild x Hacktiv8)',
    file: 'certificates/Student Transkip - Data Classification & Summarization Using IBM Granite - Hacktiv8 & IBM SkillsBuild.pdf',
    isImg: false,
    dl: 'https://drive.google.com/file/d/1VbzMMW02c1rI98VttQri2od3dx-a4RNg/view?usp=sharing' },
];

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