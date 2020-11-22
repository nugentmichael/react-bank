import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from './Header';
import Login from './Login';
import About from './About';
import Error from './Error';
import Footer from './Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<div className="grid auto-rows-auto">
				<Header />
				<main className="flex items-center">
					<div className="flex items-center justify-center w-full">
						<Switch>
							<Route path="/" component={Login} exact />
							<Route path="/about" component={About} />
							<Route component={Error} />
						</Switch>
					</div>
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
