import './App.css';
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from "react";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



let App = (props) => {

	return (
		<div className='app-wrapper'>
			<Header/>
			<Navbar/>
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='Profile/:userId'
					       render={ () => <ProfileContainer/> }/>
					<Route path='Dialogs'
					       render={ () => <DialogsContainer/> }/>
					<Route path='Users'
					       render={ () => <UsersContainer/> }/>
					<Route path='News'
					       render={ () => <News/> }/>
					<Route path='Music'
					       render={ () => <Music/> }/>
					<Route path='Settings'
					       render={ () => <Settings/> }/>
				</Routes>
			</div>
		</div>
	);
}

export default App;

