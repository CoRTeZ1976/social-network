import React from "react";
import Post from "./Posts/Post";



const MyPosts = (props) => {

	let posts = props.posts.map( p => <Post message={p.message} likes={p.likes}/> );

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