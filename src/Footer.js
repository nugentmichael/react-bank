import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
			<h6>
				<strong>React Bank:</strong> An online bank portal built on
				React &copy; {new Date().getFullYear()}
			</h6>
		</footer>
	);
};

export default Footer;
