import React from 'react';

const Modal = ({ message }) => {
	alert(message);
	return <p className="text-red-500 text-xs italic">{message}</p>;
};

export default Modal;
