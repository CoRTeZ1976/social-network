import React from "react";
import PostsClasses from './Post.module.css'


const Post = () => {
	return (
		<div className={PostsClasses.item}>
			<img className={PostsClasses.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6V64Z1EWKa294yxs28L23CxqA8G-2NEEgA&usqp=CAU"/>
			post 1
		</div>
	);
}

export default Post;