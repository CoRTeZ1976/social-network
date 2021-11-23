import React from "react";
import Post from "./Posts/Post";



const MyPosts = (props) => {

	let posts = props.posts.map( p => <Post message={p.message} likes={p.likes}/> );

	let newPostElement = React.createRef();

	let addPost = () => {
		let postText = newPostElement.current.value;
		props.addPost(postText);
		newPostElement.current.value = '';
	};

	return (
		<div>
			<div>
				<textarea defaultValue="" ref={newPostElement}></textarea>
			</div>
			<div>
				<button onClick={addPost}>Add post</button>
			</div>
			{posts}
		</div>
	);
}

export default MyPosts;