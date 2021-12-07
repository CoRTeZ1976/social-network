import React from "react";
import usersStyle from "./Users.module.css";
import userPhoto from "../../asserts/images/images.png";


let Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<div>
			<div>
				{pages.map(p => {
					return (
						<span className={props.currentPage === p && usersStyle.selectedPage}
						      onClick={(e) => props.onPageChanged(p)}>{p}</span>);
				})}
			</div>
			{
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
										? <button onClick={() => {
											this.props.unfollow(u.id)
										}}>Unfollow</button>
										: <button onClick={() => {
											this.props.follow(u.id)
										}}>Follow</button>
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
	);
};

export default Users;