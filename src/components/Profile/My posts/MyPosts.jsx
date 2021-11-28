import React from "react";
import Post from "./Posts/Post";


const MyPosts = (props) => {

	let posts = props.posts.map(p => <Post message={p.message} likes={p.likes} key={p.id}/>);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div>
			<div>
				<textarea
					placeholder={'Enter your text'}
					onChange={onPostChange}
					ref={newPostElement}
					value={props.newPostText}
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