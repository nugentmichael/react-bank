import React from 'react';

// Components
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<div className="grid auto-rows-auto">
				<Header />
				<main className="flex items-center flex items-center justify-center">
					<Main />
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
