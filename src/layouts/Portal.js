import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Portal = (props) => {
	const history = useHistory();
	const location = useLocation();
	const user = location.username;
	const bankAccounts = JSON.parse(localStorage.getItem('bankAccounts'));
	const [chequing, setChequing] = useState(10000.12);
	const [savings, setSavings] = useState(1234.56);
	const [creditCard, setCreditCard] = useState(2345.89);
	const [rrsp, setRRSP] = useState(7891.52);
	const [tfsa, setTFSA] = useState(1234.19);
	const [validTransfer, setValidTransfer] = useState(false);
	const [amount, setAmount] = useState(0);
	const [transferFrom, setTransferFrom] = useState();
	const [transferTo, setTransferTo] = useState();

	const transferValidation = (e) => {
		if (
			e.target.value !== '' &&
			!isNaN(e.target.value) &&
			transferFrom !== transferTo
		) {
			setAmount(e.target.value);
			setValidTransfer(true);
		} else {
			setValidTransfer(false);
		}
	};

	const transferFunds = () => {
		// const amount = document.getElementById('transferAmount').value;
		// const transferFrom = document.getElementById('transferFrom');
		// const transferFromAccount =
		// 	transferFrom.selectedOptions[0].dataset.account;
		// const transferTo = document.getElementById('transferTo');
		// const transferToAccount = transferTo.selectedOptions[0].dataset.account;

		if (validTransfer) {
			alert(
				`Are you sure you want to transfer $${amount} from your ${transferFrom} account to ${transferTo} account?`
			);
		}

		// if (localStorage.getItem('bankAccounts')) {
		// 	localStorage.setItem(
		// 		'bankAccounts',
		// 		JSON.stringify({ chequing, savings, creditCard, rrsp, tfsa })
		// 	);
		// }
	};

	useEffect(() => {
		document.title = props.title || 'React Bank';

		// Check to see if there is a Local Storage object containing the bank account details with their amounts, if not, create one.
		if (!localStorage.getItem('bankAccounts')) {
			localStorage.setItem(
				'bankAccounts',
				JSON.stringify({ chequing, savings, creditCard, rrsp, tfsa })
			);
		}
	}, [props.title, chequing, savings, creditCard, rrsp, tfsa]);

	return (
		<div className="flex items-start justify-center py-8">
			<div className="w-1/2 text-left">
				<div className="pt-8">
					<h2 className="font-bold">Weclome{user && `, ${user}`}!</h2>
					<h3>You are now logged in to React Bank.</h3>
				</div>
				<hr className="my-8" />
				<div className="mb-8">
					<h4 className="font-bold">Bank Accounts:</h4>
					<ul>
						<li className="flex my-3 py-3 border-b border-gray-300">
							<div className="flex flex-col justify-center flex-grow">
								<a href="#">
									<span>Supreme No Limit Chequing</span>
									<span className="block text-xs">
										Chequing 00012-1234567
									</span>
								</a>
							</div>
							<div className="flex flex-col justify-center">
								<p>
									<span className="text-lg font-normal">
										$
										{bankAccounts
											? bankAccounts[
													'chequing'
											  ].toLocaleString()
											: chequing.toLocaleString()}
										<sup className="text-xs">CAD</sup>
									</span>
								</p>
							</div>
						</li>
						<li className="flex my-3 py-3">
							<div className="flex flex-col justify-center flex-grow">
								<a href="#">
									<span>High Interest Savings</span>
									<span className="block text-xs">
										Savings 00034-5678912
									</span>
								</a>
							</div>
							<div className="flex flex-col justify-center">
								<p>
									<span className="text-lg font-normal">
										$
										{bankAccounts
											? bankAccounts[
													'savings'
											  ].toLocaleString()
											: savings.toLocaleString()}
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
								<a href="#">
									<span>Cash Back MasterCard</span>
									<span className="block text-xs">
										Credit Card 1234 5678 9123 4567
									</span>
								</a>
							</div>
							<div className="flex flex-col justify-center">
								<p>
									<span className="text-lg font-normal">
										$
										{bankAccounts
											? bankAccounts[
													'creditCard'
											  ].toLocaleString()
											: creditCard.toLocaleString()}
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
								<a href="#">
									<span>RRSP</span>
									<span className="block text-xs">
										Registered Retirement Savings Plan
										00056-7891234
									</span>
								</a>
							</div>
							<div className="flex flex-col justify-center">
								<p>
									<span className="text-lg font-normal">
										$
										{bankAccounts
											? bankAccounts[
													'rrsp'
											  ].toLocaleString()
											: rrsp.toLocaleString()}
										<sup className="text-xs">CAD</sup>
									</span>
								</p>
							</div>
						</li>
						<li className="flex my-3 py-3">
							<div className="flex flex-col justify-center flex-grow">
								<a href="#">
									<span>TFSA</span>
									<span className="block text-xs">
										Tax-Free Savings Account 00089-5678912
									</span>
								</a>
							</div>
							<div className="flex flex-col justify-center">
								<p>
									<span className="text-lg font-normal">
										$
										{bankAccounts
											? bankAccounts[
													'tfsa'
											  ].toLocaleString()
											: tfsa.toLocaleString()}
										<sup className="text-xs">CAD</sup>
									</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-auto max-w-xs p-8 text-left">
				<h4 className="font-bold">Transfer:</h4>
				<h5 className="font-semibold mt-3">From:</h5>
				<select
					value={transferFrom}
					onChange={(e) => setTransferFrom(e.target.value)}
				>
					<option defaultValue hidden>
						&mdash; Select Account &mdash;
					</option>
					<option
						value="chequing"
						data-account="Supreme No Limit Chequing"
						data-amount={
							bankAccounts ? bankAccounts['chequing'] : chequing
						}
						disabled={transferFrom === 'chequing'}
					>
						Supreme No Limit Chequing: $
						{bankAccounts
							? bankAccounts['chequing'].toLocaleString()
							: chequing.toLocaleString()}
					</option>
					<option
						value="savings"
						data-account="High Interest Savings"
						data-amount={
							bankAccounts ? bankAccounts['savings'] : savings
						}
						disabled={transferFrom === 'savings'}
					>
						High Interest Savings: $
						{bankAccounts
							? bankAccounts['savings'].toLocaleString()
							: savings.toLocaleString()}
					</option>
					<option
						value="creditCard"
						data-account="Cash Back MasterCard"
						data-amount={
							bankAccounts
								? bankAccounts['creditCard']
								: creditCard
						}
						disabled={transferFrom === 'creditCard'}
					>
						Cash Back MasterCard: $
						{bankAccounts
							? bankAccounts['creditCard'].toLocaleString()
							: creditCard.toLocaleString()}
					</option>
					<option
						value="rrsp"
						data-account="RRSP"
						data-amount={bankAccounts ? bankAccounts['rrsp'] : rrsp}
						disabled={transferFrom === 'rrsp'}
					>
						RRSP: $
						{bankAccounts
							? bankAccounts['rrsp'].toLocaleString()
							: rrsp.toLocaleString()}
					</option>
					<option
						value="tfsa"
						data-account="TFSA"
						data-amount={bankAccounts ? bankAccounts['tfsa'] : tfsa}
						disabled={transferFrom === 'tfsa'}
					>
						TFSA: $
						{bankAccounts
							? bankAccounts['tfsa'].toLocaleString()
							: tfsa.toLocaleString()}
					</option>
				</select>
				<h5 className="font-semibold mt-3">To:</h5>
				<select
					value={transferTo}
					onChange={(e) => setTransferTo(e.target.value)}
				>
					<option defaultValue hidden>
						&mdash; Select Account &mdash;
					</option>
					<option
						value="chequing"
						data-account="Supreme No Limit Chequing"
						data-amount={
							bankAccounts ? bankAccounts['chequing'] : chequing
						}
						disabled={transferFrom === 'chequing'}
					>
						Supreme No Limit Chequing: $
						{bankAccounts
							? bankAccounts['chequing'].toLocaleString()
							: chequing.toLocaleString()}
					</option>
					<option
						value="savings"
						data-account="High Interest Savings"
						data-amount={
							bankAccounts ? bankAccounts['savings'] : savings
						}
						disabled={transferFrom === 'savings'}
					>
						High Interest Savings: $
						{bankAccounts
							? bankAccounts['savings'].toLocaleString()
							: savings.toLocaleString()}
					</option>
					<option
						value="creditCard"
						data-account="Cash Back MasterCard"
						data-amount={
							bankAccounts
								? bankAccounts['creditCard']
								: creditCard
						}
						disabled={transferFrom === 'creditCard'}
					>
						Cash Back MasterCard: $
						{bankAccounts
							? bankAccounts['creditCard'].toLocaleString()
							: creditCard.toLocaleString()}
					</option>
					<option
						value="rrsp"
						data-account="RRSP"
						data-amount={bankAccounts ? bankAccounts['rrsp'] : rrsp}
						disabled={transferFrom === 'rrsp'}
					>
						RRSP: $
						{bankAccounts
							? bankAccounts['rrsp'].toLocaleString()
							: rrsp.toLocaleString()}
					</option>
					<option
						value="tfsa"
						data-account="TFSA"
						data-amount={bankAccounts ? bankAccounts['tfsa'] : tfsa}
						disabled={transferFrom === 'tfsa'}
					>
						TFSA: $
						{bankAccounts
							? bankAccounts['tfsa'].toLocaleString()
							: tfsa.toLocaleString()}
					</option>
				</select>
				<div className="flex items-center">
					<input
						className="my-3 mr-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="transferAmount"
						type="text"
						placeholder="$0.00"
						onChange={transferValidation}
					/>
					<button
						className={
							'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' +
							(!validTransfer && ' opacity-50 cursor-not-allowed')
						}
						onClick={transferFunds}
					>
						Transfer
					</button>
				</div>
				<hr className="my-5" />
				<h4 className="font-bold">Banking Needs:</h4>
				<ul>
					<li>
						<a href="#">Statements</a>
					</li>
					<li>
						<a href="#">Messages</a>
					</li>
					<li>
						<a href="#">Alerts</a>
					</li>
					<li className="my-5">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							onClick={() => history.push('/')}
						>
							Log Out
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Portal;
