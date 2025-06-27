// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModal = document.querySelector('.close');

// Achievement modal elements
const achievementModal = document.getElementById('achievement-modal');
const achievementModalTitle = document.getElementById('achievement-modal-title');
const achievementModalContent = document.getElementById('achievement-modal-content');
const closeAchievementModal = document.querySelector('.close-achievement');

// Project data
const projectsData = [
    {
        title: "E-Commerce Platform",
        description: "A comprehensive full-stack e-commerce solution built with modern web technologies. Features include user authentication, product catalog management, shopping cart functionality, secure payment integration, order tracking, and an admin dashboard for inventory management.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT Authentication"],
        features: [
            "User registration and authentication",
            "Product browsing and search functionality",
            "Shopping cart and wishlist",
            "Secure payment processing",
            "Order management and tracking",
            "Admin panel for product management",
            "Responsive design for all devices"
        ],
        challenges: "Implementing secure payment processing and managing complex state across multiple components.",
        learnings: "Gained deep understanding of full-stack development, database design, and secure coding practices.",
        github: "https://github.com/tarunnandigam/ecommerce-platform",
        website: "https://ecommerce-demo.tarunnandigam.com"
    },
    {
        title: "AI Chatbot Assistant",
        description: "An intelligent chatbot system powered by natural language processing capabilities. The bot can understand user queries, provide contextual responses, learn from conversations, and integrate with various APIs to fetch real-time information.",
        technologies: ["Python", "TensorFlow", "Flask", "NLTK", "SQLite", "REST APIs"],
        features: [
            "Natural language understanding",
            "Context-aware conversations",
            "Integration with external APIs",
            "Machine learning for response improvement",
            "Multi-language support",
            "Conversation history and analytics",
            "Easy integration with web applications"
        ],
        challenges: "Training the model to understand context and provide relevant responses while handling edge cases.",
        learnings: "Developed expertise in NLP, machine learning model training, and API integration.",
        github: "https://github.com/tarunnandigam/ai-chatbot",
        website: "https://chatbot-demo.tarunnandigam.com"
    },
    {
        title: "Task Management System",
        description: "A collaborative project management platform designed for teams to organize, track, and complete projects efficiently. Features real-time collaboration, task assignment, progress tracking, and comprehensive reporting tools.",
        technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL", "Redis", "JWT"],
        features: [
            "Real-time collaboration and updates",
            "Task creation and assignment",
            "Progress tracking and analytics",
            "File sharing and comments",
            "Team member management",
            "Deadline notifications",
            "Kanban board interface",
            "Time tracking and reporting"
        ],
        challenges: "Implementing real-time synchronization across multiple users and handling concurrent data updates.",
        learnings: "Mastered real-time web technologies, database optimization, and collaborative software design patterns.",
        github: "https://github.com/tarunnandigam/task-management",
        website: "https://taskmanager-demo.tarunnandigam.com"
    }
];

// Achievement data
const achievementsData = [
    {
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "December 2024",
        description: "Foundational certification demonstrating understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
        skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Cost Management"],
        credential: "https://www.credly.com/badges/aws-cloud-practitioner-badge",
        details: [
            "Comprehensive understanding of AWS global infrastructure",
            "Knowledge of core AWS services and their use cases",
            "Understanding of AWS security and compliance concepts",
            "Familiarity with AWS pricing models and cost optimization"
        ]
    },
    {
        title: "Python Programming Certificate",
        issuer: "Coursera - University of Michigan",
        date: "October 2024",
        description: "Comprehensive certification covering Python programming fundamentals, data structures, and practical application development.",
        skills: ["Python", "Data Structures", "Object-Oriented Programming", "Problem Solving"],
        credential: "https://coursera.org/verify/python-programming-certificate",
        details: [
            "Mastered Python syntax and programming concepts",
            "Implemented various data structures and algorithms",
            "Developed multiple Python applications and projects",
            "Learned debugging and testing techniques"
        ]
    },
    {
        title: "React Developer Certificate",
        issuer: "Meta - Coursera",
        date: "September 2024",
        description: "Professional certification in React development covering components, state management, hooks, and modern React practices.",
        skills: ["React", "Frontend Development", "JavaScript", "State Management"],
        credential: "https://coursera.org/verify/react-developer-certificate",
        details: [
            "Built dynamic user interfaces with React components",
            "Implemented state management with hooks and context",
            "Developed responsive and interactive web applications",
            "Applied modern React patterns and best practices"
        ]
    },
    {
        title: "Hackathon Winner",
        issuer: "CodeFest 2024",
        date: "August 2024",
        description: "First place winner in a 48-hour hackathon competition, leading a team to develop an innovative solution for real-world problems.",
        skills: ["Problem Solving", "Team Leadership", "Innovation", "Time Management"],
        credential: "https://codefest2024.com/winners/tarun-nandigam",
        details: [
            "Led a team of 4 developers in a competitive environment",
            "Developed a complete application within 48 hours",
            "Presented solution to industry judges and investors",
            "Demonstrated leadership and technical excellence under pressure"
        ]
    },
    {
        title: "GitHub Arctic Code Vault",
        issuer: "GitHub",
        date: "July 2024",
        description: "Recognition for contributing to open source projects that were archived in the GitHub Arctic Code Vault for future generations.",
        skills: ["Open Source", "Version Control", "Collaboration", "Software Development"],
        credential: "https://github.com/tarunnandigam/arctic-code-vault-badge",
        details: [
            "Contributed to multiple open source projects on GitHub",
            "Code preserved for future generations in Arctic storage",
            "Demonstrated commitment to open source development",
            "Collaborated with global developer community"
        ]
    },
    {
        title: "SQL Database Certificate",
        issuer: "Oracle Academy",
        date: "June 2024",
        description: "Comprehensive certification in SQL database design, querying, and management using Oracle database technologies.",
        skills: ["SQL", "Database Design", "Data Modeling", "Query Optimization"],
        credential: "https://education.oracle.com/verify/sql-certificate",
        details: [
            "Mastered advanced SQL querying techniques",
            "Designed and implemented relational database schemas",
            "Optimized database performance and query efficiency",
            "Learned database security and backup strategies"
        ]
    }
];

// Mobile Navigation Toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

// Project card click handlers
projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        openProjectModal(index);
    });
});

// Achievement card click handlers
const achievementCards = document.querySelectorAll('.achievement-card');
achievementCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        openAchievementModal(index);
    });
});

// Project modal functionality
function openProjectModal(projectIndex) {
    if (!modal || !modalTitle || !modalContent) return;
    
    const project = projectsData[projectIndex];
    
    modalTitle.textContent = project.title;
    modalContent.innerHTML = `
        <div class="project-modal-content">
            <p class="project-modal-description">${project.description}</p>
            
            <div class="project-modal-section">
                <h3>Technologies Used</h3>
                <div class="modal-tech-tags">
                    ${project.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="project-modal-section">
                <h3>Key Features</h3>
                <ul class="project-features-list">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="project-modal-section">
                <h3>Challenges & Solutions</h3>
                <p>${project.challenges}</p>
            </div>
            
            <div class="project-modal-section">
                <h3>Key Learnings</h3>
                <p>${project.learnings}</p>
            </div>
            
            <div class="project-modal-actions">
                <a href="${project.github}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i> View Code
                </a>
                <a href="${project.website}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal functionality
if (closeModal) {
    closeModal.addEventListener('click', closeProjectModal);
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

function closeProjectModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'block') {
        closeProjectModal();
    }
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const message = contactForm.querySelector('#message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--primary-color)' : 'var(--accent-color)'};
        color: var(--bg-primary);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 500;
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        box-shadow: var(--shadow-medium);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .location-item');
    
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.float-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Skill badge hover effects
document.querySelectorAll('.skill-badge').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'scale(1.05) rotateY(10deg)';
    });
    
    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'scale(1) rotateY(0deg)';
    });
});

// Load portfolio data from API
async function loadPortfolioData() {
    try {
        const response = await fetch('/api/portfolio');
        if (!response.ok) {
            throw new Error('Failed to load portfolio data');
        }
        const data = await response.json();
        console.log('Portfolio data loaded:', data);
        // You can use this data to dynamically populate content if needed
        return data;
    } catch (error) {
        console.error('Error loading portfolio data:', error);
        showNotification('Failed to load portfolio data', 'error');
    }
}

// Achievement modal functionality
function openAchievementModal(achievementIndex) {
    if (!achievementModal || !achievementModalTitle || !achievementModalContent) return;
    
    const achievement = achievementsData[achievementIndex];
    
    achievementModalTitle.textContent = achievement.title;
    achievementModalContent.innerHTML = `
        <div class="project-modal-content">
            <div class="achievement-modal-header">
                <p class="achievement-issuer-modal" style="color: var(--secondary-color); font-weight: 600; margin-bottom: 0.5rem;">${achievement.issuer}</p>
                <p class="achievement-date-modal" style="color: var(--text-secondary); margin-bottom: 1.5rem;">${achievement.date}</p>
            </div>
            
            <div class="project-modal-section">
                <h3>Description</h3>
                <p>${achievement.description}</p>
            </div>
            
            <div class="project-modal-section">
                <h3>Skills Demonstrated</h3>
                <div class="modal-tech-tags">
                    ${achievement.skills.map(skill => 
                        `<span class="modal-tech-tag">${skill}</span>`
                    ).join('')}
                </div>
            </div>
            
            <div class="project-modal-section">
                <h3>Key Achievements</h3>
                <ul class="project-features-list">
                    ${achievement.details.map(detail => 
                        `<li>${detail}</li>`
                    ).join('')}
                </ul>
            </div>
            
            <div class="project-modal-actions">
                <a href="${achievement.credential}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-certificate"></i> View Certificate
                </a>
            </div>
        </div>
    `;
    
    achievementModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAchievementModalFunc() {
    if (!achievementModal) return;
    
    achievementModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Achievement modal event listeners
if (closeAchievementModal) {
    closeAchievementModal.addEventListener('click', closeAchievementModalFunc);
}

if (achievementModal) {
    window.addEventListener('click', (event) => {
        if (event.target === achievementModal) {
            closeAchievementModalFunc();
        }
    });
}

// Escape key to close achievement modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && achievementModal && achievementModal.style.display === 'block') {
        closeAchievementModalFunc();
    }
});

// Initialize portfolio data loading
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioData();
});
