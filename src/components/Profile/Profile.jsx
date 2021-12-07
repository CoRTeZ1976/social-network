import React from "react";
import MyPostsContainer from "./My posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo"


let Profile = (props) => {
	return (
		<div>
			<ProfileInfo {...props}/>
			<MyPostsContainer {...props}/>
		</div>
	);
}

export default Profile;