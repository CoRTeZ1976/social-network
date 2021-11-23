import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';



export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state}
			     addPost={store.addPost.bind(store)}
			     updateNewPostText={store.updateNewPostText.bind(store)}
			     sendMessage={store.sendMessage.bind(store)}
			     updateNewMessageText={store.updateNewMessageText.bind(store)}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
};

reportWebVitals();

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);