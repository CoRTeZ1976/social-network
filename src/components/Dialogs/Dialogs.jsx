import React from "react";
import dialogsClasses from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Messages from "./Dialog/Messages/Messages";



const Dialogs = (props) => {

	let dialogs = props.dialogs.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);


	return (
		<div className={dialogsClasses.dialogs}>
			<div className={dialogsClasses.dialogItems}>
				{dialogs}
			</div>
			<div>
				<Messages
					messageData={props.dialogs.messagesData}
					newMessageText={props.dialogs.newMessageText}
					sendMessage={props.sendMessage}
					updateNewMessageText={props.updateNewMessageText}
				/>
			</div>
		</div>
	);
}

export default Dialogs;