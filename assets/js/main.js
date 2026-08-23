/* ==============================================================
   TRADUCTIONS FR / EN
============================================================= */
const translations = {
    fr: {
        brandName: "Ariel ZOUBE",
        navHome: "Accueil",
        navAbout: "À propos",
        navSkills: "Compétences",
        navProjects: "Projets",
        navPath: "Parcours",
        navMemoire: "Mémoire",
        navContact: "Contact",
        welcomeEyebrow: "👋 Bienvenue",
        heroTitle: 'Ariel <span class="accent">Ben Cédric ZOUBE</span>',
        heroLead: "Ingénieur Réseaux & Systèmes — Développement fullstack & Cybersécurité",
        heroDesc: "Passionné par la sécurisation des systèmes, l'administration réseau et le développement d'applications. Je recherche un emploi ou un stage.",
        profileTitle: "Ingénieur Réseaux & Systèmes",
        cvBtn: "Télécharger mon CV",
        projectsBtn: "Voir mes projets",
        aboutLabel: "À propos",
        aboutTitle: "Mon parcours & mes objectifs",
        aboutSub: "Découvrez mon histoire, mes compétences et ma vision.",
        aboutIntro: "Je suis un ingénieur récemment diplômé de l'IST de Bangui. Mon parcours m'a permis de développer des compétences solides en administration systèmes et réseaux, ainsi qu'en cybersécurité et en intelligence artificielle.",
        aboutGoal: "Intégrer une équipe dynamique en tant qu'ingénieur réseaux et systèmes, avec une spécialisation future en DevSecOps et IA appliquée à la sécurité. Contribuer à des projets innovants et sécurisés.",
        skillsEyebrow: "Compétences",
        skillsTitle: "Technologies & outils",
        skillsSub: "Les logiciels, langages et systèmes que j'utilise au quotidien.",
        projEyebrow: "Mes projets",
        projTitle: "Réalisations académiques & personnelles",
        projSub: "Des projets qui reflètent mes compétences techniques.",
        filterAll: "Tous",
        filterIa: "IA / ML",
        filterSec: "Sécurité",
        filterDev: "Développement",
        filterNet: "Réseaux",
        proj1Title: "Détection d'intrusions par ML",
        proj1Desc: "Random Forest, dataset CICIDS — Projet de Licence (2026)",
        proj2Title: "IDS/IPS sous pfSense",
        proj2Desc: "Configuration d'un système de détection et prévention d'intrusions — Exposé (2025)",
        proj3Title: "Monitoring avec Centreon",
        proj3Desc: "Supervision réseau open-source — Projet de DUT (2024)",
        proj4Title: "Gestion des actes de naissance",
        proj4Desc: "Application web Laravel pour la Mairie de Bangui — Exposé (2024)",
        proj5Title: "Mini-Wallet",
        proj5Desc: "Simulation pédagogique d'un portefeuille électronique — Projet personnel",
        viewDetail: "Voir le détail",
        viewCode: "Voir le code",
        pathEyebrow: "Parcours",
        pathTitle: "Mon parcours scolaire & universitaire",
        pathSub: "Les étapes clés de ma formation.",
        memoireEyebrow: "Mémoire",
        memoireTitle: "Mémoire de Licence",
        memoireSub: "Mon travail de recherche sur la cybersécurité et l'IA.",
        memoirePlaceholder: "Résumé à venir — Le document PDF sera disponible prochainement.",
        memoireStatus: "PDF à télécharger (bientôt disponible)",
        contactTitle: "Parlons de votre projet",
        contactSub: "Disponible pour une prise de poste ou un stage.",
        whatsappBtn: "Discuter sur WhatsApp",
        footerText: "© 2026 — Ariel Ben Cédric ZOUBE | Ingénieur Réseaux & Systèmes",
        close: "Fermer"
    },
    en: {
        brandName: "Ariel ZOUBE",
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navPath: "Path",
        navMemoire: "Thesis",
        navContact: "Contact",
        welcomeEyebrow: "👋 Welcome",
        heroTitle: 'Ariel <span class="accent">Ben Cédric ZOUBE</span>',
        heroLead: "Network & Systems Engineer — Fullstack Development & Cybersecurity",
        heroDesc: "Passionate about system security, network administration and application development. I am looking for a job or an internship.",
        profileTitle: "Network & Systems Engineer",
        cvBtn: "Download my CV",
        projectsBtn: "View my projects",
        aboutLabel: "About",
        aboutTitle: "My background & goals",
        aboutSub: "Discover my story, skills and vision.",
        aboutIntro: "I am an engineer recently graduated from IST Bangui. My background has allowed me to develop solid skills in systems and network administration, as well as in cybersecurity and artificial intelligence.",
        aboutGoal: "Join a dynamic team as a network and systems engineer, with a future specialization in DevSecOps and AI applied to security. Contribute to innovative and secure projects.",
        skillsEyebrow: "Skills",
        skillsTitle: "Technologies & tools",
        skillsSub: "The software, languages and systems I use daily.",
        projEyebrow: "My projects",
        projTitle: "Academic & personal achievements",
        projSub: "Projects that reflect my technical skills.",
        filterAll: "All",
        filterIa: "AI / ML",
        filterSec: "Security",
        filterDev: "Development",
        filterNet: "Networks",
        proj1Title: "ML-based Intrusion Detection",
        proj1Desc: "Random Forest, CICIDS dataset — License Project (2026)",
        proj2Title: "IDS/IPS with pfSense",
        proj2Desc: "Configuration of an intrusion detection and prevention system — Presentation (2025)",
        proj3Title: "Monitoring with Centreon",
        proj3Desc: "Open-source network supervision — DUT Project (2024)",
        proj4Title: "Birth Certificate Management",
        proj4Desc: "Laravel web application for Bangui City Hall — Presentation (2024)",
        proj5Title: "Mini-Wallet",
        proj5Desc: "Educational simulation of an electronic wallet — Personal project",
        viewDetail: "View details",
        viewCode: "View code",
        pathEyebrow: "Path",
        pathTitle: "My academic & university background",
        pathSub: "Key steps of my education.",
        memoireEyebrow: "Thesis",
        memoireTitle: "License Thesis",
        memoireSub: "My research work on cybersecurity and AI.",
        memoirePlaceholder: "Summary coming soon — The PDF document will be available shortly.",
        memoireStatus: "PDF to download (coming soon)",
        contactTitle: "Let's talk about your project",
        contactSub: "Available for a position or an internship.",
        whatsappBtn: "Chat on WhatsApp",
        footerText: "© 2026 — Ariel Ben Cédric ZOUBE | Network & Systems Engineer",
        close: "Close"
    }
};

/* ==============================================================
   LANGUE
============================================================= */
let currentLang = localStorage.getItem('lang') || 'fr';

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
}

document.getElementById('lang-fr').addEventListener('click', () => applyLang('fr'));
document.getElementById('lang-en').addEventListener('click', () => applyLang('en'));

/* ==============================================================
   THÈME
============================================================= */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcon.className = theme === 'light' ? 'fa-regular fa-moon' : 'fa-regular fa-sun';
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'light' ? 'dark' : 'light');
});

/* ==============================================================
   MENU ACTIF AU SCROLL
============================================================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link-custom');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + entry.target.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}, {
    rootMargin: '-20% 0px -30% 0px',
    threshold: 0.3
});

sections.forEach(s => navObserver.observe(s));

/* ==============================================================
   FILTRES PROJETS
============================================================= */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
            const cats = card.dataset.category.split(' ');
            card.classList.toggle('hidden', filter !== 'all' && !cats.includes(filter));
        });
    });
});

/* ==============================================================
   MODALES PROJETS
============================================================= */
const projectDetails = {
    proj1: {
        title: "Détection d'intrusions par ML",
        description: "Projet académique de Licence (2026). Application de l'intelligence artificielle à la détection d'intrusions réseau. Utilisation du dataset CICIDS pour entraîner des modèles de classification (Random Forest) afin de détecter et classifier les attaques.",
        technologies: ["Random Forest", "Scikit-learn", "Pandas", "NumPy", "CICIDS"],
        role: "Projet académique — Licence (2026)"
    },
    proj2: {
        title: "IDS/IPS sous pfSense",
        description: "Exposé de Sécurité Réseau (2025). Installation et configuration d'un système de détection et de prévention d'intrusions (IDS/IPS) utilisant pfSense. Mise en place de règles de détection et de blocage.",
        technologies: ["pfSense", "IDS/IPS", "Suricata (optionnel)"],
        role: "Projet académique — Exposé Sécurité Réseau (2025)"
    },
    proj3: {
        title: "Monitoring avec Centreon",
        description: "Projet de DUT (2024). Mise en place d'une solution de supervision réseau open-source avec Centreon. Configuration de la collecte de données SNMP et création de tableaux de bord de surveillance.",
        technologies: ["Centreon", "SNMP", "Linux"],
        role: "Projet académique — DUT (2024)"
    },
    proj4: {
        title: "Gestion des actes de naissance",
        description: "Exposé de Génie Logiciel (2024). Développement d'une application web de gestion des actes de naissance pour la Mairie de Bangui. Application fullstack utilisant Laravel et MySQL.",
        technologies: ["PHP", "Laravel", "MySQL", "HTML/CSS", "Bootstrap"],
        role: "Projet académique — Exposé Génie Logiciel (2024)"
    },
    proj5: {
        title: "Mini-Wallet",
        description: "Projet personnel de simulation pédagogique d'un portefeuille électronique. Cette application simule les fonctions de base d'un portefeuille électronique : création de compte, dépôt simulé, transfert entre utilisateurs, consultation du solde et historique des transactions. Il ne s'agit pas d'un système financier réel.",
        technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "JWT", "Argon2id"],
        role: "Projet personnel — Simulation pédagogique"
    }
};

function openProjectModal(projectId) {
    const project = projectDetails[projectId];
    if (!project) return;

    document.getElementById('modalTitle').textContent = project.title;

    let techHtml = '';
    project.technologies.forEach(tech => {
        techHtml += `<span class="badge bg-secondary me-1 mb-1">${tech}</span>`;
    });

    document.getElementById('modalBody').innerHTML = `
        <p class="text-muted" style="font-size: 14px; margin-bottom: 16px;">${project.description}</p>
        <div style="margin-bottom: 16px;">
            <strong style="font-size: 14px;">Technologies :</strong>
            <div style="margin-top: 8px;">${techHtml}</div>
        </div>
        <div style="font-size: 13px; color: var(--text-dim);">
            <i class="fa-solid fa-tag"></i> ${project.role}
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
}

/* ==============================================================
   RÉVÉLATION AU SCROLL
============================================================= */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ==============================================================
   FERMETURE MENU MOBILE
============================================================= */
document.querySelectorAll('#mainNav .nav-link-custom').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('mainNav');
        if (nav.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(nav).hide();
        }
    });
});

/* ==============================================================
   INITIALISATION
============================================================= */
applyLang(currentLang);