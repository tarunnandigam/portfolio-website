// Project data for all projects page
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
        title: "Store It - Cloud File Storage (Coming Soon)",
        description: "A secure cloud-based file storage web application that allows users to upload, manage, and access their files from anywhere. Built with a focus on security and user experience.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "AWS S3", "REST APIs"],
        features: [
            "Secure file uploads using AWS S3 pre-signed URLs",
            "OTP-based email authentication",
            "Responsive design for all devices",
            "File organization with folders and tags",
            "File preview and download functionality",
            "User-friendly dashboard with file management",
            "Secure file sharing options"
        ],
        challenges: "Implementing secure file uploads and ensuring data integrity while maintaining good performance.",
        learnings: "Gained expertise in AWS services, secure file handling, and building scalable web applications.",
        github: "https://github.com/tarunnandigam/store-it",
        website: "#"
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
            "Interactive user interface with real-time recommendations",
            "Country-specific health tips and guidelines",
            "Secure handling of personal health information"
        ],
        challenges: "Implementing accurate vaccine recommendations based on multiple factors and ensuring the AI provides reliable health advice.",
        learnings: "Gained expertise in health tech applications, API integrations, and creating user-friendly interfaces for complex health data.",
        github: "https://github.com/tarunnandigam/travelmedicalguide.git",
        website: "https://tarunnandigam.github.io/travelmedicalguide/"
    },

    {
        title: "PageControl - Memory Management Simulator",
        description: "An educational and interactive memory management simulator designed to simplify the concepts of page replacement algorithms in operating systems. It enables users to simulate different algorithms, input memory parameters, and analyze performance metrics such as hit ratio, miss ratio, and page faults.",
        technologies: ["Python","Algorithms", "Operating System"],
        features: [
            "Multiple Page Replacement Algorithms (FIFO, LRU, Optimal, Random)",
            "Interactive GUI with real-time visualization",
            "Step-by-step execution of algorithms",
            "Performance metrics (hit ratio, miss ratio, page faults)",
            "Customizable memory parameters",
            "Visual representation of memory states"
        ],
        challenges: "Implementing the Optimal algorithm which requires lookahead in the reference string and ensuring smooth visualization of the simulation steps.",
        learnings: "Gained deep understanding of memory management concepts and algorithm visualization techniques.",
        github: "https://github.com/tarunnandigam/memory-management-simulator.git",
        demo: "https://github.com/tarunnandigam/memory-management-simulator"
    },

    {
        title: "Portfolio Website",
        description: "A professional portfolio website built with Flask, showcasing projects, skills, and achievements. Features modern design, responsive layout, and interactive elements to create an engaging user experience.",
        technologies: ["Flask", "HTML5", "CSS3", "JavaScript", "Python", "Responsive Design"],
        features: [
            "Modern and professional design",
            "Project showcase with detailed modals",
            "Skills and education timeline",
            "Contact form with validation",
            "Mobile-responsive layout",
            "Smooth animations and transitions",
            "SEO-optimized structure"
        ],
        challenges: "Creating a balance between visual appeal and performance while ensuring cross-browser compatibility.",
        learnings: "Enhanced understanding of web design principles, user experience, and frontend-backend integration.",
        github: "https://github.com/tarunnandigam/portfolio-website",
        website: "#"
    },

];

// DOM elements
const projectsGrid = document.querySelector('.all-projects-grid');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModal = document.querySelector('.close');

// Generate project cards
function generateProjectCards() {
    projectsGrid.innerHTML = '';
    
    // Icons for different project types
    const projectIcons = {
        'ecommerce': { icon: 'shopping-cart', color: '#4CAF50' },
        'ai': { icon: 'robot', color: '#9C27B0' },
        'travel': { icon: 'plane-departure', color: '#3b82f6' },
        'weather': { icon: 'cloud-sun', color: '#03A9F4' },
        'portfolio': { icon: 'user-tie', color: '#673AB7' },
        'expense': { icon: 'wallet', color: '#FF9800' }
    };
    
    // Get project type from title for icon selection
    function getProjectType(title) {
        const lowerTitle = title.toLowerCase();
        // Explicitly check for TravelVax first
        if (lowerTitle.includes('travelvax') || lowerTitle.includes('travel vax') || lowerTitle.includes('travel-vax') || lowerTitle.includes('vaccine')) return 'travel';
        if (lowerTitle.includes('havencraft') || lowerTitle.includes('ecom') || lowerTitle.includes('shop')) return 'ecommerce';
        if (lowerTitle.includes('ai') || lowerTitle.includes('chat')) return 'ai';
        if (lowerTitle.includes('weather')) return 'weather';
        if (lowerTitle.includes('portfolio')) return 'portfolio';
        if (lowerTitle.includes('expense') || lowerTitle.includes('finance')) return 'expense';
        return 'code';
    }
    
    // Technology icons mapping
    const techIcons = {
        'react': { icon: 'react', color: '#61DAFB' },
        'node': { icon: 'node-js', color: '#68A063' },
        'mongodb': { icon: 'database', color: '#4DB33D' },
        'express': { icon: 'server', color: '#000000' },
        'python': { icon: 'python', color: '#3776AB' },
        'tensorflow': { icon: 'brain', color: '#FF6F00' },
        'flask': { icon: 'flask', color: '#000000' },
        'vue': { icon: 'vuejs', color: '#4FC08D' },
        'socket': { icon: 'bolt', color: '#010101' },
        'javascript': { icon: 'js', color: '#F7DF1E' },
        'html': { icon: 'html5', color: '#E34F26' },
        'css': { icon: 'css3-alt', color: '#1572B6' },
        'firebase': { icon: 'fire', color: '#FFCA28' },
        'material': { icon: 'palette', color: '#757575' },
        'chart': { icon: 'chart-bar', color: '#4CAF50' }
    };
    
    // Get icon for technology
    function getTechIcon(tech) {
        const lowerTech = tech.toLowerCase();
        for (const [key, value] of Object.entries(techIcons)) {
            if (lowerTech.includes(key)) {
                return `<i class="fab fa-${value.icon}" style="color: ${value.color};"></i>`;
            }
        }
        return `<i class="fas fa-code"></i>`;
    }
    
    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-project', index);
        
        const projectType = getProjectType(project.title);
        const iconInfo = projectIcons[projectType] || { icon: 'code', color: '#666666' };
        
        // Special handling for TravelVax to ensure correct icon
        let iconClass = iconInfo.icon;
        let iconColor = iconInfo.color;
        
        if (project.title.toLowerCase().includes('travelvax') || project.title.toLowerCase().includes('travel vax')) {
            iconClass = 'plane-departure';
            iconColor = '#3b82f6';
        }
        
        projectCard.innerHTML = `
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description.substring(0, 120)}...</p>
                <div class="project-tech">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="tech-tag">${getTechIcon(tech)} ${tech}</span>`
                    ).join('')}
                    ${project.technologies.length > 3 ? 
                        `<span class="tech-tag">+${project.technologies.length - 3} more</span>` : ''}
                </div>
                <div class="project-links" style="margin-top: 10px;">
                    <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="${project.website !== '#' ? project.website : project.github}" class="project-link" target="_blank" rel="noopener noreferrer" title="${project.website !== '#' ? 'View Live Demo' : 'View on GitHub'}">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        `;
        
        // Add click event to the card
        projectCard.addEventListener('click', (e) => {
            // Prevent default navigation and stop propagation
            e.preventDefault();
            e.stopPropagation();
            
            // If the click is on a link, let it handle the click
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            // Otherwise, open the modal
            openProjectModal(index);
            
            // Prevent any default behavior that might cause navigation
            return false;
        });
        
        // Make sure links don't trigger the card click and handle navigation properly
        const links = projectCard.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.stopPropagation();
                // Only prevent default if it's a '#' link
                if (link.getAttribute('href') === '#') {
                    e.preventDefault();
                    return false;
                }
                // For other links, allow default navigation
            });
        });
        
        projectsGrid.appendChild(projectCard);
    });
}

// Project modal functionality
function openProjectModal(projectIndex) {
    const project = projectsData[projectIndex];
    
    modalTitle.textContent = project.title;
    modalContent.innerHTML = `
        <div class="project-details">
            <div class="project-overview">
                <h3>Project Overview</h3>
                <p>${project.description}</p>
            </div>
            
            <div class="project-technologies">
                <h3>Technologies Used</h3>
                <div class="tech-tags">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>
            
            <div class="project-features">
                <h3>Key Features</h3>
                <ul>
                    ${project.features.map(feature => 
                        `<li>${feature}</li>`
                    ).join('')}
                </ul>
            </div>
            
            <div class="project-challenges">
                <h3>Challenges & Solutions</h3>
                <p>${project.challenges}</p>
            </div>
            
            <div class="project-learnings">
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

function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
closeModal.addEventListener('click', closeProjectModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeProjectModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeProjectModal();
    }
});

// Mobile navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    generateProjectCards();
});