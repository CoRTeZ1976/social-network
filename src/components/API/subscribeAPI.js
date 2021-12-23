import { instance } from "./instance";



export const subscribeAPI = {
	followUser( userId ) {
		return instance.post( `follow/${userId}` )
		               .then( response => response.data );
	},
	
	unfollowUser( userId ) {
		return instance.delete( `follow/${userId}` )
		               .then( response => response.data );
	},
};