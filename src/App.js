import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from './Header';
import LoginForm from './LoginForm';
import About from './About';
import Error from './Error';
import Footer from './Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<div className="grid grid-rows-3">
				<Header />
				<main>
					<Switch>
						<Route path="/" component={LoginForm} exact />
						<Route path="/about" component={About} />
						<Route component={Error} />
					</Switch>
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
