import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import React from "react";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";



let App = ( props ) => {
	
	return (
		<div className="app-wrapper">
			<HeaderContainer/>
			<Navbar/>
			<div className="app-wrapper-content">
				<Routes>
					<Route path="/login" element={ <LoginContainer/> }/>
					<Route path="/profile" element={ <ProfileContainer/> }>
						<Route path=":userId" element={ <ProfileContainer/> }/>
					</Route>
					<Route path="/dialogs" element={ <DialogsContainer/> }/>
					<Route path="/users" element={ <UsersContainer/> }/>
				</Routes>
			</div>
		</div>
	);
};

export default App;

