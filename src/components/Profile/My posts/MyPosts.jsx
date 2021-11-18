import React from "react";
import MyPostsClasses from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {
	return (
		<div>
			<Post />
			My post
			<textarea></textarea>
			<button>Add post</button>
		</div>
	);
}

export default MyPosts;