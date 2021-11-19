import React from "react";
import navClasses from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={navClasses.nav}>

			<div className={navClasses.item}>
				<a href='#s'>Profile</a>
			</div>

			<div className={navClasses.item}>
				<a href='#s'>Messages</a>
			</div>

			<div className={navClasses.item}>
				<a href='#s'>News</a>
			</div>

			<div className={navClasses.item}>
				<a href='#s'>Music</a>
			</div>

			<div className={navClasses.item}>
				<a href='#s'>Settings</a>
			</div>

		</nav>
	);
}

export default Navbar;