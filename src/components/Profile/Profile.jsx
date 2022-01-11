import React from "react";
import MyPostsContainer from "./My posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Navigate } from "react-router-dom";



let Profile = ( props ) => {
	
	if (!props.isAuth) return ( <Navigate to={ "/login" }/> );
	
	return (
		<div>
			<ProfileInfo profile={ props.profile } status={ props.status } updateUserStatus={ props.updateUserStatus }/>
			<MyPostsContainer/>
		</div>
	);
};

export default Profile;