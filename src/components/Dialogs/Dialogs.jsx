import React from "react";
import dialogsClasses from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Messages from "./Dialog/Messages/Messages";
import Post from "../Profile/My posts/Posts/Post";

const Dialogs = (props) => {

	let dialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
	let messages = props.messages.map(m => <Messages message={m.message}/>)

	return (
		<div className={dialogsClasses.dialogs}>
			<div className={dialogsClasses.dialogItems}>
				{dialogs}
			</div>
			<div className={dialogsClasses.messages}>
				{messages}
			</div>
		</div>
	);
}

export default Dialogs;