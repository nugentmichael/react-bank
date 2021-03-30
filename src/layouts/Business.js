import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm';

const Business = (props) => {
	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	return (
		<div className="business-login flex items-center justify-around flex-wrap lg:flex-nowrap py-20 px-4 w-full">
			<div className="mb-8 lg:mb-0 bg-black bg-opacity-25 mx-4 p-4 text-white">
				<h1>
					Welcome to React Bank for Business!{' '}
					<span role="img" aria-label="Bank Emoji">
						🏦
					</span>
				</h1>
				<h3>
					Your home for managing your business finances using the
					latest web technologies.
				</h3>
			</div>
			<div className="w-full max-w-xs">
				<LoginForm />
			</div>
		</div>
	);
};

export default Business;
