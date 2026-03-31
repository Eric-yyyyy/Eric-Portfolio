from flask import Flask, request, jsonify
import os
import requests

app = Flask(__name__)

@app.route("/api/contact", methods=["POST"])
def contact():
    try:
        data = request.get_json(silent=True) or {}
    except Exception:
        data = {}

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    subject = (data.get("subject") or "").strip()
    message = (data.get("message") or "").strip()
    captcha_token = (data.get("captchaToken") or "").strip()

    if not name or not email or not subject or not message or not captcha_token:
        return jsonify({"message": "Missing required fields."}), 400

    try:
        verify_resp = requests.post(
            "https://www.google.com/recaptcha/api/siteverify",
            data={
                "secret": os.environ["RECAPTCHA_SECRET_KEY"],
                "response": captcha_token,
            },
            timeout=10,
        )
        verify_data = verify_resp.json()
    except Exception as e:
        return jsonify({"message": f"Captcha verification failed: {str(e)}"}), 500

    if not verify_data.get("success"):
        return jsonify({"message": "Invalid reCAPTCHA."}), 400

    payload = {
        "service_id": os.environ["EMAILJS_SERVICE_ID"],
        "template_id": os.environ["EMAILJS_TEMPLATE_ID"],
        "user_id": os.environ["EMAILJS_PUBLIC_KEY"],
        "accessToken": os.environ["EMAILJS_PRIVATE_KEY"],
        "template_params": {
            "from_name": name,
            "reply_to": email,
            "subject": subject,
            "message": message,
        },
    }

    try:
        r = requests.post(
            "https://api.emailjs.com/api/v1.0/email/send",
            json=payload,
            timeout=15,
        )
    except Exception as e:
        return jsonify({"message": f"Email request failed: {str(e)}"}), 500

    if r.status_code != 200:
        return jsonify({"message": f"EmailJS failed: {r.text}"}), 500

    return jsonify({"message": "Message sent successfully."}), 200