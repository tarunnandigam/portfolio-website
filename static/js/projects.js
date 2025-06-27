// Project data for all projects page
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
    },
    {
        title: "Weather Dashboard",
        description: "A comprehensive weather application that provides real-time weather data, forecasts, and interactive maps. Built with modern JavaScript and integrated with multiple weather APIs for accurate and up-to-date information.",
        technologies: ["JavaScript", "API Integration", "Chart.js", "HTML5", "CSS3", "OpenWeather API"],
        features: [
            "Real-time weather data display",
            "5-day weather forecasts",
            "Interactive weather maps",
            "Location-based weather search",
            "Weather alerts and notifications",
            "Historical weather data charts",
            "Mobile-responsive design"
        ],
        challenges: "Handling multiple API integrations and managing asynchronous data updates while maintaining smooth user experience.",
        learnings: "Mastered API integration, data visualization with charts, and responsive web design principles."
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
        learnings: "Enhanced understanding of web design principles, user experience, and frontend-backend integration."
    },
    {
        title: "Expense Tracker",
        description: "A personal finance management application that helps users track expenses, manage budgets, and analyze spending patterns. Built with React and Firebase for real-time data synchronization and user authentication.",
        technologies: ["React", "Firebase", "Chart.js", "Material-UI", "JavaScript", "CSS3"],
        features: [
            "Expense categorization and tracking",
            "Budget creation and monitoring",
            "Visual spending analytics with charts",
            "Real-time data synchronization",
            "User authentication and data security",
            "Export data to CSV/PDF",
            "Monthly and yearly spending reports"
        ],
        challenges: "Implementing real-time data synchronization and creating intuitive data visualization for financial insights.",
        learnings: "Gained expertise in React state management, Firebase integration, and financial data visualization techniques."
    }
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
    
    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-project', index);
        
        projectCard.innerHTML = `
            <div class="project-icon">
                <i class="fas fa-code"></i>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description.substring(0, 120)}...</p>
            <div class="project-tech">
                ${project.technologies.slice(0, 3).map(tech => 
                    `<span class="tech-tag">${tech}</span>`
                ).join('')}
                ${project.technologies.length > 3 ? '<span class="tech-tag">+' + (project.technologies.length - 3) + ' more</span>' : ''}
            </div>
        `;
        
        projectCard.addEventListener('click', () => {
            openProjectModal(index);
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