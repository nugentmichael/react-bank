import React, { useEffect } from 'react';

const Portal = (props) => {
	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	return (
		<div className="flex items-center justify-around py-8">
			<div>
				<h3>Welcome to React Bank!</h3>
				<h4>
					Your home for managing your finances using the latest web
					technologies.
				</h4>
			</div>
			<div className="w-full max-w-xs">
				<h4>Banking Needs</h4>
			</div>
		</div>
	);
};

export default Portal;
