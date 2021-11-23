import {rerenderEntireTree} from "../render";

let state = {

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
	},

	sidebar: {},

}

export let addPost = () => {
	let newPost = {
		id: 4,
		message: state.profilePage.newPostText,
		likes: 0
	}
	state.profilePage.postsData.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export default state;