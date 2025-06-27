import os
import json
from flask import Flask, render_template, jsonify

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key-for-portfolio")

@app.route('/')
def index():
    return render_template('index.html')

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

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
