import React from "react";
import usersStyle from './Users.module.css';


let Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers([
				{
					id: 1,
					photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU',
					followed: true,
					fullName: 'Jhon',
					status: 'Hey-hey',
					location: {city: 'New York', country: 'USA'}
				},
				{
					id: 2,
					photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU',
					followed: false,
					fullName: 'Alex',
					status: 'Newer give up!',
					location: {city: 'Washington', country: 'USA'}
				},
				{
					id: 3,
					photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU',
					followed: true,
					fullName: 'Anna',
					status: 'Yo',
					location: {city: 'Moscow', country: 'Russia'}
				},
				{
					id: 4,
					photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU',
					followed: false,
					fullName: 'Nikolai',
					status: 'Привет',
					location: {city: 'Kiev', country: 'Ukraine'}
				},
			],
		)
	}

	return (
		<div>{
			props.users.map(u => <div key={u.id}>
				<div className={usersStyle.usersPage}>
					<div className={usersStyle.photoContainer}>
						<div>
							<img alt={'avatar'} src={u.photoUrl} className={usersStyle.usersPhoto}/>
						</div>
						<div className={usersStyle.toggleFollowBtn}>
							{u.followed
								? <button onClick={() => {
									props.unfollow(u.id)
								}}>unfollow</button>
								: <button onClick={() => {
									props.follow(u.id)
								}}>Follow</button>}
						</div>
					</div>
					<div>
						<div className={usersStyle.userName}>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</div>
						<div className={usersStyle.locationInfo}>
							<span>{u.location.city}, {u.location.country}</span>
						</div>
					</div>
				</div>
			</div>)
		}</div>
	)
}

export default Users;