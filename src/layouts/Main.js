import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Portal from './Portal';
import About from './About';
import Error from './Error';

const Main = () => {
	return (
		<div>
			<Switch>
				<Route
					path="/"
					render={() => <Login title={`Welcome to React Bank!`} />}
					exact
				/>
				<Route
					path="/about"
					render={() => <About title={`React Bank - About Page`} />}
				/>
				<Route
					path="/portal"
					render={() => (
						<Portal
							title={`React Bank - Your Online Bank Accounts`}
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
		</div>
	);
};

export default Main;
