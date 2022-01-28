import React from 'react';
import { useForm } from 'react-hook-form';



export default function MessagesForm( props ) {
	
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors, isValid},
	} = useForm( {
		mode: "onBlur",
	} );
	
	const {
		dispatchFunc,
		placeHolder,
		fieldName,
		requiredText,
		buttonText,
	} = props;
	
	const onSubmit = data => {
		console.log( data );
		dispatchFunc( data );
		reset();
	};
	
	console.log( errors );
	
	return (
		<form onSubmit={ handleSubmit( onSubmit ) }>
			<textarea
				placeholder={ placeHolder }
				{ ...register( `${ fieldName }`, {required: requiredText} ) } />
			<div>
				{ errors?.name && <p>{ errors?.name?.message || "Error!" }</p> }
			</div>
			<input type="submit"
			       disabled={ !isValid }
			       value={ buttonText }
			/>
		</form>
	);
}