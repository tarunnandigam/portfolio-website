# Portfolio Website

## Overview

This is a personal portfolio website for Tarun Nandigam, a Computer Science Engineering student. The application is built as a Flask web application that showcases skills, projects, education, and contact information through a modern, responsive design.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask
- **Styling**: Custom CSS with CSS Grid and Flexbox layouts
- **JavaScript**: Vanilla JavaScript for interactive features
- **Design System**: Custom CSS variables for consistent theming
- **Responsive Design**: Mobile-first approach with breakpoints for different screen sizes

### Backend Architecture
- **Framework**: Flask (Python web framework)
- **Server**: Gunicorn WSGI server for production deployment
- **Data Storage**: JSON file-based data storage for portfolio content
- **API Design**: RESTful endpoint for portfolio data retrieval

## Key Components

### 1. Flask Application (`main.py`)
- **Purpose**: Main application entry point and route definitions
- **Routes**:
  - `/` - Serves the main portfolio page
  - `/api/portfolio` - JSON API endpoint for portfolio data
- **Error Handling**: Proper error responses for missing or malformed data

### 2. Frontend Template (`templates/index.html`)
- **Structure**: Single-page application with multiple sections
- **Sections**: Navigation, Hero, Skills, Projects, Education, Location, Contact
- **External Dependencies**: Font Awesome icons, Google Fonts (Inter)

### 3. Static Assets
- **CSS**: Custom styling with CSS variables for theming (`static/css/style.css`)
- **JavaScript**: Interactive functionality and DOM manipulation (`static/js/script.js`)
- **Images**: SVG placeholders for profile, badges, and location map
- **Data**: JSON file containing all portfolio information

### 4. Portfolio Data Structure (`static/data/portfolio.json`)
- **Personal Information**: Name, title, education, location, contact links
- **Skills**: Programming languages and web technologies with proficiency levels
- **Projects**: Project descriptions, technologies, features (embedded in JavaScript)

## Data Flow

1. **Initial Page Load**: Flask serves the HTML template with embedded CSS and JavaScript
2. **Dynamic Content**: JavaScript fetches portfolio data from `/api/portfolio` endpoint
3. **Interactive Features**: JavaScript handles navigation, modal displays, and responsive menu
4. **Error Handling**: API failures are handled gracefully with fallback content

## External Dependencies

### Python Dependencies
- **Flask 3.1.1**: Web framework for application structure
- **Gunicorn 23.0.0**: Production WSGI server
- **Flask-SQLAlchemy 3.1.1**: Database ORM (prepared for future database integration)
- **psycopg2-binary 2.9.10**: PostgreSQL adapter (prepared for future database use)
- **email-validator 2.2.0**: Email validation utilities

### Frontend Dependencies
- **Font Awesome 6.4.0**: Icon library for UI elements
- **Google Fonts (Inter)**: Typography font family
- **External CDNs**: Font and icon delivery

### Infrastructure Dependencies
- **PostgreSQL**: Database system (configured but not actively used)
- **OpenSSL**: Security libraries
- **Nix**: Package management system

## Deployment Strategy

### Development Environment
- **Runtime**: Python 3.11 with Nix package management
- **Local Server**: Flask development server with auto-reload
- **Port Configuration**: Configurable via PORT environment variable (default: 5000)

### Production Environment
- **Deployment Target**: Autoscale deployment on Replit infrastructure
- **Server**: Gunicorn with bind configuration for 0.0.0.0:5000
- **Process Management**: Gunicorn handles multiple worker processes
- **Environment Variables**: 
  - `SESSION_SECRET`: Flask session security
  - `PORT`: Server port configuration

### Configuration Files
- **`.replit`**: Replit environment and deployment configuration
- **`pyproject.toml`**: Python project metadata and dependencies
- **`uv.lock`**: Lock file for reproducible dependency installation

## Changelog

- June 27, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.