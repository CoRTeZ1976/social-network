import React from "react";
import MyPosts from "./My posts/MyPosts";



const Profile = (props) => {

	return (
		<div>
			My posts
			<MyPosts
				posts={props.profilePage}
				dispatch={props.dispatch}
			/>
		</div>
	);
}

export default Profile;