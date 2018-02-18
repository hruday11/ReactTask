import React , { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { adminUser } from '../Redux/actionsIndex';
import NavBar from '../NavBar';



class Admin extends Component{
  constructor(props){
    super(props);
    this.state = { formValues:{}, loginError:""};
  }

  renderField=(field)=>{
    const{meta: {touched , error }} = field;
    const className = `form-group ${touched && error ? 'alert alert-danger' : ''}`;
    return <div className={className}>
    <label>{field.label}</label>
    <input className="form-control" type={field.type}  {...field.input}/>
    <div className="text-help">{touched ? error : ''}</div>
    </div>
  }
  handleChange=(event)=>{
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;
    formValues[name] = value;
  }
  onSubmit(values){
    console.log(this.state.formValues);
    this.props.adminUser(values, (res)=>{
    	this.props.history.push('/viewUsers');
    });
  }
  render(){
    const {handleSubmit} = this.props; 
    return(
      <div >
      <NavBar/>
      <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
      {this.state.loginError}
      <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
      <Field label="User Name" name="username" placeholder="User Name" value={this.state.formValues["username"]}  onChange={this.handleChange.bind(this)} component={ this.renderField }/><br/>
      <Field label="Password" type="password" name="password" placeholder="password" value={this.state.formValues["password"]} onChange={this.handleChange.bind(this)} component={ this.renderField }/><br/>
      <button className="btn btn-primary" type="submit">Login</button>
      </form>
      </div></div></div>
      );
  };
};

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = "Enter a username";
  }if(!values.password){
    errors.password = "please enter a Password";
  }
  return errors
}

export default reduxForm({
  validate,
  form:'PostsNewForm'
})(
connect(null, { adminUser }) (Admin))
;