import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Portal from './Portal';
import Transactions from './Transactions';
import Business from './Business';
import About from './About';
import Error from './Error';

const Main = () => {
	return (
		<>
			<Switch>
				<Route
					path="/"
					render={() => <Login title={`Welcome to React Bank!`} />}
					exact
				/>
				<Route
					path="/business"
					render={() => (
						<Business title={`React Bank - Business Accounts`} />
					)}
					exact
				/>
				<Route
					path="/about"
					render={() => <About title={`React Bank - About Page`} />}
				/>
				<Route
					path="/portal"
					exact
					render={() => (
						<Portal
							title={`React Bank - Your Online Bank Accounts`}
						/>
					)}
				/>
				<Route
					path="/portal/accounts*"
					render={() => (
						<Transactions
							title={`React Bank - Your Recent Transactions`}
						/>
					)}
				/>
				<Route
					path="/error"
					render={() => (
						<Error title={`React Bank - 404: Not Found`} />
					)}
				/>
			</Switch>
		</>
	);
};

export default Main;
