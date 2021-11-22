import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Post from "./components/Profile/My posts/Posts/Post";
import React from "react";



let App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header/>
				<Navbar/>
				<div className='app-wrapper-content'>
					<Routes>
						<Route exact path='Profile' element={<Profile posts={props.posts}/>}/>
						<Route exact path='Dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
						<Route exact path='News' element={<News/>}/>
						<Route exact path='Music' element={<Music/>}/>
						<Route exact path='Settings' element={<Settings/>}/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

