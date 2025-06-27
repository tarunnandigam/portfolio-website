import os
import json
from flask import Flask, render_template, jsonify, send_file, abort

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key-for-portfolio")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/api/portfolio')
def get_portfolio_data():
    """API endpoint to serve portfolio data"""
    try:
        with open('static/data/portfolio.json', 'r') as f:
            data = json.load(f)
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({"error": "Portfolio data not found"}), 404
    except json.JSONDecodeError:
        return jsonify({"error": "Invalid portfolio data format"}), 500

@app.route('/download-resume')
def download_resume():
    """Download resume file"""
    try:
        resume_path = os.path.join('static', 'resume', 'Tarun_Nandigam_Resume.pdf')
        
        # Check if resume file exists
        if not os.path.exists(resume_path):
            abort(404, description="Resume file not found. Please contact the site owner.")
        
        return send_file(
            resume_path,
            as_attachment=True,
            download_name='Tarun_Nandigam_Resume.pdf',
            mimetype='application/pdf'
        )
    except Exception as e:
        abort(500, description="Error downloading resume file.")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
