import React from "react";
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";



const MyPosts = (props) => {

	let posts = props.posts.postsData.map(p => <Post message={p.message} likes={p.likes}/>);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostTextActionCreator(text));
	}

	return (
		<div>
			<div>
				<textarea
					onChange={onPostChange}
					ref={newPostElement}
					value={props.posts.newPostText}
				/>
			</div>
			<div>
				<button onClick={addPost}>Add post</button>
			</div>
			{posts}
		</div>
	);
}

export default MyPosts;