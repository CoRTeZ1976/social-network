import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUsersProfile } from "../../redux/profile-reducer";
import { useMatch } from "react-router-dom";
import { usersAPI } from "../API/usersAPI";




class ProfileContainer extends React.Component {
	
	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : '2';
		usersAPI.getProfile( userId )
		          .then( data => {
			          this.props.setUsersProfile( data );
		          } );
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
} );

const ProfileMatch = ( props ) => {
	
	let match = useMatch( '/profile/:userId' );
	
	return <ProfileContainer { ...props } match={ match }/>;
};

export default connect( mapStateToProps, {setUsersProfile} )( ProfileMatch );

