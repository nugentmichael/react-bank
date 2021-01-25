import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Transactions = (props) => {
	const location = useLocation();

	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	console.log(location.account, location.balance);

	return (
		<div className="flex items-center justify-around py-8">
			<h3>Your Recent Transactions</h3>
		</div>
	);
};

export default Transactions;
