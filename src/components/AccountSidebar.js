import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PortalSidebar = (props) => {
	const { chequing, savings, creditCard, rrsp, tfsa, flag, setFlag } = props;
	const bankAccounts = JSON.parse(localStorage.getItem('bankAccounts'));
	const transactions = JSON.parse(localStorage.getItem('transactions'));
	const history = useHistory();
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

				// Update the Bank Accounts Local Storage item
				localStorage.setItem(
					'bankAccounts',
					JSON.stringify(bankAccounts)
				);

				// Add to the fund transfer details to the Transactions LocalStorage object.
				transactions[transferTo].push({
					amount: Number(amount).toFixed(2),
					date: new Date().toISOString().slice(0, 10),
					description: `Funds Transfer From ${transferFromAccount} Account: $${Number(
						amount
					).toFixed(2)}.`,
				});

				transactions[transferFrom].push({
					amount: Number(amount).toFixed(2),
					date: new Date().toISOString().slice(0, 10),
					description: `Funds Transfer To ${transferToAccount} Account: $${Number(
						amount
					).toFixed(2)}.`,
				});

				// Update the Transactions Local Storage item
				localStorage.setItem(
					'transactions',
					JSON.stringify(transactions)
				);

				// Update the valid transfer state to reload the component to display the new account amounts
				setValidTransfer(false);

				// Reset the Account Transfer fields
				setAmount('');
				setTransferFrom('');
				setTransferTo('');
				setFlag(!flag);
			}
		}
	};

	const logOut = () => {
		localStorage.removeItem('userLogin');
		history.push('/');
	};

	return (
		<div className="w-auto max-w-xs p-8 text-left">
			<h4 className="font-bold">Transfer Funds:</h4>
			<h5 className="font-semibold mt-3">From:</h5>
			<select
				value={transferFrom}
				onChange={(e) => {
					setTransferFrom(e.target.value);
					setTransferFromAccount(
						e.target.options[e.target.selectedIndex].dataset.account
					);
				}}
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
						bankAccounts ? bankAccounts['creditCard'] : creditCard
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
				onChange={(e) => {
					setTransferTo(e.target.value);
					setTransferToAccount(
						e.target.options[e.target.selectedIndex].dataset.account
					);
				}}
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
						bankAccounts ? bankAccounts['creditCard'] : creditCard
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
			<form className="flex items-center" onSubmit={transferFunds}>
				<input
					className="my-3 mr-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="transferAmount"
					type="text"
					placeholder="$0.00"
					value={amount}
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
			</form>
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
						onClick={logOut}
					>
						Log Out
					</button>
				</li>
			</ul>
		</div>
	);
};

export default PortalSidebar;
