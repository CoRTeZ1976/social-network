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

	addPost() {
		let newPost = {
			id: 4,
			message: this._state.profilePage.newPostText,
			likes: 0
		}
		this._state.profilePage.postsData.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},

	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},

	sendMessage() {
		let newMessage = {
			id: 4,
			message: this._state.dialogsPage.newMessageText,
			likes: 0
		}
		this._state.dialogsPage.messagesData.push(newMessage);
		this._state.dialogsPage.newMessageText = '';
		this._callSubscriber(this._state);
	},

	updateNewMessageText(newText) {
		this._state.dialogsPage.newMessageText = newText;
		this._callSubscriber(this._state);
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},
}


export default store;