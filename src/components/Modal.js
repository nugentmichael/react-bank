import React, { useState } from 'react';

const Modal = (props) => {
	const { message, open, func, cancel } = props;
	const [openModal, setOpenModal] = useState(open);

	return (
		<div
			className={
				'w-full h-full fixed top-0 right-0 bottom-0 left-0 z-50 bg-blue-100 bg-opacity-90 ' +
				(openModal ? 'block' : 'hidden')
			}
		>
			<section className="flex items-center justify-center h-full">
				<div className="flex flex-col items-center justify-center p-4 bg-white w-3/6 h-1/5 border-4 border-blue-500 border-opacity-30 rounded-lg">
					<div className="my-4">
						<p className="text-l">{message}</p>
					</div>

					<div>
						<button
							className="mr-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							onClick={() => {
								func();
								setOpenModal(false);
							}}
						>
							Proceed
						</button>
						<button
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							onClick={() => {
								cancel();
								setOpenModal(false);
							}}
						>
							Cancel
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Modal;
