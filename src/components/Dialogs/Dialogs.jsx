import React from "react";
import dialogsClasses from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Messages from "./Dialog/Messages/Messages";
import {Route, Routes} from "react-router-dom";


const Dialogs = (props) => {

	let dialogs = props.dialogs.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

	let path = 'Dialogs' + dialogs.id;

	return (
		<div className={dialogsClasses.dialogs}>
			<div className={dialogsClasses.dialogItems}>
				{dialogs}
			</div>
			<div>
				<Messages messageData={props.dialogs.messagesData}/>
			</div>
		</div>
	);
}

export default Dialogs;