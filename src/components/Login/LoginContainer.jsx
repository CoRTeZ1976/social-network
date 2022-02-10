import React from "react";
import Login from "./Login";
import login from "./Login";
import { connect } from "react-redux";



class LoginContainer extends React.Component {
	render() {
		return (
			<div>
				<Login { ...this.props }/>
				{ console.log( this.props ) }
			</div>
		);
	};
}

let mapStateToProps = state => ( {
	isAuth: state.profilePage.isAuth,
} );

export default connect( mapStateToProps, {login} )( LoginContainer );