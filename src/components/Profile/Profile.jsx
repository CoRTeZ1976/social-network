import React from "react";
import MyPosts from "./My posts/MyPosts";
import {updateNewPostText} from "../../redux/state";


const Profile = (props) => {

	return (
		<div>
			My posts
			<MyPosts
				posts={props.posts.postsData}
				addPost={props.addPost}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	);
}

export default Profile;