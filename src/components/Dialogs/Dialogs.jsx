import React from "react";
import dialogsClasses from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Messages from "./Dialog/Messages/Messages";


let dialogsData = [
	{id: 1, name: '1'},
	{id: 2, name: '2'},
	{id: 3, name: '3'},
	{id: 4, name: '4'},
	{id: 5, name: '5'},
	{id: 6, name: '6'},
];

let messagesData = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'How are you?'},
	{id: 3, message: 'I am fine'},
];

let dialogs = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/> );
let messages = messagesData.map( m => <Messages message={m.message}/> )

const Dialogs = (props) => {
	return (
		<div className={dialogsClasses.dialogs}>
			<div className={dialogsClasses.dialogItems}>
				{ dialogs }
			</div>
			<div className={dialogsClasses.messages}>
				{ messages }
			</div>
		</div>
	);
}

export default Dialogs;