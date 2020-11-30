import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Portal = (props) => {
	const location = useLocation();
	const user = location.username;

	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	return (
		<div className="flex items-center justify-around py-8">
			<div>
				<h3>Weclome{user && `, user`}!</h3>
				<h4>You are now logged in to React Bank.</h4>
			</div>
			<div className="w-full max-w-xs">
				<h4>Banking Needs</h4>
			</div>
		</div>
	);
};

export default Portal;
