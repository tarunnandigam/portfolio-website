// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModal = document.querySelector('.close');

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
        learnings: "Gained deep understanding of full-stack development, database design, and secure coding practices."
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
        learnings: "Developed expertise in NLP, machine learning model training, and API integration."
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
        learnings: "Mastered real-time web technologies, database optimization, and collaborative software design patterns."
    }
];

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
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

// Project modal functionality
function openProjectModal(projectIndex) {
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
                <a href="#" class="btn btn-primary" target="_blank">
                    <i class="fab fa-github"></i> View Code
                </a>
                <a href="#" class="btn btn-secondary" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal functionality
closeModal.addEventListener('click', closeProjectModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeProjectModal();
    }
});

// Contact form submission
const contactForm = document.querySelector('.form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
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
            document.body.removeChild(notification);
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
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
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

// Add custom styles for modal content
const modalStyles = `
    .project-modal-content {
        line-height: 1.6;
    }
    
    .project-modal-description {
        color: var(--text-secondary);
        margin-bottom: 2rem;
        font-size: 1.1rem;
    }
    
    .project-modal-section {
        margin-bottom: 2rem;
    }
    
    .project-modal-section h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    
    .modal-tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .modal-tech-tag {
        background: var(--bg-primary);
        color: var(--primary-color);
        padding: 0.4rem 0.8rem;
        border-radius: 16px;
        font-size: 0.85rem;
        border: 1px solid var(--border-color);
    }
    
    .project-features-list {
        list-style: none;
        padding-left: 0;
    }
    
    .project-features-list li {
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--border-color);
        color: var(--text-secondary);
        position: relative;
        padding-left: 1.5rem;
    }
    
    .project-features-list li:before {
        content: "✓";
        color: var(--primary-color);
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    
    .project-features-list li:last-child {
        border-bottom: none;
    }
    
    .project-modal-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid var(--border-color);
    }
    
    @media (max-width: 768px) {
        .project-modal-actions {
            flex-direction: column;
        }
        
        .modal-content {
            margin: 10% auto;
            width: 95%;
        }
    }
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Console message for developers
console.log(`
🚀 Welcome to Tarun Nandigam's Portfolio!
🎨 Built with vanilla HTML, CSS, and JavaScript
💻 Featuring modern design and smooth interactions
✨ Check out the source code and feel free to reach out!
`);
