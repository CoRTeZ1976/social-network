import React from "react";
import messagesClasses from './Messages.module.css'
import dialogsClasses from "../../Dialogs.module.css";


const Messages = (props) => {

	let messages = props.messageData.map(m => <div>{m.message}</div>)

	let message = React.createRef();

	let sendMessage = () => {
		let textMessage = message.current.value;
	};

	return (
		<div className={messagesClasses.message}>
			<div>{props.message}</div>
			<div className={dialogsClasses.messages}>
				{messages}
				<div>
					<textarea defaultValue="" ref={message}></textarea>
				</div>
				<div>
					<button onClick={sendMessage}>Send</button>
				</div>
			</div>
		</div>
	);
}

export default Messages;