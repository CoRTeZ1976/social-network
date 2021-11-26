import React from "react";

import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogs-reducer";
import Messages from "./Messages";
import StoreContext from "../../../../StoreContext";


const MessagesContainer = () => {
	return <StoreContext.Consumer>
		{
			(store) => {
				let state = store.getState().dialogsPage;

				let sendMessage = () => {
					store.dispatch(sendMessageActionCreator());
				};
				let onMessageTextChange = (text) => {
					store.dispatch(updateNewMessageTextActionCreator(text));
				};
				return (
					<Messages
						updateNewMessageText={onMessageTextChange}
						sendMessage={sendMessage}
						messagesData={state.messagesData}
						newMessageText={state.newMessageText}
					/>);
			}
		}
	</StoreContext.Consumer>
}

export default MessagesContainer;