import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Portal = (props) => {
	const history = useHistory();
	const location = useLocation();
	const user = location.username;
	const [chequing, setChequing] = useState(10000.12);
	const [savings, setSavings] = useState(1234.56);
	const [creditCard, setCreditCard] = useState(2345.89);
	const [rrsp, setRRSP] = useState(7891.52);
	const [tfsa, setTFSA] = useState(1234.19);

	useEffect(() => {
		document.title = props.title || 'React Bank';

		// Check to see if there is a Local Storage object containing the bank account details with their amounts, if not, create one.
		!localStorage.getItem('bankAccounts') &&
			localStorage.setItem(
				'bankAccounts',
				JSON.stringify({ chequing, savings, creditCard, rrsp, tfsa })
			);
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
										${chequing.toLocaleString()}
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
										${savings.toLocaleString()}
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
										${creditCard.toLocaleString()}
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
										${rrsp.toLocaleString()}
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
										${tfsa.toLocaleString()}
										<sup className="text-xs">CAD</sup>
									</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-full max-w-xs p-8 text-left">
				<h4 className="font-bold">Transfer:</h4>
				<h5 className="font-semibold mt-3">From:</h5>
				<select>
					<option value="chequing">
						Supreme No Limit Chequing: ${chequing.toLocaleString()}
					</option>
					<option value="savings">
						High Interest Savings: ${savings.toLocaleString()}
					</option>
					<option value="creditcard">
						Cash Back MasterCard: ${creditCard.toLocaleString()}
					</option>
					<option value="rrsp">RRSP: ${rrsp.toLocaleString()}</option>
					<option value="tfsa">TFSA: ${tfsa.toLocaleString()}</option>
				</select>
				<h5 className="font-semibold mt-3">To:</h5>
				<select>
					<option value="chequing">
						Supreme No Limit Chequing: ${chequing.toLocaleString()}
					</option>
					<option value="savings">
						High Interest Savings: ${savings.toLocaleString()}
					</option>
					<option value="creditcard">
						Cash Back MasterCard: ${creditCard.toLocaleString()}
					</option>
					<option value="rrsp">RRSP: ${rrsp.toLocaleString()}</option>
					<option value="tfsa">TFSA: ${tfsa.toLocaleString()}</option>
				</select>
				<input
					className="my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="transferAmount"
					type="text"
					placeholder="$0.00"
				/>
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
