import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Bartender from '../assets/images/gar-drink-2.jpeg';
import Burger from '../assets/images/gar-burger.jpeg';
import Pretzels from '../assets/images/gar-pretzels.jpeg';
import { Link } from 'react-router-dom';
import Event1 from '../assets/images/eventPics/event-1.jpeg';
import Event2 from '../assets/images/eventPics/event-2.jpeg';
import Event3 from '../assets/images/eventPics/event-3.jpeg';

const eventPics = [Event1, Event2, Event3];

function Home() {
	const [activeLocation, setActiveLocation] = useState(0);


	return (
		<div className="page" id="home">
			<div className="heroSection">
				<div className="container">
					<h1>Great American Ranch</h1>
				</div>
				<FaChevronDown className="downIcon" />
			</div>
			<div className="aboutSection">
				<div className="container">
					<h1>Welcome to the Great American Ranch</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, sit eius. Sit quis voluptatibus, doloremque placeat illum ullam laboriosam minima totam, aspernatur alias non possimus modi officia delectus soluta molestias accusantium ipsa ratione beatae quae ipsam culpa fugiat mollitia. Ut dicta tenetur, harum ex facere nemo eum quia voluptate! Praesentium tenetur repellat, impedit a nemo consequuntur dolorum. Cum at assumenda natus illo. Animi nostrum omnis enim. Tempore nostrum assumenda doloribus in, est deleniti quia eaque.
					</p>
					<Link to="/menu" className="btn">
						View our Menu
					</Link>
				</div>
			</div>
			<div className="imageSection">
				<div className="imgContainer">
					<img src={Burger} alt="Pretty Female Bartender" />
				</div>
				<div className="imgContainer">
					<img src={Bartender} alt="Burger" />
				</div>

				<div className="imgContainer">
					<img src={Pretzels} alt="Pretzels" />
				</div>
			</div>
			<div className="upcomingEvents">
				<div className="container">
					<h1>Upcoming Events</h1>
					<div className="homeEvents">
						{eventPics.map((img, i) => {
							return (
								<div key={i} className="eventImgContainer">
									<img src={img} alt="" />
								</div>
							);
						})}
					</div>
					<Link to="/events" className="btn">
						View All Events
					</Link>
				</div>
			</div>
			<div className="locationsSection">
				<div className="container">
					<h1>Our Locations</h1>
					<div className="locationBtns">
						<button
							className={`btn-0 ${activeLocation === 0 ? 'active' : ''}`}
							onClick={e => {
								e.preventDefault();
								setActiveLocation(0);
							}}
						>
							Midlothian
						</button>
						<button
							className={`btn-1 ${activeLocation === 1 ? 'active' : ''}`}
							onClick={e => {
								e.preventDefault();
								setActiveLocation(1);
							}}
						>
							Mechanicsville
						</button>
					</div>
					<div className="locationInfo">
						<h2>{locations[activeLocation].name}</h2>
						<p>{locations[activeLocation].address}</p>
						<p>{locations[activeLocation].phone}</p>
						<h3>Hours of Operation</h3>
						<div className="hoursContainer">
							{locations[activeLocation].hours.map(day => {
								return (
									<div className="day">
										<p>{day[0]}:</p>
										<p>{day[1]}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const locations = [
	{
		name: 'Midlothian',
		address: '13995 Raised Antler Cir. Midlothian, VA 23112',
		phone: '804.608.0182',
		email: 'info@greatamericanranch.com',
		hours: [
			['Sunday', '11:00am - 10:00pm'],
			['Monday', '11:00am - 10:00pm'],
			['Tuesday', '11:00am - 10:00pm'],
			['Wednesday', '11:00am - 10:00pm'],
			['Thursday', '11:00am - 12:00am'],
			['Friday', '11:00am - 2:00am'],
			['Saturday', '11:00am - 2:00am'],
		],
	},
	{
		name: 'Mechanicsville',
		address: '7514 Lee-Davis Rd. Mechanicsville, VA 23111',
		phone: '804.723.4215',
		email: 'mechanicsville@greatamericanranch.com',
		hours: [
			['Sunday', '11:00am - 10:00pm'],
			['Monday', '11:00am - 12:00pm'],
			['Tuesday', '11:00am - 12:00pm'],
			['Wednesday', '11:00am - 10:00pm'],
			['Thursday', '11:00am - 10:00am'],
			['Friday', '11:00am - 2:00am'],
			['Saturday', '11:00am - 2:00am'],
		],
	},
];

export default Home;
