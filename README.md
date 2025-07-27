# Tarun's Portfolio Website

A personal portfolio website built with Flask, showcasing projects, skills, and experience.

## Features
- Responsive design
- Project showcase
- Resume download
- Contact form

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tarun-portfolio.git
   cd tarun-portfolio
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python main.py
   ```
   The application will be available at `http://localhost:5000`

## Deployment

This application is configured to be deployed on Render.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
FLASK_APP=main.py
FLASK_ENV=production
SECRET_KEY=your-secret-key-here
```

## License

This project is open source and available under the [MIT License](LICENSE).
