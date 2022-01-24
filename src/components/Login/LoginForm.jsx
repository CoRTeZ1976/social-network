import React from "react";
import { useForm } from "react-hook-form";
import './LoginForm.module.css';



export default function LoginForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors, isValid},
	} = useForm( {
		mode: "onBlur",
	} );
	
	const onSubmit = data => {
		console.log( JSON.stringify( data ) );
		reset();
	};
	
	return (
		<div>
			<form onSubmit={ handleSubmit( onSubmit ) }>
				<input placeholder={ "Email address or phone number" }
				       { ...register( "login", {
					       required: "The field is required to fill in",
				       } ) }
				/>
				<div>
					{ errors?.login && <p>{ errors?.login?.message || "Error!" }</p> }
				</div>
				<input type={ "password" } name={ "password" } placeholder={ "Password" }
				       { ...register( "password", {
					       required: "The field is required to fill in",
				       } ) }
				/>
				<div>
					{ errors?.password && <p>{ errors?.password?.message || "Error!" }</p> }
				</div>
				<div>
					<a href="https://google.com">Forgotten password?</a>
				</div>
				<input type="submit" disabled={ !isValid } value={ "Log in" }/>
				<input type="button" value={ "Sign in" }/>
			</form>
		</div>
	);
}