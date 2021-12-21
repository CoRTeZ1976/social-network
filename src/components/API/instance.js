import * as axios from "axios";



export const instance = axios.create( {
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	"API-KEY": "5074bba2-e078-4f81-852a-2732149bddec",
} );