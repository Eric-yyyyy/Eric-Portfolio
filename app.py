from flask import Flask, request, jsonify
import os
import time
import requests

app = Flask(__name__)

RATE_LIMIT_SECONDS = 5
LAST_REQUEST_BY_IP = {}


def get_client_ip():
    forwarded_for = request.headers.get("x-forwarded-for", "")
    if forwarded_for:
        return forwarded_for.split(",")[0].strip()
    return request.remote_addr or "unknown"


@app.route("/api/contact", methods=["POST"])
def contact():
    try:
        client_ip = get_client_ip()
        now = time.time()

        last_time = LAST_REQUEST_BY_IP.get(client_ip)
        if last_time is not None and (now - last_time) < RATE_LIMIT_SECONDS:
            wait_left = int(RATE_LIMIT_SECONDS - (now - last_time)) + 1
            return jsonify({
                "message": f"Too many requests. Please wait {wait_left} second(s)."
            }), 429

        data = request.get_json(silent=True) or {}

        name = (data.get("name") or "").strip()
        email = (data.get("email") or "").strip()
        subject = (data.get("subject") or "").strip()
        message = (data.get("message") or "").strip()
        captcha_token = (data.get("captchaToken") or "").strip()

        if not name or not email or not subject or not message or not captcha_token:
            return jsonify({
                "message": "Missing required fields.",
                "debug": {
                    "has_name": bool(name),
                    "has_email": bool(email),
                    "has_subject": bool(subject),
                    "has_message": bool(message),
                    "has_captcha": bool(captcha_token),
                }
            }), 400

        verify_resp = requests.post(
            "https://www.google.com/recaptcha/api/siteverify",
            data={
                "secret": os.environ.get("RECAPTCHA_SECRET_KEY", ""),
                "response": captcha_token,
            },
            timeout=10,
        )
        verify_data = verify_resp.json()

        if not verify_data.get("success"):
            return jsonify({
                "message": "Invalid reCAPTCHA.",
                "details": verify_data
            }), 400

        service_id = os.environ.get("EMAILJS_SERVICE_ID")
        template_id = os.environ.get("EMAILJS_TEMPLATE_ID")
        public_key = os.environ.get("EMAILJS_PUBLIC_KEY")
        private_key = os.environ.get("EMAILJS_PRIVATE_KEY")

        if not service_id or not template_id or not public_key or not private_key:
            return jsonify({
                "message": "Missing EmailJS environment variables.",
                "debug": {
                    "EMAILJS_SERVICE_ID": bool(service_id),
                    "EMAILJS_TEMPLATE_ID": bool(template_id),
                    "EMAILJS_PUBLIC_KEY": bool(public_key),
                    "EMAILJS_PRIVATE_KEY": bool(private_key),
                }
            }), 500

        payload = {
            "service_id": service_id,
            "template_id": template_id,
            "user_id": public_key,
            "accessToken": private_key,
            "template_params": {
                "from_name": name,
                "reply_to": email,
                "subject": subject,
                "message": message,
            },
        }

        r = requests.post(
            "https://api.emailjs.com/api/v1.0/email/send",
            json=payload,
            timeout=15,
        )

        if r.status_code != 200:
            return jsonify({
                "message": "EmailJS failed.",
                "emailjs_status": r.status_code,
                "emailjs_text": r.text
            }), 500

        LAST_REQUEST_BY_IP[client_ip] = now

        return jsonify({"message": "Message sent successfully."}), 200

    except Exception as e:
        return jsonify({
            "message": "Internal server error.",
            "error": str(e)
        }), 500