import React from "react";
import Post from "./Posts/Post";
import { useForm } from "react-hook-form";



const MyPosts = ( props ) => {
	
	let posts = props.posts.map( p => <Post message={ p.message } likes={ p.likes } key={ p.id }/> );
	
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors, isValid},
	} = useForm( {
		mode: "onBlur",
	} );
	
	const onSubmit = data => {
		
		console.log( JSON.stringify( data ) );
		props.addPost( data.post );
		reset();
	};
	
	return (
		<div>
			<div>
				<form onSubmit={ handleSubmit( onSubmit ) }>
					<textarea
						placeholder={ 'Enter your text' }
						{ ...register( "post", {required: "Message is empty"} ) }
					/>
					<div>
						{ errors?.post && <p>{ errors?.post?.message || "Error!" }</p> }
					</div>
					<input type="submit"
					       disabled={ !isValid }
					       value={ "Add post" }
					/>
				
				</form>
			</div>
			{ posts }
		</div>
	);
};

export default MyPosts;