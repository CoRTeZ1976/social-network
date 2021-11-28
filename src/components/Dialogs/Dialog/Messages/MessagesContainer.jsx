import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";



const mapStateToProps = state => {
	return {
		messagesData: state.dialogsPage.messagesData,
		newMessageText: state.dialogsPage.newMessageText,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateNewMessageText: text => dispatch(updateNewMessageTextActionCreator(text)),
		sendMessage: () => dispatch(sendMessageActionCreator()),
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;