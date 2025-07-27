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
        title: "HavenCraft - Handmade Crafts Marketplace",
        description: "A full-featured E-commerce platform for buying and selling handmade crafts. The platform includes user authentication, product catalog, shopping cart, wishlist, order management, and a secure 4-step payment process.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Python", "PostgreSQL", "Flask"],
        features: [
            "User authentication (login/signup) with secure password management",
            "Product catalog with detailed overviews and filtering options",
            "Shopping cart functionality with real-time updates",
            "Wishlist for saving favorite items",
            "User profile management with password updates",
            "Order tracking with update and cancel options",
            "4-step secure payment processing system",
            "Responsive design for all devices"
        ],
        challenges: "Implementing a seamless user experience across the 4-step payment process while ensuring data consistency and security.",
        learnings: "Gained expertise in full-stack development, database design with PostgreSQL, and implementing secure payment flows.",
        github: "https://github.com/tarunnandigam/heavencraft.git",
        website: "https://heavencraft.onrender.com"
    },
    {
        title: "PageControl - Memory Management Simulator",
        description: "A tool designed to simulate and visualize various page replacement algorithms used in operating systems. This interactive application helps users understand how different algorithms manage memory pages and handle page faults in a virtual memory system.",
        technologies: ["Python", "Tkinter", "Operating System Concepts", "Algorithms", "Data Structures"],
        features: [
            "Implements multiple page replacement algorithms: FIFO, LRU, Optimal, and Random",
            "Interactive GUI with real-time visualization of page replacement process",
            "Step-by-step execution to understand algorithm behavior",
            "Visual representation of memory frames and page faults",
            "Customizable reference string and number of frames",
            "Performance metrics including hit ratio and page fault count",
            "Clear visualization of algorithm comparisons"
        ],
        challenges: [
            "Implementing the Optimal algorithm with future reference prediction",
            "Creating an intuitive interface for complex memory operations",
            "Ensuring accurate visualization of page replacement steps",
            "Optimizing performance for large reference strings"
        ],
        learnings: [
            "Deepened understanding of memory management in operating systems",
            "Improved skills in algorithm implementation and optimization",
            "Enhanced Python GUI development with Tkinter",
        ],
        github: "https://github.com/tarunnandigam/memory-management-simulator.git",
        demo: "https://github.com/tarunnandigam/memory-management-simulator"
    },
    {
        title: "TravelVax - Travel Vaccine Recommendation System",
        description: "A comprehensive web application that provides personalized vaccine recommendations for travelers based on destination, age, and medical conditions. Helps users make informed decisions about necessary vaccinations and health precautions before international travel.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Google Gemini API", "REST Countries API"],
        features: [
            "Destination-based vaccine recommendations",
            "Personalized health advice based on age and medical history",
            "AI-powered chat assistant for travel health queries",
            "Comprehensive database of vaccines and health information",
            "Responsive design for all devices",
            "Interactive user interface with real-time recommendations"
        ],
        challenges: "Integrating multiple health data sources and ensuring accurate, up-to-date vaccine recommendations while maintaining a simple user experience.",
        learnings: "Gained expertise in API integration, data visualization, and creating user-friendly health information systems.",
        github: "https://github.com/tarunnandigam/travelmedicalguide.git",
        website: "https://tarunnandigam.github.io/travelmedicalguide/"
    },
    {
        title: "PageControl - Memory Management Simulator",
        description: "An educational tool designed to simulate and visualize various page replacement algorithms used in operating systems. This interactive application helps users understand how different algorithms manage memory pages and handle page faults in a virtual memory system.",
        technologies: ["Python", "Tkinter", "Operating System Concepts", "Algorithms", "Data Structures"],
        features: [
            "Implements multiple page replacement algorithms: FIFO, LRU, Optimal, and Random",
            "Interactive GUI with real-time visualization of page replacement process",
            "Step-by-step execution to understand algorithm behavior",
            "Visual representation of memory frames and page faults",
            "Customizable reference string and number of frames",
            "Performance metrics including hit ratio and page fault count",
            "Clear visualization of algorithm comparisons"
        ],
        challenges: [
            "Implementing the Optimal algorithm with future reference prediction",
            "Creating an intuitive interface for complex memory operations",
            "Ensuring accurate visualization of page replacement steps",
            "Optimizing performance for large reference strings"
        ],
        learnings: [
            "Deepened understanding of memory management in operating systems",
            "Improved skills in algorithm implementation and optimization",
            "Enhanced Python GUI development with Tkinter",
            "Better understanding of virtual memory concepts",
            "Experience in educational tool development"
        ],
        impact: "Developed as part of my academic curriculum, this tool helped me and my peers better understand complex memory management concepts through interactive visualization.",
        github: "https://github.com/tarunnandigam/memory-management-simulator.git",
        demo: "https://github.com/tarunnandigam/memory-management-simulator"
    }
];

// Achievement data
const achievementsData = [
    {
        title: "AWS Cloud Foundation",
        issuer: "Amazon Web Services",
        date: "December 2025",
        description: "Foundational certification demonstrating understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
        skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Cost Management"],
        credential: "https://drive.google.com/file/d/1-cRoXXt_5X_2EINsEHItCX1Iyji_Uxd2/view?usp=sharing",
        details: [
            "Comprehensive understanding of AWS global infrastructure",
            "Knowledge of core AWS services and their use cases",
            "Understanding of AWS security and compliance concepts",
            "Familiarity with AWS pricing models and cost optimization"
        ]
    },
    {
        title: "Java Programming Certificate",
        issuer: "Lovely Professional University 🗙 Neo colab",
        date: "2024",
        description: "Professional certification demonstrating proficiency in Java programming, object-oriented concepts, and application development.",
        skills: ["Java", "Object-Oriented Programming", "Logic Building", "Algorithms"],
        credential: "https://drive.google.com/file/d/1P47uYmn08uF0lz9F29KpIO6jJhL7MhqD/view?usp=sharing",
        details: [
            "Mastered Java syntax and core programming concepts",
            "Developed robust applications using OOP principles",
            "Implemented various data structures and algorithms in Java",
            "Gained expertise in exception handling and multi-threading"
        ]
    },
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
        issuer: "Oracle",
        date: "2025",
        description: "Professional certification demonstrating expertise in Oracle Cloud Infrastructure fundamentals, including compute, storage, networking, and security services.",
        skills: ["Cloud Computing", "OCI Services", "Cloud Security", "Networking", "Database", "AI Services"],
        credential: "https://drive.google.com/file/d/1M2ZKd0CingFsHziEwHB7dBvHc_wvTk0X/view?usp=sharing",
        details: [
            "Understanding of OCI architecture and distributed cloud model",
            "Expertise in managing identity, access, and security in OCI",
            "Proficiency in deploying and managing OCI compute, storage, and database services",
            "Knowledge of OCI networking including VCN, load balancers, and security",
            "Understanding of container workloads and serverless functions in OCI"
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

// Project modal functionality
function openProjectModal(projectIndex) {
    if (!modal || !modalTitle || !modalContent) return;
    
    const project = projectsData[projectIndex];
    
    modalTitle.textContent = project.title;
    
    // Create modal content with enhanced layout and additional fields
    let modalHTML = `
        <div class="project-modal-content">
            <p class="project-modal-description">${project.description}</p>
            
            ${project.impact ? `
            <div class="impact-note">
                <i class="fas fa-chart-line"></i>
                <strong>Impact:</strong> ${project.impact}
            </div>` : ''}
            
            <div class="project-modal-section">
                <h3><i class="fas fa-tools"></i> Technologies Used</h3>
                <div class="modal-tech-tags">
                    ${project.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="project-modal-section">
                <h3><i class="fas fa-star"></i> Key Features</h3>
                <ul class="project-features-list">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="project-modal-section">
                <h3><i class="fas fa-exclamation-triangle"></i> Challenges</h3>
                ${Array.isArray(project.challenges) 
                    ? `<ul class="challenge-list">${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}</ul>`
                    : `<p>${project.challenges}</p>`}
            </div>
            
            <div class="project-modal-section">
                <h3><i class="fas fa-graduation-cap"></i> Key Learnings</h3>
                ${Array.isArray(project.learnings) 
                    ? `<ul class="learning-list">${project.learnings.map(learning => `<li>${learning}</li>`).join('')}</ul>`
                    : `<p>${project.learnings}</p>`}
            </div>
            
            <div class="project-modal-actions">
                ${project.github ? `
                <a href="${project.github}" class="btn btn-github" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i> View Code
                </a>` : ''}
                
                ${project.website && project.website !== '#' ? `
                <a href="${project.website}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>` : ''}
                
                ${project.demo ? `
                <a href="${project.demo}" class="btn btn-demo" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-play-circle"></i> View Demo
                </a>` : ''}
            </div>
        </div>
    `;
    
    modalContent.innerHTML = modalHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation class
    setTimeout(() => {
        modal.classList.add('modal-visible');
    }, 10);
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

// Intersection Observer for About section reveal with staggered animation
const initAboutAnimation = () => {
    const aboutSection = document.querySelector('.about');

    if (!aboutSection) return;

    // Function to handle the reveal logic
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add reveal class to animate in
                aboutSection.classList.add('reveal');
            } else {
                // Remove reveal class to reset animation
                aboutSection.classList.remove('reveal');
            }
        });
    };

    // Initialize cards with transition delays
    const cards = aboutSection.querySelectorAll('.about-card');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    // Create observer
    const aboutObserver = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Start observing
    aboutObserver.observe(aboutSection);

    // Clean up function (in case needed)
    return () => aboutObserver.disconnect();
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAboutAnimation();
});

// Helper function to check if element is in viewport
const isElementInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight * 0.85) &&
        rect.bottom >= (window.innerHeight * 0.15)
    );
};

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

// Initialize portfolio data loading
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioData();
    initCertificationsCarousel();
});

/**
 * Initialize certifications carousel with auto-scrolling
 */
function initCertificationsCarousel() {
    const track = document.querySelector('.certifications-track');
    if (!track) return;

    // Duplicate cards for infinite scroll effect
    const cards = track.querySelectorAll('.certification-card');
    if (!cards.length) return;

    // Clone cards for infinite scroll
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    // Pause animation when hovering over the track
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });

    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });

    // Handle touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        track.style.animationPlayState = 'paused';
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const difference = touchStartX - touchEndX;
        
        // Only resume if not a significant swipe
        if (Math.abs(difference) < 50) {
            setTimeout(() => {
                track.style.animationPlayState = 'running';
            }, 1000);
        } else {
            track.style.animationPlayState = 'running';
        }
    }, { passive: true });
}

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
