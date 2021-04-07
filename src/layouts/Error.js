import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Error = (props) => {
	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	return (
		<div className="flex items-center justify-center p-8 max-w-prose">
			<div>
				<h1 className="mb-3">
					<span role="img" aria-label="Bank Emoji">
						🥺
					</span>{' '}
					Oh no!
				</h1>
				<h3>The page that you were trying to access does not exist.</h3>
				<hr className="my-8" />
				<Link to={`${process.env.PUBLIC_URL}/`}>
					<button className="inline-block my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Beam me up, Scotty!
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Error;
