import React, { Component } from 'react';
import { userDetails, logoutUser } from './Redux/actionsIndex';
import { connect } from 'react-redux';
import _ from 'lodash';

class User extends Component{
	componentDidMount(){
		this.props.userDetails();
	}
	logOut(){
		this.props.logoutUser();
	}
	renderPosts(){
		console.log(this.props.user);
		return _.map(this.props.user, userName=>{
			return (
				<div className="makeCenter">
					<h1>{userName}</h1>
				</div>
				)
		})
	}
	render(){
		return(
			<div>
			<button className="btn btn-danger" onClick={this.logOut.bind(this)}>LOGOUT</button>
			{this.renderPosts()}
			</div>
			);
	};
};

function mapStateToProps(state){
	return {user:state.register}
}

export default connect( mapStateToProps, { userDetails, logoutUser })(User);