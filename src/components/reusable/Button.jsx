function Button({ title, type = 'button', disabled = false, ...props }) {
	return (
		<button type={type} disabled={disabled} {...props}>
			{title}
		</button>
	);
}

export default Button;