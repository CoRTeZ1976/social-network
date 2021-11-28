let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';

let initialState = {
	users: [
		{id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU',
			followed: true, fullName: 'Jhon', status: 'Hey-hey', location: {city: 'New York', country: 'USA'}},
		{id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU',
			followed: false, fullName: 'Alex', status: 'Newer give up!', location: {city: 'Washington', country: 'USA'}},
		{id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU',
			followed: true, fullName: 'Anna', status: 'Yo', location: {city: 'Moscow', country: 'Russia'}},
		{id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU',
			followed: false, fullName: 'Nikolai', status: 'Привет', location: {city: 'Kiev', country: 'Ukraine'}},
	],
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.usersId) {
						return {...u, followed: true}
					}
					return u;
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.usersId) {
						return {...u, followed: false}
					}
					return u;
				}),
			}
		case SET_USERS:
			return {...state, users: [...state.users, ...action.users]};

		default:
			return state;
	}
}

export const followAC = userId => ({type: FOLLOW, userId});
export const unfollowAC = userId => ({type: UNFOLLOW, userId});
export const setUsersAC = users => ({type: SET_USERS, users});


export default usersReducer;