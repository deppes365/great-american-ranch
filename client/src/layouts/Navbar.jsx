import { NavLink, Link } from 'react-router-dom';
import GarLogo from '../assets/images/logos/gar-logo-color.png';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useState } from 'react';

function Navbar({ showNav }) {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className={`navBar ${showNav ? 'show' : ''}`}>
			<div className="container">
				<div className="logo">
					<img src={GarLogo} alt="" />
				</div>
				<ul className={`navLinks ${showMenu ? 'showMenu' : ''}`} onClick={() => {
					return showMenu && setShowMenu(prevState => !prevState)
				}}>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/menu"
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							Menu
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/events"
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							Events
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="socialLinks">
					<Link
						to="https://www.facebook.com/greatamericanranch/"
						target="_blank"
						rel="noreferrer"
					>
						<FaFacebookF />
					</Link>
					<Link
						to="https://www.instagram.com/greatamericanranch/?hl=en"
						target="_blank"
						rel="noreferrer"
					>
						<FaInstagram />
					</Link>
				</div>
				<div
					className={`hamburger ${showMenu ? 'showMenu' : ''}`}
					onClick={() => setShowMenu(prevState => !prevState)}
				>
					<div className="topLine"></div>
					<div className="middleLine"></div>
					<div className="bottomLine"></div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
