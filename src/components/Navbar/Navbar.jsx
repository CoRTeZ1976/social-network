import React from "react";
import navClasses from './Navbar.module.css';
import { NavLink } from "react-router-dom";



const setActive = ( {isActive} ) => isActive ? navClasses.activeLink : '';

const Navbar = ( props ) => {
	
	return (
		<nav className={ navClasses.nav }>
			
			<div className={ navClasses.item }>
				<NavLink to="/profile" className={ setActive }>Profile</NavLink>
			</div>
			
			<div className={ navClasses.item }>
				<NavLink to="/dialogs" className={ setActive }>Dialogs</NavLink>
			</div>
			
			<div className={ navClasses.item }>
				<NavLink to="/users" className={ setActive }>Users</NavLink>
			</div>
		
		
		</nav>
	);
};

export default Navbar;