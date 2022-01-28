import React from "react";
import Post from "./Posts/Post";
import MessagesForm from "../../Forms/MessagesForm";



const MyPosts = ( props ) => {
	
	let posts = props.posts.map( p => <Post message={ p.message } likes={ p.likes } key={ p.id }/> );
	
	return (
		<div>
			<MessagesForm
				dispatchFunc={ props.addPost }
				placeHolder={ "Enter your text" }
				fieldName={ "post" }
				requiredText={ "Message is empty" }
				buttonText={ "Add post" }
			/>
			{ posts }
		</div>
	);
};

export default MyPosts;

