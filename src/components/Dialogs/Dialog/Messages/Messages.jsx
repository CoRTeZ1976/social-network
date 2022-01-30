import React from "react";
import messagesClasses from './Messages.module.css';
import dialogsClasses from "../../Dialogs.module.css";
import MessagesForm from "../../../Forms/MessagesForm";



const Messages = ( props ) => {
	
	let messages = props.messagesData.map( m => <div key={ m.id }>{ m.message } </div> );
	
	return (
		<div className={ messagesClasses.message }>
			<div>{ props.message }</div>
			<div className={ dialogsClasses.messages }>
				{ messages }
				<MessagesForm
					dispatchFunc={ props.sendMessage }
					placeHolder={ "Enter your message" }
					fieldName={ "message" }
					requiredText={ "Message is empty" }
					buttonText={ "sendMessage" }
				/>
			</div>
		</div>
	);
};

export default Messages;