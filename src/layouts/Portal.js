import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PortalSidebar from '../components/AccountSidebar';
import AccountTransactions from '../assets/transactions.json';

const Portal = (props) => {
	const user = JSON.parse(localStorage.getItem('userLogin'))['username'];
	const loggedIn = JSON.parse(localStorage.getItem('userLogin'))['loggedIn'];
	const history = useHistory();
	const bankAccounts = JSON.parse(localStorage.getItem('bankAccounts'));
	const chequing = useRef(10000.12);
	const savings = useRef(1234.56);
	const creditCard = useRef(2345.89);
	const rrsp = useRef(7891.52);
	const tfsa = useRef(1234.19);
	const [flag, setFlag] = useState(false);

	useEffect(() => {
		document.title = props.title || 'React Bank';

		// If the loggedIn flag is set to false, return the user to the main login page.
		!loggedIn && history.push('/');

		// Check to see if there is a Local Storage object containing the bank account details with their amounts, if not, create one.
		if (!localStorage.getItem('bankAccounts')) {
			localStorage.setItem(
				'bankAccounts',
				JSON.stringify({
					chequing: chequing.current,
					savings: savings.current,
					creditCard: creditCard.current,
					rrsp: rrsp.current,
					tfsa: tfsa.current,
				})
			);
		}

		// Check to see if there is a Local Storage object containing the bank account transactions, if not, create one.
		if (!localStorage.getItem('transactions')) {
			localStorage.setItem(
				'transactions',
				JSON.stringify(AccountTransactions)
			);
		}

		flag && setFlag(!flag);
	}, [props.title, history, loggedIn, flag]);

	return (
		<div className="flex items-start justify-center py-8 w-full max-w-screen-xl">
			<div className="w-1/2 text-left">
				<div className="pt-8">
					<h2 className="font-bold">Weclome{user && `, ${user}`}!</h2>
					<h3>You are now logged in to React Bank.</h3>
				</div>
				<hr className="my-8" />
				<div className="mb-8">
					<h4 className="font-bold">Bank Accounts:</h4>
					<ul>
						<Link
							to={{
								pathname: '/portal/accounts/chequing',
							}}
							onClick={() => {
								localStorage.setItem(
									'account',
									JSON.stringify({
										account: 'chequing',
										name: 'Supreme No Limit Chequing',
										type: 'Chequing 00012-1234567',
										balance: bankAccounts
											? bankAccounts['chequing']
											: chequing.current,
									})
								);
							}}
						>
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
											$
											{bankAccounts
												? bankAccounts[
														'chequing'
												  ].toLocaleString()
												: chequing.current.toLocaleString()}
											<sup className="text-xs">CAD</sup>
										</span>
									</p>
								</div>
							</li>
						</Link>
						<Link
							to={{
								pathname: '/portal/accounts/savings',
							}}
							onClick={() => {
								localStorage.setItem(
									'account',
									JSON.stringify({
										account: 'savings',
										name: 'High Interest Savings',
										type: 'Savings 00034-5678912',
										balance: bankAccounts
											? bankAccounts['savings']
											: savings.current,
									})
								);
							}}
						>
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
											$
											{bankAccounts
												? bankAccounts[
														'savings'
												  ].toLocaleString()
												: savings.current.toLocaleString()}
											<sup className="text-xs">CAD</sup>
										</span>
									</p>
								</div>
							</li>
						</Link>
					</ul>
				</div>
				<div className="mb-8">
					<h4 className="font-bold">Credit Cards:</h4>
					<ul>
						<Link
							to={{
								pathname: '/portal/accounts/creditcard',
							}}
							onClick={() => {
								localStorage.setItem(
									'account',
									JSON.stringify({
										account: 'creditCard',
										name: 'Cash Back MasterCard',
										type: 'Credit Card 1234 5678 9123 4567',
										balance: bankAccounts
											? bankAccounts['creditCard']
											: creditCard.current,
									})
								);
							}}
						>
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
											$
											{bankAccounts
												? bankAccounts[
														'creditCard'
												  ].toLocaleString()
												: creditCard.current.toLocaleString()}
											<sup className="text-xs">CAD</sup>
										</span>
									</p>
								</div>
							</li>
						</Link>
					</ul>
				</div>
				<div className="mb-8">
					<h4 className="font-bold">Investments:</h4>
					<ul>
						<Link
							to={{
								pathname: '/portal/accounts/rrsp',
							}}
							onClick={() => {
								localStorage.setItem(
									'account',
									JSON.stringify({
										account: 'rrsp',
										name: 'RRSP',
										type:
											'Registered Retirement Savings Plan 00056-7891234',
										balance: bankAccounts
											? bankAccounts['rrsp']
											: rrsp.current,
									})
								);
							}}
						>
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
											$
											{bankAccounts
												? bankAccounts[
														'rrsp'
												  ].toLocaleString()
												: rrsp.current.toLocaleString()}
											<sup className="text-xs">CAD</sup>
										</span>
									</p>
								</div>
							</li>
						</Link>
						<Link
							to={{
								pathname: '/portal/accounts/tfsa',
							}}
							onClick={() => {
								localStorage.setItem(
									'account',
									JSON.stringify({
										account: 'tfsa',
										name: 'TFSA',
										type:
											'Tax-Free Savings Account 00089-5678912',
										balance: bankAccounts
											? bankAccounts['tfsa']
											: tfsa.current,
									})
								);
							}}
						>
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
											$
											{bankAccounts
												? bankAccounts[
														'tfsa'
												  ].toLocaleString()
												: tfsa.current.toLocaleString()}
											<sup className="text-xs">CAD</sup>
										</span>
									</p>
								</div>
							</li>
						</Link>
					</ul>
				</div>
			</div>
			<PortalSidebar
				bankAccounts={bankAccounts}
				chequing={chequing.current}
				savings={savings.current}
				creditCard={creditCard.current}
				rrsp={rrsp.current}
				tfsa={tfsa.current}
				flag={flag}
				setFlag={setFlag}
			/>
		</div>
	);
};

export default Portal;
