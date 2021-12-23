import React from "react";
import usersStyle from './Users.module.css';
import userPhoto from "../../asserts/images/images.png";
import { NavLink } from "react-router-dom";




let Users = ( props ) => {
	debugger
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
						<span className={ props.currentPage === p ? usersStyle.selectedPage	: undefined }
						      key={ p.id }
						      onClick={ ( e ) => props.onPageChanged( p ) }>{ p }</span> );
					})}
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
										? <button disabled={ props.followingInProgress.some( id => id === u.id ) }
										          onClick={ () => {
											          props.unfollow( true, u.id );
										          } }>Unfollow</button>
										: <button disabled={ props.followingInProgress.some( id => id === u.id ) }
										          onClick={ () => {
											          props.follow( true, u.id );
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