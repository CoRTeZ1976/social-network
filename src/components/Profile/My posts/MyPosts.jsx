import React from "react";
import Post from "./Posts/Post";


const MyPosts = (props) => {

	let posts = props.posts.postsData.map(p => <Post message={p.message} likes={p.likes}/>);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch({type: 'ADD-POST'});
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch({
			type: 'UPDATE-NEW-POST-TEXT',
			newText: text,
		});
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