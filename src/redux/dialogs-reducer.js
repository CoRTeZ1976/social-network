const SEND_MESSAGE = 'SEND-MESSAGE';
const ADD_NEW_DIALOG = 'ADD-NEW-DIALOG';

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
};

const dialogsReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				messagesData: [...state.messagesData, {
					id: state.messagesData.length + 1,
					message: action.message,
					likes: 0,
				}],
			};
		case ADD_NEW_DIALOG:
			return {
				...state,
				dialogsData: [...state.dialogsData, {id: 7, name: 'Dialog 7'}],
			};
		default:
			return state;
	}
};

export const sendMessageActionCreator = message => ( {type: SEND_MESSAGE, message} );
export const addNewDialogActionCreator = () => ( {type: ADD_NEW_DIALOG} );

export default dialogsReducer;