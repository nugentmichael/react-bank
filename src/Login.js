import React, { useRef, useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';

const Login = () => {
	return (
		<div className="flex items-center justify-around w-full py-8">
			<div>
				<h3>Welcome to React Bank!</h3>
				<h4>
					Your home for managing your finances using the latest web
					technologies.
				</h4>
			</div>
			<div className="w-full max-w-xs">
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
