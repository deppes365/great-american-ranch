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

			if (firstSection.getBoundingClientRect().top > 100) {
				return setSelectorSticky(false);
			} else if (firstSection.getBoundingClientRect().top <= 100) {
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
						<div className="menuItem">
							<h3>Bison Sliders</h3>
							<p>
								Three Miniature versions of our signature Bison Burger, with
								tomato, bacon, spinach, Jack Daniels carmelized onions, and goat
								cheese.
							</p>
							<span>$10.99</span>
						</div>

						<div className="menuItem">
							<h3>Signature Ranch Cowboy Chili</h3>
							<p>
								Tomato Based Ground Beef Chili With Black Beans Paired With a BLT <strong>OR</strong> A Grilled Cheese.
							</p>
							<span>$9.99</span>
						</div>

						<div className="menuItem">
							<h3>Sidewinder Nachos</h3>
							<p>
								Beer Battered Sidewinder Fries With Pulled Pork, Topped With, Corn, Jalepenos, Black Beans, Tomatoes, Sour Cream and Scallions Covered In A Savory, 3-Cheese, Yellow Blend Queso.
							</p>
							<span>$11.99</span>
						</div>

						<div className="menuItem">
							<h3>Country Classic Nachos</h3>
							<p>
								Tortilla Chips with Pulled Pork, Topped with Jalepenos, Corn, Black Beans, Tomatoes, Sour Cream and Scallions Covered In A Savory, 3-Cheese, Yellow Blend Queso.
							</p>
							<span>$10.99</span>
						</div>

						<div className="menuItem">
							<h3>Chicken Wings</h3>
							<p>
								Six Jumbo Wings tossed in your choice of Buffalo, Korean BBQ, Mango Habenero, or Dry Rub.
							</p>
							<span>$14.99</span>
						</div>

						<div className="menuItem">
							<h3>Breaded Chicken Tenders</h3>
							<p>
								Three Of Our Famous Hand Breaded Tenders with your choice of dipping sauce.
							</p>
							<span>$9.99</span>
						</div>


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
