import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Header = () => {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		open === false ? setOpen(true) : setOpen(false);
	};

	return (
		<header className="sm:flex sm:justify-between px-4 py-3 bg-gray-800">
			<div className="flex items-center justify-between">
				<Link to={`${process.env.PUBLIC_URL}/`}>
					<img
						src={logo}
						className="h-16 w-16 transition duration-500 ease-in-out hover:opacity-75"
						alt="React Bank Logo"
					/>
				</Link>

				<button
					className={
						'sm:hidden inline-block hamburger' +
						(open ? ' is-active' : '')
					}
					type="button"
					onClick={() => toggleMenu()}
				>
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
			</div>

			<nav
				className={
					'sm:flex sm:items-center' + (open ? ' block' : ' hidden')
				}
			>
				<ul className="sm:flex">
					<li className="font-semibold hover:bg-gray-400 rounded px-2 py-2">
						<Link
							className="text-white"
							to={`${process.env.PUBLIC_URL}/personal`}
						>
							Personal
						</Link>
					</li>
					<li className="sm:mt-0 sm:ml-2 mt-2 font-semibold hover:bg-gray-400 rounded px-2 py-2">
						<Link
							className="text-white"
							to={`${process.env.PUBLIC_URL}/business`}
						>
							Business
						</Link>
					</li>
					<li className="sm:mt-0 sm:ml-2 mt-2 font-semibold hover:bg-gray-400 rounded px-2 py-2">
						<Link
							className="text-white"
							to={`${process.env.PUBLIC_URL}/about`}
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
