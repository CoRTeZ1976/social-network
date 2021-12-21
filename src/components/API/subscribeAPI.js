import { instance } from "./instance";



export const subscribeAPI = {
	followUser( userId ) {
		return instance.post( userId )
		               .then( response => response.data );
	},
	
	unfollowUser( userId ) {
		return instance.delete( userId )
		               .then( response => response.data );
	},
};