import React from "react";
import PostsClasses from './Post.module.css'

const Post = (props) => {
	return (
		<div className={PostsClasses.item}>
			<img className={PostsClasses.avatar} alt={'avatar'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU"/>
			<div className={PostsClasses.message}>{ props.message }</div>
			<div className={PostsClasses.like}>{ props.likes } likes</div>
		</div>

	);
}

export default Post;