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
		if (fieldName === "post") {
			dispatchFunc( data.post );
		} else if (fieldName === "message") {
			dispatchFunc( data.message );
		}
		reset();
	};
	
	return (
		<form onSubmit={ handleSubmit( onSubmit ) }>
			<textarea
				name={ fieldName }
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