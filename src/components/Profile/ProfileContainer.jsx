import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUsersProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import { useMatch } from "react-router-dom";
import { WithAuthRedirectWrapper } from "../HOC/WithAuthRedirectWrapper";
import { compose } from "redux";



class ProfileContainer extends React.Component {
	
	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : '21447';
		this.props.getUsersProfile( userId );
		this.props.getUserStatus( userId );
	}
	
	render() {
		return (
			<div>
				<Profile { ...this.props } profile={ this.props.profile }/>
			</div>
		);
	}
}

let mapStateToProps = state => ( {
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	isAuth: state.profilePage.isAuth,
} );

const ProfileMatch = ( props ) => {
	
	let match = useMatch( '/profile/:userId' );
	
	return <ProfileContainer { ...props } match={ match } status={ props.status }
	                         updateUserStatus={ props.updateUserStatus }/>;
};

export default compose(
	connect( mapStateToProps, {getUsersProfile, getUserStatus, updateUserStatus: updateUserStatus} ),
	WithAuthRedirectWrapper,
)( ProfileMatch );



