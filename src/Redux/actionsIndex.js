

export const LOGIN_USER = 'login_user';
export const ADMIN_USER = 'admin_user';
export const REGISTER_USER = 'register_user';
export const USER_DETAILS = 'user_details';
export const LOGOUT_USER = 'logout_user';
export const ALL_USERS = 'ALL_USERS';

export function adminUser( values, callback){
	console.log(values);
	var usersData = JSON.parse(localStorage.getItem("reason")) || [];
	for(let i=0; i<usersData.length; i++){
		console.log(usersData[i].username);
		if(usersData[i].username === values.username && usersData[i].password === values.password && usersData[i].admin === true){
			localStorage.setItem("loggedUser", usersData[i].username);
			callback(usersData);
			return{
				type : ADMIN_USER,
				payload : usersData
			}
		}
	}
	
}
export function allUsers(){
	var usersData = JSON.parse(localStorage.getItem("reason")) || [];
	return{
		type:ALL_USERS,
		payload:usersData
	}  
}
export function userDetails(){
	let user = localStorage.getItem("loggedUser")
	return{
		type:USER_DETAILS,
		payload:user
	}  
}

export function logoutUser(){
	localStorage.removeItem("loggedUser");
	return {
		type:LOGOUT_USER,
		payload : "user Logged Out"
	}
}
export function loginUser( values, callback){
	console.log(values);
	var usersData = JSON.parse(localStorage.getItem("reason")) || [];
	for(let i=0; i<usersData.length; i++){
		console.log(usersData[i].username);
		if(usersData[i].username === values.username && usersData[i].password === values.password){
			localStorage.setItem("loggedUser", usersData[i].username);
			callback("Login Success");
			return{
				type : LOGIN_USER,
				payload : "Login Success"
			}
		}
	}
	
}

export function registerUser(values, callback){
	var usersList = JSON.parse(localStorage.getItem("reason")) || [];
	usersList.push(values);
	localStorage.setItem("reason", JSON.stringify(usersList));
	callback(usersList);
	return {
		type : REGISTER_USER,
		payload:usersList
	}
}