import React from "react";
import dialogsClasses from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import MessagesContainer from "./Dialog/Messages/MessagesContainer";



const Dialogs = (props) => {
debugger
	let dialogs = props.dialogs.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

	return (
		<div className={dialogsClasses.dialogs}>
			<div className={dialogsClasses.dialogItems}>
				{dialogs}
			</div>
			<div>
				<MessagesContainer
					store={props.store}
				/>
			</div>
		</div>
	);
}

export default Dialogs;