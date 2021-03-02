import React, { useEffect } from 'react';

const Business = (props) => {
	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	return (
		<div className="flex items-center justify-around py-8">
			<div>
				<h3>Welcome to React Bank!</h3>
				<h4>
					Business accounts are not yet available but will be
					launching in the coming months.
				</h4>
			</div>
		</div>
	);
};

export default Business;
