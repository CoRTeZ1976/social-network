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
					First name:
					<input
						{ ...register( "firstName", {
							required: "The field is required to fill in",
						} ) }
					/>
				</label>
				<div>
					{ errors?.firstName && <p>{ errors?.firstName?.message || "Error!" }</p> }
				</div>
				<label>
					Last name:
					<input
						{ ...register( "lastName", {
							required: "The field is required to fill in",
						} ) }
					/>
				</label>
				<div>
					{ errors?.lastName && <p>{ errors?.lastName?.message || "Error!" }</p> }
				</div>
				<input type="submit" disabled={ !isValid }/>
			</form>
		</div>
	);
}