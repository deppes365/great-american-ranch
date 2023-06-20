import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Sass/App.scss';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
	const [showNav, setShowNav] = useState(true);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (scrollY > 250) {
				return setShowNav(false);
			}

			if (scrollY < 250) {
				return setShowNav(true);
			}
		});
	}, []);

	return (
		<div className="App">
			<Navbar showNav={showNav} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
			</Routes>
		</div>
	);
}

export default App;
