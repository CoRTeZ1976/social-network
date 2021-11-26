import React from "react";

import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogs-reducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {

	let state = props.store.getState()

	let sendMessage = () => {
		props.store.dispatch(sendMessageActionCreator());
	};

	let onMessageTextChange = (text) => {
		let action = updateNewMessageTextActionCreator(text);
		props.store.dispatch(action);
	}

	return <Messages
		updateNewMessageText={onMessageTextChange}
		sendMessage={sendMessage}
		messagesData={state.dialogsPage.messagesData}
		newMessageText={state.dialogsPage.newMessageText}
	/>;
}

export default MessagesContainer;