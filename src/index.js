import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './Redux/Reducer';
import Login from './Login/Login';
import Admin from './Admin/Admin';
import viewUsers from './Admin/viewUsers';
import User from './User';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(<Provider store = {createStoreWithMiddleware(reducers)}>
	<BrowserRouter>
	<div>
	<Switch>
	<Route exact path="/" component={App}/>
	<Route path="/login" component={Login}/>
	<Route path="/user" component={User}/>
	<Route path="/admin" component={Admin}/>
	<Route path="/viewUsers" component={viewUsers} />
	</Switch></div>
	</BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
