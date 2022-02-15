import * as axios from "axios";



const instance = axios.create( {
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		"API-KEY": "5074bba2-e078-4f81-852a-2732149bddec",
	},
} );

export const usersAPI = {
	getUsers( currentPage = 1, pageSize = 10 ) {
		return instance.get( `users?page=${ currentPage }&count=${ pageSize }` )
		               .then( response => response.data );
	},
	followUser( userId ) {
		return instance.post( `follow/${ userId }` )
		               .then( response => response );
	},
	unfollowUser( userId ) {
		return instance.delete( `follow/${ userId }` )
		               .then( response => response );
	},
	getProfile( userId ) {
		return instance.get( `profile/${ userId }` )
		               .then( response => response.data );
		
	},
	getUserStatus( userId ) {
		return instance.get( `profile/status/${ userId }` )
		               .then( response => response.data );
	},
	updateUserStatus( status ) {
		return instance.put( `profile/status`, {status} )
		               .then( response => response.data );
	},
	getAuthData() {
		return instance.get( `auth/me` )
		               .then( response => response.data );
		
	},
	login( email, password, rememberMe = false ) {
		return instance.post( `auth/login`, {email, password, rememberMe} )
		               .then( response => {
			               console.log( response );
			               return response;
		               } );
	},
	logout() {
		return instance.delete( `auth/login` );
	},
};