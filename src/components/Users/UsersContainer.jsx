import { connect } from "react-redux";
import {
	follow, getUsers,
	setCurrentPage, toggleFollowingProgress,
	unfollow,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { compose } from "redux";
import { WithAuthRedirectWrapper } from "../HOC/WithAuthRedirectWrapper";



class UsersContainer extends React.Component {
	
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}
	
	onPageChanged = pageNumber => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	};
	
	render() {
		return <>
			{ this.props.isFetching ? <Preloader/> : null }
			<Users totalUsersCount={ this.props.totalUsersCount }
			       pageSize={ this.props.pageSize }
			       currentPage={ this.props.currentPage }
			       onPageChanged={ this.onPageChanged }
			       users={ this.props.users }
			       follow={ this.props.follow }
			       unfollow={ this.props.unfollow }
			       followingInProgress={ this.props.followingInProgress }
			/></>;
	}
	
}

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	};
};


export  default compose(
	connect( mapStateToProps, {	follow, unfollow, setCurrentPage, getUsers, toggleFollowingProgress} ),
	WithAuthRedirectWrapper,
)(UsersContainer);

