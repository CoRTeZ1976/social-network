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
		return instance.post( `follow/${userId}` )
		               .then( response => response.data );
	},
	unfollowUser( userId ) {
		return instance.delete( `follow/${userId}` )
		               .then( response => response.data );
	},
	getProfile( userId ) {
		return instance.get( `profile/${userId}` )
		               .then( response => response.data );
	},
	get() {
		return instance.get( `auth/me` )
		               .then( response => response.data );
	},
};