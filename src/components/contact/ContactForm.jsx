import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const ContactForm = () => {
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState({ type: '', msg: '' });
	const [captchaToken, setCaptchaToken] = useState('');
	const recaptchaRef = useRef(null);

	const onSubmit = async (e) => {
		e.preventDefault();
		setStatus({ type: '', msg: '' });

		if (!captchaToken) {
			setStatus({ type: 'error', msg: 'Please complete the reCAPTCHA first.' });
			return;
		}

		setLoading(true);

		const form = e.currentTarget;
		const data = new FormData(form);

		const templateParams = {
			from_name: data.get('name'),
			reply_to: data.get('email'),
			subject: data.get('subject'),
			message: data.get('message'),
			'g-recaptcha-response': captchaToken,
		};

		try {
			const res = await emailjs.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			);

			console.log('EmailJS OK:', res);

			setStatus({ type: 'success', msg: 'Message sent!' });
			form.reset();
			setCaptchaToken('');
			recaptchaRef.current?.reset();
		} catch (err) {
			console.error('EmailJS error raw:', err);
			console.error('EmailJS status:', err?.status);
			console.error('EmailJS text:', err?.text);

			setStatus({
				type: 'error',
				msg: `Failed to send: ${err?.text || err?.status || 'Unknown error'}`,
			});

			recaptchaRef.current?.reset();
			setCaptchaToken('');
		} finally {
			setLoading(false);
		}
	};

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

					<div className="mt-6">
						<ReCAPTCHA
							ref={recaptchaRef}
							sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
							onChange={(token) => setCaptchaToken(token || '')}
						/>
					</div>

					{status.msg ? (
						<p
							className={`mt-4 text-sm ${
								status.type === 'success'
									? 'text-green-600 dark:text-green-400'
									: 'text-red-600 dark:text-red-400'
							}`}
						>
							{status.msg}
						</p>
					) : null}

					<div
						className={`font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider rounded-lg mt-6 duration-500 ${
							loading
								? 'bg-indigo-400 cursor-not-allowed'
								: 'bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900'
						}`}
					>
						<Button
							title={loading ? 'Sending...' : 'Send Message'}
							type="submit"
							aria-label="Send Message"
							disabled={loading}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;