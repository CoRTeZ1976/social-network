import React from "react";
import messagesClasses from './Messages.module.css'



const Messages = (props) => {
	return (
		<div className={messagesClasses.message}>
			<div>{props.message}</div>
		</div>
	);
}

export default Messages;