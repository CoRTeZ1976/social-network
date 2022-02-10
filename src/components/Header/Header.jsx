import React from "react";
import headerClasses from './Header.module.css';



const Header = ( props ) => {
	
	return (
		<header className={ headerClasses.header }>
			<div><img alt={ 'logo' } src="#"/></div>
			
			<div className={ headerClasses.loginBlock }>
				{ props.isAuth ? <div> { props.login } </div> : <div>{ props.logout }</div> }
			</div>
		
		</header>
	);
};

export default Header;