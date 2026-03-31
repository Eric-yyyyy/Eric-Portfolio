import { useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const COOLDOWN_MS = 5000;

const ContactForm = () => {
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState({ type: '', msg: '' });
	const [lastSentAt, setLastSentAt] = useState(0);

	const onSubmit = async (e) => {
		e.preventDefault();
		setStatus({ type: '', msg: '' });

		const now = Date.now();
		const remaining = COOLDOWN_MS - (now - lastSentAt);

		if (remaining > 0) {
			setStatus({
				type: 'error',
				msg: `Please wait ${Math.ceil(remaining / 1000)} more second(s).`,
			});
			return;
		}

		setLoading(true);

		const form = e.currentTarget;
		const data = new FormData(form);

		const captchaToken = window.grecaptcha
			? await window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_SITE_KEY, {
				action: 'submit',
			})
			: '';

		const payload = {
			name: data.get('name')?.toString().trim(),
			email: data.get('email')?.toString().trim(),
			subject: data.get('subject')?.toString().trim(),
			message: data.get('message')?.toString().trim(),
			captchaToken,
		};

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			const text = await res.text();
			let result = {};

			try {
				result = text ? JSON.parse(text) : {};
			} catch {
				throw new Error(`Server returned non-JSON response: ${text || 'empty body'}`);
			}

			if (!res.ok) {
				throw new Error(result.message || `Failed to send (${res.status})`);
			}

			setStatus({ type: 'success', msg: 'Message sent!' });
			setLastSentAt(Date.now());
			form.reset();
		} catch (err) {
			setStatus({
				type: 'error',
				msg: err.message || 'Failed to send.',
			});
		} finally {
			setLoading(false);
		}
	};

	const now = Date.now();
	const remaining = Math.max(0, COOLDOWN_MS - (now - lastSentAt));
	const disabled = loading || remaining > 0;

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={onSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>

					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>

					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>

					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							required
						></textarea>
					</div>

					{status.msg ? (
						<p
							className={`mt-4 text-sm ${status.type === 'success'
									? 'text-green-600 dark:text-green-400'
									: 'text-red-600 dark:text-red-400'
								}`}
						>
							{status.msg}
						</p>
					) : null}

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider rounded-lg mt-6 duration-500 bg-indigo-500">
						<Button
							title={
								loading
									? 'Sending...'
									: remaining > 0
										? `Wait ${Math.ceil(remaining / 1000)}s`
										: 'Send Message'
							}
							type="submit"
							aria-label="Send Message"
							disabled={disabled}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;