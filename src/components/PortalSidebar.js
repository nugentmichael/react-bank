import React from 'react';

const PortalSidebar = (props) => {
	const {
		bankAccounts,
		chequing,
		savings,
		creditCard,
		rrsp,
		tfsa,
		validTransfer,
		amount,
		transferFrom,
		setTransferFrom,
		transferTo,
		setTransferTo,
		setTransferFromAccount,
		setTransferToAccount,
		transferFunds,
		transferValidation,
	} = props;

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
						bankAccounts
							? bankAccounts['chequing']
							: chequing.current
					}
					disabled={transferFrom === 'chequing'}
				>
					Supreme No Limit Chequing: $
					{bankAccounts
						? bankAccounts['chequing'].toLocaleString()
						: chequing.current.toLocaleString()}
				</option>
				<option
					value="savings"
					data-account="High Interest Savings"
					data-amount={
						bankAccounts ? bankAccounts['savings'] : savings.current
					}
					disabled={transferFrom === 'savings'}
				>
					High Interest Savings: $
					{bankAccounts
						? bankAccounts['savings'].toLocaleString()
						: savings.current.toLocaleString()}
				</option>
				<option
					value="creditCard"
					data-account="Cash Back MasterCard"
					data-amount={
						bankAccounts
							? bankAccounts['creditCard']
							: creditCard.current
					}
					disabled={transferFrom === 'creditCard'}
				>
					Cash Back MasterCard: $
					{bankAccounts
						? bankAccounts['creditCard'].toLocaleString()
						: creditCard.current.toLocaleString()}
				</option>
				<option
					value="rrsp"
					data-account="RRSP"
					data-amount={
						bankAccounts ? bankAccounts['rrsp'] : rrsp.current
					}
					disabled={transferFrom === 'rrsp'}
				>
					RRSP: $
					{bankAccounts
						? bankAccounts['rrsp'].toLocaleString()
						: rrsp.current.toLocaleString()}
				</option>
				<option
					value="tfsa"
					data-account="TFSA"
					data-amount={
						bankAccounts ? bankAccounts['tfsa'] : tfsa.current
					}
					disabled={transferFrom === 'tfsa'}
				>
					TFSA: $
					{bankAccounts
						? bankAccounts['tfsa'].toLocaleString()
						: tfsa.current.toLocaleString()}
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
						bankAccounts
							? bankAccounts['chequing']
							: chequing.current
					}
					disabled={transferFrom === 'chequing'}
				>
					Supreme No Limit Chequing: $
					{bankAccounts
						? bankAccounts['chequing'].toLocaleString()
						: chequing.current.toLocaleString()}
				</option>
				<option
					value="savings"
					data-account="High Interest Savings"
					data-amount={
						bankAccounts ? bankAccounts['savings'] : savings.current
					}
					disabled={transferFrom === 'savings'}
				>
					High Interest Savings: $
					{bankAccounts
						? bankAccounts['savings'].toLocaleString()
						: savings.current.toLocaleString()}
				</option>
				<option
					value="creditCard"
					data-account="Cash Back MasterCard"
					data-amount={
						bankAccounts
							? bankAccounts['creditCard']
							: creditCard.current
					}
					disabled={transferFrom === 'creditCard'}
				>
					Cash Back MasterCard: $
					{bankAccounts
						? bankAccounts['creditCard'].toLocaleString()
						: creditCard.current.toLocaleString()}
				</option>
				<option
					value="rrsp"
					data-account="RRSP"
					data-amount={
						bankAccounts ? bankAccounts['rrsp'] : rrsp.current
					}
					disabled={transferFrom === 'rrsp'}
				>
					RRSP: $
					{bankAccounts
						? bankAccounts['rrsp'].toLocaleString()
						: rrsp.current.toLocaleString()}
				</option>
				<option
					value="tfsa"
					data-account="TFSA"
					data-amount={
						bankAccounts ? bankAccounts['tfsa'] : tfsa.current
					}
					disabled={transferFrom === 'tfsa'}
				>
					TFSA: $
					{bankAccounts
						? bankAccounts['tfsa'].toLocaleString()
						: tfsa.current.toLocaleString()}
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
						// onClick={() => history.push('/')}
					>
						Log Out
					</button>
				</li>
			</ul>
		</div>
	);
};

export default PortalSidebar;
