import React from "react";
import MyPostsContainer from "./My posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



let Profile = ( props ) => {
	
	return (
		<div>
			<ProfileInfo profile={ props.profile } status={ props.status } updateUserStatus={ props.updateUserStatus }/>
			<MyPostsContainer/>
		</div>
	);
};

export default Profile;