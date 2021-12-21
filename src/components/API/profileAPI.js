import { instance } from "./instance";



export const profileAPI = {
	getProfile( userId ) {
		return instance.get( userId )
		               .then( response => response.data );
	},
	
};