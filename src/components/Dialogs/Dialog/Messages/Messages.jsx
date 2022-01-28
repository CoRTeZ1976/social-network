import React from "react";
import messagesClasses from './Messages.module.css';
import dialogsClasses from "../../Dialogs.module.css";
import { useForm } from "react-hook-form";



const Messages = ( props ) => {
	
	let messages = props.messagesData.map( m => <div key={ m.id }>{ m.message } </div> );
	
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors, isValid},
	} = useForm( {
		mode: "onBlur",
	} );
	
	const onSubmit = data => {
		props.sendMessage( data.message );
		reset();
	};
	
	return (
		<div className={ messagesClasses.message }>
			<div>{ props.message }</div>
			<div className={ dialogsClasses.messages }>
				{ messages }
				<form onSubmit={ handleSubmit( onSubmit ) }>
					<textarea
						placeholder={ 'Enter your message' }
						{ ...register( "message", {required: "Message is empty"} ) }
					/>
					<div>
						{ errors?.name && <p>{ errors?.name?.message || "Error!" }</p> }
					</div>
					<input type="submit"
					       disabled={ !isValid }
					       value={ "Send message" }
					/>
				</form>
			</div>
		</div>
	);
};

export default Messages;