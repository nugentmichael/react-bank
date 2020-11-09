import React, { useState } from 'react';
import logo from './logo.svg';

const Header = () => {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		open === false ? setOpen(true) : setOpen(false);
	};

	return (
		<header className="px-4 py-3 bg-gray-800">
			<div className="flex items-center justify-between">
				<img
					src={logo}
					className="bank-logo h-20 w-20"
					alt="React Bank Logo"
				/>

				<button
					type="button"
					className="hover:text-white"
					onClick={() => toggleMenu()}
				>
					Menu
				</button>
			</div>

			<nav className={open ? 'block' : 'hidden'}>
				<ul>
					<li className="font-semibold hover:bg-gray-400 rounded px-2">
						<a href="#">Personal</a>
					</li>
					<li className="mt-2 font-semibold hover:bg-gray-400 rounded px-2">
						<a href="#">Business</a>
					</li>
					<li className="mt-2 font-semibold hover:bg-gray-400 rounded px-2">
						<a href="#">About</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
