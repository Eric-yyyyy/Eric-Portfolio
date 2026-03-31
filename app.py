from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from dotenv import load_dotenv
import os
import requests

load_dotenv()

app = Flask(__name__)
CORS(app)

limiter = Limiter(
    key_func=get_remote_address,
    app=app,
    default_limits=[]
)

EMAILJS_SERVICE_ID = os.getenv("EMAILJS_SERVICE_ID")
EMAILJS_TEMPLATE_ID = os.getenv("EMAILJS_TEMPLATE_ID")
EMAILJS_PRIVATE_KEY = os.getenv("EMAILJS_PRIVATE_KEY")


@app.route("/contact", methods=["POST"])
@limiter.limit("1 per 5 seconds")
def contact():
    data = request.get_json(silent=True) or {}

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    subject = (data.get("subject") or "").strip()
    message = (data.get("message") or "").strip()

    if not name or not email or not subject or not message:
        return jsonify({"message": "All fields are required."}), 400

    payload = {
        "service_id": EMAILJS_SERVICE_ID,
        "template_id": EMAILJS_TEMPLATE_ID,
        "user_id": EMAILJS_PRIVATE_KEY,
        "template_params": {
            "from_name": name,
            "reply_to": email,
            "subject": subject,
            "message": message,
        },
    }

    try:
        response = requests.post(
            "https://api.emailjs.com/api/v1.0/email/send",
            json=payload,
            timeout=15
        )

        if response.status_code != 200:
            return jsonify({
                "message": f"EmailJS failed: {response.text}"
            }), 500

        return jsonify({"message": "Message sent successfully."}), 200

    except requests.RequestException as e:
        return jsonify({"message": f"Server request failed: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)