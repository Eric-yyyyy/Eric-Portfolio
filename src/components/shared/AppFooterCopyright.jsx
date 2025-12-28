function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<span className="ml-1">
					Eric Yang · Portfolio
				</span>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
