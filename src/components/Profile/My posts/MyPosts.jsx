import React from "react";
import Post from "./Posts/Post";

const MyPosts = (props) => {
	return (
		<div>
			<div>
				<textarea defaultValue="some text"></textarea>
			</div>
			<div>
				<button>Add post</button>
			</div>
			<Post message='Hey! How are you?' like='3'/>
			<Post message='Hey! I am fine. And you?' like='5'/>
			<Post message='I am fine' like='1'/>
		</div>
	);
}

export default MyPosts;