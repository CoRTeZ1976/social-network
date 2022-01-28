import { sendMessageActionCreator } from "../../../../redux/dialogs-reducer";
import Messages from "./Messages";
import { connect } from "react-redux";



const mapStateToProps = state => {
	return {
		messagesData: state.dialogsPage.messagesData,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		sendMessage: message => dispatch( sendMessageActionCreator( message ) ),
	};
};

const MessagesContainer = connect( mapStateToProps, mapDispatchToProps )( Messages );

export default MessagesContainer;