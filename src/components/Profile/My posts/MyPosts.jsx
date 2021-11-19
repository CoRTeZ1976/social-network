import React from "react";
import Post from "./Posts/Post";

const MyPosts = (props) => {
	return (
		<div>
			<Post message='Hey! How are you?' like='3'/>
			<Post message='Hey! I am fine. And you?' like='5'/>
			<Post message='I am fine' like='1'/>
			<textarea defaultValue="some text"></textarea>
			<button>Add post</button>
		</div>
	);
}

export default MyPosts;