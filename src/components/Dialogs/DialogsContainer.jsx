import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { addNewDialogActionCreator } from "../../redux/dialogs-reducer";
import { compose } from "redux";
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

export default compose(
	connect( mapStateToProps, mapDispatchToProps ),
	WithAuthRedirectWrapper,
)(Dialogs);