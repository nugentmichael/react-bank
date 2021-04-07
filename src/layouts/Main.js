import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
				<Redirect
					exact
					from="/react-bank"
					to={`${process.env.PUBLIC_URL}/personal`}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/personal`}
					render={() => <Login title={`Welcome to React Bank!`} />}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/business`}
					render={() => (
						<Business title={`React Bank - Business Accounts`} />
					)}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/about`}
					render={() => <About title={`React Bank - About Page`} />}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/portal`}
					render={() => (
						<Portal
							title={`React Bank - Your Online Bank Accounts`}
						/>
					)}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/portal/accounts*`}
					render={() => (
						<Transactions
							title={`React Bank - Your Recent Transactions`}
						/>
					)}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}*`}
					render={() => (
						<Error title={`React Bank - 404: Not Found`} />
					)}
				/>
			</Switch>
		</>
	);
};

export default Main;
