import React from "react";
import Post from "./Posts/Post";
import {updateNewPostText} from "../../../redux/state";


const MyPosts = (props) => {

	let posts = props.posts.map(p => <Post message={p.message} likes={p.likes}/>);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
		props.updateNewPostText('');
	};

	let nonPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div>
			<div>
				<textarea
					onChange={nonPostChange}
					ref={newPostElement}
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