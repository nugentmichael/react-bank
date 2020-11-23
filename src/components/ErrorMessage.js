import React from 'react';

const ErrorMessage = ({ message }) => {
	return <p className="text-red-500 text-xs italic">{message}</p>;
};

export default ErrorMessage;
