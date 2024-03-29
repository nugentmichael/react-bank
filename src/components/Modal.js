import React, { useState } from 'react';

const Modal = (props) => {
	const { message, func, cancel } = props;
	const [openModal, setOpenModal] = useState(true);

	return (
		<div className="w-full fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50 bg-blue-100 bg-opacity-90">
			<div className="flex flex-col items-center justify-center p-4 bg-white md:w-3/6 w-4/5 border-4 border-blue-500 border-opacity-30 rounded-lg">
				<div className="my-4">
					<p className="text-l">{message}</p>
				</div>

				<div>
					{func && (
						<button
							className="mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							onClick={() => {
								func && func !== (false || null)
									? func()
									: setOpenModal(!openModal);
							}}
						>
							Okay
						</button>
					)}
					{cancel && (
						<button
							className="bg-transparent hover:bg-blue-700 text-blue-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							onClick={() => {
								cancel && cancel !== (false || null)
									? cancel()
									: setOpenModal(!openModal);
							}}
						>
							Cancel
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Modal;
