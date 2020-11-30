import React, { useEffect } from 'react';

const Error = (props) => {
	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	return (
		<div>
			<h3>Oops! Page not found!</h3>
		</div>
	);
};

export default Error;
