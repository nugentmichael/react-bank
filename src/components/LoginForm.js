import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

const LoginForm = () => {
	const [valid, setValid] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState(0);
	const [userError, setUserError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const history = useHistory();

	const routeChange = (name) => {
		history.push({ pathname: 'portal', username: name });
	};

	useEffect(() => {
		username && password ? setValid(true) : setValid(false);
	}, [username, password]);

	const formValidation = (e) => {
		// Username Field
		if (e.target.id === 'username') {
			e.target.value === '' ? setUserError(true) : setUserError(false);
			setUsername(e.target.value);
		}

		// Password Field
		if (e.target.id === 'password') {
			e.target.value === ''
				? setPasswordError(true)
				: setPasswordError(false);
			setPassword(e.target.value.length);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		routeChange(username);
	};

	return (
		<form
			className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="username"
				>
					Username
				</label>
				<input
					className={
						'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' +
						(userError && ' border-red-500')
					}
					id="username"
					type="text"
					placeholder="Username"
					onChange={formValidation}
				/>
				{userError && (
					<ErrorMessage message="Please enter your username." />
				)}
			</div>
			<div className="mb-6">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="password"
				>
					Password
				</label>
				<input
					className={
						'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' +
						(passwordError && ' border-red-500')
					}
					id="password"
					type="password"
					placeholder="******************"
					onChange={formValidation}
				/>
				{passwordError && (
					<ErrorMessage message="Please enter your password." />
				)}
			</div>
			<div className="flex items-center justify-between">
				<button
					className={
						'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' +
						(!valid && ' opacity-50 cursor-not-allowed')
					}
					type="submit"
					onClick={handleSubmit}
				>
					Log In
				</button>
				<div className="relative">
					<a
						className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 tooltip"
						href="#"
					>
						Forgot Password?
					</a>
					<div className="absolute -top-14 w-full opacity-0 transition-opacity tooltip-text">
						<div className="relative">
							<div className="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full">
								Type in any username or password.
								<svg
									className="absolute text-black h-2 w-full left-0 top-full"
									x="0px"
									y="0px"
									viewBox="0 0 255 255"
									xmlSpace="preserve"
								>
									<polygon
										className="fill-current"
										points="0,0 127.5,127.5 255,0"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
