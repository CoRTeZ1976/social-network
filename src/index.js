import state, {sendMessage, subscribe, updateNewMessageText, addPost, updateNewPostText} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';



export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state}
			     addPost={addPost}
			     updateNewPostText={updateNewPostText}
			     sendMessage={sendMessage}
			     updateNewMessageText={updateNewMessageText}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
};

reportWebVitals();

rerenderEntireTree(state);

subscribe(rerenderEntireTree);