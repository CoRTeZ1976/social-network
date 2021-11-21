import React from "react";
import Post from "./Posts/Post";

let postsData = [
	{id: 1, message: 'Hi', likes: 3},
	{id: 2, message: 'How are you?', likes: 5},
	{id: 3, message: 'I am fine', likes: 7},
];

let posts = postsData.map( p => <Post message={p.message} likes={p.likes}/> );

const MyPosts = (props) => {
	return (
		<div>
			<div>
				<textarea defaultValue="some text"></textarea>
			</div>
			<div>
				<button>Add post</button>
			</div>
			{ posts }
		</div>
	);
}

export default MyPosts;