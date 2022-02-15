import React from "react";
import { useForm } from "react-hook-form";



const LoginForm = ( props ) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors, isValid},
	} = useForm( {
		mode: "onBlur",
	} );
	
	const onSubmit = data => {
		props.login( data.email, data.password, data.rememberMe );
		reset();
	};
	
	const signInRef = React.createRef( "../Signin/signin" );
	
	return (
		<div>
			<form onSubmit={ handleSubmit( onSubmit ) }>
				<label>
					<div>Login:</div>
					<input type={ "email" } placeholder={ "Email address" }
					       { ...register( "email", {
						       required: "The field is required to fill in",
					       } ) }
					/>
				</label>
				<div>
					{ errors?.email && <p>{ errors?.email?.message || "Error!" }</p> }
				</div>
				<label>
					<div>Password:</div>
					<input type={ "password" }
					       name={ "password" }
					       placeholder={ "Password" }
					       autoComplete={ "Password" }
					       { ...register( "password", {
						       required: "The field is required to fill in",
					       } ) }
					/>
					<div>
						{ errors?.password && <p>{ errors?.password?.message || "Error!" }</p> }
					</div>
				</label>
				<div>
					<a href="https://google.com">Forgotten password?</a>
				</div>
				<input type="checkbox" name={ "Remember me" } placeholder={ "Remember me" }
				       { ...register( "Remember me", {} ) }
				/><label htmlFor="Remember me">Remember me</label>
				<div>
					<input type="submit" disabled={ !isValid } value={ "Log in" }/>
					<input type="button" disabled={ !isValid } value={ "Sign in" } ref={ signInRef }/>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;