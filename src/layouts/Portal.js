import React, { useEffect, useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PortalSidebar from '../components/PortalSidebar';

const Portal = (props) => {
	const history = useHistory();
	const location = useLocation();
	const user = location.username;
	const bankAccounts = JSON.parse(localStorage.getItem('bankAccounts'));
	const chequing = useRef(10000.12);
	const savings = useRef(1234.56);
	const creditCard = useRef(2345.89);
	const rrsp = useRef(7891.52);
	const tfsa = useRef(1234.19);
	const [validTransfer, setValidTransfer] = useState(false);
	const [amount, setAmount] = useState('');
	const [transferFrom, setTransferFrom] = useState('');
	const [transferTo, setTransferTo] = useState('');
	const [transferFromAccount, setTransferFromAccount] = useState();
	const [transferToAccount, setTransferToAccount] = useState();

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

	const transferFunds = (e) => {
		e.preventDefault();

		if (validTransfer && localStorage.getItem('bankAccounts')) {
			// Check to see if the transfer amount is greater than what is currently available in the account and that the account has sufficient funds
			if (
				amount > bankAccounts[transferFrom] &&
				!bankAccounts[transferFrom] <= 0
			) {
				alert(
					`The amount that you are requesting to transfer ($${amount}) is higher than what is currently available in your ${transferFromAccount} account ($${bankAccounts[transferFrom]}).`
				);
			} else if (bankAccounts[transferFrom] <= 0) {
				// Check to see if the account has insufficient funds - if not, halt the transfer
				alert(
					`You do not have sufficient funds in your ${transferFromAccount} ($${bankAccounts[transferFrom]}).`
				);
			} else {
				// Prompt the user to confirm the transfer amount
				alert(
					`Are you sure you want to transfer $${amount} from your ${transferFromAccount} account to ${transferToAccount} account?`
				);

				// Subtract the amount from the selected From account and add it to the selected To account
				bankAccounts[transferFrom] = Number(
					(bankAccounts[transferFrom] - amount).toFixed(2)
				);
				bankAccounts[transferTo] = Number(
					(bankAccounts[transferTo] += +amount).toFixed(2)
				);

				// Update Local Storage item
				localStorage.setItem(
					'bankAccounts',
					JSON.stringify(bankAccounts)
				);

				// Update the valid transfer state to reload the component to display the new account amounts
				setValidTransfer(false);

				// Reset the Account Transfer fields
				setAmount('');
				setTransferFrom('');
				setTransferTo('');
			}
		}
	};

	useEffect(() => {
		document.title = props.title || 'React Bank';

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
	}, [props.title]);

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
											: chequing.current.toLocaleString()}
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
											: savings.current.toLocaleString()}
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
											: creditCard.current.toLocaleString()}
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
											: rrsp.current.toLocaleString()}
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
											: tfsa.current.toLocaleString()}
										<sup className="text-xs">CAD</sup>
									</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<PortalSidebar {...props} />
		</div>
	);
};

export default Portal;
