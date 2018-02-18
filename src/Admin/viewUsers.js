import React, { Component } from 'react';
import { allUsers, logoutUser } from '../Redux/actionsIndex';
import { connect } from 'react-redux';
import _ from 'lodash';

class viewUsers extends Component{
	componentDidMount(){
		this.props.allUsers();
	}
	renderPosts(){
		console.log(this.props.user);
		return _.map(this.props.user, users=>{
			return (
				
				<tr key={users.mobNo}>
				<td>{users.username}</td>
				<td>{users.userId}</td>
				<td>{users.address}</td>
				<td>{users.DOJ}</td>
				<td>{users.mobNo}</td>
				</tr>
				
				)
		})
	}
	render(){
		return(
			<div>
			<table className="table table-striped">
				<thead>
				<tr>
				<th>username</th>
				<th>User ID</th>
				<th>Address</th>
				<th>DOJ</th>
				<th>Mobile No</th>
				</tr>
				</thead>
				<tbody>
			{this.renderPosts()}
			</tbody>
				</table>
			</div>
			);
	};
};

function mapStateToProps(state){
	return {user:state.register}
}

export default connect( mapStateToProps, { allUsers, logoutUser })(viewUsers);