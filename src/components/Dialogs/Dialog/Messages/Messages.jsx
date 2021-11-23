import React from "react";
import messagesClasses from './Messages.module.css'
import dialogsClasses from "../../Dialogs.module.css";


const Messages = (props) => {

	let messages = props.messageData.map(m => <div>{m.message}</div>)

	let newMessage = React.createRef();

	let sendMessage = () => {
		debugger;
		props.sendMessage();

	};

	let onMessageTextChange = () => {
		debugger;
		let text = newMessage.current.value;
		props.updateNewMessageText(text);
	}

	return (
		<div className={messagesClasses.message}>
			<div>{props.message}</div>
			<div className={dialogsClasses.messages}>
				{messages}
				<div>
					<textarea onChange={onMessageTextChange}
					          ref={newMessage}/>
				</div>
				<div>
					<button onClick={sendMessage}>Send</button>
				</div>
			</div>
		</div>
	);
}

export default Messages;