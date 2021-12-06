import React from "react";
import usersStyle from './Users.module.css';
import *as axios from "axios";
import userPhoto from "../../asserts/images/images.png"


class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	};

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return (
			<div>
				<div>
					{pages.map(p => {
						return (
							<span className={this.props.currentPage === p && usersStyle.selectedPage}
							      onClick={(e) => this.onPageChanged(p)}>{p}</span>);
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
		)
	}


}

export default Users;