import React from "react";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";



const Login = ( props ) => {
	
	if (props.isAuth) {
		return ( <Navigate replace to={ "/profile" }/> );
	}
	
	return (
		<div>
			<h1>Log in</h1>
			<LoginForm/>
		</div>
	);
};

export default Login;