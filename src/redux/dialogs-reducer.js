const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
	dialogsData: [
		{id: 1, name: 'Dialog 1'},
		{id: 2, name: 'Dialog 2'},
		{id: 3, name: 'Dialog 3'},
		{id: 4, name: 'Dialog 4'},
		{id: 5, name: 'Dialog 5'},
		{id: 6, name: 'Dialog 6'},
	],
	messagesData: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How are you?'},
		{id: 3, message: 'I am fine'},
	],
	newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: 4,
				message: state.newMessageText,
				likes: 0
			};
			state.messagesData.push(newMessage);
			state.newMessageText = '';
			return state;
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newText;
			return state;
		default:
			return state;
	}
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newText: text,
});

export default dialogsReducer;