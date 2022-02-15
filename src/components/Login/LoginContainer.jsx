import React from "react";
import Login from "./Login";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";



class LoginContainer extends React.Component {
	render() {
		return (
			<div>
				<Login { ...this.props }/>
			</div>
		);
	};
}

let mapStateToProps = state => ( {
	isAuth: state.auth.isAuth,
} );

export default connect( mapStateToProps, {login} )( LoginContainer );