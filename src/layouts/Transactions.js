import React, { useEffect } from 'react';
import PortalSidebar from '../components/PortalSidebar';

const Transactions = (props) => {
	const account = JSON.parse(localStorage.getItem('account'));

	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	return (
		<div className="flex items-start justify-center py-8">
			<div className="w-1/2 text-left">
				<div className="pt-8">
					<h2 className="font-bold">React Bank</h2>
					<h3>Your Recent Transactions</h3>
					<div className="flex my-3">
						<div className="flex flex-col justify-center flex-grow">
							<span>{account.name}</span>
							<span className="block text-xs">
								{account.type}
							</span>
						</div>
						<div className="flex flex-col justify-center">
							<p>
								<span className="text-lg font-normal">
									${account.balance}
									<sup className="text-xs">CAD</sup>
								</span>
							</p>
						</div>
					</div>
				</div>
				<hr className="my-8" />
				<div className="mb-8">
					<h4 className="font-bold">Transactions:</h4>
					<ul>
						<li className="flex my-3 py-3 border-b border-gray-300">
							<div className="flex flex-col justify-center flex-grow">
								<span>Transaction #1</span>
							</div>
							<div className="flex flex-col justify-center">
								<p>
									<span className="text-lg font-normal">
										$1.23
										<sup className="text-xs">CAD</sup>
									</span>
								</p>
							</div>
						</li>
						<li className="flex my-3">
							<div className="flex flex-col justify-center flex-grow">
								<span>Transaction #2</span>
							</div>
							<div className="flex flex-col justify-center">
								<p>
									<span className="text-lg font-normal">
										$4.56
										<sup className="text-xs">CAD</sup>
									</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			{/* <PortalSidebar
				bankAccounts={bankAccounts}
				chequing={chequing.current}
				savings={savings.current}
				creditCard={creditCard.current}
				rrsp={rrsp.current}
				tfsa={tfsa.current}
				validTransfer={validTransfer}
				amount={amount}
				transferFrom={transferFrom}
				setTransferFrom={setTransferFrom}
				transferTo={transferTo}
				setTransferTo={setTransferTo}
				setTransferFromAccount={setTransferFromAccount}
				setTransferToAccount={setTransferToAccount}
				transferFunds={transferFunds}
				transferValidation={transferValidation}
			/> */}
		</div>
	);
};

export default Transactions;
