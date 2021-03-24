import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm';

const Login = (props) => {
	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	return (
		<div className="personal-login flex items-center justify-around py-20 w-full">
			<div className="bg-black bg-opacity-25 p-4 text-white">
				<h1>
					Welcome to React Bank!{' '}
					<span role="img" aria-label="Bank Emoji">
						🏦
					</span>
				</h1>
				<h3>
					Your home for managing your finances using the latest web
					technologies.
				</h3>
			</div>
			<div className="w-full max-w-xs">
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
