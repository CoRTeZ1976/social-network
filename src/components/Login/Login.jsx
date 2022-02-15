import React from "react";
import LoginForm from "./LoginForm";



const Login = ( props ) => {
	
	return (
		<div>
			<h1>Log in</h1>
			<LoginForm login={ props.login }/>
		</div>
	);
};

export default Login;