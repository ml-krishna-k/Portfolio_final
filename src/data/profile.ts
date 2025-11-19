export const portfolio = {
  name: "Krishna",
  role: "GenAI Engineer & Frontend Developer",
  headline:
    "Building intelligent systems and modern web applications with meaningful real-world impact.",

  contact: {
    location: "Chennai, India",
    email: "kkrishnarajr@gmail.com",
    phone: "+91 9360113501",
    linkedin: "https://www.linkedin.com/in/krishna-k-0156aa286",
    github: "https://github.com/ml-krishna-k",
  },

  experience: [
    {
      title: "AI Intern",
      company: "Eduversity India",
      period: "July 2025 – Dec 2025",
      bullets: [
        "Built hybrid recommendation engines using content-based and collaborative filtering.",
        "Improved engagement metrics by 25% through A/B testing and refinement."
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "DLK Technologies",
      period: "Jul 2024 – Aug 2024",
      bullets: [
        "Improved page performance and UI/UX consistency.",
        "Reduced load time by ~30% via asset optimization."
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "TechCorp AI (Example)",
      period: "Jan 2025 – Present",
      bullets: [
        "Optimized inference latency for LLM pipelines by 40% using quantization techniques.",
        "Deployed RAG microservices on AWS Lambda with sub-200ms response times."
      ]
    }
  ],


  projects: [
    {
      name: "Personalized Learning Chatbot (RAG)",
      featured: true,
      layout: "wide",
      description:
        "A Mistral-7B powered RAG chatbot with emotion detection, dynamic retrieval routing, and reliability improvements of 35% over baseline LLMs.",
      tech: ["Mistral", "LangChain", "Python", "Vector DB", "FastAPI"],
      media: "/media/projects/chatbot.webp", // screenshot if available
      link: {
        github: null,
        live: null,
      },
    },
    {
      name: "AI Medical Diagnostic Platform",
      featured: true,
      layout: "tall",
      description:
        "Multimodal disease detection using CNNs and U-Net models, with quantum-safe encryption for medical records.",
      tech: ["TensorFlow", "U-Net", "React", "PQC", "AWS"],
      media: "/media/projects/med-ai-placeholder.webp", // placeholder initially
      link: {
        github: null,
        live: null,
      },
    },

    // --- Masonry Grid (9 Smaller Projects) ---

    {
      name: "Quantum-Resilient Blockchain",
      featured: false,
      layout: "medium",
      description:
        "Post-quantum-secured blockchain with anomaly detection and stress-tested throughput up to 10k TPS.",
      tech: ["Rust", "PQC", "Blockchain"],
      media: null, // no screenshot yet → placeholder
      link: {
        github: null,
        live: null,
      },
    },

    {
      name: "FastAPI Microservice Toolkit",
      featured: false,
      layout: "small",
      description: "A lightweight backend template optimized for LLM inference and model serving.",
      tech: ["FastAPI", "Docker", "Python"],
      media: null,
      link: {
        github: null,
        live: null,
      },
    },

    {
      name: "Skin Cancer Detection Model",
      featured: false,
      layout: "tall",
      description:
        "Deep learning classification pipeline using U-Net segmentation and dataset augmentation.",
      tech: ["TensorFlow", "Python", "U-Net"],
      media: null,
      link: {
        github: null,
        live: null,
      },
    },

    {
      name: "FarmHub Automation System",
      featured: false,
      layout: "medium",
      description: "Smart agriculture dashboard with live anomaly detection and farm-level insights.",
      tech: ["React", "Node.js", "IoT"],
      media: null,
      link: {
        github: null,
        live: null,
      }
    },

    {
      name: "Emotion Classification Model",
      featured: false,
      layout: "small",
      description: "Fine-tuned transformer model for real-time emotional inference.",
      tech: ["Transformers", "Python"],
      media: null,
      link: {
        github: null,
        live: null,
      },
    },

    {
      name: "Productivity Task Agent",
      featured: false,
      layout: "medium",
      description: "LLM-based personal agent with memory and adaptive planning behavior.",
      tech: ["LangChain", "GPT", "Next.js"],
      media: null,
      link: {
        github: null,
        live: null,
      },
    },

    {
      name: "Minimal Portfolio Template",
      featured: false,
      layout: "small",
      description: "A clean React + Tailwind starter portfolio.",
      tech: ["React", "TailwindCSS", "Vite"],
      media: null,
      link: {
        github: null,
        live: null,
      },
    },
  ],

  skills: {
    languages: ["Python", "Java", "JavaScript", "TypeScript"],
    frameworks: ["React", "FastAPI", "Flask", "LangChain"],
    ml: ["RAG", "CNN", "GNN", "U-Net", "VectorDB"],
    tools: ["AWS", "Git", "SQL", "VSCode"],
  },

  achievements: [
    "1st place — INNOFEST-25 (110+ teams)",
    "1st place — Jaya Engineering College Symposium",
    "Top 11 of 250+ teams in GENTERIX",
  ],

  certifications: [
    "Oracle Cloud Infrastructure 2025 — GenAI Professional",
    "NPTEL — Cloud Computing & Distributed Systems",
    "Udemy — Machine Learning with Python and R",
  ],
};
