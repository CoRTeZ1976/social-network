import React from "react";
import profileClasses from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";

const Profile = (props) => {
	return (
		<div className={profileClasses.content}>
			<MyPosts />
		</div>
	);
}

export default Profile;