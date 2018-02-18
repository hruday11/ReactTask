import _ from 'lodash';
import { REGISTER_USER, LOGIN_USER, USER_DETAILS, LOGOUT_USER, ADMIN_USER, ALL_USERS } from './actionsIndex';

export default function ( state = {}, action) {
	switch(action.type) {
		case REGISTER_USER:
		return action.payload;
		case LOGIN_USER:
		console.log(action.payload);
		return action.payload;
		case ADMIN_USER:
		console.log(action.payload);
		return action.payload;
		case USER_DETAILS:
		console.log(action.payload);
		return action.payload;
		case ALL_USERS:
		console.log(action.payload);
		return action.payload;
		case LOGOUT_USER:
		console.log(action.payload);
		return action.payload;
		default:
		return state;
	}
}