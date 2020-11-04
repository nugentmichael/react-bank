import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import Footer from './Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<LoginForm />
			<Footer />
		</div>
	);
}

export default App;
