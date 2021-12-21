import React from "react";
import headerClasses from './Header.module.css';
import { NavLink } from "react-router-dom";



const Header = ( props ) => {
	return (
		<header className={ headerClasses.header }>
			<img alt={ 'logo' } src="#"/>
			<div className={ headerClasses.loginBlock }>
				{ props.isAuth ? props.login : <NavLink to="/login">Login</NavLink> }
			</div>
		</header>
	);
};

export default Header;