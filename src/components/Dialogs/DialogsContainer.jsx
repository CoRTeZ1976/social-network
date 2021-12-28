import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { addNewDialogActionCreator } from "../../redux/dialogs-reducer";
import { WithAuthRedirectWrapper } from "../HOC/WithAuthRedirectWrapper";



const mapStateToProps = state => {
	
	return {
		dialogsData: state.dialogsPage.dialogsData,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addNewDialog: () => dispatch( addNewDialogActionCreator() ),
	};
};

let AuthRedirectWrapper = WithAuthRedirectWrapper( Dialogs );

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( AuthRedirectWrapper );

export default DialogsContainer;