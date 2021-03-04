import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm';

const Business = (props) => {
	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	return (
		<div className="flex items-center justify-around py-8">
			<div>
				<h3>Welcome to React Bank for Business!</h3>
				<h4>
					Your home for managing your business finances using the
					latest web technologies.
				</h4>
			</div>
			<div className="w-full max-w-xs">
				<LoginForm />
			</div>
		</div>
	);
};

export default Business;
