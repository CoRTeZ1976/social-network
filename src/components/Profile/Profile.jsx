import React from "react";
import MyPosts from "./My posts/MyPosts";


const Profile = (props) => {

	return (
		<div>
			My posts
			<MyPosts
				posts={props.posts.postsData}
				addPost={props.addPost}/>
		</div>
	);
}

export default Profile;