import { usersAPI } from "../components/API/usersAPI";



const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
	postsData: [
		{id: 1, message: 'Hi', likes: 3},
		{id: 2, message: 'How are you?', likes: 5},
		{id: 3, message: 'I am fine', likes: 7},
	],
	newPostText: '',
	profile: null,
	status: '',
};

const profileReducer = ( state = initialState, action ) => {
	
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				newPostText: '',
				postsData: [...state.postsData, {id: 4, message: state.newPostText, likes: 0}],
			};
		case UPDATE_NEW_POST_TEXT:
			return {...state, newPostText: action.newText};
		case SET_USER_PROFILE:
			return {...state, profile: action.profile};
		case SET_USER_STATUS:
			return {...state, status: action.status};
		default:
			return state;
	}
};

export const addPostActionCreator = () => ( {type: ADD_POST} );
const setUsersProfile = profile => ( {type: SET_USER_PROFILE, profile} );
const setUserStatus = status => ( {type: SET_USER_STATUS, status} );
export const updateNewPostTextActionCreator = ( text ) => ( {
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
} );

export const getUsersProfile = ( userId ) => {
	return ( dispatch ) => {
		usersAPI.getProfile( userId )
		        .then( data => {
			        dispatch( setUsersProfile( data ) );
		        } );
	};
};
export const getUserStatus = ( userId ) => ( dispatch ) => {
	usersAPI.getUserStatus( userId )
	        .then( data => {
		        dispatch( setUserStatus( data ) );
	        } );
};
export const updateUserStatus = ( status ) => ( dispatch ) => {
	usersAPI.updateUserStatus( status )
	        .then( data => {
		        if (data.resultCode === 0) {
			        dispatch( setUserStatus( status ) );
		        }
	        } );
};

export default profileReducer;