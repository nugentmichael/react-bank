import React, { useEffect } from 'react';

const About = (props) => {
	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	return (
		<div className="flex items-center justify-around py-8">
			<h3>About Page</h3>
		</div>
	);
};

export default About;
