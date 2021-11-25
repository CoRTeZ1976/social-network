import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {

	_state: {

		profilePage: {
			postsData: [
				{id: 1, message: 'Hi', likes: 3},
				{id: 2, message: 'How are you?', likes: 5},
				{id: 3, message: 'I am fine', likes: 7},
			],
			newPostText: '',
		},

		dialogsPage: {
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
		},

		sidebar: {},

	},

	getState() {
		return this._state;
	},

	_callSubscriber() {

	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);
	}
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newText: text,
});

export default store;