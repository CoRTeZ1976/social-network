import React from "react";
import dialogsClasses from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import MessagesContainer from "./Dialog/Messages/MessagesContainer";
import { Navigate } from "react-router-dom";


const Dialogs = (props) => {

	let dialogs = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);

	let addNewDialog = () => {
		props.addNewDialog();
	}

	if (!props.isAuth) return (<Navigate to={"/login"}/>);
	
	return (
		<div className={dialogsClasses.container}>
			<button onClick={addNewDialog}>Add new dialog</button>
			<div className={dialogsClasses.dialogs}>
				<div className={dialogsClasses.dialogItems}>
					{dialogs}
				</div>
				<div>
					<MessagesContainer/>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;