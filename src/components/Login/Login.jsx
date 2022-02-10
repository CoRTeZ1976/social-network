import React from "react";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";



const Login = ( props ) => {
	console.log( props );
	return (
		<div>
			<h1>Log in</h1>
			{ props.isAuth ? <Navigate to={ "/profile" } replace={ true }/> : <LoginForm/> }
		</div>
	);
};

export default Login;