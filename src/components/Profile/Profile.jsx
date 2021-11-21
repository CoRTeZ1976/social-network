import React from "react";
import MyPosts from "./My posts/MyPosts";

const Profile = (props) => {

	let postsData = [
		{id: 1, message: 'Hi', likes: 3},
		{id: 2, message: 'How are you?', likes: 5},
		{id: 3, message: 'I am fine', likes: 7},
	];

	return (
		<div>
			My posts
			<MyPosts data={postsData}/>
		</div>
	);
}

export default Profile;