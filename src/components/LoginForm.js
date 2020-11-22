import React, { useRef, useState, useEffect } from 'react';

const LoginForm = () => {
	const [valid, setValid] = useState(false);
	const [username, setUsername] = useState(0);
	const [password, setPassword] = useState(0);
	const [userError, setUserError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	useEffect(() => {
		username && password ? setValid(true) : setValid(false);
	}, [username, password]);

	const formValidation = (e) => {
		// Username Field
		if (e.target.id === 'username') {
			e.target.value === '' ? setUserError(true) : setUserError(false);
			setUsername(e.target.value.length);
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
		console.log('Submit!');
	};

	return (
		<form
			className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			autocomplete="off"
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
						'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ' +
						(userError ? 'border-red-500' : '')
					}
					id="username"
					type="text"
					placeholder="Username"
					onChange={formValidation}
				/>
				{userError ? (
					<p className="text-red-500 text-xs italic">
						Please enter your username.
					</p>
				) : null}
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
						'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ' +
						(passwordError ? 'border-red-500' : '')
					}
					id="password"
					type="password"
					placeholder="******************"
					onChange={formValidation}
				/>
				{passwordError ? (
					<p className="text-red-500 text-xs italic">
						Please enter your password.
					</p>
				) : null}
			</div>
			<div className="flex items-center justify-between">
				<button
					className={
						'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ' +
						(!valid ? 'opacity-50 cursor-not-allowed' : '')
					}
					type="submit"
					disabled={valid}
				>
					Sign In
				</button>
				<a
					className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
					href="#"
				>
					Forgot Password?
				</a>
			</div>
		</form>
	);
};

export default LoginForm;
