
// DOM Elements
const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

// Sticky Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu
if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    }));
}

// Smooth Scroll & Active State (Only if sections exist)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(li => {
            li.classList.remove('active');
            // Check if href matches current section id
            if (li.getAttribute('href').includes(`#${current}`)) {
                li.classList.add('active');
            }
        });
    });
}

/* --- Project Data & Dynamic Loading --- */
const projectsData = {
    "nexus-ai": {
        title: "Nexus – AI RAG Document Assistant",
        tags: ["AI/RAG", "LangChain", "Mistral", "FAISS"],
        image: "https://placehold.co/1200x600/101015/0ea5e9?text=Nexus+AI+RAG",
        overview: "Nexus is an AI-powered document assistant that uses a Retrieval-Augmented Generation (RAG) pipeline to let users upload documents and ask questions. It processes the document, retrieves relevant information, and generates accurate answers using a local language model (Mistral via Ollama), all within a modern chat-based interface with an Aurora background and glassmorphism styling.",
        tech: ["Python", "LangChain", "FAISS", "Mistral (Ollama)", "HuggingFace Embeddings", "HTML/CSS/JS"],
        github: "https://github.com/priyan1410/RAG",
        gallery: [
            "images/Nexus – AI RAG Document Assistant/image.png",
            "images/Nexus – AI RAG Document Assistant/image copy.png",
            "images/Nexus – AI RAG Document Assistant/image copy 2.png"
        ],
        features: [
            "Document Upload Support – Accepts PDF and text files for analysis",
            "Context-Aware Q&A – Answers based only on document content",
            "RAG Architecture – Combines retrieval (FAISS) + generation (LLM)",
            "Fast Semantic Search – Uses embeddings for accurate retrieval",
            "Local LLM Integration – Runs Mistral via Ollama (no API needed)",
            "Interactive Chat UI – Clean, responsive, real-time messaging interface",
            "Loading & Feedback System – Shows processing and response states",
            "Modern UI Design – Aurora background, smooth animations, glassmorphism style"
        ]
    },
    "model-ai": {
        title: "Model Recommendation AI",
        tags: ["AutoML", "Gemini 2.5 Flash", "Flask", "XGBoost", "Tailwind CSS"],
        image: "https://placehold.co/1200x600/101015/3b82f6?text=ML+Consultant+AI",
        overview: "ML Consultant AI is an automated end-to-end Machine Learning (AutoML) platform designed to simplify the data science lifecycle. It combines a robust Python-based ML pipeline with the reasoning power of Google Gemini 2.5 Flash to provide professional-grade consulting alongside automated model training. The system guides users through a 6-step pipeline from Data Ingestion (supporting CSV/Excel) to AI Analysis, Automated Preprocessing (Cleaning, Encoding, SMOTE), Multi-Model Training (Tournament of 8+ models), and finally Performance Reporting.",
        tech: ["Python (Flask)", "Gemini 2.5 Flash", "Scikit-Learn", "XGBoost/LightGBM", "Imbalanced-learn", "Tailwind CSS"],
        github: "https://github.com/priyan1410/Model-Recommendation",
        gallery: [
            "images/ModelRecAi/Screenshot 2026-01-22 182602.png",
            "images/ModelRecAi/Screenshot 2026-01-22 182728.png",
            "images/ModelRecAi/Screenshot 2026-01-25 125606.png"
        ],
        features: [
            "Data Ingestion: Supports .csv/.xlsx with instant preview",
            "AI Analysis: Problem detection & Gemini strategic advice",
            "Auto-Preprocessing: Imputation, Encoding, Scaling, SMOTE",
            "Model Zoo: XGBoost, LightGBM, RF, SVM, Gradient Boosting",
            "Hyperparameter Tuning: Grid Search with Cross-Validation",
            "Reporting: Comparative metrics (F1, R², MSE) & PDF Export",
            "Glassmorphism UI: Modern design with real-time status tracking",
            "Exportable Models (.pkl) & Technical Reports"
        ]
    },
    "legal-ai": {
        title: "AI Legal Document Analyzer",
        tags: ["AI/NLP", "Gemini 1.5 Flash", "Flask", "OCR", "Tailwind"],
        image: "https://placehold.co/1200x600/101015/0ea5e9?text=Legal+Document+Analyzer",
        overview: "A comprehensive AI-powered legal assistant that automates document analysis. It features a dual-layer architecture with a Glassmorphism frontend and a robust Python Flask backend utilizing Google Gemini 1.5 Flash. The system performs OCR on disparate file types (PDF, Images) using pdfplumber and pytesseract, cleans text via spaCy, and provides granular risk assessment, clause extraction, importance summarization, and an interactive 'LegalMind' chat assistant.",
        tech: ["Python (Flask)", "Gemini 1.5 Flash", "spaCy (NLP)", "pdfplumber/OCR", "Tailwind CSS"],
        github: "https://github.com/priyan1410/AI-Document-analyzer",
        gallery: [
            "images/AI Legal Documen Analyzer/WhatsApp Image 2025-10-13 at 9.34.20 PM (1).jpeg",
            "images/AI Legal Documen Analyzer/WhatsApp Image 2025-10-13 at 9.34.20 PM (2).jpeg",
            "images/AI Legal Documen Analyzer/WhatsApp Image 2025-10-13 at 9.34.20 PM.jpeg",
            "images/AI Legal Documen Analyzer/WhatsApp Image 2025-10-13 at 9.34.21 PM (1).jpeg",
            "images/AI Legal Documen Analyzer/WhatsApp Image 2025-10-13 at 9.34.21 PM (2).jpeg",
            "images/AI Legal Documen Analyzer/WhatsApp Image 2025-10-13 at 9.34.21 PM.jpeg",
            "images/AI Legal Documen Analyzer/WhatsApp Image 2025-10-14 at 9.58.02 AM (1).jpeg",
            "images/AI Legal Documen Analyzer/WhatsApp Image 2025-10-14 at 9.58.02 AM (2).jpeg",
            "images/AI Legal Documen Analyzer/WhatsApp Image 2025-10-14 at 9.58.02 AM.jpeg",
            "images/AI Legal Documen Analyzer/WhatsApp Image 2025-10-14 at 9.58.03 AM.jpeg"
        ],
        features: [
            "Document Classification: Identifies types (Rental, NDA, etc.)",
            "Risk Assessment: Scans for hazards with severity levels",
            "Key Term Extraction: Highlights critical obligations & terms",
            "AI Summarization: Generates concise plain-text summaries",
            "LegalMind Assistant: Interactive chat for specific queries",
            "Dual Input: Supports raw text and PDF/Image Uploads (OCR)"
        ]
    },
    "student-sys": {
        title: "Student Base Management System",
        tags: ["OpenCV", "Face Recognition", "MySQL", "Python"],
        image: "https://placehold.co/1000x600/101015/6366f1?text=Student+Management+System",
        overview: "A dual-interface application incorporating Computer Vision and Database Management to streamline institutional records. It features a Staff Module for administrative control and a Student Module for performance tracking. The system integrates facial recognition (OpenCV/Face_recognition) for automated group attendance and uses MySQL for secure data storage. It offers real-time attendance calculation, visual verification for staff, and detailed academic analytics for students.",
        tech: ["Python", "OpenCV (Computer Vision)", "Face_recognition (HOG)", "MySQL (Clever Cloud)", "Tabulate"],
        github: "https://github.com/priyan1410/SBMS",
        features: [
            "Automated Facial Recognition Attendance (Group & Individual)",
            "Real-time Attendance Calculation & Percentage Logic",
            "Staff Module: Data Entry, visual verification, and record updates",
            "Student Dashboard: Academic breakdown & subject-wise analytics",
            "Secure Database Management with cleanup protocols"
        ]
    }
};

function loadProjectDetails() {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const project = projectsData[projectId];

    if (!project) return; // Or redirect to 404

    // Populate Data
    document.getElementById('p-title').innerText = project.title;
    // document.getElementById('p-image').src = project.image; // Removed as per user request
    document.getElementById('p-overview').innerText = project.overview;

    // Tags
    const tagsContainer = document.getElementById('p-tags');
    tagsContainer.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');

    // Tech List
    const techList = document.getElementById('p-tech');
    techList.innerHTML = project.tech.map(t => `<li>${t}</li>`).join('');

    // Features
    const featureList = document.getElementById('p-features');
    featureList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');

    // Gallery
    const galleryContainer = document.getElementById('gallery-container');
    const galleryGrid = document.getElementById('p-gallery');

    if (project.gallery && project.gallery.length > 0) {
        galleryContainer.style.display = 'block';
        galleryGrid.innerHTML = project.gallery.map(img =>
            `<img src="${img}" class="gallery-item" onclick="window.open(this.src, '_blank')">`
        ).join('');
    } else {
        galleryContainer.style.display = 'none';
    }

    // GitHub Link
    const githubBtn = document.getElementById('github-btn');
    if (project.github && project.github !== "#") {
        githubBtn.href = project.github;
        githubBtn.style.display = 'inline-flex';
    } else {
        githubBtn.style.display = 'none';
    }
}
