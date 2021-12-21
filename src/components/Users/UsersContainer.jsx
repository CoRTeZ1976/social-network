import { connect } from "react-redux";
import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers, toggleIsFetching,
	unfollow,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { usersAPI } from "../API/usersAPI";



class UsersContainer extends React.Component {
	
	componentDidMount() {
		this.props.toggleIsFetching( true );
		usersAPI.getUsers( this.props.currentPage, this.props.pageSize )
		        .then( data => {
			        this.props.toggleIsFetching( false );
			        this.props.setUsers( data.items );
			        this.props.setTotalUsersCount( data.totalCount );
		        } );
	}
	
	onPageChanged = pageNumber => {
		this.props.setCurrentPage( pageNumber );
		this.props.toggleIsFetching( true );
		usersAPI.getUsers( pageNumber, this.props.pageSize )
		        .then( data => {
			        this.props.toggleIsFetching( false );
			        this.props.setUsers( data.items );
		        } );
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
	};
};

export default connect( mapStateToProps, {
	follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
} )( UsersContainer );

