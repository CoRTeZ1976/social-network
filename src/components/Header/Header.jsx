import React from "react";
import headerClasses from './Header.module.css';
import { Navigate } from "react-router-dom";



const Header = ( props ) => {
	return (
		<header className={ headerClasses.header }>
			<div><img alt={ 'logo' } src="#"/></div>
			
			<div className={ headerClasses.loginBlock }>
				{ props.isAuth
					? <div> { props.login } - <button name={ "button" } className={ "logOut" } type={ "button" }>Log
						out</button></div>
					: <Navigate replace to={ "/login" }/> }
			</div>
		
		</header>
	);
};

export default Header;