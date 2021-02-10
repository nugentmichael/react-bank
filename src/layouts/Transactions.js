import React, { useEffect } from 'react';
import PortalSidebar from '../components/PortalSidebar';
import AccountTransactions from '../assets/transactions.json';

const Transactions = (props) => {
	const account = JSON.parse(localStorage.getItem('account'));
	let transactionDetails = null;

	useEffect(() => {
		document.title = props.title || 'React Bank';

		// Check to see if there is a Local Storage object containing the bank account transactions, if not, create one.
		if (!localStorage.getItem('transactions')) {
			localStorage.setItem(
				'transactions',
				JSON.stringify(AccountTransactions)
			);
		}
	}, [props.title]);

	if (localStorage.getItem('transactions')) {
		transactionDetails = JSON.parse(localStorage.getItem('transactions'))[
			account.account
		];
	}

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
									$0.00
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
						{localStorage.getItem('transactions') ? (
							transactionDetails.map((transaction, index) => (
								<li
									key={index}
									className="flex my-3 py-3 border-b border-gray-300"
								>
									<div className="flex flex-col justify-center flex-grow">
										<span>{transaction.description}</span>
										<span className="block text-xs">
											{transaction.date}
										</span>
									</div>
									<div className="flex flex-col justify-center">
										<p>
											<span className="text-lg font-normal">
												${transaction.amount}
												<sup className="text-xs">
													CAD
												</sup>
											</span>
										</p>
									</div>
								</li>
							))
						) : (
							<li className="flex my-3 py-3 border-b border-gray-300">
								<div className="flex flex-col justify-center">
									<span>No transactions found.</span>
								</div>
							</li>
						)}
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
