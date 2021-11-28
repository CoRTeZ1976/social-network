import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from "react";


let App = (props) => {

	return (
		<div className='app-wrapper'>
			<Header/>
			<Navbar/>
			<div className='app-wrapper-content'>
				<Routes>
					<Route exact path='Profile' element={<Profile/>}/>
					<Route exact path='Dialogs' element={<DialogsContainer/>}/>
					<Route exact path='News' element={<News/>}/>
					<Route exact path='Music' element={<Music/>}/>
					<Route exact path='Settings' element={<Settings/>}/>
				</Routes>
			</div>
		</div>
	);
}

export default App;

