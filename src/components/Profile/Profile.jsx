import React from "react";
import profileClasses from './Profile.module.css'
import Post from "./My posts/Posts/Post";

const Profile = () => {
	return (
		<div className={profileClasses.content}>
			<div>ava + description</div>
			<Post />
		</div>
	);
}

export default Profile;