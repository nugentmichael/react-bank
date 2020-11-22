import React from 'react';

// Components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<div className="grid auto-rows-auto">
				<Header />
				<main className="flex items-center flex items-center justify-center">
					<div className="w-full">
						<Main />
					</div>
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
