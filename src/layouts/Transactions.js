import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PortalSidebar from '../components/PortalSidebar';

const Transactions = (props) => {
	const location = useLocation();
	const bankAccounts = JSON.parse(localStorage.getItem('bankAccounts'));
	const account = location.account;
	const type = location.pathname.split('/')[
		location.pathname.split('/').length - 1
	];
	const balance = location.balance;

	useEffect(() => {
		document.title = props.title || 'React Bank';
	}, [props.title]);

	return (
		<div className="flex items-start justify-center py-8">
			<div className="w-1/2 text-left">
				<div className="pt-8">
					<h2 className="font-bold">React Bank</h2>
					<h3>{account}</h3>
				</div>
				<hr className="my-8" />
				<div className="mb-8">
					<h4 className="font-bold">Transactions:</h4>
					<ul>
						<li className="flex my-3 py-3 border-b border-gray-300">
							<div className="flex flex-col justify-center flex-grow">
								<span>Supreme No Limit Chequing</span>
								<span className="block text-xs">
									Chequing 00012-1234567
								</span>
							</div>
							<div className="flex flex-col justify-center">
								<p>
									<span className="text-lg font-normal">
										$0.00
										<sup className="text-xs">CAD</sup>
									</span>
								</p>
							</div>
						</li>
						<li className="flex my-3 py-3">
							<div className="flex flex-col justify-center flex-grow">
								<span>High Interest Savings</span>
								<span className="block text-xs">
									Savings 00034-5678912
								</span>
							</div>
							<div className="flex flex-col justify-center">
								<p>
									<span className="text-lg font-normal">
										$0.00
										<sup className="text-xs">CAD</sup>
									</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
				<div className="mb-8">
					<h4 className="font-bold">Credit Cards:</h4>
					<ul>
						<li className="flex my-3 py-3">
							<div className="flex flex-col justify-center flex-grow">
								<span>Cash Back MasterCard</span>
								<span className="block text-xs">
									Credit Card 1234 5678 9123 4567
								</span>
							</div>
							<div className="flex flex-col justify-center">
								<p>
									<span className="text-lg font-normal">
										$0.00
										<sup className="text-xs">CAD</sup>
									</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
				<div className="mb-8">
					<h4 className="font-bold">Investments:</h4>
					<ul>
						<li className="flex my-3 py-3 border-b border-gray-300">
							<div className="flex flex-col justify-center flex-grow">
								<span>RRSP</span>
								<span className="block text-xs">
									Registered Retirement Savings Plan
									00056-7891234
								</span>
							</div>
							<div className="flex flex-col justify-center">
								<p>
									<span className="text-lg font-normal">
										$0.00
										<sup className="text-xs">CAD</sup>
									</span>
								</p>
							</div>
						</li>
						<li className="flex my-3 py-3">
							<div className="flex flex-col justify-center flex-grow">
								<span>TFSA</span>
								<span className="block text-xs">
									Tax-Free Savings Account 00089-5678912
								</span>
							</div>
							<div className="flex flex-col justify-center">
								<p>
									<span className="text-lg font-normal">
										$0.00
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
