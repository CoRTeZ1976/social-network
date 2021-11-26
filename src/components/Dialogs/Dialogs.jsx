import React from "react";
import dialogsClasses from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import MessagesContainer from "./Dialog/Messages/MessagesContainer";
import StoreContext from "../../StoreContext";



const Dialogs = (props) => {

	return <StoreContext.Consumer>
		{
			(store) => {
				let state = store.getState();
				let dialogs = state.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
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
		}
	</StoreContext.Consumer>


}

export default Dialogs;