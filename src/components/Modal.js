import React, { useState } from 'react';

const Modal = (props) => {
	const { open, toggle, message, func, cancel } = props;
	const [openModal, setOpenModal] = useState(open);
	console.log(props);

	if (open) {
		return (
			<div className="w-full fixed top-0 right-0 bottom-0 left-0 z-50 bg-blue-100 bg-opacity-90">
				<section className="flex items-center justify-center h-full">
					<div className="flex flex-col items-center justify-center p-4 bg-white w-3/6 h-1/5 border-4 border-blue-500 border-opacity-30 rounded-lg">
						<div className="my-4">
							<p className="text-l">{message}</p>
						</div>

						<div>
							{func && (
								<button
									className="mr-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									onClick={() => {
										func && func !== (false || null)
											? func()
											: setOpenModal(!openModal);
										// setOpenModal(!openModal);
										toggle(false);
									}}
								>
									Proceed
								</button>
							)}
							{cancel && (
								<button
									className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									onClick={() => {
										cancel && cancel !== (false || null)
											? cancel()
											: setOpenModal(!openModal);
										// setOpenModal(!openModal);
										toggle(false);
									}}
								>
									Cancel
								</button>
							)}
						</div>
					</div>
				</section>
			</div>
		);
	} else {
		return null;
	}
};

export default Modal;
