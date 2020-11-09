import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import Footer from './Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<div className="grid grid-rows-3">
				<Header />
				<LoginForm />
				<Footer />
			</div>
		</div>
	);
}

export default App;
