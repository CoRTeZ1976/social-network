import React from "react";
import messagesClasses from './Messages.module.css'





const Messages = (props) => {
	return (
		<div className={messagesClasses.messages}>
			<div className={messagesClasses.message}>Hi</div>
			<div className={messagesClasses.message}>how are you?</div>
			<div className={messagesClasses.message}>I am fine</div>
		</div>
	);
}

export default Messages;