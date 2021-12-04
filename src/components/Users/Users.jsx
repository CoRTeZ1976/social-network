import React from "react";
import usersStyle from './Users.module.css';
import *as axios from "axios";
import userPhoto from "../../asserts/images/images.png"


class Users extends React.Component {
	constructor(props) {
		super(props);
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			this.props.setUsers(response.data.items)
		});
	}



	render() {
		return (
			<div>{
				this.props.users.map(u => <div key={u.id}>
					<div className={usersStyle.usersPage}>
						<div className={usersStyle.photoContainer}>
							<div>
								<img alt={'avatar'} src={u.photos.small != null ? u.photos.small : userPhoto}
								     className={usersStyle.usersPhoto}/>
							</div>
							<div className={usersStyle.toggleFollowBtn}>
								{
									u.followed
										? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
										: <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
								}
							</div>
						</div>
						<div>
							<div className={usersStyle.userName}>
								<div>{u.name}</div>
								<div>{u.status}</div>
							</div>
							<div className={usersStyle.locationInfo}>
								<span>{"u.location.city u.location.country"}</span>
							</div>
						</div>
					</div>
				</div>)
			}</div>
		)
	}


}

export default Users;