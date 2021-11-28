import React from "react";
import usersStyle from './Users.module.css';


let Users = (props) => {
	return (
		<div>{
			props.users.map(u => <div key={u.id}>
				<div><img alt={'avatar'} src={u.photoUrl} className={usersStyle.usersPhoto}/></div>
				<div>
					<button>Follow</button>
				</div>
				<div>
					<div>{u.fullName}</div>
					<div>{u.status}</div>
				</div>
				<div>
					<div>{u.location.country}</div>
					<div>{u.location.city}</div>
				</div>
			</div>)};
			}</div>
	)
}

export default Users;