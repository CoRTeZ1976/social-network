import React from "react";
import dialogsClasses from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Messages from "./Dialog/Messages/Messages";


const Dialogs = (props) => {

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

	return (
		<div className={dialogsClasses.dialogs}>
			<div className={dialogsClasses.dialogItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

			</div>
			<div className={dialogsClasses.messages}>
				<Messages message={messagesData[0].message}/>
				<Messages message={messagesData[1].message}/>
				<Messages message={messagesData[2].message}/>
			</div>
		</div>
	);
}

export default Dialogs;