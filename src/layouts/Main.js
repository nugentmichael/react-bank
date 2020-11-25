import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import About from './About';
import Error from './Error';

const Main = () => {
	return (
		<div>
			<Switch>
				<Route path="/" component={Login} exact />
				<Route path="/about" component={About} />
				<Route component={Error} />
			</Switch>
		</div>
	);
};

export default Main;
