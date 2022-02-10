import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import React from "react";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";



class App extends React.Component {
	
	componentDidMount() {
		this.props.initializeApp();
	}
	
	render() {
		if (!this.props.initialized) {
			return <Preloader/>;
		}
		return (
			<div className="app-wrapper">
				<HeaderContainer/>
				<Navbar/>
				<div className="app-wrapper-content">
					<Routes>
						<Route path="/profile" element={ <ProfileContainer/> }>
							<Route path=":userId" element={ <ProfileContainer/> }/>
						</Route>
						<Route path="/dialogs" element={ <DialogsContainer/> }/>
						<Route path="/users" element={ <UsersContainer/> }/>
						<Route path="/login" element={ <LoginContainer/> }/>
					</Routes>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ( {
	initialized: state.app.initialized,
	isAuth: state.auth.isAuth,
} );

export default compose(
	connect( mapStateToProps, {initializeApp} ) )( App );


