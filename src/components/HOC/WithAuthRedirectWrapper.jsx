import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";



let mapStateToPropsForRedirect = state => ( {
	isAuth: state.auth.isAuth,
} );

export const WithAuthRedirectWrapper = ( Component ) => {
	class RedirectWrapper extends React.Component {
		render() {
			if (!this.props.isAuth) return <Navigate to={ "/login" } replace={ true }/>;
			return <Component { ...this.props }/>;
		}
	}
	
	let ConnectedAuthRedirectWrapper = connect( mapStateToPropsForRedirect )( RedirectWrapper );
	
	return ConnectedAuthRedirectWrapper;
};

