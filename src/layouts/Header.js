import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Header = () => {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		open === false ? setOpen(true) : setOpen(false);
	};

	return (
		<header className="sm:flex sm:justify-between px-4 py-3 bg-gray-800">
			<div className="flex items-center justify-between">
				<img
					src={logo}
					className="bank-logo h-20 w-20"
					alt="React Bank Logo"
				/>

				<button
					type="button"
					className="hover:text-white sm:hidden"
					onClick={() => toggleMenu()}
				>
					Menu
				</button>
			</div>

			<nav
				className={
					'sm:flex sm:items-center ' + (open ? 'block' : 'hidden')
				}
			>
				<ul className="sm:flex">
					<li className="font-semibold hover:bg-gray-400 rounded px-2">
						<Link to="/">Personal</Link>
					</li>
					<li className="sm:mt-0 sm:ml-2 mt-2 font-semibold hover:bg-gray-400 rounded px-2">
						<Link to="/">Business</Link>
					</li>
					<li className="sm:mt-0 sm:ml-2 mt-2 font-semibold hover:bg-gray-400 rounded px-2">
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
