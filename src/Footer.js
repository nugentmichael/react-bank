import React from 'react';

const Footer = () => {
	return (
		<footer className="footer py-8">
			<h6 className="text-center text-gray-500 text-xs">
				&copy; {new Date().getFullYear()}&nbsp;
				<strong>React Bank:</strong> An online bank portal built on
				React. All rights reserved.
			</h6>
		</footer>
	);
};

export default Footer;
