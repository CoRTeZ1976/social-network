import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addNewDialogActionCreator} from "../../redux/dialogs-reducer";



const mapStateToProps = state => {

	return {
		dialogsData: state.dialogsPage.dialogsData,

	}
}

const mapDispatchToProps = dispatch => {
	return {
		addNewDialog: () => dispatch(addNewDialogActionCreator()),
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;