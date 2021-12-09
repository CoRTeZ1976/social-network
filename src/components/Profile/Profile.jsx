import React from "react";
import MyPostsContainer from "./My posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


let Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile}/>
			<MyPostsContainer />
		</div>
	);
}

export default Profile;