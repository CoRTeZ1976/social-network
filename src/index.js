import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, message: 'Hi', likes: 3},
    {id: 2, message: 'How are you?', likes: 5},
    {id: 3, message: 'I am fine', likes: 7},
];

let dialogsData = [
    {id: 1, name: '1'},
    {id: 2, name: '2'},
    {id: 3, name: '3'},
    {id: 4, name: '4'},
    {id: 5, name: '5'},
    {id: 6, name: '6'},
];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I am fine'},
];

let properties = {
    posts: postsData,
    dialogs: dialogsData,
    messages: messagesData,
}


ReactDOM.render(
    <React.StrictMode>
        <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
