import React from "react";
import navClasses from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({ isActive }) => isActive ? navClasses.activeLink : '';

const Navbar = (props) => {

	return (
		<nav className={navClasses.nav}>

			<div className={navClasses.item}>
				<NavLink to='/Profile' className={setActive}>Profile</NavLink>
			</div>

			<div className={navClasses.item}>
				<NavLink to='/Dialogs' className={setActive}>Messages</NavLink>
			</div>

			<div className={navClasses.item}>
				<NavLink to='/News' className={setActive}>News</NavLink>
			</div>

			<div className={navClasses.item}>
				<NavLink to='/Music' className={setActive}>Music</NavLink>
			</div>

			<div className={navClasses.item}>
				<NavLink to='/Settings' className={setActive}>Settings</NavLink>
			</div>

		</nav>
	);
}

export default Navbar;