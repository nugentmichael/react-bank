import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccountSidebar from '../components/AccountSidebar';
import AccountTransactions from '../assets/transactions.json';

const Transactions = (props) => {
	const bankAccounts = JSON.parse(localStorage.getItem('bankAccounts'));
	const account = JSON.parse(localStorage.getItem('account'));
	const [flag, setFlag] = useState(false);
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

	// If the LocalStorage object containing the Transactions data exists, assign the variable accordingly based on the account selected.
	if (localStorage.getItem('transactions')) {
		transactionDetails = JSON.parse(localStorage.getItem('transactions'))[
			account.account
		];
	}

	return (
		<div className="flex items-start justify-center flex-wrap md:flex-nowrap p-8 w-full max-w-screen-xl">
			<div className="md:w-1/2 w-full text-left">
				<div className="pt-8">
					<Link
						to={`${process.env.PUBLIC_URL}/portal`}
						className="block mb-4 text-blue-500 hover:text-blue-700 focus:outline-none focus:shadow-outline"
					>
						&laquo; Return to Accounts
					</Link>
					<h1 className="font-bold">React Bank</h1>
					<h3>Your Recent Transactions</h3>
					<div className="flex my-3">
						<div className="flex flex-col justify-center flex-grow mr-4">
							<span>{account.name}</span>
							<span className="block text-xs">
								{account.type}
							</span>
						</div>
						<div className="flex flex-col justify-center">
							<p>
								<span className="text-lg font-normal">
									${bankAccounts[account.account]}
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
							transactionDetails
								.reverse()
								.slice(0, 25)
								.map((transaction, index) => (
									<li
										key={index}
										className="flex my-3 py-3 border-b border-gray-300"
									>
										<div className="flex flex-col justify-center flex-grow mr-4">
											<span>
												{transaction.description}
											</span>
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
			<AccountSidebar flag={flag} setFlag={setFlag} />
		</div>
	);
};

export default Transactions;
