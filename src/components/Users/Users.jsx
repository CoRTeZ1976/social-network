import React from "react";
import usersStyle from './Users.module.css';
import userPhoto from "../../asserts/images/images.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";



let Users = ( props ) => {
	
	let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );
	
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push( i );
	}
	
	return (
		<div>
			<div>
				{ pages.map( p => {
					return (
						<span className={ props.currentPage === p && usersStyle.selectedPage }
						      onClick={ ( e ) => props.onPageChanged( p ) }>{ p }</span> );
				} ) }
			</div>
			{
				props.users.map( u => <div key={ u.id }>
					<div className={ usersStyle.usersPage }>
						<div className={ usersStyle.photoContainer }>
							<div>
								<NavLink to={ '/profile/' + u.id }>
									<img alt={ 'avatar' } src={ u.photos.small != null ? u.photos.small : userPhoto }
									     className={ usersStyle.usersPhoto }/>
								</NavLink>
							</div>
							<div className={ usersStyle.toggleFollowBtn }>
								{
									u.followed
										? <button onClick={ () => {
											axios.delete( `https://social-network.samuraijs.com/api/1.0/follow/${ u.id }`, {
												withCredentials: true,
												headers: {
													"API-KEY": "5074bba2-e078-4f81-852a-2732149bddec",
												}
											} )
											     .then( response => {
												     if (response.data.resultCode === 0) {
													     props.unfollow( u.id );
												     };
											     } );
										} }>Unfollow</button>
										: <button onClick={ () => {
											axios.post( `https://social-network.samuraijs.com/api/1.0/follow/${ u.id }`, null, {
												withCredentials: true,
												headers: {
													"API-KEY": "5074bba2-e078-4f81-852a-2732149bddec",
												}
											} )
											     .then( response => {
												     if (response.data.resultCode === 0) {
													     props.follow( u.id );
												     };
											     } );
										} }>Follow</button>
								}
							</div>
						</div>
						<div>
							<div className={ usersStyle.userName }>
								<div>{ u.name }</div>
								<div>{ u.status }</div>
							</div>
							<div className={ usersStyle.locationInfo }>
								<span>{ "u.location.city u.location.country" }</span>
							</div>
						</div>
					</div>
				</div> )
			}</div>
	);
};

export default Users;