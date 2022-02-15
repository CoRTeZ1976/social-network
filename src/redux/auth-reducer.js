import { usersAPI } from "../components/API/usersAPI";



let SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isFetching: false,
	isAuth: false,
};

const authReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

const setAuthUserData = ( userId, email, login, isAuth ) => ( {
	type: SET_USER_DATA,
	payload: {userId, email, login, isAuth},
} );

export const getAuthUserData = () => ( dispatch ) => {
		usersAPI.getAuthData()
		        .then( response => {
			        if (response.resultCode === 0) {
				        let {email, id, login} = response.data;
				        dispatch( setAuthUserData( email, id, login, true ) );
			        }
		        } );
	}
;

export const login = ( email, password, rememberMe ) => ( dispatch ) => {
		usersAPI.login( email, password, rememberMe )
		        .then( response => {
			        if (response.resultCode === 0) {
				        dispatch( getAuthUserData() );
			        }
		        } );
	}
;

export const logout = () => ( dispatch ) => {
		usersAPI.logout()
		        .then( response => {
			        if (response.resultCode === 0) {
				        dispatch( setAuthUserData( null, null, null, false ) );
			        }
		        } );
	}
;

export default authReducer;