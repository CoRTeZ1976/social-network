import React from "react";
import dialogsClasses from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Messages from "./Dialog/Messages/Messages";


const Dialogs = (props) => {
	return (
		<div className={dialogsClasses.dialogs}>
			<div className={dialogsClasses.dialogItems}>
				<DialogItem name='Dialog 1' id='1'/>
				<DialogItem name='Dialog 2' id='2'/>
				<DialogItem name='Dialog 3' id='3'/>
				<DialogItem name='Dialog 4' id='4'/>
				<DialogItem name='Dialog 5' id='5'/>
				<DialogItem name='Dialog 6' id='6'/>
			</div>
			<div className={dialogsClasses.messages}>
				<Messages message={"Hi"}/>
				<Messages message={"How are you?"}/>
				<Messages message={"I am fine"}/>
			</div>
		</div>
	);
}

export default Dialogs;