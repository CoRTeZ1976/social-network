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
				<label>
					Login:
					<input placeholder={ "Email address or phone number" }
					       { ...register( "login", {
						       required: "The field is required to fill in",
					       } ) }
					/>
				</label>
				<div>
					{ errors?.login && <p>{ errors?.login?.message || "Error!" }</p> }
				</div>
				<label>
					Password:
					<input type={ "password" } name={ "password" } placeholder={ "Password" }
					       { ...register( "password", {
						       required: "The field is required to fill in",
					       } ) }
					/>
				</label>
				<div>
					{ errors?.password && <p>{ errors?.password?.message || "Error!" }</p> }
				</div>
				<div>
					<a href="https://google.com">Forgotten password?</a>
				</div>
				<input type="submit" disabled={ !isValid } value={ "Sign in" }/>
				<input type="button" value={ "Create new account" }/>
			</form>
		</div>
	);
}