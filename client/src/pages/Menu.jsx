import React, { useEffect, useState } from 'react';
import Burger from '../assets/images/gar-burger-3.jpeg';
import FrenchToast from '../assets/images/gar-french-toast.jpeg';
import Ribs from '../assets/images/gar-ribs.jpeg';

function Menu() {
	const [selectorSticky, setSelectorSticky] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const firstSection = document.querySelector('section#appetizers');
			const menuSelector = document.querySelector('.menuSelector');

			if (firstSection.getBoundingClientRect().top > 80) {
				return setSelectorSticky(false);
			} else if (firstSection.getBoundingClientRect().top <= 80) {
				return setSelectorSticky(true);
			}
		});
	}, []);

	return (
		<div className="page" id="menu">
			<div className="heroSection">
				<div className="overlay"></div>
				<h1>Menu</h1>
				<div className="imgContainer">
					<img src={Burger} alt="" />
				</div>
				<div className="imgContainer">
					<img src={FrenchToast} alt="" />
				</div>
				<div className="imgContainer">
					<img src={Ribs} alt="" />
				</div>
			</div>
			<div className="menu">
				<div className={`menuSelector ${selectorSticky ? 'sticky' : ''}`}>
					<div className="container">
						<a href="#appetizers" className="active">
							Appetizers
						</a>
						<a href="#salads">Salads</a>
						<a href="#sandwiches">Burgers & Sandwiches</a>
						<a href="#tacos">Tacos</a>
						<a href="#entrees">Entrees</a>
						<a href="#seafood">Seafood</a>
						<a href="#sides">Sides</a>
						<a href="#desserts">Desserts</a>
					</div>
				</div>
				<section id="appetizers">
					<div className="container">
						<h1>Appetizers</h1>
					</div>
				</section>
				<section id="salads">
					<div className="container">
						<h1>Salads</h1>
					</div>
				</section>
				<section id="sandwiches">
					<div className="container">
						<h1>Burgers & Sandwiches</h1>
					</div>
				</section>
				<section id="tacos">
					<div className="container">
						<h1>Tacos</h1>
					</div>
				</section>
				<section id="entrees">
					<div className="container">
						<h1>Entrees</h1>
					</div>
				</section>
				<section id="seafood">
					<div className="container">
						<h1>Seafood</h1>
					</div>
				</section>
				<section id="sides">
					<div className="container">
						<h1>Sides</h1>
					</div>
				</section>
				<section id="desserts">
					<div className="container">
						<h1>Desserts</h1>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Menu;
