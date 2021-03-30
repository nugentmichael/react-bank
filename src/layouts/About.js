import React, { useEffect } from 'react';

const About = (props) => {
	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	return (
		<div className="flex items-center justify-center p-8 max-w-prose">
			<div>
				<h1 className="mb-3">
					<span role="img" aria-label="Bank Emoji">
						🏦
					</span>{' '}
					About Page
				</h1>
				<h3>
					Welcome to React Bank! A modernized online banking
					experience that uses the latest web technologies including
					React JS and Tailwind CSS.
				</h3>
				<hr className="my-8" />
				<p className="mb-4">
					Our online banking platform is completely open source and is
					more than happy to review and approve any pull request that
					will help expand the platform further into the next web
					generation.
				</p>
				<p className="mb-4">
					Our primary goal is to make the online banking experience
					fast, progressive, accessible, dynamic, and best of all:{' '}
					<strong>NO</strong> page refreshes!
				</p>
				<a
					href="https://github.com/nugentmichael/react-bank"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="inline-block my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Contribute Today!
					</button>
				</a>
			</div>
		</div>
	);
};

export default About;
