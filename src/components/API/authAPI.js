import { instance } from "./instance";



export const authAPI = {
	get() {
		return instance.get( `auth/me` )
		               .then( response => response.data );
	},
};