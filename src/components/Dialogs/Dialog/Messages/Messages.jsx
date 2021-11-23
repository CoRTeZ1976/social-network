import React from "react";
import messagesClasses from './Messages.module.css'
import dialogsClasses from "../../Dialogs.module.css";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/store";


const Messages = (props) => {

	let messages = props.messageData.map(m => <div>{m.message}</div>)

	let newMessage = React.createRef();

	let sendMessage = () => {
		props.dispatch(sendMessageActionCreator());
	};

	let onMessageTextChange = () => {
		let text = newMessage.current.value;
		props.dispatch(updateNewMessageTextActionCreator(text));
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