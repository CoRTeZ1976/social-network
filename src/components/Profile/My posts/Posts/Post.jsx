import React from "react";
import PostsClasses from './Post.module.css'


const Post = (props) => {
	return (
		<div className={PostsClasses.item}>
			<img className={PostsClasses.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6V64Z1EWKa294yxs28L23CxqA8G-2NEEgA&usqp=CAU"/>
			<div>{ props.message }</div>
			<div>{ props.like } like</div>
		</div>

	);
}

export default Post;