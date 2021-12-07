import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import connect from "react-redux/lib/connect/connect";
import {setUsersProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				this.props.setUsersProfile(response.data);
			});
	}

	render() {
		return (
			<div>
				<Profile {...this.props}/>
			</div>
		)
	}
}

let mapStateToProps = state => ({
	a: 13,
})

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer);