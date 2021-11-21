import React from "react";
import Post from "./Posts/Post";

const MyPosts = (props) => {

	let postsData = [
		{id: 1, message: 'Hi', likes: 3},
		{id: 2, message: 'How are you?', likes: 5},
		{id: 3, message: 'I am fine', likes: 7},
	];

	return (
		<div>
			<div>
				<textarea defaultValue="some text"></textarea>
			</div>
			<div>
				<button>Add post</button>
			</div>
			<Post message={postsData[0].message} likes={postsData[0].likes}/>
			<Post message={postsData[1].message} likes={postsData[1].likes}/>
			<Post message={postsData[2].message} likes={postsData[2].likes}/>
		</div>
	);
}

export default MyPosts;