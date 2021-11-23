import React from "react";
import messagesClasses from './Messages.module.css'
import dialogsClasses from "../../Dialogs.module.css";


const Messages = (props) => {

	let messages = props.messageData.map(m => <div>{m.message}</div>)

	let newMessage = React.createRef();

	let sendMessage = () => {
		props.dispatch({type: 'SEND-MESSAGE'});
	};

	let onMessageTextChange = () => {
		let text = newMessage.current.value;
		props.dispatch({
			type: 'UPDATE-NEW-MESSAGE-TEXT',
			newText: text,
		});
	}

	return (
		<div className={messagesClasses.message}>
			<div>{props.message}</div>
			<div className={dialogsClasses.messages}>
				{messages}
				<div>
					<textarea onChange={onMessageTextChange}
					          ref={newMessage}
					          value={props.newMessageText}
					/>
				</div>
				<div>
					<button onClick={sendMessage}>Send</button>
				</div>
			</div>
		</div>
	);
}

export default Messages;